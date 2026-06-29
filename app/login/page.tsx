"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff, Activity, Rocket } from "lucide-react";
import PipelineAnimation from "@/components/PipelineAnimation";
import { motion } from "motion/react";
import { auth, googleProvider, db } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const name = email ? email.split('@')[0] : "User";
    
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userName", name);
    router.push("/dashboard");
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      // Store user profile in Firestore
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          createdAt: new Date(),
        });
      }

      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userName", user.displayName || "User");
      router.push("/dashboard");
    } catch (error) {
      console.error("Google sign in error", error);
      alert("Failed to sign in with Google.");
    }
  };

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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6" 
          >
            <div className="pt-4">
              <button 
                onClick={handleGoogleLogin}
                className="w-full h-14 bg-white text-black font-bold text-lg rounded-xl hover:bg-gray-100 active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(0,0,0,0.1)]" 
                type="button"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Sign in with Google
              </button>
            </div>
            
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink-0 mx-4 text-on-surface-variant text-sm uppercase tracking-wider font-bold">Or</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-2 group">
                <label className="text-xs font-bold tracking-wider uppercase text-on-surface-variant group-focus-within:text-primary transition-colors block ml-1" htmlFor="email">
                  Email Address
                </label>
                <input 
                  className="w-full h-14 px-4 rounded-xl bg-background/60 backdrop-blur-md border border-white/10 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" 
                  id="email" 
                  name="email"
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
              
              <div className="pt-2">
                <button 
                  className="w-full h-14 bg-surface-container border border-white/10 text-on-surface font-bold text-lg rounded-xl hover:bg-white/5 active:scale-[0.98] transition-all flex items-center justify-center gap-2" 
                  type="submit"
                >
                  Login with Email
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
          
          {/* Footer Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-8 flex flex-col items-center gap-6"
          >
            <p className="text-sm text-on-surface-variant">
              Don&apos;t have an account?{" "}
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
