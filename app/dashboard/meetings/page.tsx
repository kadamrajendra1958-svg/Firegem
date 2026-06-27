"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { 
  CloudUpload, 
  Search, 
  Filter, 
  Calendar, 
  PlayCircle, 
  MoreVertical 
} from "lucide-react";

const MEETINGS = [
  {
    id: 1,
    client: "Global Corp Expansion",
    lead: "Marcus Sterling",
    budget: "$1.2M",
    status: "Analyzing",
    statusColor: "bg-secondary",
    date: "Oct 12, 2023",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=200&auto=format&fit=crop",
    pulse: true,
  },
  {
    id: 2,
    client: "Nexus Global Series B",
    lead: "Sarah Jenkins",
    budget: "$850k",
    status: "Drafting Proposal",
    statusColor: "bg-primary",
    date: "Oct 11, 2023",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    client: "Vertex Systems Renewal",
    lead: "Elena Rodriguez",
    budget: "$2.4M",
    status: "Follow-up Required",
    statusColor: "bg-error",
    statusContainer: "bg-error/10 border-error/20 text-error",
    date: "Oct 10, 2023",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 4,
    client: "Quantum Leap Integration",
    lead: "David Chen",
    budget: "$420k",
    status: "Analyzing",
    statusColor: "bg-secondary",
    date: "Oct 09, 2023",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
  }
];

export default function MeetingsPage() {
  return (
    <div className="flex-1 overflow-y-auto px-4 md:px-8 pt-6 md:pt-8 pb-12 relative bg-background w-full">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight mb-2">Revenue Meetings</h2>
            <p className="text-lg text-on-surface-variant max-w-lg font-medium">
              Manage your executive engagements and automated revenue intelligence from recent client calls.
            </p>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-primary text-primary-foreground font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-[0_10px_20px_rgba(37,211,102,0.15)] whitespace-nowrap"
          >
            <CloudUpload className="w-5 h-5" />
            <span className="text-sm tracking-wide">Upload Recording</span>
          </motion.button>
        </div>

        {/* Filters & Search */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="flex-1 glass-card rounded-xl p-1 flex items-center border border-white/5 focus-within:border-primary/30 focus-within:ring-1 focus-within:ring-primary/20 transition-all">
            <Search className="w-5 h-5 ml-3 text-on-surface-variant shrink-0" />
            <input 
              className="w-full bg-transparent border-none text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-0 py-3 px-3 text-sm font-medium" 
              placeholder="Filter by client, revenue, or team lead..." 
              type="text"
            />
          </div>
          <div className="flex gap-3">
            <button className="glass-card px-5 py-3 rounded-xl flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors border border-white/5 hover:border-primary/20">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-bold tracking-wide">Status</span>
            </button>
            <button className="glass-card px-5 py-3 rounded-xl flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors border border-white/5 hover:border-primary/20">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-bold tracking-wide">Date Range</span>
            </button>
          </div>
        </motion.div>

        {/* Meeting List Grid */}
        <div className="flex flex-col gap-4">
          {MEETINGS.map((meeting, i) => (
            <Link key={meeting.id} href={`/dashboard/meetings/${meeting.id}`}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                className="glass-card rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 group cursor-pointer transition-all hover:-translate-y-1 hover:border-primary/30 border-white/5"
              >
              <div className="flex items-center gap-5 w-full md:w-[35%] shrink-0">
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-full border-2 border-white/10 overflow-hidden bg-surface-container-highest">
                    <Image 
                      src={meeting.image}
                      alt={meeting.client}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {meeting.id === 1 && (
                    <div className="absolute -bottom-1 -right-1 bg-primary w-4 h-4 rounded-full border-2 border-background shadow-[0_0_8px_rgba(37,211,102,0.8)]"></div>
                  )}
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors truncate">{meeting.client}</h3>
                  <p className="text-sm text-on-surface-variant font-medium mt-0.5 truncate">Lead: {meeting.lead}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between md:justify-around w-full md:w-[65%] gap-4">
                <div className="text-center md:text-left shrink-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Budget</p>
                  <p className="text-2xl font-bold text-primary tracking-tight">{meeting.budget}</p>
                </div>
                
                <div className="text-center md:text-left shrink-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Status</p>
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/5 bg-surface-container-highest ${meeting.statusContainer || ''}`}>
                    <span className={`w-2 h-2 rounded-full ${meeting.statusColor} ${meeting.pulse ? 'animate-pulse shadow-[0_0_8px_rgba(18,140,126,0.8)]' : ''}`}></span>
                    <span className="text-xs font-bold">{meeting.status}</span>
                  </div>
                </div>
                
                <div className="text-right hidden sm:block shrink-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Date</p>
                  <p className="text-sm font-semibold text-on-surface">{meeting.date}</p>
                </div>
                
                <div className="flex gap-2 shrink-0">
                  <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 text-on-surface-variant hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all">
                    <PlayCircle className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 text-on-surface-variant hover:bg-white/10 hover:text-on-surface transition-all">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </Link>
          ))}
        </div>

        {/* Footer Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="glass-card rounded-2xl p-6 border-l-4 border-l-primary border-t-white/5 border-r-white/5 border-b-white/5 hover:border-r-white/10 hover:border-t-white/10 hover:border-b-white/10 hover:-translate-y-1 transition-all cursor-pointer">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Quarterly Pipeline</p>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-on-surface tracking-tight">$4.8M</span>
              <span className="text-primary text-sm font-bold flex items-center gap-0.5">↑ 12%</span>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-6 border-l-4 border-l-secondary border-t-white/5 border-r-white/5 border-b-white/5 hover:border-r-white/10 hover:border-t-white/10 hover:border-b-white/10 hover:-translate-y-1 transition-all cursor-pointer">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Active Engagements</p>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-on-surface tracking-tight">24</span>
              <span className="text-secondary text-sm font-bold flex items-center gap-0.5">+3 this week</span>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-6 border-l-4 border-l-outline-variant border-t-white/5 border-r-white/5 border-b-white/5 hover:border-r-white/10 hover:border-t-white/10 hover:border-b-white/10 hover:-translate-y-1 transition-all cursor-pointer">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Pending Proposals</p>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-on-surface tracking-tight">12</span>
              <span className="text-outline-variant text-sm font-bold">Stability Phase</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background glow */}
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10 translate-x-1/4 translate-y-1/4"></div>
    </div>
  );
}
