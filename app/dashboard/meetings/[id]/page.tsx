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
  const [tasks, setTasks] = useState([
    { id: 1, title: "Send implementation roadmap document", assignee: "Sarah Chen", due: "Due in 2 days", completed: false },
    { id: 2, title: "Schedule technical deep-dive with Engineering", assignee: "David Miller", due: "Urgent", completed: false },
    { id: 3, title: "Update Salesforce opportunity stage to \"Selection\"", assignee: "Sarah Chen", due: "Complete by EOD", completed: false },
  ]);

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
                <span className="text-xs font-bold text-on-surface-variant">98% Confidence</span>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-on-surface-variant font-medium">
              The client is highly engaged and viewed the demonstration as a "mission-critical" upgrade to their existing tech stack. Significant emphasis was placed on <span className="text-primary font-bold">revenue recapture</span> and automation of manual entry processes. Initial stakeholder buy-in is confirmed from both Finance and Engineering leads.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/5 pt-8">
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Sentiment</p>
                <p className="text-primary font-bold flex items-center gap-2 text-sm">
                  <Smile className="w-5 h-5" /> Highly Positive
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Priority</p>
                <p className="text-white font-bold flex items-center gap-2 text-sm">
                  <AlertCircle className="w-5 h-5 text-tertiary" /> Critical Expansion
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Stakeholders</p>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-highest"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-surface bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">+4</div>
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
                <p className="text-tertiary font-bold text-sm">95%</p>
              </div>
            </div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Budget Extraction</h3>
            <p className="text-3xl font-bold text-primary tracking-tight mb-2">$1.2M Allocated</p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                <span className="text-sm font-medium text-on-surface-variant">Approval Status</span>
                <span className="text-primary font-bold text-sm">Confirmed</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                <span className="text-sm font-medium text-on-surface-variant">Fiscal Window</span>
                <span className="text-white font-bold text-sm">Q4 Priority</span>
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
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold text-sm">API Access</p>
                  <p className="text-xs text-on-surface-variant mt-0.5 font-medium">Full RESTful endpoint documentation</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold text-sm">SSO / SAML 2.0</p>
                  <p className="text-xs text-on-surface-variant mt-0.5 font-medium">Okta integration is a hard requirement</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold text-sm">Salesforce Sync</p>
                  <p className="text-xs text-on-surface-variant mt-0.5 font-medium">Bi-directional object mapping</p>
                </div>
              </li>
            </ul>
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
            <div className="space-y-6">
              <div className="relative pl-5 border-l-2 border-error/40">
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Leakage</p>
                <p className="text-white font-bold text-lg">30% Revenue Leakage</p>
                <p className="text-sm text-on-surface-variant mt-1 font-medium">Manual attribution leads to missed renewals.</p>
              </div>
              <div className="relative pl-5 border-l-2 border-error/40">
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Efficiency</p>
                <p className="text-white font-bold text-lg">Manual Data Entry</p>
                <p className="text-sm text-on-surface-variant mt-1 font-medium">Ops team spends 15hrs/week on Salesforce updates.</p>
              </div>
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
            
            <div className="space-y-8 relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10"></div>
              
              <div className="flex gap-5 relative z-10">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-background shrink-0">1</div>
                <div>
                  <p className="text-white font-bold text-sm">POC Start</p>
                  <p className="text-primary text-xs font-bold mt-1">Nov 15, 2023</p>
                </div>
              </div>
              
              <div className="flex gap-5 relative z-10">
                <div className="w-6 h-6 rounded-full bg-surface-container-highest border border-white/20 flex items-center justify-center text-[10px] font-bold text-white shrink-0">2</div>
                <div>
                  <p className="text-on-surface-variant font-bold text-sm">Review Phase</p>
                  <p className="text-on-surface-variant text-xs font-medium mt-1">Dec 10, 2023</p>
                </div>
              </div>
              
              <div className="flex gap-5 relative z-10">
                <div className="w-6 h-6 rounded-full bg-surface-container-highest border border-white/20 flex items-center justify-center text-[10px] font-bold text-white shrink-0">3</div>
                <div>
                  <p className="text-on-surface-variant font-bold text-sm">Full Rollout</p>
                  <p className="text-on-surface-variant text-xs font-medium mt-1">Jan 01, 2024</p>
                </div>
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
            
            <div className="space-y-4">
              <div className="bg-surface-container-highest p-5 rounded-xl border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-white text-sm">Security Review</span>
                  <span className="bg-error/20 text-error px-2 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider">High Risk</span>
                </div>
                <p className="text-sm text-on-surface-variant font-medium">Procurement requires a SOC2 Type II audit report before sign-off.</p>
              </div>
              
              <div className="bg-surface-container-highest p-5 rounded-xl border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-white text-sm">Competitor X Pricing</span>
                  <span className="bg-[#FFB000]/20 text-[#FFB000] px-2 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider">Moderate</span>
                </div>
                <p className="text-sm text-on-surface-variant font-medium">Mentioned "CloudRevenue" bundle pricing is 15% lower than our list price.</p>
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
              {tasks.map(task => (
                <div 
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`flex items-center gap-4 p-5 rounded-xl transition-colors cursor-pointer group ${
                    task.completed ? 'bg-primary/5 border border-primary/20' : 'hover:bg-white/5 border border-transparent bg-surface-container-highest'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all shrink-0 ${
                    task.completed 
                      ? 'bg-primary border-primary text-background' 
                      : 'border-primary/40 group-hover:border-primary text-transparent'
                  }`}>
                    {task.completed && <Check className="w-4 h-4" />}
                  </div>
                  
                  <div className="flex-1">
                    <p className={`font-bold transition-colors text-sm ${task.completed ? 'text-on-surface-variant line-through' : 'text-white'}`}>
                      {task.title}
                    </p>
                    <p className="text-xs text-on-surface-variant mt-1 font-medium">
                      Assigned to: <span className="text-secondary font-bold">{task.assignee}</span> • {task.due}
                    </p>
                  </div>
                  
                  <ChevronRight className="w-5 h-5 text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Background glow */}
      <div className="fixed top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
    </div>
  );
}
