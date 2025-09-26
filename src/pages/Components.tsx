import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Trophy, 
  Medal, 
  Zap, 
  Clock, 
  Target, 
  TrendingUp, 
  Star,
  Crown,
  Flame,
  Users,
  Brain,
  Award,
  BarChart3,
  User,
  History,
  Wallet,
  Settings,
  Edit,
  Calendar as CalendarIcon,
  Bell,
  Search,
  Filter,
  Plus,
  Minus,
  Check,
  X,
  ChevronDown,
  ChevronRight,
  MoreHorizontal,
  Eye,
  EyeOff,
  Copy,
  ExternalLink,
  LogOut,
  Activity,
  TrendingDown,
  Home,
  BookOpen,
  Layers,
  Palette,
  Code,
  Package,
  Bold,
  Italic,
  Underline
} from "lucide-react";

// Import custom components
import WalletConnect from "@/components/WalletConnect";
import QuizSelection from "@/components/QuizSelection";
import Matchmaking from "@/components/Matchmaking";
import QuizResults from "@/components/QuizResults";

const Components = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [sliderValue, setSliderValue] = useState([50]);
  const [radioValue, setRadioValue] = useState("option-one");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");
  const [selectedTab, setSelectedTab] = useState("ui");

  const showToast = () => {
    toast({
      title: "Toast Notification",
      description: "This is a toast notification example.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-600/20 rounded-lg">
              <Layers className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Component Library</h1>
              <p className="text-white/70">Explore all components used in the MyOpini Quiz app</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6 sm:mb-8">
            <TabsTrigger value="ui" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
              <Palette className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">UI Components</span>
              <span className="sm:hidden">UI</span>
            </TabsTrigger>
            <TabsTrigger value="custom" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
              <Code className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Custom Components</span>
              <span className="sm:hidden">Custom</span>
            </TabsTrigger>
            <TabsTrigger value="layout" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
              <Package className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Layout Components</span>
              <span className="sm:hidden">Layout</span>
            </TabsTrigger>
          </TabsList>

          {/* UI Components Tab */}
          <TabsContent value="ui" className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              
              {/* Buttons */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Buttons</CardTitle>
                </CardHeader>
                              <CardContent className="space-y-3">
                <Button>Default Button</Button>
                <Button variant="accent">Accent</Button>
                <Button variant="win">Win</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="answer">Answer</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
                <Button disabled>Disabled</Button>
              </CardContent>
              </Card>

              {/* Cards */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Cards</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Card className="bg-white/10">
                    <CardHeader>
                      <CardTitle className="text-white">Card Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/70">Card content goes here</p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              {/* Badges */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Badges</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </CardContent>
              </Card>

              {/* Avatars */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Avatars</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Avatar>
                    <AvatarFallback className="bg-purple-600">JD</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback className="bg-green-600">AB</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback className="bg-blue-600">CD</AvatarFallback>
                  </Avatar>
                </CardContent>
              </Card>

              {/* Progress */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Progress value={33} className="w-full" />
                  <Progress value={66} className="w-full" />
                  <Progress value={100} className="w-full" />
                </CardContent>
              </Card>

              {/* Inputs */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Inputs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Input placeholder="Enter text..." />
                  <Input type="email" placeholder="Enter email..." />
                  <Input type="password" placeholder="Enter password..." />
                </CardContent>
              </Card>

              {/* Labels */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Labels</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Label htmlFor="email">Email</Label>
                  <Label htmlFor="password">Password</Label>
                  <Label htmlFor="username">Username</Label>
                </CardContent>
              </Card>

              {/* Switches */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Switches</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="notifications" defaultChecked />
                    <Label htmlFor="notifications">Notifications</Label>
                  </div>
                </CardContent>
              </Card>

              {/* Select */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Select</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              {/* Tabs */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Tabs</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="account">Account</TabsTrigger>
                      <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account" className="text-white/70">
                      Account settings
                    </TabsContent>
                    <TabsContent value="password" className="text-white/70">
                      Password settings
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Accordion */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Accordion</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-white">Is it accessible?</AccordionTrigger>
                      <AccordionContent className="text-white/70">
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-white">Is it styled?</AccordionTrigger>
                      <AccordionContent className="text-white/70">
                        Yes. It comes with default styles that matches the other components' aesthetic.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Alerts */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Alerts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Alert>
                    <AlertDescription>
                      This is a default alert message.
                    </AlertDescription>
                  </Alert>
                  <Alert className="border-green-500/50 bg-green-500/10">
                    <AlertDescription className="text-green-400">
                      This is a success alert message.
                    </AlertDescription>
                  </Alert>
                  <Alert className="border-red-500/50 bg-red-500/10">
                    <AlertDescription className="text-red-400">
                      This is an error alert message.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* Alert Dialog */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Alert Dialog</CardTitle>
                </CardHeader>
                <CardContent>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline">Open Alert Dialog</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardContent>
              </Card>

              {/* Dialog */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Dialog</CardTitle>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

              {/* Dropdown Menu */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Dropdown Menu</CardTitle>
                </CardHeader>
                <CardContent>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Open Menu</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                      <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardContent>
              </Card>

              {/* Hover Card */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Hover Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="outline">Hover me</Button>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm">
                          The React Framework – created and maintained by @vercel.
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </CardContent>
              </Card>

              {/* Popover */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Popover</CardTitle>
                </CardHeader>
                <CardContent>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">Open Popover</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Dimensions</h4>
                        <p className="text-sm text-muted-foreground">
                          Set the dimensions for the layer.
                        </p>
                      </div>
                    </PopoverContent>
                  </Popover>
                </CardContent>
              </Card>

              {/* Tooltip */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Tooltip</CardTitle>
                </CardHeader>
                <CardContent>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Hover for tooltip</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>This is a tooltip</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardContent>
              </Card>

              {/* Separator */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Separator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-white/70">Above separator</div>
                  <Separator />
                  <div className="text-white/70">Below separator</div>
                </CardContent>
              </Card>

              {/* Skeleton */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Skeleton</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </CardContent>
              </Card>

              {/* Slider */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Slider</CardTitle>
                </CardHeader>
                <CardContent>
                  <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                  <div className="text-white/70 mt-2">Value: {sliderValue}</div>
                </CardContent>
              </Card>

              {/* Radio Group */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Radio Group</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label htmlFor="option-one" className="text-white">Option One</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label htmlFor="option-two" className="text-white">Option Two</Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Checkbox */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Checkbox</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={checkboxValue}
                      onCheckedChange={(checked) => setCheckboxValue(checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-white">Accept terms and conditions</Label>
                  </div>
                </CardContent>
              </Card>

              {/* Textarea */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Textarea</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea 
                    placeholder="Type your message here."
                    value={textareaValue}
                    onChange={(e) => setTextareaValue(e.target.value)}
                  />
                </CardContent>
              </Card>

              {/* Calendar */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              {/* Toast Button */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Toast</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button onClick={showToast}>Show Toast</Button>
                </CardContent>
              </Card>

            </div>
          </TabsContent>

          {/* Custom Components Tab */}
          <TabsContent value="custom" className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              
              {/* WalletConnect Component */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Wallet className="h-5 w-5" />
                    WalletConnect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <WalletConnect onConnect={() => {}} />
                </CardContent>
              </Card>

              {/* QuizSelection Component */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    QuizSelection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <QuizSelection 
                    walletAddress="0x1234567890abcdef"
                    onStartMatchmaking={() => {}}
                  />
                </CardContent>
              </Card>

              {/* Matchmaking Component */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Matchmaking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Matchmaking 
                    config={{ category: "General Knowledge", difficulty: "Easy", matchLength: "5", wager: false }}
                    onMatchFound={() => {}}
                    onCancel={() => {}}
                  />
                </CardContent>
              </Card>

              {/* QuizResults Component */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    QuizResults
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <QuizResults 
                    results={{ 
                      playerScore: 8, 
                      opponentScore: 6,
                      totalQuestions: 10,
                      playerAnswers: Array(10).fill({ correct: true, timeSeconds: 2 }),
                      opponentAnswers: Array(10).fill({ correct: true, timeSeconds: 3 }),
                      isWinner: true,
                      category: "General Knowledge",
                      difficulty: "Easy",
                      playerStreak: 5,
                      opponentStreak: 3,
                      averageResponseTime: 2.5
                    }}
                    opponent={{ 
                      id: "1", 
                      name: "Player 2", 
                      avatar: "",
                      address: "0xabcdef1234567890",
                      winStreak: 3,
                      isBot: false,
                      rating: 1500
                    }}
                    walletAddress="0x1234567890abcdef"
                    onPlayAgain={() => {}}
                    onViewLeaderboard={() => {}}
                  />
                </CardContent>
              </Card>

            </div>
          </TabsContent>

          {/* Layout Components Tab */}
          <TabsContent value="layout" className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              
              {/* Resizable Panels */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Resizable Panels</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="min-h-[200px] rounded-lg border p-4">
                    <p className="text-white/70">Resizable panels would go here</p>
                  </div>
                </CardContent>
              </Card>

              {/* Scroll Area */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Scroll Area</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] w-full rounded-md border p-4 overflow-y-auto">
                    <div className="space-y-4">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} className="text-white/70">
                          Scrollable content item {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
};

export default Components;
