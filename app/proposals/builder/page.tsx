import { Header } from "@/components/header";
import { BarChart, CreditCard, ShieldCheck, LineChart as ChartLine, Save, CheckCircle2, MessageSquare, Palette, Network, Users } from "lucide-react";

export default function BuilderPage() {
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
                {/* Summary Section */}
                <section>
                  <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                    <ChartLine className="w-6 h-6" />
                    Executive Summary
                  </h3>
                  <p className="text-lg leading-relaxed text-on-surface-variant">
                    Global Horizon Tech is positioned for a transformative fiscal year. Based on our preliminary discovery sessions, your infrastructure requires a decentralized revenue engine capable of scaling horizontally across four key global territories. This proposal outlines the deployment of <span className="text-primary font-bold">Revenue OS Enterprise</span> to centralize your growth mechanics.
                  </p>
                </section>

                {/* Revenue Projection Card */}
                <section className="glass-surface bg-primary/5 border border-primary/20 rounded-2xl p-8 relative overflow-hidden">
                  <div className="relative z-10 grid grid-cols-3 gap-8">
                    <div>
                      <p className="text-[10px] font-bold text-primary uppercase mb-2 tracking-widest">Projected Growth</p>
                      <p className="text-4xl font-extrabold text-primary">+28.4%</p>
                      <p className="text-sm text-outline-variant mt-1">Annual Recurring Revenue</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-primary uppercase mb-2 tracking-widest">Efficiency Gain</p>
                      <p className="text-4xl font-extrabold text-primary">140hr</p>
                      <p className="text-sm text-outline-variant mt-1">Saved per Account Lead</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-primary uppercase mb-2 tracking-widest">Net Benefit</p>
                      <p className="text-4xl font-extrabold text-primary">$4.2M</p>
                      <p className="text-sm text-outline-variant mt-1">Operational Cost Saving</p>
                    </div>
                  </div>
                </section>

                {/* Interactive Table Mockup */}
                <section>
                  <h3 className="text-2xl font-bold text-on-surface mb-6">Tiered Deployment Model</h3>
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                    <table className="w-full text-left">
                      <thead className="bg-white/10 text-outline uppercase text-[10px] tracking-widest font-bold">
                        <tr>
                          <th className="px-6 py-4">Component</th>
                          <th className="px-6 py-4">Capability</th>
                          <th className="px-6 py-4 text-right">Investment</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-sm">
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4 font-bold text-on-surface">Core Engine</td>
                          <td className="px-6 py-4 text-outline-variant">Full API access & CRM Sync</td>
                          <td className="px-6 py-4 text-right font-bold text-lg">$85,000</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4 font-bold text-on-surface">Global Scaling</td>
                          <td className="px-6 py-4 text-outline-variant">Multi-currency & Regional Tax</td>
                          <td className="px-6 py-4 text-right font-bold text-lg">$42,000</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4 font-bold text-on-surface">Priority Support</td>
                          <td className="px-6 py-4 text-outline-variant">24/7 Dedicated Account Rep</td>
                          <td className="px-6 py-4 text-right font-bold text-lg">$12,500</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Call to Action */}
                <footer className="pt-12 mt-12 border-t border-white/5 text-center">
                  <p className="text-sm text-outline-variant mb-8 italic">
                    This proposal is valid for 30 business days. Digitally signed via Revenue OS Secure Vault.
                  </p>
                  <div className="flex justify-center gap-4">
                    <button className="px-8 py-3 glass-surface text-on-surface font-bold rounded-xl hover:bg-white/10 transition-all active:scale-95 text-sm">
                      Save as PDF
                    </button>
                    <button className="px-10 py-3 bg-primary text-primary-foreground font-extrabold rounded-xl hover:opacity-90 active:scale-95 transition-all revenue-pulse shadow-xl shadow-primary/20 text-sm">
                      Close Deal & Execute
                    </button>
                  </div>
                </footer>
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
