"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Video,
  FileText,
  BarChart,
  Network,
  Settings,
  Plus,
  HelpCircle,
  TrendingUp,
  Search,
  Bell,
  History,
  Menu,
  X
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background text-on-background font-sans selection:bg-primary/30 overflow-hidden flex relative print:bg-white print:text-black print:overflow-visible print:block">
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden print:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`h-screen w-64 fixed left-0 top-0 border-r border-white/10 bg-surface-container-low/95 backdrop-blur-xl z-50 flex flex-col p-4 gap-2 transition-transform duration-300 print:hidden ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="mb-8 px-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shrink-0">
              <TrendingUp className="text-primary-foreground w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary tracking-tight leading-tight">
                Revenue OS
              </h1>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                Growth Engine
              </p>
            </div>
          </div>
          <button 
            className="lg:hidden text-on-surface-variant hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 flex flex-col gap-1 overflow-y-auto custom-scrollbar">
          <Link
            href="/dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors active:scale-95 duration-150 ${
              pathname === "/dashboard" 
                ? "text-primary font-bold bg-primary/10" 
                : "text-on-surface-variant hover:bg-white/5 hover:text-primary font-semibold"
            }`}
          >
            <LayoutDashboard className="w-5 h-5 shrink-0" />
            <span className="text-sm tracking-wide">Dashboard</span>
          </Link>
          <Link
            href="/dashboard/meetings"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors active:scale-95 duration-150 ${
              pathname === "/dashboard/meetings" 
                ? "text-primary font-bold bg-primary/10" 
                : "text-on-surface-variant hover:bg-white/5 hover:text-primary font-semibold"
            }`}
          >
            <Video className="w-5 h-5 shrink-0" />
            <span className="text-sm tracking-wide">Meetings</span>
          </Link>
          <Link
            href="/dashboard/proposals"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors active:scale-95 duration-150 ${
              pathname === "/dashboard/proposals" 
                ? "text-primary font-bold bg-primary/10" 
                : "text-on-surface-variant hover:bg-white/5 hover:text-primary font-semibold"
            }`}
          >
            <FileText className="w-5 h-5 shrink-0" />
            <span className="text-sm tracking-wide">Proposals</span>
          </Link>
          <Link
            href="/dashboard/analytics"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors active:scale-95 duration-150 ${
              pathname === "/dashboard/analytics" 
                ? "text-primary font-bold bg-primary/10" 
                : "text-on-surface-variant hover:bg-white/5 hover:text-primary font-semibold"
            }`}
          >
            <BarChart className="w-5 h-5 shrink-0" />
            <span className="text-sm tracking-wide">Analytics</span>
          </Link>
          <Link
            href="/dashboard/integrations"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors active:scale-95 duration-150 ${
              pathname === "/dashboard/integrations" 
                ? "text-primary font-bold bg-primary/10" 
                : "text-on-surface-variant hover:bg-white/5 hover:text-primary font-semibold"
            }`}
          >
            <Network className="w-5 h-5 shrink-0" />
            <span className="text-sm tracking-wide">Integrations</span>
          </Link>
          <Link
            href="#"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors active:scale-95 duration-150 text-on-surface-variant hover:bg-white/5 hover:text-primary font-semibold`}
          >
            <Settings className="w-5 h-5 shrink-0" />
            <span className="text-sm tracking-wide">Settings</span>
          </Link>
        </nav>

        <div className="mt-auto border-t border-white/5 pt-4">
          <Link href="/dashboard/proposals" onClick={() => setMobileMenuOpen(false)} className="w-full bg-primary text-primary-foreground font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all mb-4 shadow-[0_0_15px_rgba(37,211,102,0.2)]">
            <Plus className="w-5 h-5 shrink-0" />
            <span className="text-sm">New Proposal</span>
          </Link>
          <Link
            href="#"
            className="text-on-surface-variant flex items-center gap-3 px-4 py-3 hover:bg-white/5 hover:text-primary transition-colors rounded-lg"
          >
            <HelpCircle className="w-5 h-5 shrink-0" />
            <span className="text-sm font-semibold tracking-wide">Help Center</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="w-full lg:ml-64 min-h-screen flex flex-col relative bg-background overflow-hidden print:bg-white print:ml-0 print:overflow-visible">
        {/* Top App Bar */}
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-white/5 flex justify-between items-center px-4 md:px-8 py-3 h-16 shrink-0 print:hidden">
          <div className="flex items-center gap-4 md:gap-8">
            <button 
              className="lg:hidden text-on-surface hover:text-primary"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="text-lg md:text-xl text-on-surface font-bold tracking-tight hidden sm:block">
              Growth Engine
            </h2>
            <nav className="hidden lg:flex items-center gap-6">
              <Link
                href="#"
                className="text-primary border-b-2 border-primary pb-2 text-sm font-bold"
              >
                Direct Reports
              </Link>
              <Link
                href="#"
                className="text-on-surface-variant hover:text-on-surface transition-colors text-sm font-semibold"
              >
                Pipeline
              </Link>
              <Link
                href="#"
                className="text-on-surface-variant hover:text-on-surface transition-colors text-sm font-semibold"
              >
                Targets
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <div className="relative group hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                className="w-full sm:w-48 lg:w-64 bg-surface-container/50 border border-white/5 rounded-full pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 placeholder:text-on-surface-variant/50 transition-all focus:w-64 lg:focus:w-80"
                placeholder="Search accounts..."
              />
            </div>
            
            <div className="flex items-center gap-2 md:gap-4 text-on-surface-variant">
              <button className="hover:text-primary transition-colors relative p-1">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full border border-background"></span>
              </button>
              <button className="hover:text-primary transition-colors p-1 hidden sm:block">
                <History className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-3 pl-2 md:pl-4 border-l border-white/10">
              <div className="text-right hidden sm:block">
                <p className="text-sm text-on-surface font-bold leading-none">
                  User
                </p>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-wider mt-1">
                  Guest
                </p>
              </div>
              <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border border-primary/30 overflow-hidden shrink-0 flex items-center justify-center bg-surface-container-highest">
                <span className="text-sm font-bold text-on-surface-variant">U</span>
              </div>
            </div>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}
