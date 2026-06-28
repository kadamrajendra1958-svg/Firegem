"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Activity, Video, FileText, LockOpen, PersonStanding, Mail, Building2, Lock } from "lucide-react";
import PipelineAnimation from "@/components/PipelineAnimation";
import { motion } from "motion/react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const fullName = formData.get("full_name") as string;
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userName", fullName || "User");
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-background text-on-background font-sans selection:bg-primary/30 overflow-x-hidden">
      {/* Left Side: Immersive Visuals (60%) */}
      <section className="relative w-full md:w-[60%] h-[400px] md:h-screen overflow-hidden border-r border-white/5">
        {/* Three.js Animation Placeholder */}
        <div className="absolute inset-0 w-full h-full">
          <PipelineAnimation />
        </div>
        
        {/* Ambient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-12">
          {/* Brand Anchor */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Activity className="text-primary-foreground w-6 h-6" />
            </div>
            <span className="text-2xl text-on-surface font-bold tracking-tight">Revenue OS</span>
          </Link>
          
          {/* Vertical Flow Indicator */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="max-w-md hidden md:block"
          >
            <div className="space-y-8 relative">
              {/* Connecting Line */}
              <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent"></div>
              
              {/* Flow Steps */}
              <div className="flex items-center gap-6 group">
                <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center z-20">
                  <Video className="text-primary w-4 h-4" />
                </div>
                <span className="text-2xl text-on-surface font-bold opacity-90">Meeting</span>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center z-20">
                  <Activity className="text-primary/60 w-4 h-4" />
                </div>
                <span className="text-2xl text-on-surface font-bold opacity-70">Summary</span>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-8 h-8 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center z-20">
                  <FileText className="text-primary/40 w-4 h-4" />
                </div>
                <span className="text-2xl text-on-surface font-bold opacity-50">Proposal</span>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(37,211,102,0.5)]">
                  <LockOpen className="text-primary w-4 h-4" />
                </div>
                <span className="text-2xl text-primary font-bold">Closed Deal</span>
              </div>
            </div>
          </motion.div>
          
          {/* Footer Text */}
          <div className="bg-surface-container-highest/50 backdrop-blur-md border border-white/10 p-6 rounded-xl max-w-sm hidden md:block">
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-2">Executive Summary</p>
            <p className="text-on-surface text-sm leading-relaxed italic">
              "The platform that turns fragmented sales signals into a high-fidelity revenue machine."
            </p>
          </div>
        </div>
      </section>
      
      {/* Right Side: Form (40%) */}
      <section className="bg-surface-container-lowest w-full md:w-[40%] flex flex-col justify-center px-8 md:px-16 py-12 md:py-0 z-20">
        <div className="max-w-md w-full mx-auto space-y-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight">Scale Your Revenue</h1>
            <p className="text-lg text-on-surface-variant">Join the next era of high-stakes closing.</p>
          </motion.div>
          
          {/* Form */}
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6" 
            onSubmit={handleSignup}
          >
            {/* Full Name */}
            <div className="space-y-2 group">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider group-focus-within:text-primary transition-colors block" htmlFor="full_name">
                Full Name
              </label>
              <div className="relative">
                <PersonStanding className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5 group-focus-within:text-primary transition-colors" />
                <input 
                  className="w-full bg-surface-container/50 border-b-2 border-white/10 focus:border-primary text-on-surface font-medium pl-12 pr-4 py-4 transition-all duration-300 outline-none rounded-t-lg" 
                  id="full_name" 
                  name="full_name" 
                  placeholder="Johnathan Sterling" 
                  type="text"
                />
              </div>
            </div>
            
            {/* Work Email */}
            <div className="space-y-2 group">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider group-focus-within:text-primary transition-colors block" htmlFor="work_email">
                Work Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5 group-focus-within:text-primary transition-colors" />
                <input 
                  className="w-full bg-surface-container/50 border-b-2 border-white/10 focus:border-primary text-on-surface font-medium pl-12 pr-4 py-4 transition-all duration-300 outline-none rounded-t-lg" 
                  id="work_email" 
                  name="work_email" 
                  placeholder="executive@company.com" 
                  type="email"
                />
              </div>
            </div>
            
            {/* Company Name */}
            <div className="space-y-2 group">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider group-focus-within:text-primary transition-colors block" htmlFor="company">
                Company Name
              </label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5 group-focus-within:text-primary transition-colors" />
                <input 
                  className="w-full bg-surface-container/50 border-b-2 border-white/10 focus:border-primary text-on-surface font-medium pl-12 pr-4 py-4 transition-all duration-300 outline-none rounded-t-lg" 
                  id="company" 
                  name="company" 
                  placeholder="Sterling Growth Inc." 
                  type="text"
                />
              </div>
            </div>
            
            {/* Password */}
            <div className="space-y-2 group">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider group-focus-within:text-primary transition-colors block" htmlFor="password">
                Security Key
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5 group-focus-within:text-primary transition-colors" />
                <input 
                  className="w-full bg-surface-container/50 border-b-2 border-white/10 focus:border-primary text-on-surface font-medium pl-12 pr-4 py-4 transition-all duration-300 outline-none rounded-t-lg" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••" 
                  type={showPassword ? "text" : "password"} 
                />
              </div>
            </div>
            
            {/* CTA */}
            <div className="pt-4">
              <button 
                className="w-full py-4 bg-primary text-primary-foreground font-bold text-lg rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_8px_20px_-8px_rgba(37,211,102,0.4)] border-b-2 border-black/20" 
                type="submit"
              >
                Start Your Growth
              </button>
            </div>
            
            {/* Additional Info */}
            <div className="flex items-start gap-3">
              <input 
                className="mt-1 w-4 h-4 rounded border-white/20 bg-surface-container text-primary focus:ring-primary/20 focus:ring-offset-background" 
                id="terms" 
                type="checkbox"
              />
              <label className="text-on-surface-variant text-sm leading-tight" htmlFor="terms">
                I agree to the <Link className="text-primary hover:underline" href="#">Terms of Service</Link> and <Link className="text-primary hover:underline" href="#">Revenue Integrity Protocol</Link>.
              </label>
            </div>
          </motion.form>
          
          {/* Footer Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-4"
          >
            <p className="text-on-surface-variant text-sm">
              Already have an account?{" "}
              <Link className="text-primary font-bold hover:underline ml-1" href="/login">
                Login
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
