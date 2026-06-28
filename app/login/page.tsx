"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Eye, EyeOff, Activity, Rocket } from "lucide-react";
import PipelineAnimation from "@/components/PipelineAnimation";
import { motion } from "motion/react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen w-full bg-surface-container-lowest text-on-surface overflow-hidden font-sans">
      {/* Left Side: Immersive Brand Experience (60%) */}
      <section className="hidden lg:flex lg:w-3/5 relative overflow-hidden bg-background">
        {/* Three.js Animation Overlay */}
        <div className="absolute inset-0 w-full h-full opacity-60">
          <PipelineAnimation />
        </div>
        
        {/* Ambient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent"></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-center px-16 w-full">
          {/* Brand Anchor */}
          <div className="absolute top-12 left-16 flex items-center gap-2">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Rocket className="w-5 h-5 text-primary" />
            </div>
            <span className="text-2xl font-bold text-primary tracking-tight">Revenue OS</span>
          </div>
          
          {/* Vertical Flow Indicator */}
          <motion.div 
            animate={{ y: [-15, 15, -15] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="space-y-2"
          >
            <div className="relative pl-8">
              <div className="absolute left-0 top-1/2 w-2 h-2 bg-primary rounded-full -translate-y-1/2 shadow-[0_0_15px_rgba(37,211,102,0.6)]"></div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary/60">Stage 01</p>
              <h3 className="text-3xl font-semibold text-on-surface">Meeting</h3>
            </div>
            
            <div className="w-[2px] h-10 bg-gradient-to-b from-primary to-transparent ml-[3px]"></div>
            
            <div className="relative pl-8">
              <div className="absolute left-0 top-1/2 w-2 h-2 bg-primary rounded-full -translate-y-1/2 shadow-[0_0_15px_rgba(37,211,102,0.6)]"></div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary/60">Stage 02</p>
              <h3 className="text-3xl font-semibold text-on-surface">Summary</h3>
            </div>
            
            <div className="w-[2px] h-10 bg-gradient-to-b from-primary to-transparent ml-[3px]"></div>
            
            <div className="relative pl-8">
              <div className="absolute left-0 top-1/2 w-2 h-2 bg-primary rounded-full -translate-y-1/2 shadow-[0_0_15px_rgba(37,211,102,0.6)]"></div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary/60">Stage 03</p>
              <h3 className="text-3xl font-semibold text-on-surface">Proposal</h3>
            </div>
            
            <div className="w-[2px] h-10 bg-gradient-to-b from-primary to-transparent ml-[3px]"></div>
            
            <div className="relative pl-8">
              <div className="absolute left-0 top-1/2 w-2 h-2 bg-primary rounded-full -translate-y-1/2 shadow-[0_0_15px_rgba(37,211,102,0.6)]"></div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary/80">Stage 04</p>
              <h3 className="text-4xl font-bold text-primary tracking-tight">Closed Deal</h3>
            </div>
          </motion.div>
          
          {/* Bottom Meta */}
          <div className="absolute bottom-12 left-16 flex items-center gap-8 opacity-40">
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-widest uppercase">SYSTEM STATUS</span>
              <span className="text-sm">Operational (99.9%)</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-widest uppercase">LAST SYNC</span>
              <span className="text-sm">02m 45s ago</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Right Side: Authentication Form (40%) */}
      <main className="w-full lg:w-2/5 h-full bg-surface-container-lowest flex items-center justify-center p-8 lg:p-16 border-l border-white/5 relative z-20">
        <div className="w-full max-w-md space-y-10">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <Link href="/" className="lg:hidden inline-flex items-center gap-2 mb-6">
              <Activity className="w-5 h-5 text-primary" />
              <span className="text-xl font-bold text-primary tracking-tight">Revenue OS</span>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight">Welcome Back</h1>
            <p className="text-lg text-on-surface-variant">Continue your revenue journey.</p>
          </motion.div>
          
          {/* Form Section */}
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6" 
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2 group">
              <label className="text-xs font-bold tracking-wider uppercase text-on-surface-variant group-focus-within:text-primary transition-colors block ml-1" htmlFor="email">
                Email Address
              </label>
              <input 
                className="w-full h-14 px-4 rounded-xl bg-background/60 backdrop-blur-md border border-white/10 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" 
                id="email" 
                placeholder="name@revenueos.ai" 
                type="email" 
              />
            </div>
            
            <div className="space-y-2 group">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold tracking-wider uppercase text-on-surface-variant group-focus-within:text-primary transition-colors block" htmlFor="password">
                  Password
                </label>
                <Link className="text-xs font-bold tracking-wider text-primary hover:underline transition-all" href="#">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <input 
                  className="w-full h-14 px-4 rounded-xl bg-background/60 backdrop-blur-md border border-white/10 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" 
                  id="password" 
                  placeholder="••••••••" 
                  type={showPassword ? "text" : "password"} 
                />
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors" 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            
            <div className="pt-4">
              <button 
                className="w-full h-14 bg-primary text-primary-foreground font-bold text-lg rounded-xl hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(37,211,102,0.2)]" 
                type="submit"
              >
                Login to Engine
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.form>
          
          {/* Footer Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-8 flex flex-col items-center gap-6"
          >
            <p className="text-sm text-on-surface-variant">
              Don't have an account?{" "}
              <Link className="text-primary font-bold hover:underline" href="/signup">
                Sign up
              </Link>
            </p>
          </motion.div>
        </div>
        
        {/* Subtle Decorative Element */}
        <div className="absolute bottom-8 right-8 pointer-events-none opacity-5">
          <span className="font-bold text-6xl tracking-tighter select-none">REV_OS</span>
        </div>
      </main>
    </div>
  );
}
