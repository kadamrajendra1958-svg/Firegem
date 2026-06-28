"use client";

import { Search, Bell, History } from "lucide-react";
import { useState, useEffect } from "react";

export function Header({ title }: { title?: string }) {
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <header className="fixed top-0 right-0 w-full lg:w-[calc(100%-16rem)] z-40 bg-background/40 backdrop-blur-md border-b border-white/5 flex justify-between items-center px-8 py-4 h-16">
      <div className="flex items-center gap-8">
        <h2 className="text-xl text-on-surface font-bold">{title || "Overview"}</h2>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative hidden lg:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-4 h-4" />
          <input
            type="text"
            placeholder="Search accounts..."
            className="bg-surface-container-high border-none rounded-full py-1.5 pl-10 pr-4 text-sm w-64 focus:ring-1 focus:ring-primary text-on-surface outline-none"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <History className="w-5 h-5" />
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border border-background"></span>
          </button>
          <div className="h-8 w-8 rounded-full bg-surface-container-highest border border-primary/20 overflow-hidden cursor-pointer" title={userName}>
            <div className="w-full h-full flex items-center justify-center bg-primary/20 text-primary font-bold text-xs uppercase">
              {userName.substring(0, 2)}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
