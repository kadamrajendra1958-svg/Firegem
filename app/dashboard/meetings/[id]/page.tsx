"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  Smile, 
  AlertCircle, 
  Banknote, 
  CheckSquare, 
  AlertOctagon, 
  Calendar as CalendarIcon, 
  ShieldAlert, 
  Check, 
  ChevronRight,
  Zap,
  CheckCircle2
} from "lucide-react";

export default function MeetingSummaryPage() {
  const [tasks, setTasks] = useState<any[]>([]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="flex-1 overflow-y-auto bg-background p-4 md:p-8 relative custom-scrollbar">
      <div className="max-w-[1440px] mx-auto">
        {/* Page Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-8 gap-4"
        >
          <div>
            <div className="flex items-center gap-2 text-primary mb-1">
              <Zap className="w-4 h-4 fill-primary" />
              <span className="text-xs font-bold uppercase tracking-widest">AI Intelligence Layer Active</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Project Obsidian: Q4 Expansion</h2>
            <p className="text-sm text-on-surface-variant mt-1 font-medium">Transcript analyzed from Zoom Meeting</p>
          </div>
        </motion.div>

        {/* Intelligence Grid */}
        <div className="grid grid-cols-12 gap-6 pb-20">
          
          {/* 1. Summary (Double Wide) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-12 md:col-span-8 glass-card rounded-2xl p-8 border border-white/5 hover:border-primary/30 transition-all group bg-surface-container-low/50 backdrop-blur-md"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-on-surface">Executive Overview</h3>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(37,211,102,0.8)]"></span>
                <span className="text-xs font-bold text-on-surface-variant">Waiting</span>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-on-surface-variant font-medium text-center py-8">
              No executive overview generated yet.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/5 pt-8">
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Sentiment</p>
                <p className="text-on-surface-variant font-bold flex items-center gap-2 text-sm">
                  --
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Priority</p>
                <p className="text-on-surface-variant font-bold flex items-center gap-2 text-sm">
                  --
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Stakeholders</p>
                <div className="flex -space-x-2">
                  --
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Budget */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-12 md:col-span-4 glass-card rounded-2xl p-8 border border-white/5 hover:border-tertiary/30 transition-all bg-surface-container-low/50 backdrop-blur-md"
          >
            <div className="flex justify-between items-start mb-6">
              <Banknote className="w-8 h-8 text-tertiary" />
              <div className="text-right">
                <p className="text-xs font-bold text-on-surface-variant">Confidence Score</p>
                <p className="text-tertiary font-bold text-sm">0%</p>
              </div>
            </div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Budget Extraction</h3>
            <p className="text-3xl font-bold text-on-surface-variant tracking-tight mb-2">Pending</p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                <span className="text-sm font-medium text-on-surface-variant">Approval Status</span>
                <span className="text-on-surface-variant font-bold text-sm">--</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                <span className="text-sm font-medium text-on-surface-variant">Fiscal Window</span>
                <span className="text-on-surface-variant font-bold text-sm">--</span>
              </div>
            </div>
          </motion.div>

          {/* 3. Requirements */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-12 md:col-span-4 glass-card rounded-2xl p-8 border border-white/5 hover:border-secondary/30 transition-all bg-surface-container-low/50 backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckSquare className="w-6 h-6 text-secondary" />
              <h3 className="text-xl font-bold text-on-surface">Technical Needs</h3>
            </div>
            <div className="py-8 text-center text-on-surface-variant">
              No technical requirements extracted.
            </div>
          </motion.div>

          {/* 4. Pain Points */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-12 md:col-span-4 glass-card rounded-2xl p-8 border border-white/5 hover:border-error/30 transition-all bg-surface-container-low/50 backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertOctagon className="w-6 h-6 text-error" />
              <h3 className="text-xl font-bold text-on-surface">Identified Pains</h3>
            </div>
            <div className="py-8 text-center text-on-surface-variant">
              No pain points identified.
            </div>
          </motion.div>

          {/* 5. Timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-span-12 md:col-span-4 glass-card rounded-2xl p-8 border border-white/5 overflow-hidden relative group hover:border-primary/30 transition-all bg-surface-container-low/50 backdrop-blur-md"
          >
            <div className="absolute -right-8 -top-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <CalendarIcon className="w-48 h-48 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-8">Delivery Timeline</h3>
            
            <div className="py-8 text-center text-on-surface-variant">
              No timeline generated.
            </div>
          </motion.div>

          {/* 6. Objections */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="col-span-12 md:col-span-5 glass-card rounded-2xl p-8 border border-white/5 hover:border-[#FFB000]/30 transition-all bg-surface-container-low/50 backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-6">
              <ShieldAlert className="w-6 h-6 text-[#FFB000]" />
              <h3 className="text-xl font-bold text-on-surface">Crucial Objections</h3>
            </div>
            
            <div className="py-8 text-center text-on-surface-variant">
              No objections noted.
            </div>
          </motion.div>

          {/* 7. Action Items (Wider) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="col-span-12 md:col-span-7 glass-card rounded-2xl p-8 border border-white/5 hover:border-primary/30 transition-all bg-surface-container-low/50 backdrop-blur-md"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-on-surface">Action Items</h3>
              </div>
              <span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">0 Total Tasks</span>
            </div>
            
            <div className="py-8 text-center text-on-surface-variant">
              No action items assigned.
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Background glow */}
      <div className="fixed top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
    </div>
  );
}
