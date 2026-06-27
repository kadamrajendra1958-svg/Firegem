import { Header } from "@/components/header";
import { getProposals } from "@/lib/actions";
import { MoreHorizontal, Calendar, PlusCircle, Building } from "lucide-react";

export default async function PipelinePage() {
  const proposals = await getProposals();

  const stages = [
    { name: "Discovery", color: "bg-outline" },
    { name: "Qualification", color: "bg-secondary" },
    { name: "Proposal", color: "bg-primary" },
    { name: "Closed Won", color: "bg-tertiary" },
  ];

  return (
    <>
      <Header title="Pipeline" />
      <main className="pt-24 px-8 pb-8 relative z-10 flex-1 overflow-x-hidden flex flex-col">
        {/* Summary Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8 shrink-0">
          <div className="glass-card p-6 rounded-xl flex flex-col gap-1">
            <span className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">Total Pipeline</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">
                ${(proposals.filter(p => p.stage !== 'Closed Won').reduce((sum, p) => sum + p.dealSize, 0) / 1000).toFixed(1)}k
              </span>
            </div>
          </div>
          <div className="glass-card p-6 rounded-xl flex flex-col gap-1">
            <span className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">Active Deals</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-on-surface">
                {proposals.filter(p => p.stage !== 'Closed Won').length}
              </span>
            </div>
          </div>
        </div>

        {/* Kanban Grid */}
        <div className="flex gap-6 overflow-x-auto pb-6 custom-scrollbar flex-1 items-start">
          {stages.map((stage) => {
            const stageProposals = proposals.filter((p) => p.stage === stage.name);
            const totalValue = stageProposals.reduce((sum, p) => sum + p.dealSize, 0);

            return (
              <div key={stage.name} className="flex-shrink-0 w-80 flex flex-col gap-4">
                <div className="flex justify-between items-center px-2 border-b border-white/5 pb-2">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${stage.color}`}></span>
                    <h3 className="font-bold text-sm uppercase tracking-widest text-on-surface-variant">{stage.name}</h3>
                    <span className="bg-surface-container-high px-2 py-0.5 rounded text-[10px] font-bold">
                      {stageProposals.length}
                    </span>
                  </div>
                  <span className="text-outline text-xs font-medium">${(totalValue / 1000).toFixed(1)}k</span>
                </div>
                
                <div className="flex flex-col gap-3 min-h-[100px]">
                  {stageProposals.map((proposal) => (
                    <div key={proposal.id} className={`glass-card p-4 rounded-lg cursor-grab group border-l-2 ${stage.name === 'Closed Won' ? 'grayscale opacity-60' : 'border-transparent hover:border-primary/50'}`}>
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded font-bold">
                          {proposal.sentiment}
                        </span>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreHorizontal className="w-4 h-4 text-outline" />
                        </button>
                      </div>
                      
                      <h4 className="font-bold text-on-surface mb-1 text-sm truncate">{proposal.accountName}</h4>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-5 h-5 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                          <Building className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-on-surface-variant text-xs truncate">{proposal.stakeholder}</span>
                      </div>
                      
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-[10px] text-outline uppercase font-bold mb-1">Value</div>
                          <div className="text-sm font-bold text-on-surface">${proposal.dealSize.toLocaleString()}</div>
                        </div>
                        
                        <div className="flex flex-col items-end">
                          <div className="text-[10px] text-outline uppercase font-bold mb-1">{proposal.probability}%</div>
                          <div className="w-16 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="bg-primary h-full transition-all" style={{ width: `${proposal.probability}%` }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          
          <div className="flex-shrink-0 w-80 flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-xl h-[400px] hover:border-primary/20 hover:bg-white/5 transition-all cursor-pointer group">
            <PlusCircle className="text-outline group-hover:text-primary transition-colors w-8 h-8 mb-2" />
            <span className="text-xs font-semibold text-outline group-hover:text-primary uppercase tracking-widest">Add Stage</span>
          </div>
        </div>
      </main>
    </>
  );
}
