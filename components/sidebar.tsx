"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Video, 
  FileText, 
  LineChart, 
  Settings, 
  Plus, 
  HelpCircle 
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Pipeline", href: "/pipeline", icon: LineChart },
  { name: "Proposals", href: "/proposals/builder", icon: FileText },
  { name: "Meetings", href: "/meetings", icon: Video },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 border-r border-white/10 bg-surface-container-low/80 backdrop-blur-xl flex flex-col p-4 gap-2 z-50">
      <div className="mb-8 px-4">
        <div className="text-2xl font-bold text-primary tracking-tight">Revenue OS</div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-outline opacity-70">Growth Engine</p>
      </div>

      <nav className="flex-1 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-150 ease-in-out active:scale-95 text-sm font-semibold relative",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-on-surface-variant hover:bg-white/5 hover:text-primary"
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 bg-primary rounded-r-md" />
              )}
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-white/5 pt-4 flex flex-col gap-2">
        <Link 
          href="/proposals/new"
          className="w-full bg-primary text-primary-foreground font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span className="text-sm">New Proposal</span>
        </Link>
        <button className="text-on-surface-variant flex items-center gap-3 px-4 py-3 hover:bg-white/5 hover:text-primary transition-colors text-sm font-semibold rounded-lg w-full text-left">
          <HelpCircle className="w-5 h-5" />
          <span>Help Center</span>
        </button>
      </div>
    </aside>
  );
}

