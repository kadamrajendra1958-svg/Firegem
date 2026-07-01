"use client";

import { Header } from "@/components/header";
import { BarChart, CreditCard, ShieldCheck, LineChart as ChartLine, Save, CheckCircle2, MessageSquare, Palette, Network, Users } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BuilderPage() {
  const router = useRouter();

  return (
    <>
      <Header title="Q4 Expansion Strategy" />
      <main className="pt-16 min-h-screen flex flex-col md:flex-row relative z-10 w-full overflow-hidden">
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

              <article className="space-y-12 text-on-surface-variant text-left mt-8">
                <section>
                  <h3 className="text-2xl font-bold text-on-surface mb-4">1. Executive Summary</h3>
                  <p className="leading-relaxed">
                    Based on our recent discussions, Global Horizon Tech is positioned to significantly expand operations into the APAC region during Q4. To support this, you require a scalable, localized infrastructure that reduces latency and ensures compliance with regional data regulations. Our platform provides the high-availability framework and localized payment integrations necessary to capture this new market seamlessly.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-on-surface mb-4">2. Proposed Solution</h3>
                  <ul className="space-y-3 list-none pl-0">
                    <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p><strong>Cloud Scaling & Localization:</strong> Deployment of multi-zone APAC servers to guarantee sub-50ms latency for end users.</p></li>
                    <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p><strong>Payment Gateway Integration:</strong> Native support for regional methods including Alipay and WeChat Pay.</p></li>
                    <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p><strong>Security & Compliance:</strong> Full GDPR and localized data residency compliance auditing.</p></li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-on-surface mb-4">3. Investment & Pricing</h3>
                  <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-white/5 border-b border-white/10 text-on-surface">
                        <tr>
                          <th className="p-4 font-bold">Item</th>
                          <th className="p-4 font-bold">Description</th>
                          <th className="p-4 font-bold text-right">Cost</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="p-4 font-medium text-on-surface">Enterprise Licensing</td>
                          <td className="p-4">Annual platform license for up to 500 APAC users</td>
                          <td className="p-4 text-right font-medium">$850,000</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-on-surface">Implementation & Setup</td>
                          <td className="p-4">Dedicated engineering squad (12 weeks)</td>
                          <td className="p-4 text-right font-medium">$250,000</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-on-surface">Premium Support</td>
                          <td className="p-4">24/7 dedicated account manager and SLA guarantee</td>
                          <td className="p-4 text-right font-medium">$100,000</td>
                        </tr>
                      </tbody>
                      <tfoot className="bg-primary/10 border-t border-primary/20 text-primary">
                        <tr>
                          <td colSpan={2} className="p-4 font-bold text-right text-base">Total Investment (Year 1)</td>
                          <td className="p-4 font-bold text-right text-base text-on-surface">$1,200,000</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </section>
                
                <section>
                  <h3 className="text-2xl font-bold text-on-surface mb-4">4. Next Steps</h3>
                  <p className="leading-relaxed mb-6">
                    To proceed with the November 15th Beta launch timeline, we require approval by October 15th. Upon signature, our implementation team will immediately commence the onboarding protocol.
                  </p>
                  <button className="bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-[0_10px_20px_rgba(37,211,102,0.15)]" onClick={(e) => { e.preventDefault(); router.push("/dashboard/proposals"); }}>
                    Approve Proposal & Sign
                  </button>
                </section>
              </article>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
