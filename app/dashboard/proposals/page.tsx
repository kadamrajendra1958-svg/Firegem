"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  BrainCircuit, 
  Sparkles,
  FileText,
  Download,
  PenTool
} from "lucide-react";

export default function ProposalGenerationPage() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Step 0 -> 1 after 3s
    const t1 = setTimeout(() => setStep(1), 3000);
    // Step 1 -> 2 after 6s
    const t2 = setTimeout(() => setStep(2), 6000);
    // Step 2 -> 3 after 9s
    const t3 = setTimeout(() => setStep(3), 9000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="flex-1 h-[calc(100vh-64px)] flex flex-col md:flex-row overflow-hidden bg-background">
      {/* Left Column: Processing Rail */}
      <section className="w-full md:w-1/3 lg:w-96 shrink-0 md:h-full relative border-b md:border-b-0 md:border-r border-white/5 bg-background/50 flex flex-col">
        <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-center">
          <div className="space-y-12">
            {/* Step 1: Analyzing Transcript */}
            <div className={`flex items-center gap-6 transition-opacity duration-500 ${step >= 0 ? 'opacity-100' : 'opacity-40'}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center relative border border-white/10 shrink-0 ${step > 0 ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary/60'}`}>
                {step > 0 ? (
                  <>
                    <CheckCircle2 className="w-6 h-6" />
                    <div className="absolute -inset-1 bg-primary/20 blur-lg rounded-full"></div>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded-full"></div>
                    <BrainCircuit className="w-6 h-6 animate-pulse" />
                  </>
                )}
              </div>
              <div>
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Phase 01</p>
                <h3 className="text-xl font-bold text-on-surface">Analyzing Transcript</h3>
                <p className="text-sm text-on-surface-variant mt-1 font-medium">
                  {step > 0 ? "Transcript analyzed successfully." : "Parsing 45m meeting audio for strategic intent..."}
                </p>
              </div>
            </div>

            {/* Step 2: Extracting Requirements */}
            <div className={`flex items-center gap-6 transition-opacity duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-40'}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center relative border border-white/10 shrink-0 ${step > 1 ? 'bg-primary/20 text-primary' : (step === 1 ? 'bg-primary/10 text-primary/60' : 'bg-surface-container-highest text-on-surface-variant')}`}>
                {step > 1 ? (
                  <>
                    <CheckCircle2 className="w-6 h-6" />
                    <div className="absolute -inset-1 bg-primary/20 blur-lg rounded-full"></div>
                  </>
                ) : (
                  <>
                    {step === 1 && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded-full"></div>}
                    <Sparkles className={`w-6 h-6 ${step === 1 ? 'animate-pulse' : ''}`} />
                  </>
                )}
              </div>
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${step >= 1 ? 'text-primary' : 'text-on-surface-variant'}`}>Phase 02</p>
                <h3 className="text-xl font-bold text-on-surface">Extracting Requirements</h3>
                {step === 1 ? (
                  <div className="flex items-center gap-3 mt-2">
                    <div className="h-1.5 w-32 bg-surface-container-highest rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3, ease: "linear" }}
                        className="h-full bg-primary"
                      ></motion.div>
                    </div>
                    <span className="text-[10px] font-bold text-primary">Processing...</span>
                  </div>
                ) : (
                   <p className="text-sm text-on-surface-variant mt-1 font-medium">
                     {step > 1 ? "Key objectives and budget extracted." : "Awaiting transcript analysis..."}
                   </p>
                )}
              </div>
            </div>

            {/* Step 3: Finalizing Proposal */}
            <div className={`flex items-center gap-6 transition-opacity duration-500 ${step >= 2 ? 'opacity-100' : 'opacity-40'}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center relative border border-white/10 shrink-0 ${step > 2 ? 'bg-primary/20 text-primary' : (step === 2 ? 'bg-primary/10 text-primary/60' : 'bg-surface-container-highest text-on-surface-variant')}`}>
                {step > 2 ? (
                  <>
                    <CheckCircle2 className="w-6 h-6" />
                    <div className="absolute -inset-1 bg-primary/20 blur-lg rounded-full"></div>
                  </>
                ) : (
                  <>
                    {step === 2 && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded-full"></div>}
                    <FileText className={`w-6 h-6 ${step === 2 ? 'animate-pulse' : ''}`} />
                  </>
                )}
              </div>
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${step >= 2 ? 'text-primary' : 'text-on-surface-variant'}`}>Phase 03</p>
                <h3 className="text-xl font-bold text-on-surface">Finalizing Proposal</h3>
                {step === 2 ? (
                  <div className="flex items-center gap-3 mt-2">
                    <div className="h-1.5 w-32 bg-surface-container-highest rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3, ease: "linear" }}
                        className="h-full bg-primary"
                      ></motion.div>
                    </div>
                    <span className="text-[10px] font-bold text-primary">Generating...</span>
                  </div>
                ) : (
                  <p className="text-sm text-on-surface-variant mt-1 font-medium">
                     {step > 2 ? "Proposal generated successfully." : "Optimizing budget allocation & ROI models..."}
                   </p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-auto p-6 bg-surface-container-highest/30 backdrop-blur-md rounded-xl border border-white/5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold text-on-surface-variant tracking-widest uppercase">AI Engine Status</span>
              {step < 3 ? (
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(37,211,102,0.8)]"></div>
              ) : (
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(37,211,102,0.8)]"></div>
              )}
            </div>
            <p className="text-sm text-on-surface-variant italic font-medium leading-relaxed">
              {step === 0 && "\"Analyzing speech patterns and semantic context from recent engagements...\""}
              {step === 1 && "\"Extracting technical requirements and mapping to Revenue OS capabilities...\""}
              {step === 2 && "\"Synthesizing high-value targets based on Global Corp Expansion objectives. Estimating revenue lift...\""}
              {step === 3 && "\"Proposal generated successfully. Ready for review.\""}
            </p>
          </div>
        </div>
      </section>

      {/* Right Column: Document Viewer */}
      <section className="flex-1 bg-surface-container-lowest p-4 md:p-8 overflow-y-auto custom-scrollbar relative">
        <div className="max-w-4xl mx-auto h-full flex flex-col">
          {/* Document Header Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 bg-surface-container-low/50 backdrop-blur-md p-5 rounded-xl border border-white/5 shrink-0">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-on-surface">Global Corp Expansion</h1>
                <p className="text-sm text-on-surface-variant font-medium mt-0.5">Prop_v4_Draft_Final.pdf • {step === 3 ? "Just now" : "Generating..."}</p>
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap gap-3 w-full sm:w-auto">
              <button 
                disabled={step < 3}
                className="flex-1 sm:flex-none justify-center px-4 md:px-5 py-2.5 border border-white/10 hover:bg-white/5 disabled:opacity-50 disabled:hover:bg-transparent rounded-lg text-sm font-bold text-on-surface transition-all flex items-center gap-2 disabled:cursor-not-allowed"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download</span> PDF
              </button>
              <button 
                disabled={step < 3}
                className="flex-1 sm:flex-none justify-center px-4 md:px-5 py-2.5 bg-primary text-primary-foreground disabled:opacity-50 rounded-lg text-sm font-bold shadow-[0_0_15px_rgba(37,211,102,0.2)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 disabled:cursor-not-allowed"
              >
                <PenTool className="w-4 h-4" />
                <span className="hidden sm:inline">Send for Signature</span>
                <span className="sm:hidden">Send</span>
              </button>
            </div>
          </div>

          {/* Document Content */}
          <div className="bg-white text-black p-6 sm:p-12 md:p-16 shadow-2xl rounded-sm min-h-[1000px] relative overflow-hidden flex-1 shrink-0 mx-auto w-full max-w-[850px]">
            <AnimatePresence>
              {step < 3 && (
                <motion.div 
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/80 backdrop-blur-[2px] z-10 flex items-center justify-center"
                >
                   {/* Loading Skeleton inside document viewer */}
                   <div className="w-full max-w-2xl space-y-8 p-12 opacity-40">
                      <div className="h-12 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                      <div className="space-y-4 pt-4">
                         <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                         <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                         <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
                      </div>
                      <div className="space-y-4 pt-12">
                         <div className="h-8 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                         <div className="h-32 bg-gray-200 rounded w-full animate-pulse"></div>
                      </div>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* The Actual Document */}
            <div className={`transition-opacity duration-1000 ${step === 3 ? 'opacity-100' : 'opacity-0'}`}>
              {/* Letterhead/Branding */}
              <div className="flex justify-between items-start mb-20">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
                      <span className="text-white font-bold text-lg">R</span>
                    </div>
                    <span className="font-extrabold tracking-tight text-2xl text-black">REVENUE OS</span>
                  </div>
                  <p className="text-sm text-gray-500 max-w-[200px] leading-relaxed font-medium">
                    101 Revenue Plaza, Suite 400<br/>
                    Silicon Valley, CA 94025
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1 font-bold">PROPOSAL DATE</p>
                  <p className="font-bold text-black text-sm">October 24, 2024</p>
                </div>
              </div>

              {/* Title */}
              <div className="mb-16">
                <h2 className="text-5xl font-extrabold border-l-4 border-black pl-6 mb-6 text-black tracking-tight">Statement of Work</h2>
                <p className="text-gray-600 max-w-2xl leading-relaxed text-lg font-medium">
                  This Strategic Partnership Proposal outlines the expansion roadmap for Global Corp into the EMEA and APAC markets, leveraging Revenue OS proprietary growth frameworks and automated pipeline orchestration.
                </p>
              </div>

              {/* Section: Scope */}
              <div className="mb-16">
                <h3 className="text-xl font-bold text-black uppercase tracking-widest mb-8">01. Strategic Objectives</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-6 bg-gray-50 border-t-4 border-black">
                    <p className="text-xs text-gray-500 mb-2 font-bold tracking-widest uppercase">Market Capture</p>
                    <p className="font-extrabold text-4xl text-black tracking-tight mb-2">15%</p>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">Projected increase in first 12 months</p>
                  </div>
                  <div className="p-6 bg-gray-50 border-t-4 border-black">
                    <p className="text-xs text-gray-500 mb-2 font-bold tracking-widest uppercase">Acquisition Efficiency</p>
                    <p className="font-extrabold text-4xl text-black tracking-tight mb-2">42%</p>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">Reduction in CAC via AI routing</p>
                  </div>
                  <div className="p-6 bg-gray-50 border-t-4 border-black">
                    <p className="text-xs text-gray-500 mb-2 font-bold tracking-widest uppercase">Retention Target</p>
                    <p className="font-extrabold text-4xl text-black tracking-tight mb-2">94%</p>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">Benchmark for new regional hubs</p>
                  </div>
                </div>
              </div>

              {/* Section: Budget */}
              <div className="mb-16">
                <h3 className="text-xl font-bold text-black uppercase tracking-widest mb-8">02. Budget Breakdown</h3>
                <table className="w-full text-left">
                  <thead className="border-b-2 border-black">
                    <tr>
                      <th className="py-4 font-bold text-xs text-gray-500 uppercase tracking-widest">Item Description</th>
                      <th className="py-4 font-bold text-xs text-gray-500 text-right uppercase tracking-widest">Allocation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-6 pr-4">
                        <p className="font-bold text-black text-lg mb-1">Core Platform Implementation</p>
                        <p className="text-sm text-gray-500 font-medium">Full stack deployment across 4 regional nodes</p>
                      </td>
                      <td className="py-6 text-right font-bold text-2xl text-black tracking-tight">$450,000</td>
                    </tr>
                    <tr>
                      <td className="py-6 pr-4">
                        <p className="font-bold text-black text-lg mb-1">AI Pipeline Training & Tuning</p>
                        <p className="text-sm text-gray-500 font-medium">Custom model development for regional market dynamics</p>
                      </td>
                      <td className="py-6 text-right font-bold text-2xl text-black tracking-tight">$325,000</td>
                    </tr>
                    <tr>
                      <td className="py-6 pr-4">
                        <p className="font-bold text-black text-lg mb-1">Operational Support & Maintenance</p>
                        <p className="text-sm text-gray-500 font-medium">24/7 dedicated engineering and revenue concierge</p>
                      </td>
                      <td className="py-6 text-right font-bold text-2xl text-black tracking-tight">$425,000</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="bg-gray-50">
                      <td className="py-8 px-6 font-bold tracking-widest uppercase text-sm">TOTAL INVESTMENT</td>
                      <td className="py-8 px-6 text-right font-black text-3xl text-black tracking-tight">$1,200,000</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Section: Roadmap */}
              <div>
                <h3 className="text-xl font-bold text-black uppercase tracking-widest mb-10">03. Implementation Roadmap</h3>
                <div className="relative pl-10 border-l-2 border-gray-200 space-y-12 pb-8">
                  <div className="relative">
                    <div className="absolute -left-[49px] top-0.5 w-4 h-4 rounded-full bg-black ring-8 ring-white"></div>
                    <p className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-1">Month 1-2</p>
                    <h4 className="font-bold text-xl text-black mb-2">Foundation & Infrastructure</h4>
                    <p className="text-gray-600 font-medium leading-relaxed">Deployment of obsidian core and data connector mesh across all existing systems.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[49px] top-0.5 w-4 h-4 rounded-full bg-gray-300 ring-8 ring-white"></div>
                    <p className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-1">Month 3-5</p>
                    <h4 className="font-bold text-xl text-black mb-2">Expansion Pilot (EMEA)</h4>
                    <p className="text-gray-600 font-medium leading-relaxed">Launching specialized AI agents for London and Berlin hubs with localized revenue logic.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[49px] top-0.5 w-4 h-4 rounded-full bg-gray-300 ring-8 ring-white"></div>
                    <p className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-1">Month 6+</p>
                    <h4 className="font-bold text-xl text-black mb-2">Full Global Orchestration</h4>
                    <p className="text-gray-600 font-medium leading-relaxed">Synchronized pipeline management across all global timezones with real-time analytics.</p>
                  </div>
                </div>
              </div>

              {/* Watermark */}
              <div className="absolute bottom-16 right-16 opacity-5 pointer-events-none">
                <span className="text-8xl font-black rotate-[-35deg] text-black tracking-tighter">CONFIDENTIAL</span>
              </div>
            </div>
          </div>
          
          <div className="h-12 shrink-0"></div>
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}} />
    </div>
  );
}
