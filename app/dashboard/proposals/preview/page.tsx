"use client";

import { useState } from "react";
import { 
  Rocket, 
  TrendingUp, 
  Settings, 
  Wallet,
  FileText,
  Mail,
  Edit,
  Info,
  ChevronLeft
} from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function ProposalPreviewPage() {
  const [showSignatures, setShowSignatures] = useState(true);
  const [hideInternalNotes, setHideInternalNotes] = useState(false);

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden bg-background relative print:bg-white print:text-black print:overflow-visible">
      {/* Page Background Shader */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 print:hidden"></div>

      {/* Top action bar - Hidden on print */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-white/5 flex justify-between items-center px-4 md:px-8 py-4 print:hidden">
        <Link 
          href="/dashboard/proposals" 
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Generator
        </Link>
      </div>

      {/* Document Wrapper */}
      <div className="relative z-10 py-8 md:py-12 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Document Canvas */}
        <div className="flex-1 glass-card p-8 md:p-12 lg:p-16 rounded-xl shadow-2xl relative overflow-hidden mb-12 w-full lg:w-auto print:p-0 print:shadow-none print:border-none print:bg-transparent">
          
          {/* Branding Edge Accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent print:hidden"></div>
          
          {/* Document Header */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8 md:gap-0">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center print:bg-black">
                  <Rocket className="w-4 h-4 text-on-primary font-bold print:text-white" />
                </div>
                <span className="text-xl text-primary font-extrabold tracking-tighter print:text-black">REVENUE OS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4 text-on-surface print:text-black">Global Corp Expansion</h2>
              
              <div className="flex flex-wrap gap-6 mt-6">
                <div className="border-l border-white/10 pl-4 print:border-black/20">
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 font-bold print:text-gray-500">Proposal Date</p>
                  <p className="text-sm font-medium print:text-black">October 24, 2024</p>
                </div>
                <div className="border-l border-white/10 pl-4 print:border-black/20">
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 font-bold print:text-gray-500">Prepared for</p>
                  <p className="text-sm font-medium text-secondary print:text-black">Executive Team</p>
                </div>
                <div className="border-l border-white/10 pl-4 print:border-black/20">
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 font-bold print:text-gray-500">Version</p>
                  <p className="text-sm font-medium print:text-black">v4.2 (Verified)</p>
                </div>
              </div>
            </div>
            
            <div className="text-left md:text-right">
              <div className="inline-block px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 print:border-black print:text-black print:bg-transparent">
                Confidential
              </div>
              <p className="text-on-surface-variant text-[11px] print:text-gray-500">Ref: ROS-2024-GLOBAL-089</p>
            </div>
          </div>

          {/* Section 1: Executive Summary */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary font-bold text-lg print:text-black">01</span>
              <h3 className="text-2xl font-bold text-on-surface print:text-black">Executive Summary</h3>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent print:from-black/10"></div>
            </div>
            <div className="max-w-3xl space-y-4 text-on-surface-variant leading-relaxed text-base print:text-black">
              <p>
                This initiative outlines the strategic roadmap for Global Corp&apos;s entrance into emerging secondary markets, leveraging <span className="text-primary font-bold print:text-black">Revenue OS AI Orchestration</span> to bypass traditional operational bottlenecks. By centralizing infrastructure and compliance within our high-performance growth engine, we aim to accelerate time-to-market by 40%.
              </p>
              <p>
                The expansion focuses on high-liquidity zones where digital infrastructure is primed for disruption. Our proprietary forecasting model suggests a stabilization period of 4 months followed by an aggressive scale phase.
              </p>
            </div>
          </section>

          {/* Section 2: Strategic Impact Metrics */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-primary font-bold text-lg print:text-black">02</span>
              <h3 className="text-2xl font-bold text-on-surface print:text-black">Strategic Impact Metrics</h3>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent print:from-black/10"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-container-high/40 border border-white/5 rounded-xl p-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 print:border-black/20 print:bg-transparent">
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <TrendingUp className="w-32 h-32 text-on-surface print:text-black" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-4 print:text-gray-500">Market Penetration</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary tracking-tight print:text-black">15%</span>
                  <span className="text-xs text-primary/60 font-bold print:text-gray-500">+2.4% YoY</span>
                </div>
                <p className="text-[11px] text-on-surface-variant/70 mt-2 print:text-gray-600">Targeted addressable market share within Q3 fiscal year.</p>
              </div>
              
              <div className="bg-surface-container-high/40 border border-white/5 rounded-xl p-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 print:border-black/20 print:bg-transparent">
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Settings className="w-32 h-32 text-on-surface print:text-black" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-4 print:text-gray-500">Efficiency Gain</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary tracking-tight print:text-black">42%</span>
                  <span className="text-xs text-primary/60 font-bold print:text-gray-500">Estimated</span>
                </div>
                <p className="text-[11px] text-on-surface-variant/70 mt-2 print:text-gray-600">Reduction in operational overhead via AI-driven automation.</p>
              </div>
              
              <div className="bg-surface-container-high/40 border border-white/5 rounded-xl p-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 print:border-black/20 print:bg-transparent">
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Wallet className="w-32 h-32 text-on-surface print:text-black" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-4 print:text-gray-500">ROI Forecast</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary tracking-tight print:text-black">210%</span>
                  <span className="text-xs text-primary/60 font-bold print:text-gray-500">36 Month</span>
                </div>
                <p className="text-[11px] text-on-surface-variant/70 mt-2 print:text-gray-600">Projected net return on capital expenditure over 3 years.</p>
              </div>
            </div>
          </section>

          {/* Section 3: Budget Allocation */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary font-bold text-lg print:text-black">03</span>
              <h3 className="text-2xl font-bold text-on-surface print:text-black">Budget Allocation</h3>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent print:from-black/10"></div>
            </div>
            
            <div className="overflow-x-auto rounded-xl border border-white/5 print:border-black/20">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-surface-container-highest/50 print:bg-gray-100">
                    <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest print:text-black">Item Description</th>
                    <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest print:text-black">Priority</th>
                    <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest text-right print:text-black">Allocation (USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 print:divide-black/10">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-on-surface print:text-black">Regional Infrastructure</td>
                    <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold print:border print:border-black print:text-black print:bg-transparent">CRITICAL</span></td>
                    <td className="px-6 py-4 font-bold text-base text-right print:text-black">₹1,250,000</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-on-surface print:text-black">AI Orchestration & ML Layers</td>
                    <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-secondary/10 text-secondary text-[10px] font-bold print:border print:border-black print:text-black print:bg-transparent">HIGH</span></td>
                    <td className="px-6 py-4 font-bold text-base text-right print:text-black">₹840,000</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-on-surface print:text-black">Global Compliance Framework</td>
                    <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-secondary/10 text-secondary text-[10px] font-bold print:border print:border-black print:text-black print:bg-transparent">HIGH</span></td>
                    <td className="px-6 py-4 font-bold text-base text-right print:text-black">₹310,000</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-on-surface print:text-black">Human Capital Alignment</td>
                    <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-white/5 text-on-surface-variant text-[10px] font-bold print:border print:border-black print:text-black print:bg-transparent">MEDIUM</span></td>
                    <td className="px-6 py-4 font-bold text-base text-right print:text-black">₹450,000</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-surface-container-highest/20 print:bg-gray-100 border-t border-white/10 print:border-black/20">
                    <td className="px-6 py-5 font-bold text-on-surface uppercase tracking-widest text-xs print:text-black" colSpan={2}>Total Expansion Budget</td>
                    <td className="px-6 py-5 font-bold text-xl text-primary text-right print:text-black">₹2,850,000</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>

          {/* Section 4: Project Timeline */}
          <section>
            <div className="flex items-center gap-3 mb-10">
              <span className="text-primary font-bold text-lg print:text-black">04</span>
              <h3 className="text-2xl font-bold text-on-surface print:text-black">Project Timeline</h3>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent print:from-black/10"></div>
            </div>
            
            <div className="relative pl-8 border-l border-white/10 space-y-12 print:border-black/20">
              {/* Node 1 */}
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-2 border-primary bg-surface flex items-center justify-center print:border-black print:bg-white">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse print:bg-black"></div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                  <div>
                    <h4 className="text-base text-on-surface font-bold print:text-black">Phase 1: Foundation & Audit</h4>
                    <p className="text-on-surface-variant text-sm mt-1 max-w-lg print:text-gray-700">Complete technical audit of target regional infrastructure and compliance mapping.</p>
                  </div>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded print:bg-transparent print:border print:border-black print:text-black">Months 1-2</span>
                </div>
              </div>
              
              {/* Node 2 */}
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-2 border-white/20 bg-surface print:border-black/50 print:bg-white"></div>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                  <div>
                    <h4 className="text-base text-on-surface font-bold print:text-black">Phase 2: AI Deployment</h4>
                    <p className="text-on-surface-variant text-sm mt-1 max-w-lg print:text-gray-700">Integration of Revenue OS core orchestration layers with localized data pipelines.</p>
                  </div>
                  <span className="text-xs font-bold text-on-surface-variant bg-white/5 px-2 py-1 rounded print:bg-transparent print:border print:border-black print:text-black">Months 3-5</span>
                </div>
              </div>
              
              {/* Node 3 */}
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-2 border-white/20 bg-surface print:border-black/50 print:bg-white"></div>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                  <div>
                    <h4 className="text-base text-on-surface font-bold print:text-black">Phase 3: Scale & Launch</h4>
                    <p className="text-on-surface-variant text-sm mt-1 max-w-lg print:text-gray-700">Full operational rollout across all targeted secondary markets with real-time reporting.</p>
                  </div>
                  <span className="text-xs font-bold text-on-surface-variant bg-white/5 px-2 py-1 rounded print:bg-transparent print:border print:border-black print:text-black">Months 6-12</span>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Signatures (Always visible on print) */}
          <div className={`mt-20 pt-10 border-t border-white/5 print:border-black/20 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 ${showSignatures ? 'block' : 'hidden print:block'}`}>
            <div>
              <div className="h-12 border-b border-white/10 print:border-black/20 mb-4 flex items-end">
                <p className="text-primary font-bold opacity-50 italic print:text-black">e-Signed: A. Sterling</p>
              </div>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold print:text-gray-600">Revenue OS Partner</p>
            </div>
            <div>
              <div className="h-12 border-b border-white/10 print:border-black/20 mb-4"></div>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold print:text-gray-600">Global Corp Executive</p>
            </div>
          </div>
          
        </div>

        {/* Export Options Sidebar (Contextual) */}
        <aside className="w-full lg:w-80 shrink-0 sticky top-24 space-y-6 print:hidden">
          <div className="glass-card p-6 rounded-xl border-l-4 border-l-primary bg-surface-container-highest/20 backdrop-blur-xl">
            <div className="font-bold text-base text-on-surface mb-6">Export Actions</div>
            <div className="space-y-3">
              <button 
                onClick={() => window.print()}
                className="w-full bg-primary text-primary-foreground font-bold text-sm py-4 rounded-lg flex items-center justify-center gap-3 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(37,211,102,0.2)]"
              >
                <FileText className="w-5 h-5" />
                Download PDF
              </button>
              <button className="w-full bg-white/5 border border-white/10 text-on-surface font-bold text-sm py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-white/10 active:scale-95 transition-all">
                <Mail className="w-5 h-5" />
                Email to Client
              </button>
              <button className="w-full bg-white/5 border border-white/10 text-on-surface font-bold text-sm py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-white/10 active:scale-95 transition-all">
                <Edit className="w-5 h-5" />
                Signature Settings
              </button>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl bg-surface-container-highest/20 backdrop-blur-xl">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-6">Preview Options</p>
            <div className="space-y-5">
              <label className="flex items-center justify-between cursor-pointer group">
                <span className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">Show Signatures</span>
                <div className={`w-10 h-5 rounded-full relative transition-colors ${showSignatures ? 'bg-primary/20' : 'bg-white/10'}`}>
                  <input type="checkbox" className="sr-only" checked={showSignatures} onChange={(e) => setShowSignatures(e.target.checked)} />
                  <div className={`absolute top-0.5 w-4 h-4 rounded-full transition-all ${showSignatures ? 'bg-primary right-0.5' : 'bg-on-surface-variant left-0.5'}`}></div>
                </div>
              </label>
              <label className="flex items-center justify-between cursor-pointer group">
                <span className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">Hide Internal Notes</span>
                <div className={`w-10 h-5 rounded-full relative transition-colors ${hideInternalNotes ? 'bg-primary/20' : 'bg-white/10'}`}>
                  <input type="checkbox" className="sr-only" checked={hideInternalNotes} onChange={(e) => setHideInternalNotes(e.target.checked)} />
                  <div className={`absolute top-0.5 w-4 h-4 rounded-full transition-all ${hideInternalNotes ? 'bg-primary right-0.5' : 'bg-on-surface-variant left-0.5'}`}></div>
                </div>
              </label>
            </div>
          </div>
          
          <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
            <div className="flex items-center gap-2 mb-2 text-primary">
              <Info className="w-5 h-5" />
              <p className="font-bold text-sm">Ready for Export</p>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              All compliance fields have been verified against current regional regulations.
            </p>
          </div>
        </aside>

      </div>
    </div>
  );
}
