"use client";

import { motion } from "motion/react";
import { 
  TrendingUp, 
  FileText, 
  CheckCircle2, 
  Maximize2,
  ClipboardList,
  Handshake,
  Mail,
  Clock
} from "lucide-react";
import FunnelShader from "@/components/FunnelShader";

export default function DashboardPage() {
  return (
    <div className="flex-1 overflow-y-auto px-4 md:px-8 pt-6 md:pt-8 pb-12 relative bg-background">
      {/* Header Section */}
      <div className="mb-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-on-surface mb-1 tracking-tight">Executive Overview</h2>
          <p className="text-on-surface-variant text-base font-medium">Real-time revenue performance and pipeline health.</p>
        </motion.div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-12 gap-6 relative z-10">
        {/* Large Metrics Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="col-span-12 md:col-span-4 glass-card rounded-2xl p-6 shadow-[0_0_30px_rgba(37,211,102,0.05)] border-primary/20 hover:-translate-y-1 transition-transform group"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">Meetings Processed</span>
            <span className="text-primary bg-primary/10 px-2 py-0.5 rounded text-[10px] font-bold">+12% WoW</span>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <h3 className="text-4xl font-bold text-primary tracking-tight">0</h3>
          </div>
          <div className="w-full h-12 flex items-end gap-1.5 mt-6">
            {/* Simple visual trend indicator */}
            <div className="flex-1 bg-primary/20 h-4 rounded-sm hover:bg-primary/40 transition-colors"></div>
            <div className="flex-1 bg-primary/20 h-6 rounded-sm hover:bg-primary/40 transition-colors"></div>
            <div className="flex-1 bg-primary/40 h-8 rounded-sm hover:bg-primary/60 transition-colors"></div>
            <div className="flex-1 bg-primary/30 h-5 rounded-sm hover:bg-primary/50 transition-colors"></div>
            <div className="flex-1 bg-primary/60 h-10 rounded-sm hover:bg-primary/80 transition-colors"></div>
            <div className="flex-1 bg-primary/50 h-7 rounded-sm hover:bg-primary/70 transition-colors"></div>
            <div className="flex-1 bg-primary h-12 rounded-sm shadow-[0_0_10px_rgba(37,211,102,0.5)] hover:brightness-110 transition-colors"></div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-12 md:col-span-4 glass-card rounded-2xl p-6 border-white/5 hover:-translate-y-1 transition-transform group"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-on-surface transition-colors">Proposals Generated</span>
            <FileText className="text-primary w-4 h-4" />
          </div>
          <h3 className="text-4xl font-bold text-on-surface mb-6 tracking-tight">0</h3>
          <div className="space-y-3 mt-auto">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-on-surface-variant">Signed (0)</span>
              <span className="text-primary font-bold">0%</span>
            </div>
            <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden flex">
              <motion.div initial={{ width: 0 }} animate={{ width: "0%" }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-primary"></motion.div>
              <motion.div initial={{ width: 0 }} animate={{ width: "0%" }} transition={{ duration: 1, delay: 0.7 }} className="h-full bg-secondary"></motion.div>
              <motion.div initial={{ width: 0 }} animate={{ width: "0%" }} transition={{ duration: 1, delay: 0.9 }} className="h-full bg-outline-variant"></motion.div>
            </div>
            <div className="flex gap-4 text-[10px] uppercase font-bold tracking-tight">
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-primary"></div> Signed</div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-secondary"></div> Sent</div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-outline-variant"></div> Drafting</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="col-span-12 md:col-span-4 glass-card rounded-2xl p-6 border-primary/20 hover:-translate-y-1 transition-transform group"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-on-surface transition-colors">Revenue Opportunities</span>
            <div className="flex items-center gap-1.5 text-primary bg-primary/10 px-2 py-1 rounded">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">0% Confidence</span>
            </div>
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl font-bold text-on-surface-variant">₹</span>
            <h3 className="text-4xl font-bold text-on-surface tracking-tight">0</h3>
          </div>
          <p className="text-sm text-on-surface-variant/80 mt-3 font-medium leading-relaxed">
            Potential ARR across 0 active enterprise deal rooms.
          </p>
          <div className="mt-5 pt-5 border-t border-white/5 flex justify-between">
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1">Avg Deal Size</p>
              <p className="font-bold text-primary text-sm">₹0</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1">Cycle Time</p>
              <p className="font-bold text-primary text-sm">0 Days</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1">Lead Velocity</p>
              <p className="font-bold text-primary text-sm">--</p>
            </div>
          </div>
        </motion.div>

        {/* Central Pipeline Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-12 lg:col-span-8 glass-card rounded-2xl overflow-hidden flex flex-col min-h-[480px] border-white/5"
        >
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-surface-container-highest/20">
            <div>
              <h3 className="text-xl font-bold text-on-surface tracking-tight">Pipeline Conversion Engine</h3>
              <p className="text-sm text-on-surface-variant mt-1 font-medium">Visualizing stage-to-stage deal flow and drop-off rates.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-surface-container-highest text-xs font-bold hover:bg-primary/20 hover:text-primary transition-colors border border-white/5">Q3 FY24</button>
              <button className="p-2 rounded-lg border border-white/10 hover:border-primary text-on-surface-variant hover:text-primary transition-colors">
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex-grow relative flex items-center justify-center p-8 bg-surface-container-lowest/30 overflow-hidden">
            {/* Animated Revenue Funnel Shader */}
            <div className="absolute inset-0 w-full h-full opacity-70">
              <FunnelShader />
            </div>
            
            {/* Data Label Overlay */}
            <div className="relative w-full max-w-2xl h-full flex flex-col justify-between py-8 z-10 pointer-events-none">
              <div className="flex justify-between items-center px-4">
                <div className="glass-card px-5 py-3 rounded-xl border-primary/30 bg-background/60 backdrop-blur-xl pointer-events-auto">
                  <p className="text-[10px] uppercase font-bold text-primary tracking-widest mb-1">Meetings</p>
                  <p className="text-3xl font-bold text-on-surface">0</p>
                </div>
                <div className="text-right text-on-surface-variant bg-background/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5">
                  <p className="text-xs font-bold">Drop-off: 0%</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center px-12">
                <div className="glass-card px-5 py-3 rounded-xl border-secondary/30 bg-background/60 backdrop-blur-xl pointer-events-auto">
                  <p className="text-[10px] uppercase font-bold text-secondary tracking-widest mb-1">Qualified Leads</p>
                  <p className="text-3xl font-bold text-on-surface">0</p>
                </div>
                <div className="text-right text-on-surface-variant bg-background/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5">
                  <p className="text-xs font-bold">Drop-off: 0%</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center px-24">
                <div className="glass-card px-5 py-3 rounded-xl border-accent/30 bg-background/60 backdrop-blur-xl pointer-events-auto">
                  <p className="text-[10px] uppercase font-bold text-accent tracking-widest mb-1">Proposals</p>
                  <p className="text-3xl font-bold text-on-surface">0</p>
                </div>
                <div className="text-right text-on-surface-variant bg-background/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5">
                  <p className="text-xs font-bold">Win Rate: 0%</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="glass-card px-8 py-4 rounded-xl border-primary/50 shadow-[0_0_30px_rgba(37,211,102,0.15)] bg-primary/10 backdrop-blur-xl pointer-events-auto">
                  <p className="text-[11px] uppercase font-bold text-primary tracking-widest text-center mb-1">Won Deals</p>
                  <p className="text-4xl font-bold text-on-surface text-center">0</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Follow-Ups List */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="col-span-12 lg:col-span-4 glass-card rounded-2xl flex flex-col border-white/5"
        >
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-surface-container-highest/20">
            <h3 className="text-xl font-bold text-on-surface tracking-tight">Action Center</h3>
            <span className="bg-surface-container-highest border border-white/10 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">0 Items</span>
          </div>
          <div className="flex-grow overflow-y-auto max-h-[400px] p-3 space-y-3 custom-scrollbar flex items-center justify-center text-on-surface-variant">
            No action items assigned.
          </div>
        </motion.div>

        {/* Growth Forecast Area Chart Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="col-span-12 glass-card rounded-2xl p-8 border-white/5"
        >
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-xl font-bold text-on-surface tracking-tight">Growth Forecast</h3>
              <p className="text-sm text-on-surface-variant mt-1 font-medium">Projected ARR vs. Actual Performance (Trailing 12 Months)</p>
            </div>
            <div className="flex gap-6 items-center">
              <div className="flex items-center gap-2.5">
                <div className="w-3.5 h-3.5 bg-primary rounded shadow-[0_0_8px_rgba(37,211,102,0.5)]"></div>
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Actual ARR</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-3.5 h-3.5 border-2 border-dashed border-secondary rounded"></div>
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Forecast</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-72 w-full flex items-end justify-between px-4 mt-4">
            {/* Horizontal Benchmark Lines */}
            <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none opacity-20">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-full border-t border-white/20"></div>
              ))}
            </div>
            
            {/* Area Chart Visualization (Simulated with SVG to keep it responsive and styled) */}
            <svg className="absolute inset-0 w-full h-full overflow-visible z-10" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#FFFFFF", stopOpacity: 0.1 }}></stop>
                  <stop offset="100%" style={{ stopColor: "#FFFFFF", stopOpacity: 0 }}></stop>
                </linearGradient>
              </defs>
              {/* Forecast Line */}
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                className="w-full" 
                d="M0,280 L1000,280" 
                fill="none" 
                stroke="#71717A" 
                strokeDasharray="8,6" 
                strokeWidth="2" 
                vectorEffect="non-scaling-stroke"
              ></motion.path>
              {/* Actual Path Stroke */}
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                d="M0,280 L1000,280" 
                fill="none" 
                stroke="#FFFFFF" 
                strokeWidth="2" 
                vectorEffect="non-scaling-stroke"
              ></motion.path>
            </svg>
            
            {/* Month Labels */}
            <div className="absolute -bottom-8 w-full flex justify-between px-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
              {['Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'].map(m => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Floating Atmosphere Elements (Handled globally or per page, adding slight localized glow) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
    </div>
  );
}

