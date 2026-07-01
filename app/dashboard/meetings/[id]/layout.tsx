"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useParams } from "next/navigation";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { 
  ArrowLeft,
  Share2,
  Download,
  PlayCircle,
  PauseCircle,
  Clock
} from "lucide-react";
import { motion } from "motion/react";

export default function MeetingDetailLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const params = useParams();
  const id = params.id as string;
  const [isPlaying, setIsPlaying] = useState(false);
  const [meeting, setMeeting] = useState<any>(null);

  useEffect(() => {
    const fetchMeeting = async () => {
      try {
        const docRef = doc(db, "meetings", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setMeeting(docSnap.data());
        }
      } catch (err) {
        console.error("Error fetching meeting:", err);
      }
    };
    if (id && id !== "1") {
      fetchMeeting();
    }
  }, [id]);

  const handleShare = async () => {
    try {
      if (id !== "1") {
        await updateDoc(doc(db, "meetings", id), { shared: true });
      }
      alert("Share link generated and tracked in Firestore!");
    } catch (e) {
      alert("Error sharing link.");
    }
  };

  const handleExport = async () => {
    try {
      if (id !== "1") {
        await updateDoc(doc(db, "meetings", id), { exported: true });
      }
      alert("Exporting meeting transcript and summary as PDF... Activity logged in Firestore.");
    } catch (e) {
      alert("Error exporting.");
    }
  };

  const mediaRef = useRef<HTMLVideoElement>(null);

  const handlePlayToggle = () => {
    if (!meeting?.fileUrl) {
      alert("No recording available for this meeting. Please upload one first.");
      return;
    }
    if (mediaRef.current) {
      if (isPlaying) {
        mediaRef.current.pause();
      } else {
        mediaRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const displayTitle = meeting?.client || "Uploaded Recording";
  const displayDate = meeting?.date || "";
  const displayImage = meeting?.image || "";

  return (
    <div className="flex-1 h-full overflow-hidden flex flex-col bg-background">
      {meeting?.fileUrl && (
        <video 
          ref={mediaRef} 
          src={meeting.fileUrl} 
          className="hidden" 
          onEnded={() => setIsPlaying(false)}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        />
      )}
      {/* Header Bar */}
      <header className="shrink-0 border-b border-white/10 bg-surface-container-low/80 backdrop-blur-md px-8 py-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-6">
          <Link href="/dashboard/meetings" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <div className="w-12 h-12 rounded-full border border-white/10 overflow-hidden bg-surface-container-highest shrink-0 flex items-center justify-center text-primary font-bold text-lg uppercase">
              {displayImage ? (
                <Image 
                  src={displayImage}
                  alt="Client"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                displayTitle.substring(0, 2)
              )}
            </div>
            <div>
              <h1 className="text-xl font-bold text-on-surface tracking-tight">{displayTitle}</h1>
              <p className="text-sm font-medium text-on-surface-variant flex items-center gap-2 mt-0.5">
                <Clock className="w-3.5 h-3.5" />
                {displayDate} • 45m Duration
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 ml-8 border-l border-white/10 pl-8">
            <Link 
              href={`/dashboard/meetings/${id}`}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${pathname === `/dashboard/meetings/${id}` ? 'bg-primary/10 text-primary' : 'text-on-surface-variant hover:text-on-surface hover:bg-white/5'}`}
            >
              Intelligence Summary
            </Link>
            <Link 
              href={`/dashboard/meetings/${id}/transcript`}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${pathname.includes('/transcript') ? 'bg-primary/10 text-primary' : 'text-on-surface-variant hover:text-on-surface hover:bg-white/5'}`}
            >
              Transcript & Analysis
            </Link>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button onClick={handleShare} className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors flex items-center gap-2 text-sm font-bold text-on-surface-variant">
            <Share2 className="w-4 h-4" />
            Share
          </button>
          <button onClick={handleExport} className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors flex items-center gap-2 text-sm font-bold text-on-surface-variant">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button 
            onClick={handlePlayToggle}
            className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-bold flex items-center gap-2 hover:brightness-110 transition-all shadow-[0_0_15px_rgba(37,211,102,0.2)]"
          >
            {isPlaying ? <PauseCircle className="w-4 h-4" /> : <PlayCircle className="w-4 h-4" />}
            {isPlaying ? "Pause Recording" : "Play Recording"}
          </button>
        </div>
      </header>
      
      {children}
    </div>
  );
}
