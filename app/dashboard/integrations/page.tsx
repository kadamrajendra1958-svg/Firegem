"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function IntegrationsPage() {
  return (
    <div className="flex-1 overflow-y-auto px-4 md:px-8 pt-6 md:pt-8 pb-12 relative bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <section className="mb-8 md:mb-12 relative overflow-hidden p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.04] backdrop-blur-xl">
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-on-surface mb-2 tracking-tight">Integrations</h1>
            <p className="text-base md:text-lg text-on-surface-variant max-w-2xl font-medium">
              Connect your communication stacks to automate intelligence gathering. Revenue OS seamlessly syncs with your tools to pull real-time sentiment and opportunity signals.
            </p>
          </div>
        </section>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Google Meet Card (Connected) */}
          <div className="border border-white/5 border-t-white/10 bg-white/[0.04] hover:bg-white/[0.06] hover:shadow-[0_0_20px_rgba(37,211,102,0.05)] backdrop-blur-xl p-6 rounded-xl flex flex-col h-full group transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-lg border border-white/10 group-hover:border-primary/30 transition-colors">
                <img 
                  className="w-8 h-8" 
                  alt="Google Meet" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7MZ13JdGBUXcQfIGxVglWHB3Nvwh9RIZ3TMkgw_VovwdvODCqEd29M7CHPIPjUJLMc0Tr_lMwcp-ieSr-jo9Nmu-BWiuAu3pwLkSvHED9ap99rIAl-29ccq03ZZeT_TEB0OkowEQ16g5RUhUZqjCpb26ttKl3iOwhiMJAPM1LjY-vSPc9guw7WRNf36rNI1jMj9Ah_arhWNdXDkaxMkj67BwkOFOrVz3fQUIPlx5hTTVAZ8mAdk9G9kyB1Ln4pPfpzIcJgLHt0gU" 
                />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </div>
                <span className="text-xs font-bold text-primary tracking-wide uppercase">Connected</span>
              </div>
            </div>
            
            <div className="mb-auto">
              <h3 className="text-xl font-bold text-on-surface mb-2">Google Meet</h3>
              <p className="text-sm text-on-surface-variant font-medium leading-relaxed">
                Automatically sync and analyze your team's video meetings. Capture transcripts, action items, and sentiment directly in your command center.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-background bg-surface-container-highest overflow-hidden flex items-center justify-center">
                  <span className="text-xs font-bold text-on-surface-variant">U1</span>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-background bg-surface-container-highest overflow-hidden flex items-center justify-center">
                  <span className="text-xs font-bold text-on-surface-variant">U2</span>
                </div>
              </div>
              <button className="px-4 py-2 bg-white/5 border border-white/10 text-on-surface rounded-lg hover:bg-white/10 transition-colors text-sm font-bold">
                Configure
              </button>
            </div>
          </div>

          {/* Zoom Card (Disconnected) */}
          <div className="border border-white/5 border-t-white/10 bg-white/[0.04] hover:bg-white/[0.06] backdrop-blur-xl p-6 rounded-xl flex flex-col h-full group transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-lg border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-300">
                <img 
                  className="w-8 h-8" 
                  alt="Zoom" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC508FS6Bf7UQ769IxeOPruX_8Y6gp5MoGqw1YaRWW35wjvYcUGPME0rRW2kcsuq3oL_IFLp6EkWhDgCX5kF0uUbAahAU_cwGk_-SaRtcNVomHoVqkHrytliKDk2ok_o38WUBF8RtZs3BmdwR-xJHNib3qbBhrs9ujGeLVKz7O4W67F3gtdPWBdOBtOOvybEOQ-rVC3r7AJ7VxyFoRbr8NpyIyj24ECZr-d5HKIot2yqUx1ms_VjrMVOCxw6LcA3C53IbFlUcMWxDs" 
                />
              </div>
              <div className="px-3 py-1 bg-surface-container-highest border border-white/5 rounded-full">
                <span className="text-xs font-bold text-on-surface-variant tracking-wide uppercase">Disconnected</span>
              </div>
            </div>
            
            <div className="mb-auto">
              <h3 className="text-xl font-bold text-on-surface mb-2">Zoom</h3>
              <p className="text-sm text-on-surface-variant font-medium leading-relaxed">
                Bridge the gap between your external sales calls and internal intelligence. Connect Zoom to start gathering cross-functional revenue insights.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5">
              <button className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:brightness-110 active:scale-95 transition-all text-sm shadow-[0_0_15px_rgba(37,211,102,0.2)]">
                Connect Zoom
              </button>
            </div>
          </div>

          {/* Slack Card (Utility) */}
          <div className="border border-white/5 border-t-white/10 bg-white/[0.04] hover:bg-white/[0.06] backdrop-blur-xl p-6 rounded-xl flex flex-col h-full group opacity-80 hover:opacity-100 transition-opacity duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-lg border border-white/10 grayscale">
                <img 
                  className="w-8 h-8" 
                  alt="Slack" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0U-7X03P-XX91mF3Epc-lnaIrC76Bjc7fWRD7u4yMz3L4SQRQapulKCA-juAKDQZwq69SH-uSVDWHgpUhQJ4oWVdkl8v3asOwSeZ6ybN8lwfXn211_wWp5Wtxi_0GXVT1QDS_1EId2ygWxptwbDWCx2A20UzaZlvct47QaG3c04yqv9xE-aer5Wwv61pK3s2fMxwTel0HBfoomld-EJEUwQw_-K6RMuOy4jRPtkueLgDftbDc-oEtSZMgM9H47ezSkDSzpnsnZh4" 
                />
              </div>
              <div className="px-3 py-1 bg-surface-container-highest border border-white/5 rounded-full">
                <span className="text-xs font-bold text-on-surface-variant tracking-wide uppercase">Available</span>
              </div>
            </div>
            
            <div className="mb-auto">
              <h3 className="text-xl font-bold text-on-surface mb-2">Slack</h3>
              <p className="text-sm text-on-surface-variant font-medium leading-relaxed">
                Stream automated revenue alerts and deal signals directly into your designated Slack channels.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5">
              <button className="w-full py-3 bg-transparent border border-white/20 text-on-surface font-bold rounded-lg hover:bg-white/5 active:scale-95 transition-all text-sm">
                Setup Webhooks
              </button>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <section className="mt-12 md:mt-16 mb-8 md:mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <span className="text-xs font-bold text-on-surface-variant/50 uppercase tracking-widest text-center">Expansion Pack Coming Soon</span>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40">
            <div className="p-4 rounded-lg flex items-center gap-3 border border-dashed border-white/10 bg-white/[0.02]">
              <div className="w-8 h-8 flex items-center justify-center bg-white/5 rounded">
                 <span className="text-on-surface-variant text-sm font-bold">H</span>
              </div>
              <span className="text-sm font-bold text-on-surface-variant">HubSpot</span>
            </div>
            <div className="p-4 rounded-lg flex items-center gap-3 border border-dashed border-white/10 bg-white/[0.02]">
              <div className="w-8 h-8 flex items-center justify-center bg-white/5 rounded">
                 <span className="text-on-surface-variant text-sm font-bold">S</span>
              </div>
              <span className="text-sm font-bold text-on-surface-variant">Salesforce</span>
            </div>
            <div className="p-4 rounded-lg flex items-center gap-3 border border-dashed border-white/10 bg-white/[0.02]">
              <div className="w-8 h-8 flex items-center justify-center bg-white/5 rounded">
                 <span className="text-on-surface-variant text-sm font-bold">O</span>
              </div>
              <span className="text-sm font-bold text-on-surface-variant">Outlook</span>
            </div>
            <div className="p-4 rounded-lg flex items-center gap-3 border border-dashed border-white/10 bg-white/[0.02]">
              <div className="w-8 h-8 flex items-center justify-center bg-white/5 rounded">
                 <span className="text-on-surface-variant text-sm font-bold">API</span>
              </div>
              <span className="text-sm font-bold text-on-surface-variant">Gateway</span>
            </div>
          </div>
        </section>
      </div>

      {/* Background Decoration */}
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none hidden md:block"></div>
      <div className="fixed top-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] -z-10 pointer-events-none hidden md:block"></div>
    </div>
  );
}
