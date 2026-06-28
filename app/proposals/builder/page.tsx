"use client";

import { Header } from "@/components/header";
import { BarChart, CreditCard, ShieldCheck, LineChart as ChartLine, Save, CheckCircle2, MessageSquare, Palette, Network, Users } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BuilderPage() {
  const router = useRouter();

  const handleAction = () => {
    router.push("/dashboard/proposals");
  };

  return (
    <>
      <Header title="Q4 Expansion Strategy" />
      <main className="pt-16 min-h-screen flex flex-col md:flex-row relative z-10 w-full overflow-hidden">
        {/* Left Panel: Revenue Blocks */}
        <aside className="w-full md:w-80 border-r border-white/5 h-[calc(100vh-64px)] overflow-y-auto hide-scrollbar sticky top-16 p-6 flex flex-col gap-6 bg-background/50">
          <div>
            <h3 className="text-xs font-semibold text-outline uppercase tracking-widest mb-4">Revenue Blocks</h3>
            <div className="space-y-3">
              {/* Block 1 */}
              <div className="group glass-surface p-4 rounded-xl cursor-grab active:cursor-grabbing hover:border-primary/30 transition-all border border-white/5">
                <div className="flex justify-between items-start mb-2">
                  <BarChart className="text-primary w-5 h-5" />
                  <PlusIcon className="w-5 h-5 text-outline opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="font-bold text-sm">Executive Summary</p>
                <p className="text-xs text-outline-variant mt-1">High-level growth projections and strategic alignment.</p>
              </div>

              {/* Block 2 */}
              <div className="group glass-surface p-4 rounded-xl cursor-grab active:cursor-grabbing hover:border-primary/30 transition-all border border-white/5">
                <div className="flex justify-between items-start mb-2">
                  <CreditCard className="text-tertiary w-5 h-5" />
                  <PlusIcon className="w-5 h-5 text-outline opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="font-bold text-sm">Pricing Tier Grid</p>
                <p className="text-xs text-outline-variant mt-1">Interactive SaaS licensing and implementation cost breakdown.</p>
              </div>

              {/* Block 3 */}
              <div className="group glass-surface p-4 rounded-xl cursor-grab active:cursor-grabbing hover:border-primary/30 transition-all border border-white/5">
                <div className="flex justify-between items-start mb-2">
                  <ShieldCheck className="text-secondary w-5 h-5" />
                  <PlusIcon className="w-5 h-5 text-outline opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="font-bold text-sm">SLA & Security</p>
                <p className="text-xs text-outline-variant mt-1">Premium support levels and compliance certification details.</p>
              </div>

              {/* Block 4 */}
              <div className="group glass-surface p-4 rounded-xl cursor-grab active:cursor-grabbing hover:border-primary/30 transition-all border border-white/5">
                <div className="flex justify-between items-start mb-2">
                  <ChartLine className="text-primary-container w-5 h-5" />
                  <PlusIcon className="w-5 h-5 text-outline opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="font-bold text-sm">ROI Calculator</p>
                <p className="text-xs text-outline-variant mt-1">Dynamic data visualization of 3-year value realization.</p>
              </div>
            </div>
          </div>
          <div className="mt-auto">
            <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
              <p className="text-[10px] font-bold text-primary mb-2 tracking-widest uppercase">PRO TIP</p>
              <p className="text-xs text-on-surface-variant">Drag blocks into the canvas to auto-populate with your prospect&apos;s CRM data.</p>
            </div>
          </div>
        </aside>

        {/* Central Canvas: The Document */}
        <section className="flex-1 bg-surface-container-lowest relative overflow-y-auto flex justify-center p-12 custom-scrollbar">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="w-full max-w-4xl relative z-10">
            {/* Proposal Document Canvas */}
            <div className="glass-surface min-h-[1200px] rounded-[32px] p-16 shadow-2xl">
              <header className="mb-20">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                    <CheckCircle2 className="text-primary w-10 h-10" />
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-outline uppercase tracking-widest">Proposal ID</p>
                    <p className="font-bold text-lg">REV-2024-0892</p>
                  </div>
                </div>
                <h2 className="text-5xl font-extrabold mb-4 text-on-surface tracking-tight">Strategic Expansion Proposal</h2>
                <div className="flex items-center gap-4 text-outline-variant">
                  <span className="text-lg">For</span>
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    <div className="w-4 h-4 rounded-full bg-secondary"></div>
                    <span className="font-bold text-on-surface text-sm">Global Horizon Tech</span>
                  </div>
                  <span className="mx-2 opacity-30">|</span>
                  <span className="text-sm">November 2024</span>
                </div>
              </header>

              <article className="space-y-16">
                <div className="flex flex-col items-center justify-center min-h-[400px] border-2 border-dashed border-white/10 rounded-2xl bg-white/5">
                  <p className="text-on-surface-variant font-medium text-lg">No content blocks added yet.</p>
                  <p className="text-on-surface-variant/60 text-sm mt-2">Drag and drop blocks from the left sidebar to build your proposal.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Right Panel: Contextual Actions */}
        <aside className="hidden xl:flex w-16 border-l border-white/5 h-[calc(100vh-64px)] sticky top-16 flex-col items-center py-6 gap-6 bg-background/50">
          <ActionBtn icon={MessageSquare} />
          <ActionBtn icon={Palette} />
          <ActionBtn icon={Network} />
          <div className="w-6 h-[1px] bg-white/10 my-2"></div>
          <ActionBtn icon={Users} />
        </aside>
      </main>
    </>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/>
    </svg>
  );
}

function ActionBtn({ icon: Icon }: { icon: any }) {
  return (
    <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 text-on-surface-variant hover:text-primary transition-all active:scale-90">
      <Icon className="w-5 h-5" />
    </button>
  );
}
