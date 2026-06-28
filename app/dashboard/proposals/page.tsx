"use client";

import { motion } from "motion/react";
import { FileText, Sparkles } from "lucide-react";

export default function ProposalGenerationPage() {
  return (
    <div className="flex-1 overflow-y-auto px-4 md:px-8 pt-6 md:pt-8 pb-12 relative bg-background w-full">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight mb-2">Proposals</h2>
            <p className="text-lg text-on-surface-variant max-w-lg font-medium">
              Manage your automated revenue proposals and client agreements.
            </p>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-primary text-primary-foreground font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-[0_10px_20px_rgba(37,211,102,0.15)] whitespace-nowrap"
          >
            <FileText className="w-5 h-5" />
            <span className="text-sm tracking-wide">New Proposal</span>
          </motion.button>
        </div>

        <div className="flex flex-col items-center justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-12 w-full max-w-2xl flex flex-col items-center justify-center text-center border border-white/5 border-dashed min-h-[400px]"
          >
            {/* Animated Proposal Document */}
            <div className="relative w-48 h-64 mb-10 [perspective:1000px]">
           <motion.div
             animate={{ rotateY: [-5, 5, -5], rotateX: [0, 5, 0] }}
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
             className="w-full h-full bg-surface-container-highest border border-white/10 rounded-xl shadow-2xl relative overflow-hidden flex flex-col"
           >
             <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
               <div className="h-3 w-16 bg-white/10 rounded-full"></div>
               <Sparkles className="w-4 h-4 text-primary animate-pulse" />
             </div>
             <div className="p-4 space-y-4 flex-1">
               <div className="space-y-2">
                 <motion.div 
                   animate={{ width: ["0%", "80%"] }} 
                   transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5 }}
                   className="h-2 bg-primary/40 rounded-full" 
                 />
                 <motion.div 
                   animate={{ width: ["0%", "60%"] }} 
                   transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5, delay: 0.2 }}
                   className="h-2 bg-white/10 rounded-full" 
                 />
                 <motion.div 
                   animate={{ width: ["0%", "90%"] }} 
                   transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5, delay: 0.4 }}
                   className="h-2 bg-white/10 rounded-full" 
                 />
               </div>
               
               <div className="pt-4 border-t border-white/5">
                 <motion.div 
                   animate={{ height: ["0%", "100%"] }}
                   transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5 }}
                   className="w-full bg-white/5 rounded-md origin-top"
                   style={{ minHeight: "60px" }}
                 />
               </div>
             </div>
             
             {/* Scanning Line */}
             <motion.div 
               animate={{ top: ['0%', '100%', '0%'] }} 
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="absolute left-0 right-0 h-0.5 bg-primary/50 shadow-[0_0_8px_rgba(37,211,102,0.8)] z-10"
             />
           </motion.div>
        </div>

        <h3 className="text-2xl font-bold text-on-surface mb-3">No Proposals Yet</h3>
        <p className="text-on-surface-variant max-w-md mx-auto mb-8 leading-relaxed">
          Your pipeline is waiting. Generate your first automated proposal by analyzing a client meeting transcript.
        </p>
        <button className="px-6 py-3 bg-primary text-background font-bold rounded-lg hover:brightness-110 transition-all flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Generate New Proposal
        </button>
      </motion.div>
      </div>
      
      {/* Background glow */}
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10 translate-x-1/4 translate-y-1/4"></div>
      </div>
    </div>
  );
}
