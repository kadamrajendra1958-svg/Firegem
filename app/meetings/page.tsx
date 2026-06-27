import { Header } from "@/components/header";
import { Filter, Calendar, Users, MapPin, Edit3, TrendingUp, Presentation, MoreHorizontal } from "lucide-react";

export default function MeetingsPage() {
  return (
    <>
      <Header title="Strategic Portal" />
      <main className="pt-24 px-8 pb-12 relative z-10 flex-1 overflow-y-auto custom-scrollbar flex">
        <div className="flex-1 grid grid-cols-12 gap-6 h-full">
          {/* Left Column: Meetings List */}
          <section className="col-span-12 lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-on-surface">Meetings</h2>
                <p className="text-on-surface-variant text-sm mt-1">Manage high-stakes calls and investor sessions.</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-surface-container-highest px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 hover:bg-surface-bright transition-colors">
                  <Calendar className="w-4 h-4" />
                  This Week
                </button>
                <button className="bg-surface-container-highest px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 hover:bg-surface-bright transition-colors">
                  <Filter className="w-4 h-4" />
                  Filters
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {/* Meeting Item: Active */}
              <div className="glass-panel rounded-xl p-6 relative overflow-hidden group cursor-pointer border-l-4 border-l-primary transition-all duration-300 hover:bg-surface-container-high shadow-[0_0_15px_rgba(37,211,102,0.1)]">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase animate-pulse">Live Now</span>
                      <span className="text-on-surface-variant text-xs font-semibold">10:00 AM - 11:30 AM</span>
                    </div>
                    <h3 className="text-xl font-bold text-on-surface">Series B Investor Briefing</h3>
                    <div className="flex items-center gap-4 text-on-surface-variant text-sm mt-2">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>Matrix Partners + Exec Team</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Virtual Room 04</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-wider mb-1">Projected ARR Impact</p>
                    <p className="text-3xl font-extrabold text-primary revenue-glow">$4.2M</p>
                  </div>
                </div>
              </div>

              {/* Meeting Item: Upcoming */}
              <div className="glass-panel rounded-xl p-6 relative overflow-hidden group cursor-pointer transition-all duration-300 hover:bg-surface-container-high">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-on-surface-variant text-xs font-semibold">02:00 PM - 03:00 PM</span>
                    </div>
                    <h3 className="text-xl font-bold text-on-surface">Fortune 500: Enterprise Lock-in</h3>
                    <div className="flex items-center gap-4 text-on-surface-variant text-sm mt-2">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>Sarah Chen (SVP Sales)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Presentation className="w-4 h-4" />
                        <span>3 Attachments</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-wider mb-1">Projected ARR Impact</p>
                    <p className="text-3xl font-extrabold text-on-surface">$1.8M</p>
                  </div>
                </div>
              </div>

              {/* Meeting Item: Upcoming */}
              <div className="glass-panel rounded-xl p-6 relative overflow-hidden group cursor-pointer transition-all duration-300 hover:bg-surface-container-high">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-on-surface-variant text-xs font-semibold">Tomorrow, 09:00 AM</span>
                    </div>
                    <h3 className="text-xl font-bold text-on-surface">Quarterly Board Review</h3>
                    <div className="flex items-center gap-4 text-on-surface-variant text-sm mt-2">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>Global Steering Committee</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-wider mb-1">Retention Impact</p>
                    <p className="text-3xl font-extrabold text-tertiary">98.4%</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Right Column: Details & Analysis */}
          <section className="col-span-12 lg:col-span-5 flex flex-col gap-6">
            {/* NOTES SECTION */}
            <div className="glass-panel rounded-2xl p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Edit3 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Contextual Notes</h3>
                </div>
                <button className="text-on-surface-variant hover:text-on-surface">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4 flex-1">
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <p className="text-[10px] font-bold text-primary tracking-widest mb-2">KEY OBJECTIVE</p>
                  <p className="text-sm text-on-surface leading-relaxed">
                    Secure verbal commitment for the expansion of Q4 pilot into full-scale enterprise rollout across 12 regions.
                  </p>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-start gap-3 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <p className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                      Emphasize the 24% efficiency gain reported in the preliminary pilot data.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <p className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                      Address concerns regarding integration with legacy systems in the APAC region.
                    </p>
                  </div>
                </div>
                <div className="mt-auto pt-6">
                  <textarea 
                    className="w-full bg-surface-container-lowest border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary min-h-[120px] resize-none" 
                    placeholder="Type a new internal insight..."
                  />
                </div>
              </div>
            </div>

            {/* REVENUE IMPACT ANALYSIS */}
            <div className="glass-panel rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-tertiary" />
                </div>
                <h3 className="text-xl font-bold">Impact Forecast</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-2">
                    <span className="text-on-surface-variant uppercase tracking-wider">Conversion Probability</span>
                    <span className="text-tertiary">84%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary rounded-full" style={{ width: '84%' }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl">
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">CAC Ratio</p>
                    <p className="text-2xl font-bold text-on-surface">1.2x</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl">
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">LTV Est.</p>
                    <p className="text-2xl font-bold text-on-surface">$12M</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
