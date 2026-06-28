"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { 
  ArrowRight, 
  PlayCircle, 
  Video, 
  FileText, 
  DollarSign, 
  Activity,
  Network,
  ShieldCheck,
  Building,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Quote,
  Check,
  Globe,
  ArrowLeft,
  ArrowUpRight,
  ArrowRight as ArrowRightIcon
} from "lucide-react";

export default function MarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-primary/30 overflow-x-hidden relative font-sans">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-6 md:px-12 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4 h-16" : "bg-transparent py-6 h-20"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-primary" />
            <span className="text-xl text-on-surface font-bold tracking-tight">Revenue OS</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors" href="#features">Features</Link>
            <Link className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors" href="#pricing">Pricing</Link>
            <Link className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors" href="#">Demo</Link>
          </nav>
          <div className="flex items-center gap-6">
            <Link className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors hidden md:block" href="/login">Login</Link>
            <Link href="/signup" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 active:scale-95 transition-all shadow-[0_0_15px_rgba(37,211,102,0.3)]">
              Start Free Trial
            </Link>
          </div>
        </div>
      </header>

      <main className="relative pt-32 min-h-screen">
        {/* Background Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-[40%] right-[-5%] w-[30%] h-[30%] rounded-full bg-secondary/5 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[50%] h-[30%] rounded-full bg-tertiary/5 blur-[120px] pointer-events-none"></div>

        {/* HERO SECTION */}
        <section className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Content Area */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 space-y-8 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-white/10">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">New Engine Released</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-on-surface leading-[1.1] tracking-tight">
              Turn Every Sales Call Into <span className="text-primary italic">Revenue.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
              Automatically generate transcripts, summaries, proposals and follow-ups from Zoom and Google Meet conversations. Stop losing deals to manual entry.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/signup" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold hover:opacity-90 active:scale-95 transition-all flex items-center gap-3 shadow-[0_4px_0_0_#1b9a4a]">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="pt-8 flex items-center gap-8">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-primary">CEO</div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-secondary">VP</div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-tertiary">AE</div>
              </div>
              <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">
                <span className="text-primary">500+</span> Revenue teams scaling faster
              </p>
            </div>
          </motion.div>

          {/* Right Visual Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] w-full flex items-center justify-center"
          >
            {/* Shader Container */}
            <div className="absolute inset-0 rounded-[32px] overflow-hidden border border-white/5 bg-surface-container-low/50 backdrop-blur-sm"></div>

            {/* Animated Connection Paths (SVG Overlay) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 600">
              {/* Meeting to AI */}
              <path d="M150 180 Q300 150 300 250" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2"></path>
              <path className="path-flow" d="M150 180 Q300 150 300 250" fill="none" stroke="#25D366" strokeWidth="2"></path>
              
              {/* AI to Proposal */}
              <path d="M300 350 Q300 450 150 420" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2"></path>
              <path className="path-flow" d="M300 350 Q300 450 150 420" fill="none" stroke="#25D366" strokeWidth="2"></path>
              
              {/* Proposal to Growth */}
              <path d="M150 420 Q400 500 450 450" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2"></path>
              <path className="path-flow" d="M150 420 Q400 500 450 450" fill="none" stroke="#25D366" strokeWidth="2"></path>
            </svg>

            {/* Floating Cards */}
            {/* Meeting Recording */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-[10%] left-[5%] glass-surface border border-white/10 p-5 rounded-2xl w-52 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded bg-error/20 flex items-center justify-center text-error">
                  <Video className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface">Recording</span>
              </div>
              <div className="space-y-2">
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: ["0%", "100%"] }} 
                    transition={{ repeat: Infinity, duration: 2 }} 
                    className="h-full bg-error"
                  />
                </div>
                <div className="h-1.5 w-1/2 bg-white/5 rounded-full"></div>
              </div>
            </motion.div>

            {/* AI Analysis */}
            <motion.div 
              animate={{ boxShadow: ["0 0 20px rgba(37,211,102,0.1)", "0 0 40px rgba(37,211,102,0.3)", "0 0 20px rgba(37,211,102,0.1)"] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-[40%] left-[45%] -translate-x-1/2 glass-surface border border-white/10 p-6 rounded-2xl w-64 z-20 shadow-2xl"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-1 border border-primary/30">
                  <Activity className="w-7 h-7" />
                </div>
                <span className="text-xl font-bold text-primary">AI Engine</span>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest animate-pulse">Analyzing Intent...</p>
              </div>
            </motion.div>

            {/* Proposal Generation */}
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[20%] left-[5%] glass-surface border border-white/10 p-5 rounded-2xl w-52 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded bg-secondary/20 flex items-center justify-center text-secondary">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface">Proposal</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-white/5 rounded"></div>
                <div className="h-2 w-4/5 bg-white/5 rounded"></div>
                <div className="h-2 w-2/3 bg-primary/20 rounded"></div>
              </div>
            </motion.div>

            {/* Revenue Growth */}
            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[10%] right-[5%] glass-surface p-6 rounded-2xl w-56 border border-primary/30 shadow-[0_0_30px_rgba(37,211,102,0.15)]"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">+240%</span>
                </div>
              </div>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Revenue Closed</p>
              <p className="text-3xl font-extrabold text-on-surface">₹1.2M</p>
              
              {/* Small Sparkline */}
              <svg className="w-full h-8 mt-4" viewBox="0 0 100 30">
                <path d="M0 25 L20 20 L40 22 L60 10 L80 12 L100 2" fill="none" stroke="#25D366" strokeWidth="2"></path>
                <path d="M0 25 L20 20 L40 22 L60 10 L80 12 L100 2 L100 30 L0 30 Z" fill="url(#grad)" opacity="0.2"></path>
                <defs>
                  <linearGradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#25D366" stopOpacity="1" />
                    <stop offset="100%" stopColor="#25D366" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>
        </section>

        {/* 1. TRUSTED BY (TICKER) */}
        <section className="py-12 bg-surface-container-lowest border-y border-white/5 overflow-hidden relative">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            animate={{ x: [0, -1036] }} 
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex w-max"
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-16 px-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2 text-2xl font-bold text-on-surface"><Network className="w-8 h-8 text-primary" /> NEXUS</div>
                <div className="flex items-center gap-2 text-2xl font-bold text-on-surface"><ShieldCheck className="w-8 h-8 text-primary" /> SAPPHIRE</div>
                <div className="flex items-center gap-2 text-2xl font-bold text-on-surface"><Activity className="w-8 h-8 text-primary" /> VELOCITY</div>
                <div className="flex items-center gap-2 text-2xl font-bold text-on-surface"><Building className="w-8 h-8 text-primary" /> QUANTUM</div>
                <div className="flex items-center gap-2 text-2xl font-bold text-on-surface"><Globe className="w-8 h-8 text-primary" /> HORIZON</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* 2. FEATURES BENTO GRID */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl font-bold mb-4 text-on-surface tracking-tight"
            >
              Engineered for Closing
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-lg text-on-surface-variant max-w-2xl mx-auto"
            >
              Every module is designed to reduce friction and accelerate the movement of high-value capital through your pipeline.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card p-10 rounded-[32px] relative overflow-hidden group"
            >
              <div className="absolute -right-8 -top-8 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
              <BarChart3 className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-on-surface">Real-time Intelligence</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Automated meeting transcripts synced with revenue forecasting. Every word spoken is analyzed for intent and deal risk.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className="glass-card p-10 rounded-[32px] relative overflow-hidden group"
            >
              <div className="absolute -right-8 -top-8 w-40 h-40 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-500"></div>
              <Network className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-on-surface">Strategic Workflows</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Eliminate administrative bloat. Generate proposals instantly from meeting insights and route them for signature with one click.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
              className="glass-card p-10 rounded-[32px] relative overflow-hidden group"
            >
              <div className="absolute -right-8 -top-8 w-40 h-40 bg-tertiary/5 rounded-full blur-3xl group-hover:bg-tertiary/20 transition-all duration-500"></div>
              <TrendingUp className="w-10 h-10 text-tertiary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-on-surface">Revenue Forecasting</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Predict month-end closings with mathematical certainty. Our engine weights deals based on historical behavioral patterns.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3. HOW IT WORKS & 4. INTERACTIVE PRODUCT DEMO */}
        <section className="py-24 px-6 md:px-12 bg-surface-container-lowest relative border-y border-white/5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-on-surface leading-tight tracking-tight">
                From First Meeting to <span className="text-primary italic">Revenue Realized</span>
              </h2>
              <div className="space-y-12 relative">
                <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent"></div>
                
                <div className="relative pl-16">
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-background border border-primary flex items-center justify-center z-10 shadow-[0_0_15px_rgba(37,211,102,0.2)]">
                    <Video className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-on-surface">The Meeting</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Revenue OS records and transcribes executive sessions, flagging key commitments and budget constraints in real-time.
                  </p>
                </div>
                
                <div className="relative pl-16">
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-background border border-secondary flex items-center justify-center z-10 shadow-[0_0_15px_rgba(37,211,102,0.2)]">
                    <Activity className="w-5 h-5 text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-on-surface">Instant Analysis</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    AI-driven sentiment analysis converts dialogue into a structured deal brief, identifying stakeholders and blockers automatically.
                  </p>
                </div>

                <div className="relative pl-16">
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-background border border-tertiary flex items-center justify-center z-10 shadow-[0_0_15px_rgba(37,211,102,0.2)]">
                    <CheckCircle2 className="w-5 h-5 text-tertiary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-on-surface">Automated Action</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    A professional, glassmorphic proposal is generated and sent. Revenue is logged, and the forecasting engine updates in real-time.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateX: 10, rotateY: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="relative perspective-1000"
            >
              <motion.div 
                animate={{ y: [-15, 15, -15] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="glass-card p-2 rounded-[32px] shadow-[0_30px_60px_rgba(37,211,102,0.2)] relative overflow-hidden border-primary/40 bg-background/80 group"
              >
                {/* Sweeping Reflection Animation */}
                <motion.div 
                  animate={{ left: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", repeatDelay: 4 }}
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-50 pointer-events-none"
                />

                {/* Floating Glow Behind Image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 opacity-50 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>
                
                <div className="bg-surface-container-lowest rounded-[24px] border border-white/10 h-[500px] w-full flex flex-col overflow-hidden relative z-10">
                  {/* Mock App Header */}
                  <div className="h-12 border-b border-white/10 flex items-center px-4 justify-between bg-surface-container-highest/80 backdrop-blur-md absolute top-0 w-full z-20">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-error shadow-[0_0_8px_rgba(37,211,102,0.5)]"></div>
                      <div className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_8px_rgba(37,211,102,0.5)]"></div>
                      <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(37,211,102,0.8)] animate-pulse"></div>
                    </div>
                    <div className="text-xs font-semibold text-outline tracking-wider flex items-center gap-2">
                      <Activity className="w-3 h-3 text-primary animate-pulse" />
                      RevenueOS Command Center
                    </div>
                    <div className="w-16"></div>
                  </div>
                  
                  {/* Image Content */}
                  <div className="relative w-full h-full pt-12">
                    <Image 
                      src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop"
                      alt="Revenue Analytics Command Center"
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Overlay Gradient for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none mix-blend-multiply"></div>
                    
                    {/* Floating Overlay Badge 1 */}
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="absolute top-20 right-6 glass-card border border-primary/30 rounded-xl p-3 flex items-center gap-3 backdrop-blur-xl bg-background/80 shadow-[0_0_20px_rgba(37,211,102,0.2)]"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Win Rate</p>
                        <p className="text-sm font-bold text-primary">68.4%</p>
                      </div>
                    </motion.div>

                    {/* Floating Overlay Badge 2 */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="absolute bottom-6 left-6 right-6 glass-card border border-white/20 rounded-xl p-4 flex items-center justify-between backdrop-blur-xl bg-background/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary overflow-hidden">
                           <motion.div 
                             animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                             transition={{ repeat: Infinity, duration: 2 }}
                             className="absolute inset-0 bg-primary/30 rounded-full"
                           />
                          <CheckCircle2 className="w-5 h-5 relative z-10" />
                        </div>
                        <div>
                          <p className="text-xs text-primary font-bold uppercase tracking-wider mb-0.5">Deal Closed</p>
                          <p className="text-sm font-medium text-on-surface">Enterprise Annual License</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-black text-primary drop-shadow-[0_0_10px_rgba(37,211,102,0.5)]">+₹240k</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 5. PROPOSAL SHOWCASE */}
        <section className="py-24 px-0 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex justify-between items-end">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-on-surface tracking-tight">Signature-Ready Proposals</h2>
              <p className="text-on-surface-variant text-lg">Designed to impress, engineered to convert.</p>
            </motion.div>
            <div className="flex gap-4">
              <button 
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors active:scale-95"
              >
                <ArrowLeft className="w-5 h-5 text-on-surface" />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors active:scale-95"
              >
                <ArrowRightIcon className="w-5 h-5 text-on-surface" />
              </button>
            </div>
          </div>
          
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-12 px-6 md:px-12 no-scrollbar scroll-smooth snap-x"
          >
            {/* Proposal Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="min-w-[340px] md:min-w-[400px] glass-card rounded-[24px] overflow-hidden group snap-start"
            >
              <div className="h-48 bg-surface-container-high relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 z-10"></div>
                {/* Decorative background grid */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#25D366 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="px-3 py-1 rounded bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest">Enterprise</span>
                  <h5 className="text-xl text-white font-bold mt-3 leading-tight">Nexus Global<br/>Core Expansion</h5>
                </div>
              </div>
              <div className="p-6 bg-surface-container-lowest">
                <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                  <div className="text-2xl font-bold text-primary">₹1,240,000</div>
                  <span className="text-xs font-semibold text-on-surface-variant bg-white/5 px-2 py-1 rounded">Drafted 2h ago</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest border border-white/10 flex items-center justify-center text-xs font-bold text-outline">MV</div>
                  <div className="text-sm">
                    <div className="text-on-surface font-semibold">Drafted by Marcus Vane</div>
                    <div className="text-on-surface-variant text-xs">Regional Director</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Proposal Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="min-w-[340px] md:min-w-[400px] glass-card rounded-[24px] overflow-hidden group snap-start"
            >
              <div className="h-48 bg-surface-container-high relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 z-10"></div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#25D366 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="px-3 py-1 rounded bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-widest">Growth</span>
                  <h5 className="text-xl text-white font-bold mt-3 leading-tight">Sapphire Logistics<br/>Master Service</h5>
                </div>
              </div>
              <div className="p-6 bg-surface-container-lowest">
                <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                  <div className="text-2xl font-bold text-secondary">₹450,000</div>
                  <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded">Awaiting Signature</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest border border-white/10 flex items-center justify-center text-xs font-bold text-outline">SC</div>
                  <div className="text-sm">
                    <div className="text-on-surface font-semibold">Drafted by Sarah Chen</div>
                    <div className="text-on-surface-variant text-xs">Head of Sales</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Proposal Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="min-w-[340px] md:min-w-[400px] glass-card rounded-[24px] overflow-hidden group snap-start"
            >
              <div className="h-48 bg-surface-container-high relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 z-10"></div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, #25D366 25%, transparent 25%, transparent 75%, #25D366 75%, #25D366), linear-gradient(45deg, #25D366 25%, transparent 25%, transparent 75%, #25D366 75%, #25D366)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="px-3 py-1 rounded bg-tertiary text-tertiary-foreground text-[10px] font-bold uppercase tracking-widest">Expansion</span>
                  <h5 className="text-xl text-white font-bold mt-3 leading-tight">Quantum AI<br/>Partnership V3</h5>
                </div>
              </div>
              <div className="p-6 bg-surface-container-lowest">
                <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                  <div className="text-2xl font-bold text-tertiary">₹2,800,000</div>
                  <span className="text-xs font-semibold text-tertiary bg-tertiary/10 px-2 py-1 rounded">In Review</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest border border-white/10 flex items-center justify-center text-xs font-bold text-outline">JT</div>
                  <div className="text-sm">
                    <div className="text-on-surface font-semibold">Drafted by Julian Thorne</div>
                    <div className="text-on-surface-variant text-xs">CEO Office</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <section className="py-24 px-6 md:px-12 bg-surface-container-low/50 relative border-y border-white/5">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10">
              <Quote className="w-16 h-16 text-primary/20 mx-auto rotate-180" />
            </div>
            <div className="relative glass-card p-10 md:p-16 rounded-[40px] text-center shadow-2xl border-primary/20">
              <p className="text-2xl md:text-3xl font-medium italic mb-12 leading-relaxed text-on-surface">
                "Revenue OS has transformed our quarterly business reviews. We no longer debate the data; we act on the insights. It's the first platform that actually understands the nuance of an executive closing meeting."
              </p>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-2 border-primary p-1 mb-4 bg-background">
                  <div className="w-full h-full rounded-full bg-surface-container-highest flex items-center justify-center text-xl font-bold text-primary">HW</div>
                </div>
                <h6 className="text-lg font-bold text-on-surface">Helena Whitmore</h6>
                <p className="text-on-surface-variant text-sm font-medium">SVP of Revenue, Velocity International</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 7. PRICING */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4 text-on-surface tracking-tight"
            >
              Scale Your Revenue Intelligence
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-lg text-on-surface-variant max-w-2xl mx-auto"
            >
              Investment structures built for every stage of enterprise growth.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Scale */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass-card p-10 rounded-[32px] flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-2 text-on-surface">Scale</h3>
              <p className="text-on-surface-variant text-sm mb-8 font-medium">For emerging revenue teams.</p>
              <div className="flex items-baseline gap-2 mb-8 border-b border-white/5 pb-8">
                <span className="text-4xl font-extrabold text-on-surface">₹2,400</span>
                <span className="text-on-surface-variant font-semibold">/mo</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center gap-3 text-sm font-medium"><Check className="w-5 h-5 text-primary" /> Up to 10 Revenue Agents</li>
                <li className="flex items-center gap-3 text-sm font-medium"><Check className="w-5 h-5 text-primary" /> Real-time Transcription</li>
                <li className="flex items-center gap-3 text-sm font-medium"><Check className="w-5 h-5 text-primary" /> Standard Proposals</li>
                <li className="flex items-center gap-3 text-sm font-medium text-on-surface-variant opacity-50">Advanced Forecasting</li>
              </ul>
              <button className="w-full py-4 border border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-all">Start Scaling</button>
            </motion.div>

            {/* Growth */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="glass-card p-10 rounded-[32px] flex flex-col border-primary/40 shadow-2xl shadow-primary/10 relative z-10 bg-surface-container-lowest/80 md:scale-105"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-lg shadow-primary/20">Recommended</div>
              <h3 className="text-2xl font-bold mb-2 text-on-surface">Growth</h3>
              <p className="text-on-surface-variant text-sm mb-8 font-medium">For high-velocity closing teams.</p>
              <div className="flex items-baseline gap-2 mb-8 border-b border-white/5 pb-8">
                <span className="text-5xl font-extrabold text-primary">₹5,800</span>
                <span className="text-on-surface-variant font-semibold">/mo</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center gap-3 text-sm font-medium"><Check className="w-5 h-5 text-primary" /> Unlimited Revenue Agents</li>
                <li className="flex items-center gap-3 text-sm font-medium"><Check className="w-5 h-5 text-primary" /> Full Deal Analysis</li>
                <li className="flex items-center gap-3 text-sm font-medium"><Check className="w-5 h-5 text-primary" /> Glassmorphic Proposals</li>
                <li className="flex items-center gap-3 text-sm font-medium"><Check className="w-5 h-5 text-primary" /> Priority Forecasting</li>
              </ul>
              <button className="w-full py-4 bg-primary text-primary-foreground font-extrabold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20">Accelerate Growth</button>
            </motion.div>

            {/* Enterprise */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="glass-card p-10 rounded-[32px] flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-2 text-on-surface">Enterprise</h3>
              <p className="text-on-surface-variant text-sm mb-8 font-medium">For global revenue organizations.</p>
              <div className="flex items-baseline gap-2 mb-8 border-b border-white/5 pb-8">
                <span className="text-4xl font-extrabold text-on-surface">Custom</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center gap-3 text-sm font-medium"><Check className="w-5 h-5 text-primary" /> Global Node Deployment</li>
                <li className="flex items-center gap-3 text-sm font-medium"><Check className="w-5 h-5 text-primary" /> Custom AI Training</li>
                <li className="flex items-center gap-3 text-sm font-medium"><Check className="w-5 h-5 text-primary" /> White-glove Onboarding</li>
                <li className="flex items-center gap-3 text-sm font-medium"><Check className="w-5 h-5 text-primary" /> 24/7 Executive Support</li>
              </ul>
              <button className="w-full py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-all">Contact Sales</button>
            </motion.div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="py-24 px-6 md:px-12 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-on-surface"
          >
            Executive Inquiries
          </motion.h2>
          <div className="space-y-4">
            {[
              { q: "How secure is the meeting data transcription?", a: "Revenue OS uses SOC-2 Type II compliant encryption. Data is processed locally within your region's dedicated cloud instance and is never used for general model training." },
              { q: "Can we integrate with our existing CRM?", a: "Yes, we offer native bi-directional synchronization with Salesforce, HubSpot, and Microsoft Dynamics 365, ensuring your pipeline is always the single source of truth." },
              { q: "How accurate is the revenue forecasting?", a: "On average, our Enterprise partners see a 94% forecast accuracy within the first 60 days, improving to 99% as the model ingests more historical closing behaviors." }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className={`glass-card rounded-[20px] overflow-hidden border-l-4 transition-all duration-300 ${openFaq === index ? 'border-primary bg-white/5' : 'border-transparent hover:border-primary/50'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center group focus:outline-none"
                >
                  <span className="font-bold text-lg text-on-surface">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-on-surface-variant transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-primary' : ''}`} />
                </button>
                <div 
                  className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-on-surface-variant text-sm font-medium leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* 9. FOOTER */}
      <footer className="py-20 px-6 md:px-12 border-t border-white/5 bg-surface-container-lowest relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          <div className="md:col-span-12 lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold text-on-surface tracking-tight">Revenue OS</h2>
            </div>
            <p className="text-on-surface-variant text-sm mb-8 font-medium leading-relaxed max-w-sm">
              The definitive operating system for high-stakes revenue teams. Precision-engineered for growth, trust, and mathematical closing certainty.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary transition-colors border-white/10">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary transition-colors border-white/10">
                <Network className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 lg:col-span-2 lg:col-start-6">
            <h5 className="font-bold text-on-surface mb-6 text-sm uppercase tracking-widest text-outline">Product</h5>
            <ul className="space-y-4 text-sm font-medium text-on-surface-variant">
              <li><Link href="#" className="hover:text-primary transition-colors">Meeting Intelligence</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Proposal Engine</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Deal Analytics</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">API & Integrations</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-3 lg:col-span-2">
            <h5 className="font-bold text-on-surface mb-6 text-sm uppercase tracking-widest text-outline">Company</h5>
            <ul className="space-y-4 text-sm font-medium text-on-surface-variant">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Executive Team</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Press Kit</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h5 className="font-bold text-on-surface mb-6 text-sm uppercase tracking-widest text-outline">Resources</h5>
            <ul className="space-y-4 text-sm font-medium text-on-surface-variant">
              <li><Link href="#" className="hover:text-primary transition-colors">Revenue Academy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Security Center</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-3 lg:col-span-2">
            <h5 className="font-bold text-on-surface mb-6 text-sm uppercase tracking-widest text-outline">Contact</h5>
            <ul className="space-y-4 text-sm font-medium text-on-surface-variant">
              <li><a href="mailto:hello@revenueos.io" className="hover:text-primary transition-colors">hello@revenueos.io</a></li>
              <li className="opacity-60">San Francisco, HQ</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-on-surface-variant">
          <p>© 2024 Revenue OS Inc. All rights reserved. Built for professional closers.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
