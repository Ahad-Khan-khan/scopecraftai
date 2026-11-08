"use client";

import { useEffect, useState } from "react";
import { Loader2, Globe, Cpu, Calculator, FileCheck, CheckCircle2 } from "lucide-react";

interface LiveResearchProgressProps {
  projectName: string;
  category: string;
}

export function LiveResearchProgress({ projectName, category }: LiveResearchProgressProps) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl border border-line-subtle p-8 shadow-card text-center my-8">
      {/* Animated Spinner Icon */}
      <div className="w-14 h-14 rounded-2xl bg-emerald-subtle flex items-center justify-center mx-auto mb-6 text-emerald border border-emerald-border">
        <Loader2 className="w-7 h-7 animate-spin" />
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-ink">
        Synthesizing Your Research-Backed Quotation
      </h2>
      <p className="mt-2 text-sm text-ink-secondary max-w-md mx-auto">
        Querying Tavily for live 2025/2026 pricing benchmarks and computing heuristic Work Breakdown Structure hours for <span className="font-semibold text-ink">{projectName}</span>.
      </p>

      {/* Honest Progress Tracker */}
      <div className="mt-8 space-y-3 max-w-md mx-auto text-left">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-subtle border border-line-subtle text-xs">
          <Globe className="w-4 h-4 text-emerald shrink-0 animate-pulse" />
          <div className="flex-1">
            <div className="font-semibold text-ink">Live Web & API Rate Retrieval</div>
            <div className="text-ink-muted text-[11px]">Connecting to Tavily Research Engine</div>
          </div>
          <span className="font-mono text-emerald font-semibold">Active</span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-subtle border border-line-subtle text-xs">
          <Calculator className="w-4 h-4 text-emerald shrink-0" />
          <div className="flex-1">
            <div className="font-semibold text-ink">Deterministic WBS Scoping</div>
            <div className="text-ink-muted text-[11px]">Calculating modular engineering hours</div>
          </div>
          <span className="font-mono text-ink-muted">In Pipeline</span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-subtle border border-line-subtle text-xs">
          <Cpu className="w-4 h-4 text-emerald shrink-0" />
          <div className="flex-1">
            <div className="font-semibold text-ink">Gemini Architectural Proposal Synthesis</div>
            <div className="text-ink-muted text-[11px]">Formatting executive proposal & Opex/Capex</div>
          </div>
          <span className="font-mono text-ink-muted">In Pipeline</span>
        </div>
      </div>

      {/* Elapsed seconds notice */}
      <div className="mt-8 text-xs font-mono text-ink-muted">
        Elapsed time: {elapsed}s &bull; Typical synthesis takes ~10–18 seconds
      </div>
    </div>
  );
}
