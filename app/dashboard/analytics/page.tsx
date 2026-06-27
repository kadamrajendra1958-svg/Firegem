"use client";

import { motion } from "motion/react";
import { Filter, Sparkles } from "lucide-react";

export default function AnalyticsPage() {
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
            <h2 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight mb-2">Revenue Analytics</h2>
            <p className="text-lg text-on-surface-variant max-w-lg font-medium">
              Real-time revenue intelligence and performance modeling.
            </p>
          </motion.div>
          
          <div className="flex gap-3">
            <motion.button 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-surface-container-highest text-on-surface border border-outline-variant font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-white/10 active:scale-95 transition-all whitespace-nowrap"
            >
              <Filter className="w-5 h-5" />
              <span className="text-sm tracking-wide">Last 30 Days</span>
            </motion.button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-12 w-full max-w-3xl flex flex-col items-center justify-center text-center border border-white/5 border-dashed min-h-[400px]"
          >
            {/* Animated Sales Funnel */}
            <div className="relative w-72 h-72 mb-10 flex flex-col items-center justify-start pt-4 gap-3 [perspective:1000px]">
          {/* Funnel Level 1 */}
          <motion.div 
            animate={{ width: ["80%", "100%", "80%"], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="h-14 bg-primary/10 border border-primary/20 rounded-xl relative overflow-hidden flex items-center justify-center w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-[shimmer_2s_infinite]"></div>
            <div className="h-1.5 w-16 bg-primary/40 rounded-full"></div>
          </motion.div>

          {/* Funnel Level 2 */}
          <motion.div 
            animate={{ width: ["60%", "80%", "60%"], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="h-14 bg-secondary/10 border border-secondary/20 rounded-xl relative overflow-hidden flex items-center justify-center w-[80%]"
          >
            <div className="h-1.5 w-12 bg-secondary/40 rounded-full"></div>
          </motion.div>

          {/* Funnel Level 3 */}
          <motion.div 
            animate={{ width: ["40%", "60%", "40%"], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="h-14 bg-tertiary/10 border border-tertiary/20 rounded-xl relative overflow-hidden flex items-center justify-center w-[60%]"
          >
            <div className="h-1.5 w-8 bg-tertiary/40 rounded-full"></div>
          </motion.div>

          {/* Funnel Level 4 */}
          <motion.div 
            animate={{ width: ["20%", "40%", "20%"], opacity: [0.8, 1, 0.8], scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="h-14 bg-primary border border-primary/50 rounded-xl relative overflow-hidden flex items-center justify-center w-[40%] shadow-[0_0_20px_rgba(255,255,255,0.3)] z-10"
          >
             <Sparkles className="w-5 h-5 text-background" />
          </motion.div>

          {/* Floating Data Particles */}
          <motion.div
            animate={{ y: [0, 140], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{ left: "30%" }}
          />
          <motion.div
            animate={{ y: [0, 160], opacity: [0, 1, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
            className="absolute top-0 w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{ left: "70%" }}
          />
        </div>

        <h3 className="text-2xl font-bold text-on-surface mb-3">Insufficient Data</h3>
        <p className="text-on-surface-variant max-w-md mx-auto mb-8 leading-relaxed">
          Your analytics funnel is currently empty. Connect your CRM or upload meeting transcripts to start generating insights.
        </p>
        <button className="px-6 py-3 bg-primary text-background font-bold rounded-lg hover:brightness-110 transition-all flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Connect Data Source
        </button>
      </motion.div>
      </div>
      
      {/* Background glow */}
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10 translate-x-1/4 translate-y-1/4"></div>
      </div>
    </div>
  );
}
