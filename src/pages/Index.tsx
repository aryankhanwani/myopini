import { useMemo, useState } from "react";
import {
	Menu,
	Search,
	ChevronDown,
	Coins,
	Bell,
	Wallet as WalletIcon,
	Swords,
	Sparkles,
	Trophy,
	Users,
	ShieldCheck,
	Package as PackageIcon,
	CreditCard,
	MessageCircle,
	Zap,
	Play,
	Plus,
	Target,
	BookOpen,
	Sword,
	Crown,
	Brain,
	Puzzle,
	Flame,
	RefreshCcw,
	Check,
	X,
	ChevronRight,
	Settings,
	Clock,
} from "lucide-react";

const primaryGradient = "bg-gradient-to-br from-violet-500 to-cyan-400";
const primaryText = "text-white";
const surface = "bg-white/[0.06] ring-1 ring-white/10";
const surfaceHover = "hover:bg-white/[0.09]";
const borderSubtle = "border-white/5";
const chip = "px-3 py-1.5 rounded-lg bg-white/5 ring-1 ring-white/10 text-xs";

function truncateAddress(addr: string) {
	if (!addr) return "";
	return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
}

const Index = () => {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const [walletOpen, setWalletOpen] = useState(false);
	const [networkOpen, setNetworkOpen] = useState(false);
	const [network, setNetwork] = useState("Polygon");
	const [isConnected, setIsConnected] = useState(false);
	const [walletAddress, setWalletAddress] = useState("");
	const [autoJoin, setAutoJoin] = useState(false);
	const [toast, setToast] = useState<string | null>(null);

	const balanceLabel = useMemo(() => {
		if (!isConnected) return null;
		const demoBal = (Math.random() * 200).toFixed(2);
		return `${demoBal} MYO`;
	}, [isConnected]);

	function showToast(message: string) {
		setToast(message);
		window.setTimeout(() => setToast(null), 1800);
	}

	function handleConnect() {
		// Simulate a random address
		const hex = "0123456789abcdef";
		let out = "0x";
		for (let i = 0; i < 40; i++) out += hex[Math.floor(Math.random() * hex.length)];
		setWalletAddress(out);
		setIsConnected(true);
		setWalletOpen(false);
		showToast("Wallet connected");
	}

	return (
		<div className="min-h-screen bg-[#0a0f1c] text-slate-200 antialiased">
			<div className="flex min-h-screen">
				{/* Sidebar (Desktop) */}
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
						<a className={`group flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/5 ${surfaceHover} transition`}>
							<Swords className="w-5 h-5 text-violet-300" />
							<span className="font-medium">Arena</span>
							<span className="ml-auto text-xs text-cyan-300/80 bg-cyan-500/10 px-2 py-0.5 rounded">Live</span>
						</a>
						<a href="/quizzes" className={`group flex items-center gap-3 px-3 py-2 rounded-lg ${surfaceHover} transition`}>
							<Sparkles className="w-5 h-5 text-slate-300" />
							<span className="font-medium">Quizzes</span>
						</a>
						<a href="/leaderboard" className={`group flex items-center gap-3 px-3 py-2 rounded-lg ${surfaceHover} transition`}>
							<Users className="w-5 h-5 text-slate-300" />
							<span className="font-medium">Leaderboard</span>
						</a>
						<a href="/history" className={`group flex items-center gap-3 px-3 py-2 rounded-lg ${surfaceHover} transition`}>
							<Clock className="w-5 h-5 text-slate-300" />
							<span className="font-medium">History</span>
						</a>
						<a className={`group flex items-center gap-3 px-3 py-2 rounded-lg ${surfaceHover} transition`}>
							<Trophy className="w-5 h-5 text-slate-300" />
							<span className="font-medium">Tournaments</span>
						</a>
						<a className={`group flex items-center gap-3 px-3 py-2 rounded-lg ${surfaceHover} transition`}>
							<MessageCircle className="w-5 h-5 text-slate-300" />
							<span className="font-medium">Community</span>
						</a>
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

				{/* Main */}
				<main className="flex-1">
					{/* Top bar */}
					<header className={`sticky top-0 z-40 backdrop-blur bg-[#0a0f1c]/70 ${borderSubtle} border-b`}>
						<div className="max-w-7xl mx-auto px-4 md:px-6">
							<div className="h-16 flex items-center gap-3">
								{/* Mobile menu */}
								<button onClick={() => setMobileNavOpen(true)} className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10">
									<Menu className="w-5 h-5" />
								</button>

								{/* Search */}
								<div className="flex-1 max-w-xl">
									<div className="relative">
										<Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
										<input className="w-full pl-9 pr-3 h-10 rounded-lg bg-white/5 ring-1 ring-white/10 placeholder:text-slate-500 text-sm focus:outline-none focus:ring-violet-500/50" placeholder="Search modes, players, tournaments…" />
									</div>
								</div>

								{/* Network + wallet */}
								<div className="flex items-center gap-2 relative">
									{/* Network selector */}
									<div className="relative">
										<button onClick={() => setNetworkOpen((v) => !v)} className="inline-flex items-center gap-2 h-10 px-3 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-sm font-medium">
											<span className="inline-flex h-2.5 w-2.5 rounded-full bg-violet-400"></span>
											<span>{network}</span>
											<ChevronDown className="w-4 h-4" />
										</button>
										{networkOpen && (
											<div className="absolute right-0 mt-2 w-40 rounded-lg bg-[#0c1220] ring-1 ring-white/10 p-1">
												<button onClick={() => { setNetwork("Polygon"); setNetworkOpen(false); showToast("Network set to Polygon"); }} className="flex w-full items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 text-sm">
													<span className="h-2.5 w-2.5 rounded-full bg-violet-400"></span> Polygon
												</button>
												<button onClick={() => { setNetwork("Ethereum"); setNetworkOpen(false); showToast("Network set to Ethereum"); }} className="flex w-full items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 text-sm">
													<span className="h-2.5 w-2.5 rounded-full bg-indigo-400"></span> Ethereum
												</button>
												<button onClick={() => { setNetwork("Arbitrum"); setNetworkOpen(false); showToast("Network set to Arbitrum"); }} className="flex w-full items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 text-sm">
													<span className="h-2.5 w-2.5 rounded-full bg-sky-400"></span> Arbitrum
												</button>
											</div>
										)}
									</div>

									{/* Balance */}
									{isConnected && (
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
									<button onClick={() => (isConnected ? showToast("Wallet connected") : setWalletOpen(true))} className={`inline-flex items-center gap-2 h-10 px-3 rounded-lg ${primaryGradient} ${primaryText} font-medium`}>
										<WalletIcon className="w-4 h-4" />
										<span>{isConnected ? truncateAddress(walletAddress) : "Connect"}</span>
									</button>
								</div>
							</div>
						</div>
					</header>

					{/* Content */}
					<section className="max-w-7xl mx-auto px-4 md:px-6 py-8">
						{/* Page header */}
						<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
							<div>
								<h1 className="text-2xl md:text-3xl tracking-tight font-semibold">Arena</h1>
								<p className="text-slate-400 mt-1">Enter quick duels, climb the ladder, and earn MYO for every win.</p>
							</div>
							<div className="flex flex-wrap items-center gap-2">
								<div className={chip}>Players online <span className="font-medium text-white">2,384</span></div>
								<div className={chip}>Games today <span className="font-medium text-white">12,907</span></div>
								<button onClick={() => { setAutoJoin((v) => !v); showToast(`Auto-join ${!autoJoin ? "enabled" : "disabled"}`); }} className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 ring-1 ring-white/10 text-xs`}>
									<span className={`relative inline-flex h-4 w-7 rounded-full ${autoJoin ? "bg-violet-500/60" : "bg-slate-600/60"}`}>
										<span className={`absolute left-0.5 top-0.5 h-3 w-3 bg-white rounded-full transition ${autoJoin ? "translate-x-3.5" : ""}`}></span>
									</span>
									Auto-join queue
								</button>
							</div>
						</div>

						{/* Avatars scroller */}
						<div className="mt-6 overflow-x-auto">
							<div className="flex items-center gap-4 min-w-max">
								<div className="flex items-center gap-3">
									{["1544006659-f0b21884ce1d","1527980965255-d3b416303d12","1517841905240-472988babdf9","1531427186611-ecfd6d936c79","1547425260-76bcadfb4f2c","1520975916090-3105956dac38","1522075469751-3a6694fb2f61","1527980965255-d3b416303d12"].map((id) => (
										<img key={id} className="h-12 w-12 rounded-full ring-2 ring-violet-500/40 object-cover" src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=96&h=96&q=60`} alt="" />
									))}
								</div>
							</div>
						</div>

						{/* Main grid */}
						<div className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
							{/* Left: modes and actions */}
							<div className="xl:col-span-2 space-y-6">
								{/* Quick actions */}
								<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
									<button 
										onClick={() => window.location.href = '/quizzes'}
										className={`group relative overflow-hidden rounded-xl ${primaryGradient} text-[#0a0f1c] h-24 ring-1 ring-white/10`}
									>
										<div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white to-transparent"></div>
										<div className="relative h-full w-full p-4 flex items-start justify-between">
											<div>
												<div className="text-base font-semibold tracking-tight">Quick Match</div>
												<div className="text-xs opacity-80">Find an opponent</div>
											</div>
											<Play className="w-5 h-5" />
										</div>
									</button>
									<button className={`group relative overflow-hidden rounded-xl ${surface} ${surfaceHover} h-24`}>
										<div className="relative h-full w-full p-4 flex items-start justify-between">
											<div>
												<div className="text-base font-semibold tracking-tight">Create Room</div>
												<div className="text-xs text-slate-400">Invite friends</div>
											</div>
											<Plus className="w-5 h-5 text-slate-300" />
										</div>
									</button>
									<button className={`group relative overflow-hidden rounded-xl ${surface} ${surfaceHover} h-24`}>
										<div className="relative h-full w-full p-4 flex items-start justify-between">
											<div>
												<div className="text-base font-semibold tracking-tight">Practice</div>
												<div className="text-xs text-slate-400">Solo training</div>
											</div>
											<Target className="w-5 h-5 text-slate-300" />
										</div>
									</button>
									<button className={`group relative overflow-hidden rounded-xl ${surface} ${surfaceHover} h-24`}>
										<div className="relative h-full w-full p-4 flex items-start justify-between">
											<div>
												<div className="text-base font-semibold tracking-tight">How to Play</div>
												<div className="text-xs text-slate-400">Rules & rewards</div>
											</div>
											<BookOpen className="w-5 h-5 text-slate-300" />
										</div>
									</button>
								</div>

								{/* Modes */}
								<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
									{/* Card: 1-Min Duel */}
									<button 
										onClick={() => window.location.href = '/quizzes'}
										className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1f1530] to-[#0f1018] ring-1 ring-violet-500/20 hover:ring-violet-400/40 p-5`}
									>
										<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=60')] opacity-[0.08] bg-cover bg-center"></div>
										<div className="relative">
											<div className="flex items-center justify-between">
												<div className="inline-flex items-center gap-2 px-2 py-1 rounded-lg text-violet-300 bg-violet-500/10 text-[11px] font-medium">
													<Zap className="w-3.5 h-3.5" /> Blitz
												</div>
												<span className="text-[11px] text-violet-300/80">Most Played</span>
											</div>
											<div className="mt-4">
												<div className="text-lg font-semibold tracking-tight">1-Min Duel</div>
												<div className="text-xs text-slate-400 mt-1">6 questions, fast pace</div>
											</div>
											<div className="mt-5 flex items-center justify-between">
												<div className="text-xs text-slate-400">Entry <span className="text-slate-200 font-medium">2 MYO</span></div>
												<div className="inline-flex items-center gap-1 text-xs text-violet-300">
													<Sword className="w-4 h-4" /> Start
												</div>
											</div>
										</div>
									</button>

									{/* Card: Best of 3 */}
									<button 
										onClick={() => window.location.href = '/quizzes'}
										className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1c2230] to-[#10151f] ring-1 ring-indigo-500/20 hover:ring-indigo-400/40 p-5"
									>
										<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60')] opacity-[0.07] bg-cover bg-center"></div>
										<div className="relative">
											<div className="inline-flex items-center gap-2 px-2 py-1 rounded-lg text-indigo-300 bg-indigo-500/10 text-[11px] font-medium">
												<Crown className="w-3.5 h-3.5" /> Classical
											</div>
											<div className="mt-4">
												<div className="text-lg font-semibold tracking-tight">Best of 3</div>
												<div className="text-xs text-slate-400 mt-1">Balanced quiz rounds</div>
											</div>
											<div className="mt-5 flex items-center justify-between">
												<div className="text-xs text-slate-400">Entry <span className="text-slate-200 font-medium">5 MYO</span></div>
												<div className="inline-flex items-center gap-1 text-xs text-indigo-300">
													<Sword className="w-4 h-4" /> Start
												</div>
											</div>
										</div>
									</button>

									{/* Card: Recall Rush */}
									<button 
										onClick={() => window.location.href = '/quizzes'}
										className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#221b2a] to-[#14101a] ring-1 ring-fuchsia-500/20 hover:ring-fuchsia-400/40 p-5"
									>
										<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60')] opacity-[0.06] bg-cover bg-center"></div>
										<div className="relative">
											<div className="inline-flex items-center gap-2 px-2 py-1 rounded-lg text-fuchsia-300 bg-fuchsia-500/10 text-[11px] font-medium">
												<Brain className="w-3.5 h-3.5" /> Memory
											</div>
											<div className="mt-4">
												<div className="text-lg font-semibold tracking-tight">Recall Rush</div>
												<div className="text-xs text-slate-400 mt-1">Pattern and speed</div>
											</div>
											<div className="mt-5 flex items-center justify-between">
												<div className="text-xs text-slate-400">Entry <span className="text-slate-200 font-medium">3 MYO</span></div>
												<div className="inline-flex items-center gap-1 text-xs text-fuchsia-300">
													<Sword className="w-4 h-4" /> Start
												</div>
											</div>
										</div>
									</button>

									{/* Card: Streaks */}
									<button 
										onClick={() => window.location.href = '/quizzes'}
										className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#2a201b] to-[#16110f] ring-1 ring-amber-500/20 hover:ring-amber-400/40 p-5"
									>
										<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=60')] opacity-[0.07] bg-cover bg-center"></div>
										<div className="relative">
											<div className="inline-flex items-center gap-2 px-2 py-1 rounded-lg text-amber-300 bg-amber-500/10 text-[11px] font-medium">
												<Flame className="w-3.5 h-3.5" /> Streak
											</div>
											<div className="mt-4">
												<div className="text-lg font-semibold tracking-tight">Daily Streaks</div>
												<div className="text-xs text-slate-400 mt-1">Daily participation rewards</div>
											</div>
											<div className="mt-5 flex items-center justify-between">
												<div className="text-xs text-slate-400">Entry <span className="text-slate-200 font-medium">Free</span></div>
												<div className="inline-flex items-center gap-1 text-xs text-amber-300">
													<Sword className="w-4 h-4" /> Start
												</div>
											</div>
										</div>
									</button>
								</div>

								{/* Live rooms */}
								<div className={`rounded-2xl p-5 ${surface}`}>
									<div className="flex items-center justify-between">
										<h3 className="text-base font-semibold tracking-tight">Live rooms</h3>
										<button className="text-xs text-slate-400 hover:text-slate-300 inline-flex items-center gap-1">
											Refresh <RefreshCcw className="w-4 h-4" />
										</button>
									</div>
									<div className="mt-4 space-y-3">
										{[
											{ icon: <Zap className="w-4 h-4 text-violet-300" />, title: "Crypto Whiz Lobby", sub: "1-Min Duel • Entry 2 MYO", people: "3/4", join: true },
											{ icon: <Crown className="w-4 h-4 text-indigo-300" />, title: "Champions Arena", sub: "Best of 3 • Entry 5 MYO", people: "2/2", join: false },
											{ icon: <Brain className="w-4 h-4 text-fuchsia-300" />, title: "Memory Masters", sub: "Recall Rush • Entry 3 MYO", people: "1/4", join: true },
										].map((room) => (
											<div key={room.title} className="flex items-center gap-3 p-3 rounded-xl bg-black/20 ring-1 ring-white/10">
												<div className="h-9 w-9 rounded-lg bg-white/5 ring-1 ring-white/10 grid place-items-center">
													{room.icon}
												</div>
												<div className="min-w-0">
													<div className="text-sm font-medium truncate">{room.title}</div>
													<div className="text-[11px] text-slate-400">{room.sub}</div>
												</div>
												<div className="ml-auto flex items-center gap-2 text-xs text-slate-400">
													<Users className="w-4 h-4" /><span>{room.people}</span>
												</div>
												{room.join ? (
													<button className={`ml-3 h-9 px-3 rounded-lg ${primaryGradient} ${primaryText} text-sm font-medium`}>Join</button>
												) : (
													<button className="ml-3 h-9 px-3 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-sm">Full</button>
												)}
											</div>
										))}
									</div>
								</div>
							</div>

							{/* Right: stats */}
							<div className="space-y-6">
								{/* Recent matches */}
								<div className={`rounded-2xl p-5 ${surface}`}>
									<div className="flex items-center justify-between">
										<h3 className="text-base font-semibold tracking-tight">Recent matches</h3>
										<button className="text-xs text-slate-400 hover:text-slate-300">View all</button>
									</div>
									<div className="mt-4 space-y-3">
										{[
											{ img: "1517841905240-472988babdf9", name: "vs. Alex", meta: "1-Min Duel • 10m ago", win: true, delta: "+6 MYO" },
											{ img: "1522075469751-3a6694fb2f61", name: "vs. Morgan", meta: "Best of 3 • 38m ago", win: false, delta: "-5 MYO" },
											{ img: "1520986606214-8b456906c813", name: "vs. Priya", meta: "Best of 3 • 1h ago", win: true, delta: "+10 MYO" },
											{ img: "1547425260-76bcadfb4f2c", name: "vs. Mei", meta: "Recall Rush • 2h ago", win: false, delta: "-3 MYO" },
										].map((m) => (
											<div key={m.name + m.meta} className="flex items-center gap-3 p-3 rounded-xl bg-black/20 ring-1 ring-white/10">
												<img src={`https://images.unsplash.com/photo-${m.img}?auto=format&fit=crop&w=80&h=80&q=60`} className="h-8 w-8 rounded-full object-cover" alt="" />
												<div className="min-w-0">
													<div className="text-sm font-medium truncate">{m.name}</div>
													<div className="text-[11px] text-slate-400">{m.meta}</div>
												</div>
												<span className={`ml-auto inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-lg ${m.win ? "bg-violet-500/10 text-violet-300" : "bg-rose-500/10 text-rose-300"}`}>
													{m.win ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
													{m.win ? "Win" : "Loss"}
												</span>
												<div className={`w-16 text-right text-xs font-medium ${m.win ? "text-violet-300" : "text-rose-300"}`}>{m.delta}</div>
											</div>
										))}
									</div>
								</div>

								{/* Performance (simple area mock) */}
								<div className={`rounded-2xl p-5 ${surface}`}>
									<h3 className="text-base font-semibold tracking-tight">Win rate (7d)</h3>
									<p className="text-xs text-slate-400">Your recent performance across all modes</p>
									<div className="mt-3 h-36 relative">
										<div className="absolute inset-0">
											{/* Simple sparkline replacement */}
											<svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
												<defs>
													<linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
														<stop offset="0%" stopColor="#7c3aed55" />
														<stop offset="100%" stopColor="#7c3aed00" />
													</linearGradient>
												</defs>
												<path d="M0,30 C15,20 25,24 35,18 C45,12 55,22 65,16 C75,10 85,18 100,12 L100,40 L0,40 Z" fill="url(#grad)" />
												<path d="M0,30 C15,20 25,24 35,18 C45,12 55,22 65,16 C75,10 85,18 100,12" fill="none" stroke="#7c3aed" strokeWidth="1.5" />
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>

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
							<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/5"><Swords className="w-5 h-5 text-violet-300" /><span className="font-medium">Arena</span></a>
							<a href="/quizzes" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5"><Sparkles className="w-5 h-5" /><span className="font-medium">Quizzes</span></a>
							<a href="/leaderboard" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5"><Users className="w-5 h-5" /><span className="font-medium">Leaderboard</span></a>
							<a href="/history" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5"><Clock className="w-5 h-5" /><span className="font-medium">History</span></a>
							<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5"><Trophy className="w-5 h-5" /><span className="font-medium">Tournaments</span></a>
							<div className="pt-3">
								<button onClick={() => { setWalletOpen(true); }} className={`w-full h-10 rounded-lg ${primaryGradient} ${primaryText} font-medium`}>{isConnected ? truncateAddress(walletAddress) : "Connect Wallet"}</button>
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

export default Index;
