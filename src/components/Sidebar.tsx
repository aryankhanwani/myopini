import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Swords,
  Sparkles,
  Users,
  Clock,
  Trophy,
  MessageCircle,
  Zap,
  Menu,
  X,
  ChevronDown,
  Coins,
  Bell,
  Wallet as WalletIcon,
  ChevronRight
} from "lucide-react";

interface SidebarProps {
  isConnected: boolean;
  walletAddress: string;
  balanceLabel: string | null;
  onConnectWallet: () => void;
  onShowToast: (message: string) => void;
}

const Sidebar = ({ isConnected, walletAddress, balanceLabel, onConnectWallet, onShowToast }: SidebarProps) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false);
  const [networkOpen, setNetworkOpen] = useState(false);
  const [network, setNetwork] = useState("Polygon");
  const location = useLocation();

  const primaryGradient = "bg-gradient-to-br from-violet-500 to-cyan-400";
  const primaryText = "text-white";
  const surface = "bg-white/[0.06] ring-1 ring-white/10";
  const surfaceHover = "hover:bg-white/[0.09]";
  const borderSubtle = "border-white/5";

  function truncateAddress(addr: string) {
    if (!addr) return "";
    return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
  }

  function handleConnect() {
    // Simulate a random address
    const hex = "0123456789abcdef";
    let out = "0x";
    for (let i = 0; i < 40; i++) out += hex[Math.floor(Math.random() * hex.length)];
    onConnectWallet();
    setWalletOpen(false);
    onShowToast("Wallet connected");
  }

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`hidden lg:flex lg:flex-col w-72 ${borderSubtle} border-r bg-[#0a0f1c]/70 backdrop-blur xl:w-72`}>
        <div className={`flex items-center gap-3 px-6 h-16 border-b ${borderSubtle}`}>
          <div className="relative">
            <span className="absolute -inset-1 rounded-xl bg-violet-500/20 blur-md"></span>
            <div className={`relative grid place-items-center h-9 w-9 rounded-lg ${primaryGradient} text-[#0a0f1c]`}>
              <Zap className="w-5 h-5" />
            </div>
          </div>
          <div className="leading-tight">
            <div className="text-lg tracking-tight font-semibold">myopini</div>
            <div className="text-[11px] text-slate-400">Skill-based crypto duels</div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          <Link 
            to="/" 
            className={`group flex items-center gap-3 px-3 py-2 rounded-lg ${isActive('/') ? 'bg-white/5 ring-1 ring-white/5' : surfaceHover} transition`}
          >
            <Swords className="w-5 h-5 text-violet-300" />
            <span className="font-medium">Arena</span>
            <span className="ml-auto text-xs text-cyan-300/80 bg-cyan-500/10 px-2 py-0.5 rounded">Live</span>
          </Link>
          <Link 
            to="/quizzes" 
            className={`group flex items-center gap-3 px-3 py-2 rounded-lg ${isActive('/quizzes') ? 'bg-white/5 ring-1 ring-white/5' : surfaceHover} transition`}
          >
            <Sparkles className="w-5 h-5 text-slate-300" />
            <span className="font-medium">Quizzes</span>
          </Link>
          <Link 
            to="/leaderboard" 
            className={`group flex items-center gap-3 px-3 py-2 rounded-lg ${isActive('/leaderboard') ? 'bg-white/5 ring-1 ring-white/5' : surfaceHover} transition`}
          >
            <Users className="w-5 h-5 text-slate-300" />
            <span className="font-medium">Leaderboard</span>
          </Link>
          <Link 
            to="/history" 
            className={`group flex items-center gap-3 px-3 py-2 rounded-lg ${isActive('/history') ? 'bg-white/5 ring-1 ring-white/5' : surfaceHover} transition`}
          >
            <Clock className="w-5 h-5 text-slate-300" />
            <span className="font-medium">History</span>
          </Link>
          <Link 
            to="/tournaments" 
            className={`group flex items-center gap-3 px-3 py-2 rounded-lg ${isActive('/tournaments') ? 'bg-white/5 ring-1 ring-white/5' : surfaceHover} transition`}
          >
            <Trophy className="w-5 h-5 text-slate-300" />
            <span className="font-medium">Tournaments</span>
          </Link>
          <Link 
            to="/community" 
            className={`group flex items-center gap-3 px-3 py-2 rounded-lg ${isActive('/community') ? 'bg-white/5 ring-1 ring-white/5' : surfaceHover} transition`}
          >
            <MessageCircle className="w-5 h-5 text-slate-300" />
            <span className="font-medium">Community</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className={`rounded-xl p-4 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 ring-1 ring-white/10`}>
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=64&h=64&q=60" className="h-10 w-10 rounded-full object-cover" alt="" />
              <div>
                <div className="font-semibold tracking-tight">{isConnected ? truncateAddress(walletAddress) : "Guest"}</div>
                <div className="text-xs text-slate-400">{isConnected ? "Connected" : "0x… Connect to save"}</div>
              </div>
            </div>
            <button
              onClick={() => setWalletOpen(true)}
              className={`mt-3 w-full ${primaryGradient} ${primaryText} font-medium py-2 rounded-lg transition`}
            >
              {isConnected ? "Connected" : "Connect Wallet"}
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className={`lg:hidden sticky top-0 z-40 backdrop-blur bg-[#0a0f1c]/70 ${borderSubtle} border-b`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="h-16 flex items-center gap-3">
            {/* Mobile menu */}
            <button onClick={() => setMobileNavOpen(true)} className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10">
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className={`grid place-items-center h-8 w-8 rounded-lg ${primaryGradient} text-[#0a0f1c]`}>
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-lg font-semibold tracking-tight">myopini</div>
            </div>

            {/* Network + wallet */}
            <div className="flex items-center gap-2 ml-auto">
              {/* Network selector */}
              <div className="relative">
                <button onClick={() => setNetworkOpen((v) => !v)} className="inline-flex items-center gap-2 h-10 px-3 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-sm font-medium">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-violet-400"></span>
                  <span>{network}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {networkOpen && (
                  <div className="absolute right-0 mt-2 w-40 rounded-lg bg-[#0c1220] ring-1 ring-white/10 p-1">
                    <button onClick={() => { setNetwork("Polygon"); setNetworkOpen(false); onShowToast("Network set to Polygon"); }} className="flex w-full items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 text-sm">
                      <span className="h-2.5 w-2.5 rounded-full bg-violet-400"></span> Polygon
                    </button>
                    <button onClick={() => { setNetwork("Ethereum"); setNetworkOpen(false); onShowToast("Network set to Ethereum"); }} className="flex w-full items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 text-sm">
                      <span className="h-2.5 w-2.5 rounded-full bg-indigo-400"></span> Ethereum
                    </button>
                    <button onClick={() => { setNetwork("Arbitrum"); setNetworkOpen(false); onShowToast("Network set to Arbitrum"); }} className="flex w-full items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 text-sm">
                      <span className="h-2.5 w-2.5 rounded-full bg-sky-400"></span> Arbitrum
                    </button>
                  </div>
                )}
              </div>

              {/* Balance */}
              {isConnected && balanceLabel && (
                <div className="hidden md:flex items-center gap-2 h-10 px-3 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm">
                  <Coins className="w-4 h-4 text-amber-300" />
                  <span className="font-medium">{balanceLabel}</span>
                </div>
              )}

              {/* Notifications */}
              <button className="relative inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-rose-400 rounded-full ring-2 ring-[#0a0f1c]"></span>
              </button>

              {/* Wallet */}
              <button onClick={() => (isConnected ? onShowToast("Wallet connected") : setWalletOpen(true))} className={`inline-flex items-center gap-2 h-10 px-3 rounded-lg ${primaryGradient} ${primaryText} font-medium`}>
                <WalletIcon className="w-4 h-4" />
                <span>{isConnected ? truncateAddress(walletAddress) : "Connect"}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileNavOpen && (
        <div onClick={(e) => { if (e.target === e.currentTarget) setMobileNavOpen(false); }} className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className={`absolute left-0 top-0 bottom-0 w-80 bg-[#0a0f1c] ${borderSubtle} border-r p-4`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`grid place-items-center h-9 w-9 rounded-lg ${primaryGradient} text-[#0a0f1c]`}>
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-lg font-semibold tracking-tight">myopini</div>
              </div>
              <button onClick={() => setMobileNavOpen(false)} className="h-9 w-9 grid place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="mt-4 space-y-1">
              <Link 
                to="/" 
                onClick={() => setMobileNavOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg ${isActive('/') ? 'bg-white/5 ring-1 ring-white/5' : 'hover:bg-white/5'}`}
              >
                <Swords className="w-5 h-5 text-violet-300" />
                <span className="font-medium">Arena</span>
              </Link>
              <Link 
                to="/quizzes" 
                onClick={() => setMobileNavOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg ${isActive('/quizzes') ? 'bg-white/5 ring-1 ring-white/5' : 'hover:bg-white/5'}`}
              >
                <Sparkles className="w-5 h-5" />
                <span className="font-medium">Quizzes</span>
              </Link>
              <Link 
                to="/leaderboard" 
                onClick={() => setMobileNavOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg ${isActive('/leaderboard') ? 'bg-white/5 ring-1 ring-white/5' : 'hover:bg-white/5'}`}
              >
                <Users className="w-5 h-5" />
                <span className="font-medium">Leaderboard</span>
              </Link>
              <Link 
                to="/history" 
                onClick={() => setMobileNavOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg ${isActive('/history') ? 'bg-white/5 ring-1 ring-white/5' : 'hover:bg-white/5'}`}
              >
                <Clock className="w-5 h-5" />
                <span className="font-medium">History</span>
              </Link>
              <Link 
                to="/tournaments" 
                onClick={() => setMobileNavOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg ${isActive('/tournaments') ? 'bg-white/5 ring-1 ring-white/5' : 'hover:bg-white/5'}`}
              >
                <Trophy className="w-5 h-5" />
                <span className="font-medium">Tournaments</span>
              </Link>
              <div className="pt-3">
                <button onClick={() => { setWalletOpen(true); setMobileNavOpen(false); }} className={`w-full h-10 rounded-lg ${primaryGradient} ${primaryText} font-medium`}>
                  {isConnected ? truncateAddress(walletAddress) : "Connect Wallet"}
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Wallet modal */}
      {walletOpen && (
        <div onClick={(e) => { if (e.target === e.currentTarget) setWalletOpen(false); }} className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative mx-auto mt-24 w-[92%] max-w-md rounded-2xl bg-[#0c1220] ring-1 ring-white/10 p-5">
            <div className="flex items-center justify-between">
              <div className="text-base font-semibold tracking-tight">Connect wallet</div>
              <button onClick={() => setWalletOpen(false)} className="h-9 w-9 grid place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4 grid gap-3">
              <button onClick={handleConnect} className={`flex items-center gap-3 p-3 rounded-xl ${surface} ${surfaceHover}`}>
                <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=48&h=48&q=60" className="h-8 w-8 rounded" alt="" />
                <div className="text-sm font-medium">MetaMask</div>
                <ChevronRight className="ml-auto w-4 h-4 text-slate-400" />
              </button>
              <button onClick={handleConnect} className={`flex items-center gap-3 p-3 rounded-xl ${surface} ${surfaceHover}`}>
                <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&w=48&h=48&q=80" className="h-8 w-8 rounded" alt="" />
                <div className="text-sm font-medium">WalletConnect</div>
                <ChevronRight className="ml-auto w-4 h-4 text-slate-400" />
              </button>
              <button onClick={handleConnect} className={`flex items-center gap-3 p-3 rounded-xl ${surface} ${surfaceHover}`}>
                <img src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?auto=format&fit=crop&w=48&h=48&q=80" className="h-8 w-8 rounded" alt="" />
                <div className="text-sm font-medium">Coinbase Wallet</div>
                <ChevronRight className="ml-auto w-4 h-4 text-slate-400" />
              </button>
            </div>
            <div className="mt-4 text-[11px] text-slate-500">By connecting, you agree to the Terms. We never store your keys.</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
