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

const INITIAL_TASKS: any[] = [
  { id: 1, text: "Draft Q4 expansion proposal", completed: false, owner: "Alex", deadline: "Tomorrow" },
  { id: 2, text: "Review budget allocation", completed: true, owner: "Sam", deadline: "Oct 15" },
  { id: 3, text: "Schedule follow-up call with design team", completed: false, owner: "Alex", deadline: "Oct 20" }
];

export default function MeetingSummaryPage() {
  const [tasks, setTasks] = useState<any[]>(INITIAL_TASKS);

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
                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(37,211,102,0.8)]"></span>
                <span className="text-xs font-bold text-on-surface-variant">Analyzed</span>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-on-surface-variant font-medium text-left py-4">
              The Nexus Global team is highly aligned on the Q4 expansion strategy. The primary focus is shifting resources toward the APAC region, with a projected 15% increase in budget allocation. Key stakeholders agreed that minimizing friction in onboarding is critical for the launch next month. Overall sentiment was overwhelmingly positive, although timeline constraints remain a notable concern.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/5 pt-8">
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Sentiment</p>
                <p className="text-primary font-bold flex items-center gap-2 text-sm">
                  <Smile className="w-4 h-4" />
                  Positive
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Priority</p>
                <p className="text-error font-bold flex items-center gap-2 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  High
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Stakeholders</p>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-bold text-primary">A</div>
                  <div className="w-8 h-8 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center text-xs font-bold text-secondary">S</div>
                  <div className="w-8 h-8 rounded-full bg-tertiary/20 border-2 border-background flex items-center justify-center text-xs font-bold text-tertiary">M</div>
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
                <p className="text-tertiary font-bold text-sm">94%</p>
              </div>
            </div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Budget Extraction</h3>
            <p className="text-3xl font-bold text-on-surface-variant tracking-tight mb-2">$1.2M</p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                <span className="text-sm font-medium text-on-surface-variant">Approval Status</span>
                <span className="text-primary font-bold text-sm">Approved</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                <span className="text-sm font-medium text-on-surface-variant">Fiscal Window</span>
                <span className="text-on-surface-variant font-bold text-sm">Q4 2023</span>
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
            <div className="py-4 text-left text-on-surface-variant space-y-3">
              <div className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5"></div><p>Scale cloud infrastructure for APAC servers.</p></div>
              <div className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5"></div><p>Implement localized payment gateways (Alipay, WeChat Pay).</p></div>
              <div className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5"></div><p>Ensure GDPR and local compliance.</p></div>
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
            <div className="py-4 text-left text-on-surface-variant space-y-3">
              <div className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-error mt-1.5"></div><p>Current API latency is too high for Asian markets.</p></div>
              <div className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-error mt-1.5"></div><p>Customer support team needs 24/7 coverage.</p></div>
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
            <h3 className="text-xl font-bold text-on-surface mb-6">Delivery Timeline</h3>
            
            <div className="py-4 text-left text-on-surface-variant space-y-4">
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm font-bold text-primary">Nov 15</p>
                <p className="text-sm">Beta launch for APAC region</p>
              </div>
              <div className="border-l-2 border-white/10 pl-4 py-1">
                <p className="text-sm font-bold text-on-surface">Dec 01</p>
                <p className="text-sm">Full public release</p>
              </div>
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
            
            <div className="py-4 text-left text-on-surface-variant space-y-4">
               <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                 <p className="text-sm font-bold text-on-surface mb-1">Competitor Pricing</p>
                 <p className="text-sm">Client noted that a competitor is offering a 20% discount on first-year licensing.</p>
               </div>
               <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                 <p className="text-sm font-bold text-on-surface mb-1">Data Migration</p>
                 <p className="text-sm">Concerns raised about downtime during legacy data transfer.</p>
               </div>
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
              <span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">{tasks.length} Total Tasks</span>
            </div>
            
            <div className="space-y-3">
              {tasks.length > 0 ? tasks.map(task => (
                <div 
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    task.completed 
                      ? 'bg-primary/5 border-primary/20 opacity-60' 
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded flex items-center justify-center border ${
                      task.completed ? 'bg-primary border-primary' : 'border-on-surface-variant'
                    }`}>
                      {task.completed && <Check className="w-3 h-3 text-background" />}
                    </div>
                    <span className={`text-sm font-medium ${task.completed ? 'line-through text-on-surface-variant' : 'text-on-surface'}`}>
                      {task.text}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                    <span>{task.owner}</span>
                    <span className={task.deadline.includes("Tomorrow") ? "text-error" : ""}>{task.deadline}</span>
                  </div>
                </div>
              )) : (
                <div className="py-8 text-center text-on-surface-variant">
                  No action items assigned.
                </div>
              )}
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Background glow */}
      <div className="fixed top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
    </div>
  );
}
