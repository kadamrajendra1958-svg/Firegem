"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useParams } from "next/navigation";
import { db } from "@/lib/firebase";
import { doc, collection, addDoc, getDoc } from "firebase/firestore";
import { 
  Search, 
  Copy, 
  Bot, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle,
  Check
} from "lucide-react";

export default function TranscriptPage() {
  const params = useParams();
  const id = params.id as string;
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [meeting, setMeeting] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getDoc(doc(db, "meetings", id)).then(snap => {
        if (snap.exists()) setMeeting(snap.data());
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [id]);

  const activeTranscript = meeting?.transcript || [];

  const handleCopy = () => {
    if (!activeTranscript.length) return;
    const textToCopy = activeTranscript.map((t: any) => `[${t.time || ''}] ${t.speaker || 'Unknown'}: ${t.text}`).join("\n");
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGenerateEmail = async () => {
    setIsGenerating(true);
    try {
      const ai = meeting?.analysis || {};
      const actionItemsTxt = (ai.actionItems || []).map((a: any) => `- ${a.task}`).join("\n");
      const emailContent = `Hi Team,\n\nFollowing up on our recent discussion regarding ${meeting?.client || "the project"}.\n\nKey Action Items:\n${actionItemsTxt || "- No action items identified"}\n\nBest,\nRevenue OS`;
      
      await addDoc(collection(db, "emails"), {
        meetingId: id,
        content: emailContent,
        status: "Draft",
        createdAt: new Date(),
      });
      alert("Drafting follow-up email based on transcript...\n\nDraft saved to your outbox in Firestore!");
    } catch (error) {
      console.error("Error generating email", error);
      alert("Failed to save draft to Firestore.");
    } finally {
      setIsGenerating(false);
    }
  };

  const filteredTranscript = activeTranscript.filter((t: any) => 
    t.text?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.speaker?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const analysis = meeting?.analysis || {};

  return (
    <div className="flex-1 overflow-hidden flex relative h-full">
      {/* Left Column: Transcript Viewer */}
      <div className="flex-1 flex flex-col h-full border-r border-white/5 bg-background/50">
        {/* Transcript Controls */}
        <div className="shrink-0 p-6 border-b border-white/5 flex items-center justify-between bg-surface-container-lowest/30">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
            <input 
              type="text" 
              placeholder="Search transcript..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-container-highest/50 border border-white/10 rounded-full pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
            />
          </div>
          
          <button 
            onClick={handleCopy}
            className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors flex items-center gap-2 text-sm font-bold text-on-surface-variant group"
          >
            {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4 group-hover:text-primary transition-colors" />}
            {copied ? <span className="text-primary">Copied!</span> : "Copy Full"}
          </button>
        </div>
        
        {/* Transcript Scroll Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar relative">
          <div className="absolute top-0 left-12 bottom-0 w-px bg-white/5 -z-10"></div>
          
          {isLoading && (
            <div className="text-center text-on-surface-variant p-10">
              <p>Loading transcript...</p>
            </div>
          )}

          {!isLoading && activeTranscript.length === 0 && (
            <div className="text-center text-on-surface-variant p-10">
              <p>No transcript available or still processing.</p>
            </div>
          )}

          {!isLoading && filteredTranscript.map((block: any, i: number) => (
            <motion.div 
              key={block.id || i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex gap-6 group"
            >
              <div className="w-12 pt-1 shrink-0 flex flex-col items-center">
                <div className="text-xs font-bold text-on-surface-variant/60 tracking-wider mb-2">{block.time || ''}</div>
                <div className={`w-2 h-2 rounded-full ring-4 ring-background ${block.type === 'internal' ? 'bg-primary' : 'bg-secondary'}`}></div>
              </div>
              
              <div className={`flex-1 rounded-2xl p-5 border transition-colors ${
                block.type === 'internal' 
                  ? 'bg-primary/5 border-primary/10 hover:border-primary/30' 
                  : 'bg-surface-container-highest border-white/5 hover:border-white/20'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-sm font-bold ${block.type === 'internal' ? 'text-primary' : 'text-secondary'}`}>
                    {block.speaker || 'Unknown'}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant/50">
                    {block.type === 'internal' ? 'Revenue OS' : 'Client'}
                  </span>
                </div>
                <p className="text-sm text-on-surface leading-relaxed font-medium">
                  {block.text}
                </p>
              </div>
            </motion.div>
          ))}
          
          {!isLoading && filteredTranscript.length === 0 && activeTranscript.length > 0 && (
            <div className="flex flex-col items-center justify-center h-full text-on-surface-variant opacity-60">
              <Search className="w-12 h-12 mb-4" />
              <p className="font-bold">No results found for &quot;{searchQuery}&quot;</p>
            </div>
          )}
        </div>
      </div>

      {/* Right Column: AI Analysis Sidebar */}
      <div className="w-96 shrink-0 flex flex-col h-full bg-surface-container-lowest/80 border-l border-white/5">
        <div className="shrink-0 p-6 border-b border-white/5 bg-primary/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-bold text-primary tracking-tight">Revenue Intelligence</h2>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
          {isLoading ? (
             <div className="text-center text-on-surface-variant p-4">Loading intelligence...</div>
          ) : (
            <>
              {/* Sentiment & Intent */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 flex items-center gap-2">
                  <Bot className="w-4 h-4" />
                  Deal Sentiment
                </h3>
                
                <div className="glass-card rounded-xl p-5 border-white/5 bg-background/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-on-surface">Overall Vibe</span>
                    <span className="text-sm font-bold text-primary px-2 py-1 bg-primary/10 rounded">{analysis.sentiment || "Unknown"}</span>
                  </div>
                </div>
              </motion.div>

              {/* Key Extraction */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Key Action Items
                </h3>
                
                <div className="glass-card rounded-xl p-5 border-white/5 bg-background/50 space-y-3">
                  {(analysis.actionItems || []).map((ai: any, idx: number) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-on-surface-variant">{ai.task}</span>
                    </div>
                  ))}
                  {(!analysis.actionItems || analysis.actionItems.length === 0) && (
                    <p className="text-sm text-on-surface-variant italic">No action items found.</p>
                  )}
                </div>
              </motion.div>

              {/* Risk Factors */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Risk Factors
                </h3>
                
                <div className="glass-card rounded-xl p-5 border-white/5 bg-background/50 space-y-3">
                  {(analysis.crucialObjections || []).map((obj: any, idx: number) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-error mt-1.5 shrink-0"></div>
                      <span className="text-sm text-on-surface-variant">{obj.desc}</span>
                    </div>
                  ))}
                  {(!analysis.crucialObjections || analysis.crucialObjections.length === 0) && (
                    <p className="text-sm text-on-surface-variant italic">No major risks identified.</p>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </div>
        
        <div className="shrink-0 p-6 border-t border-white/5 bg-background/50">
          <button 
            onClick={handleGenerateEmail}
            disabled={isGenerating || isLoading}
            className="w-full py-3 rounded-lg bg-surface-container-highest border border-white/10 hover:border-primary/50 text-sm font-bold text-on-surface transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Bot className="w-4 h-4 text-primary" />
            {isGenerating ? "Generating..." : "Generate Follow-up Email"}
          </button>
        </div>
      </div>
    </div>
  );
}
