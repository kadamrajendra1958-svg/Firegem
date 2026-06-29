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
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs, orderBy, query, onSnapshot } from "firebase/firestore";

export default function MeetingsPage() {
  const [meetings, setMeetings] = useState<any[]>([]);

  useEffect(() => {
    const q = query(collection(db, "meetings"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const meetingsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMeetings(meetingsData);
    });

    return () => unsubscribe();
  }, []);

  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      setIsUploading(true);
      
      try {
        let fileUrl = "";
        let fileType = file.type.startsWith("video") ? "video" : "audio";
        
        try {
          const { ref: storageRef, uploadBytes, getDownloadURL } = await import("firebase/storage");
          const { storage } = await import("@/lib/firebase");
          const sRef = storageRef(storage, `meetings/${Date.now()}_${file.name}`);
          await uploadBytes(sRef, file);
          fileUrl = await getDownloadURL(sRef);
        } catch (storageError) {
          console.error("Storage upload failed (possibly rules). Falling back to local URL.", storageError);
          fileUrl = URL.createObjectURL(file); // Fallback for local preview if storage fails
        }

        const newMeeting = {
          client: file.name.split('.')[0] || "Uploaded Recording",
          lead: "Pending Analysis",
          budget: "Pending",
          status: "Analyzed",
          statusColor: "bg-primary",
          pulse: false,
          date: new Date().toLocaleDateString(),
          image: "https://picsum.photos/seed/" + Date.now() + "/200/200",
          createdAt: new Date(),
          fileUrl,
          fileType,
          sentiment: "Positive",
          sentimentScore: 85,
        };
        
        await addDoc(collection(db, "meetings"), newMeeting);
        alert("Meeting uploaded successfully!");
      } catch (error) {
        console.error("Error adding meeting: ", error);
        alert("Failed to upload meeting.");
      } finally {
        setIsUploading(false);
        if (e.target) e.target.value = ''; // reset input
      }
    }
  };

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
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <label className={`cursor-pointer bg-primary text-primary-foreground font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-[0_10px_20px_rgba(37,211,102,0.15)] whitespace-nowrap ${isUploading ? 'opacity-70 pointer-events-none' : 'hover:brightness-110 active:scale-95'}`}>
              <CloudUpload className={`w-5 h-5 ${isUploading ? 'animate-bounce' : ''}`} />
              <span className="text-sm tracking-wide">{isUploading ? 'Uploading...' : 'Upload Recording'}</span>
              <input type="file" className="hidden" accept="audio/*,video/*" onChange={handleFileUpload} disabled={isUploading} />
            </label>
          </motion.div>
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
          {meetings.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card rounded-2xl p-12 flex flex-col items-center justify-center text-center border border-white/5 border-dashed min-h-[400px]"
            >
              <div className="relative w-64 h-40 mb-10 [perspective:1000px]">
                {/* Animated meeting card */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }} 
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-surface-container-highest border border-white/10 rounded-xl shadow-2xl p-5 flex flex-col justify-between overflow-hidden"
                >
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center overflow-hidden shrink-0 border border-white/10 relative">
                       <motion.div 
                         animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} 
                         transition={{ duration: 2, repeat: Infinity }}
                         className="absolute inset-0 bg-primary/30"
                       />
                     </div>
                     <div className="space-y-2.5 flex-1 w-full">
                       <div className="h-2.5 w-3/4 bg-white/10 rounded-full"></div>
                       <div className="h-2.5 w-1/2 bg-white/5 rounded-full"></div>
                     </div>
                   </div>
                   <div className="space-y-2.5 mt-4">
                     <div className="h-1.5 w-full bg-white/5 rounded-full"></div>
                     <div className="h-1.5 w-5/6 bg-white/5 rounded-full"></div>
                   </div>
                   <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
                     <div className="h-2.5 w-16 bg-white/10 rounded-full"></div>
                     <div className="h-6 w-20 bg-primary/10 rounded-md border border-primary/20 flex items-center justify-center">
                        <motion.div 
                          animate={{ opacity: [0.3, 1, 0.3] }} 
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="h-1.5 w-8 bg-primary rounded-full shadow-[0_0_5px_rgba(37,211,102,0.5)]"
                        />
                     </div>
                   </div>
                </motion.div>
                
                {/* Scanning line / Upload effect */}
                <motion.div 
                  animate={{ top: ['0%', '100%', '0%'] }} 
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-0.5 bg-primary shadow-[0_0_12px_rgba(37,211,102,1)] z-10"
                />
              </div>

              <h3 className="text-2xl font-bold text-on-surface mb-3">Awaiting Intelligence</h3>
              <p className="text-on-surface-variant max-w-md mx-auto mb-8 leading-relaxed">
                Upload a recording to start generating automated revenue intelligence, transcripts, and proposals.
              </p>
              <label className={`cursor-pointer px-6 py-3 bg-primary text-background font-bold rounded-lg transition-all flex items-center gap-2 ${isUploading ? 'opacity-70 pointer-events-none' : 'hover:brightness-110'}`}>
                <CloudUpload className={`w-5 h-5 ${isUploading ? 'animate-bounce' : ''}`} />
                {isUploading ? 'Uploading...' : 'Upload Recording'}
                <input type="file" className="hidden" accept="audio/*,video/*" onChange={handleFileUpload} disabled={isUploading} />
              </label>
            </motion.div>
          ) : (
            meetings.map((meeting, i) => (
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
                      <span className={`w-2 h-2 rounded-full ${meeting.statusColor} ${meeting.pulse ? 'animate-pulse shadow-[0_0_8px_rgba(37,211,102,0.8)]' : ''}`}></span>
                      <span className="text-xs font-bold">{meeting.status}</span>
                    </div>
                  </div>
                  
                  <div className="text-right hidden sm:block shrink-0">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Date</p>
                    <p className="text-sm font-semibold text-on-surface">{meeting.date}</p>
                  </div>
                  
                  <div className="flex gap-2 shrink-0">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 text-on-surface-variant group-hover:bg-primary/20 group-hover:text-primary group-hover:border-primary/30 transition-all">
                      <PlayCircle className="w-5 h-5" />
                    </div>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 text-on-surface-variant hover:bg-white/10 hover:text-on-surface transition-all">
                      <MoreVertical className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
            ))
          )}
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
              <span className="text-3xl font-bold text-on-surface tracking-tight">₹0</span>
              <span className="text-on-surface-variant text-sm font-bold flex items-center gap-0.5">0%</span>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-6 border-l-4 border-l-secondary border-t-white/5 border-r-white/5 border-b-white/5 hover:border-r-white/10 hover:border-t-white/10 hover:border-b-white/10 hover:-translate-y-1 transition-all cursor-pointer">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Active Engagements</p>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-on-surface tracking-tight">0</span>
              <span className="text-on-surface-variant text-sm font-bold flex items-center gap-0.5">No active</span>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-6 border-l-4 border-l-outline-variant border-t-white/5 border-r-white/5 border-b-white/5 hover:border-r-white/10 hover:border-t-white/10 hover:border-b-white/10 hover:-translate-y-1 transition-all cursor-pointer">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Pending Proposals</p>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-on-surface tracking-tight">0</span>
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
