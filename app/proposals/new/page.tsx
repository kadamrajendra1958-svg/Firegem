"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createProposal } from "@/lib/actions";
import { Header } from "@/components/header";
import { Building, Target, DollarSign, Activity, Settings2, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NewProposalPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    accountName: "",
    stakeholder: "",
    dealSize: 0,
    sentiment: "Neutral" as "High" | "Neutral" | "Critical",
    stage: "Discovery" as "Discovery" | "Qualification" | "Proposal" | "Closed Won",
    probability: 50,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await createProposal(formData);
    if (result.success) {
      router.push("/");
    } else {
      console.error(result.error);
      setLoading(false);
    }
  };

  return (
    <>
      <Header title="Create Proposal" />
      <main className="pt-24 px-8 pb-12 relative z-10 flex-1 overflow-y-auto custom-scrollbar flex justify-center">
        <div className="w-full max-w-3xl glass-surface rounded-3xl p-8 border border-white/10">
          <div className="mb-8 border-b border-white/5 pb-6">
            <h2 className="text-3xl font-bold text-on-surface tracking-tight mb-2">New Growth Initiative</h2>
            <p className="text-on-surface-variant text-sm">Enter the initial details to draft a strategic proposal.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-outline-variant uppercase tracking-widest flex items-center gap-2">
                  <Building className="w-4 h-4 text-primary" />
                  Account Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-surface-container-lowest border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-on-surface placeholder-outline-variant"
                  placeholder="e.g. Acme Corp"
                  value={formData.accountName}
                  onChange={(e) => setFormData({ ...formData, accountName: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-outline-variant uppercase tracking-widest flex items-center gap-2">
                  <Target className="w-4 h-4 text-secondary" />
                  Key Stakeholder
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-surface-container-lowest border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-on-surface placeholder-outline-variant"
                  placeholder="e.g. Jane Doe (CEO)"
                  value={formData.stakeholder}
                  onChange={(e) => setFormData({ ...formData, stakeholder: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-outline-variant uppercase tracking-widest flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-primary" />
                  Target Deal Size
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  className="w-full bg-surface-container-lowest border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-on-surface placeholder-outline-variant"
                  placeholder="e.g. 150000"
                  value={formData.dealSize || ""}
                  onChange={(e) => setFormData({ ...formData, dealSize: parseInt(e.target.value) || 0 })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-outline-variant uppercase tracking-widest flex items-center gap-2">
                  <Activity className="w-4 h-4 text-tertiary" />
                  Client Sentiment
                </label>
                <select
                  className="w-full bg-surface-container-lowest border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-on-surface"
                  value={formData.sentiment}
                  onChange={(e) => setFormData({ ...formData, sentiment: e.target.value as any })}
                >
                  <option value="High">High (Positive)</option>
                  <option value="Neutral">Neutral (Exploring)</option>
                  <option value="Critical">Critical (At Risk)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-outline-variant uppercase tracking-widest flex items-center gap-2">
                  <Settings2 className="w-4 h-4 text-primary" />
                  Pipeline Stage
                </label>
                <select
                  className="w-full bg-surface-container-lowest border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-on-surface"
                  value={formData.stage}
                  onChange={(e) => setFormData({ ...formData, stage: e.target.value as any })}
                >
                  <option value="Discovery">Discovery</option>
                  <option value="Qualification">Qualification</option>
                  <option value="Proposal">Proposal</option>
                  <option value="Closed Won">Closed Won</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-outline-variant uppercase tracking-widest flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-secondary" />
                  Win Probability (%)
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  max="100"
                  className="w-full bg-surface-container-lowest border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-on-surface placeholder-outline-variant"
                  value={formData.probability}
                  onChange={(e) => setFormData({ ...formData, probability: parseInt(e.target.value) || 0 })}
                />
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex justify-end gap-4">
              <Button
                type="button"
                variant="ghost"
                onClick={() => router.back()}
                className="text-on-surface-variant hover:text-on-surface hover:bg-white/5"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="bg-primary text-primary-foreground font-extrabold hover:opacity-90 active:scale-95 transition-all revenue-pulse shadow-xl shadow-primary/20"
              >
                {loading ? "Initializing..." : "Initialize Proposal"}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
