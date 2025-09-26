import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import QuizSelection, { QuizConfig } from "@/components/QuizSelection";
import Matchmaking, { Opponent } from "@/components/Matchmaking";
import QuizGameplay from "@/components/QuizGameplay";
import QuizResults from "@/components/QuizResults";
import { 
  ArrowLeft, 
  Zap, 
  Crown, 
  Brain, 
  Flame,
  Sword,
  Clock,
  Target,
  Trophy,
  Users,
  Play,
  Settings,
  Search,
  Filter,
  Check
} from "lucide-react";

interface QuizMode {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  entryFee: string;
  duration: string;
  questions: number;
  playersOnline: number;
  isPopular: boolean;
}

type GameState = 'selection' | 'quiz-selection' | 'matchmaking' | 'gameplay' | 'results';

const Quizzes = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const [gameState, setGameState] = useState<GameState>('selection');
  const [selectedMode, setSelectedMode] = useState<QuizMode | null>(null);
  const [quizConfig, setQuizConfig] = useState<QuizConfig | null>(null);
  const [opponent, setOpponent] = useState<Opponent | null>(null);
  const [quizResults, setQuizResults] = useState<any>(null);

  const balanceLabel = useMemo(() => {
    if (!isConnected) return null;
    const demoBal = (Math.random() * 200).toFixed(2);
    return `${demoBal} MYO`;
  }, [isConnected]);

  function showToast(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(null), 1800);
  }

  function handleConnectWallet() {
    // Simulate a random address
    const hex = "0123456789abcdef";
    let out = "0x";
    for (let i = 0; i < 40; i++) out += hex[Math.floor(Math.random() * hex.length)];
    setWalletAddress(out);
    setIsConnected(true);
  }

  function handlePlayQuiz(mode: QuizMode) {
    setSelectedMode(mode);
    setGameState('quiz-selection');
  }

  function handleStartMatchmaking(config: QuizConfig) {
    setQuizConfig(config);
    setGameState('matchmaking');
  }

  function handleMatchFound(opponent: Opponent) {
    setOpponent(opponent);
    setGameState('gameplay');
  }

  function handleGameComplete(results: any) {
    setQuizResults(results);
    setGameState('results');
  }

  function handleBackToSelection() {
    setGameState('selection');
    setSelectedMode(null);
    setQuizConfig(null);
    setOpponent(null);
    setQuizResults(null);
  }

  const quizModes: QuizMode[] = [
    {
      id: "1min-duel",
      name: "1-Min Duel",
      description: "6 questions, fast pace",
      icon: <Zap className="w-5 h-5" />,
      color: "violet",
      entryFee: "2 MYO",
      duration: "~1 min",
      questions: 6,
      playersOnline: 1247,
      isPopular: true
    },
    {
      id: "best-of-3",
      name: "Best of 3",
      description: "Balanced quiz rounds",
      icon: <Crown className="w-5 h-5" />,
      color: "indigo",
      entryFee: "5 MYO",
      duration: "~5 min",
      questions: 15,
      playersOnline: 892,
      isPopular: false
    },
    {
      id: "recall-rush",
      name: "Recall Rush",
      description: "Pattern and speed",
      icon: <Brain className="w-5 h-5" />,
      color: "fuchsia",
      entryFee: "3 MYO",
      duration: "~3 min",
      questions: 10,
      playersOnline: 634,
      isPopular: false
    },
    {
      id: "daily-streaks",
      name: "Daily Streaks",
      description: "Daily participation rewards",
      icon: <Flame className="w-5 h-5" />,
      color: "amber",
      entryFee: "Free",
      duration: "~2 min",
      questions: 5,
      playersOnline: 2156,
      isPopular: true
    }
  ];

  const categories = [
    { value: "all", label: "All Modes" },
    { value: "popular", label: "Popular" },
    { value: "free", label: "Free to Play" },
    { value: "competitive", label: "Competitive" }
  ];

  const filteredModes = quizModes.filter(mode => {
    const matchesCategory = selectedCategory === "all" || 
      (selectedCategory === "popular" && mode.isPopular) ||
      (selectedCategory === "free" && mode.entryFee === "Free") ||
      (selectedCategory === "competitive" && mode.entryFee !== "Free");
    
    const matchesSearch = mode.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mode.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const getColorClasses = (color: string) => {
    const colorMap = {
      violet: "from-violet-500/20 to-violet-600/10 ring-violet-500/20 hover:ring-violet-400/40 text-violet-300 bg-violet-500/10",
      indigo: "from-indigo-500/20 to-indigo-600/10 ring-indigo-500/20 hover:ring-indigo-400/40 text-indigo-300 bg-indigo-500/10",
      fuchsia: "from-fuchsia-500/20 to-fuchsia-600/10 ring-fuchsia-500/20 hover:ring-fuchsia-400/40 text-fuchsia-300 bg-fuchsia-500/10",
      amber: "from-amber-500/20 to-amber-600/10 ring-amber-500/20 hover:ring-amber-400/40 text-amber-300 bg-amber-500/10"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.violet;
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 antialiased">
      <div className="flex min-h-screen">
        <Sidebar 
          isConnected={isConnected}
          walletAddress={walletAddress}
          balanceLabel={balanceLabel}
          onConnectWallet={handleConnectWallet}
          onShowToast={showToast}
        />

        {/* Main Content */}
        <main className="flex-1">
          {/* Background Effects */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 py-6 sm:py-8">
            {gameState === 'selection' && (
              <>
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Quiz Modes</h1>
                    <p className="text-sm sm:text-base text-muted">Choose your battle format</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-muted" />
                    <span className="text-xs sm:text-sm text-muted">
                      {quizModes.reduce((sum, mode) => sum + mode.playersOnline, 0).toLocaleString()} players online
                    </span>
                  </div>
                </div>

        {/* Filters */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className="text-xs sm:text-sm"
              >
                {category.label}
              </Button>
            ))}
          </div>
          
          <div className="flex gap-2">
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted" />
              <input
                type="text"
                placeholder="Search quiz modes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2 bg-card border border-card-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Quiz Modes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredModes.map((mode) => (
            <Card key={mode.id} className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br ${getColorClasses(mode.color).split(' ')[0]} ${getColorClasses(mode.color).split(' ')[1]} ring-1 ${getColorClasses(mode.color).split(' ')[2]} hover:${getColorClasses(mode.color).split(' ')[3]} transition-all duration-200 hover:scale-105`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${getColorClasses(mode.color).split(' ')[6]} ${getColorClasses(mode.color).split(' ')[7]} text-sm font-medium`}>
                    {mode.icon}
                    {mode.name}
                  </div>
                  {mode.isPopular && (
                    <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                      Popular
                    </Badge>
                  )}
                </div>
                
                <div className="mb-4">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground mb-2">
                    {mode.name}
                  </h3>
                  <p className="text-sm text-muted">
                    {mode.description}
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Entry Fee</span>
                    <span className={`font-medium ${mode.entryFee === "Free" ? "text-win" : "text-foreground"}`}>
                      {mode.entryFee}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Duration</span>
                    <span className="font-medium text-foreground">{mode.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Questions</span>
                    <span className="font-medium text-foreground">{mode.questions}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Players Online</span>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-win rounded-full animate-pulse"></div>
                      <span className="font-medium text-win">{mode.playersOnline.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full group-hover:scale-105 transition-transform duration-200"
                  size="lg"
                  onClick={() => handlePlayQuiz(mode)}
                >
                  <Play className="h-4 w-4 mr-2" />
                  Start Quiz
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card className="bg-card border-card-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-score font-bold text-win mb-1">
                {quizModes.length}
              </div>
              <div className="text-xs text-muted">Quiz Modes</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-card-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-score font-bold text-primary mb-1">
                {quizModes.reduce((sum, mode) => sum + mode.questions, 0)}
              </div>
              <div className="text-xs text-muted">Total Questions</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-card-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-score font-bold text-accent mb-1">
                {quizModes.filter(mode => mode.entryFee === "Free").length}
              </div>
              <div className="text-xs text-muted">Free Modes</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-card-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-score font-bold text-win mb-1">
                {quizModes.reduce((sum, mode) => sum + mode.playersOnline, 0).toLocaleString()}
              </div>
              <div className="text-xs text-muted">Players Online</div>
            </CardContent>
          </Card>
        </div>

        {filteredModes.length === 0 && (
          <Card className="bg-card border-card-border">
            <CardContent className="p-12 text-center">
              <Search className="h-12 w-12 text-muted mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No quiz modes found</h3>
              <p className="text-muted">Try adjusting your filters or search terms!</p>
            </CardContent>
          </Card>
        )}
              </>
            )}

            {gameState === 'quiz-selection' && selectedMode && (
              <QuizSelection
                walletAddress={walletAddress}
                onStartMatchmaking={handleStartMatchmaking}
              />
            )}

            {gameState === 'matchmaking' && quizConfig && (
              <Matchmaking
                config={quizConfig}
                onMatchFound={handleMatchFound}
                onCancel={handleBackToSelection}
              />
            )}

            {gameState === 'gameplay' && opponent && quizConfig && (
              <QuizGameplay
                config={quizConfig}
                opponent={opponent}
                walletAddress={walletAddress || "0x0000000000000000000000000000000000000000"}
                onQuizComplete={handleGameComplete}
              />
            )}

            {gameState === 'results' && quizResults && opponent && (
              <QuizResults
                results={quizResults}
                opponent={opponent}
                walletAddress={walletAddress || "0x0000000000000000000000000000000000000000"}
                onPlayAgain={handleBackToSelection}
                onViewLeaderboard={() => window.location.href = '/leaderboard'}
              />
            )}
          </div>
        </main>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[60]">
          <div className="rounded-lg bg-[#0c1220] ring-1 ring-white/10 px-4 py-2 text-sm shadow-lg flex items-center gap-2">
            <Check className="w-4 h-4 text-violet-300" />
            <span>{toast}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quizzes;

