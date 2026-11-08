"use client";

import { useState } from "react";
import Link from "next/link";
import { QuotationResponseData } from "@/lib/types";
import { formatCurrency, formatDate } from "@/lib/utils";
import { 
  Download, 
  Copy, 
  Check, 
  RotateCcw, 
  Layers, 
  ShieldCheck, 
  ExternalLink, 
  Calendar, 
  Clock, 
  DollarSign, 
  Cpu, 
  CheckCircle2, 
  FileText,
  AlertCircle
} from "lucide-react";

interface ProposalViewProps {
  data: QuotationResponseData;
  onReset: () => void;
  onEdit: () => void;
}

export function ProposalView({ data, onReset, onEdit }: ProposalViewProps) {
  const [currency, setCurrency] = useState<"USD" | "PKR">(data.summary.currency || "USD");
  const [copied, setCopied] = useState(false);

  const isUSD = currency === "USD";
  const expectedCost = isUSD ? data.summary.expectedCostUSD : data.summary.expectedCostPKR;
  const minCost = isUSD ? data.summary.minCostUSD : data.summary.minCostPKR;
  const maxCost = isUSD ? data.summary.maxCostUSD : data.summary.maxCostPKR;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const text = `Quotation ID: ${data.quotationId}\nProject: ${data.projectName}\nCategory: ${data.projectCategory}\nEstimated Capex: ${formatCurrency(minCost, currency)} - ${formatCurrency(maxCost, currency)}\nTimeline: ${data.summary.timeline}\nTotal Hours: ${data.summary.totalHours}h\nSummary: ${data.executiveSummary}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 sm:px-6">
      {/* Top Action Bar (hidden when printing) */}
      <div className="no-print flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-surface-subtle p-4 rounded-2xl border border-line-subtle">
        <div className="flex items-center gap-3">
          <button
            onClick={onEdit}
            className="text-xs font-semibold text-ink-secondary hover:text-ink px-3 py-2 rounded-lg border border-line-subtle bg-white hover:bg-surface-subtle transition-all"
          >
            &larr; Edit Specifications
          </button>
          <button
            onClick={onReset}
            className="text-xs font-semibold text-ink-secondary hover:text-ink px-3 py-2 rounded-lg border border-line-subtle bg-white hover:bg-surface-subtle transition-all flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>New Quotation</span>
          </button>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          {/* Currency Toggle */}
          <div className="flex items-center p-1 rounded-lg bg-white border border-line-subtle text-xs font-bold">
            <button
              onClick={() => setCurrency("USD")}
              className={`px-3 py-1.5 rounded-md transition-all ${
                isUSD ? "bg-ink text-white shadow-subtle" : "text-ink-secondary hover:text-ink"
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency("PKR")}
              className={`px-3 py-1.5 rounded-md transition-all ${
                !isUSD ? "bg-ink text-white shadow-subtle" : "text-ink-secondary hover:text-ink"
              }`}
            >
              PKR (Rs.)
            </button>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="text-xs font-semibold text-ink px-3.5 py-2 rounded-lg border border-line-subtle bg-white hover:bg-surface-subtle transition-all flex items-center gap-1.5 shadow-subtle"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied" : "Copy Brief"}</span>
          </button>

          {/* PDF Print Button */}
          <button
            onClick={handlePrint}
            className="text-xs font-semibold text-white bg-ink hover:bg-slate-800 px-4 py-2 rounded-lg transition-all flex items-center gap-2 shadow-card"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* Main Agency Proposal Sheet (Container for Vector Print) */}
      <div className="proposal-print-container bg-white rounded-2xl border border-line-subtle p-8 sm:p-12 shadow-elevated text-left space-y-10">
        {/* Document Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 border-b border-line-subtle">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald" />
              <span>Official Technical Proposal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
              {data.projectName}
            </h1>
            <p className="text-sm text-ink-secondary mt-1">
              Category: <span className="font-semibold text-ink">{data.projectCategory}</span>
            </p>
          </div>

          <div className="text-left sm:text-right font-mono text-xs text-ink-secondary space-y-1 bg-surface-subtle p-4 rounded-xl border border-line-subtle sm:bg-transparent sm:border-0 sm:p-0">
            <div>
              <span className="text-ink-muted">Proposal ID: </span>
              <span className="font-bold text-ink">{data.quotationId}</span>
            </div>
            <div>
              <span className="text-ink-muted">Date Generated: </span>
              <span className="font-semibold text-ink">{formatDate(data.generatedAt)}</span>
            </div>
            <div>
              <span className="text-ink-muted">Prepared For: </span>
              <span className="font-semibold text-ink">{data.clientName} ({data.clientEmail})</span>
            </div>
          </div>
        </div>

        {/* Investment Highlights: 3 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 page-break-avoid">
          {/* Card 1: Estimated Capex */}
          <div className="bg-surface-subtle p-6 rounded-2xl border border-line-subtle">
            <div className="flex items-center justify-between text-xs text-ink-muted uppercase font-mono tracking-wider mb-2">
              <span>Estimated Capex</span>
              <DollarSign className="w-4 h-4 text-emerald" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-ink">
              {formatCurrency(expectedCost, currency)}
            </div>
            <div className="text-xs font-mono text-ink-secondary mt-1">
              Range: {formatCurrency(minCost, currency)} – {formatCurrency(maxCost, currency)}
            </div>
          </div>

          {/* Card 2: Estimated Timeline */}
          <div className="bg-surface-subtle p-6 rounded-2xl border border-line-subtle">
            <div className="flex items-center justify-between text-xs text-ink-muted uppercase font-mono tracking-wider mb-2">
              <span>Development Duration</span>
              <Calendar className="w-4 h-4 text-emerald" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-ink">
              {data.summary.timeline}
            </div>
            <div className="text-xs font-mono text-ink-secondary mt-1">
              {data.summary.totalHours} Total Engineering Hours
            </div>
          </div>

          {/* Card 3: Confidence Score */}
          <div className="bg-surface-subtle p-6 rounded-2xl border border-line-subtle">
            <div className="flex items-center justify-between text-xs text-ink-muted uppercase font-mono tracking-wider mb-2">
              <span>Confidence Rating</span>
              <ShieldCheck className="w-4 h-4 text-emerald" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-emerald">
              {data.confidenceRating}
            </div>
            <div className="text-xs text-ink-secondary mt-1 line-clamp-1">
              {data.confidenceRationale}
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="space-y-3 page-break-avoid">
          <h2 className="text-sm font-bold uppercase tracking-wider text-ink font-mono flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald" />
            <span>1. Executive Summary & Strategy</span>
          </h2>
          <div className="p-5 rounded-xl bg-surface-subtle border border-line-subtle text-sm text-ink-secondary leading-relaxed">
            {data.executiveSummary}
          </div>
        </div>

        {/* Scope of Work Deliverables */}
        <div className="space-y-4 page-break-avoid">
          <h2 className="text-sm font-bold uppercase tracking-wider text-ink font-mono flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald" />
            <span>2. Key Scope of Work & Deliverables</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.scopeOfWork.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg border border-line-subtle bg-white text-xs text-ink">
                <Check className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Work Breakdown Structure (WBS) Table */}
        <div className="space-y-4 page-break-avoid">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wider text-ink font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald" />
              <span>3. Modular Work Breakdown Structure (WBS)</span>
            </h2>
            <span className="text-xs font-mono text-ink-muted">Base Rate: $50/hr</span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-line-subtle">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-subtle border-b border-line-subtle text-ink-muted font-mono uppercase text-[10px]">
                <tr>
                  <th className="py-3 px-4 font-semibold">Engineering Module</th>
                  <th className="py-3 px-4 font-semibold">Technical Description</th>
                  <th className="py-3 px-4 font-semibold text-center">Hours</th>
                  <th className="py-3 px-4 font-semibold text-center">Complexity</th>
                  <th className="py-3 px-4 font-semibold text-right">Est. Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line-subtle font-sans">
                {data.modules.map((mod, idx) => {
                  const modCost = isUSD 
                    ? mod.costUSD 
                    : Math.round(mod.costUSD * (data.summary.expectedCostPKR / data.summary.expectedCostUSD));

                  return (
                    <tr key={idx} className="hover:bg-surface-subtle/50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-ink whitespace-nowrap">
                        {mod.name}
                      </td>
                      <td className="py-3 px-4 text-ink-secondary">
                        {mod.description}
                      </td>
                      <td className="py-3 px-4 text-center font-mono text-ink">
                        {mod.hours}h
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold ${
                          mod.complexity === "High" 
                            ? "bg-rose-50 text-rose-600 border border-rose-200" 
                            : mod.complexity === "Medium"
                            ? "bg-amber-50 text-amber-600 border border-amber-200"
                            : "bg-slate-100 text-slate-600 border border-slate-200"
                        }`}>
                          {mod.complexity}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right font-mono font-bold text-ink whitespace-nowrap">
                        {formatCurrency(modCost, currency)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Technology Architecture Recommendations */}
        <div className="space-y-4 page-break-avoid">
          <h2 className="text-sm font-bold uppercase tracking-wider text-ink font-mono flex items-center gap-2">
            <Cpu className="w-4 h-4 text-emerald" />
            <span>4. Recommended Technical Architecture</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {Object.entries(data.techStack).map(([layer, desc]) => (
              <div key={layer} className="p-4 rounded-xl border border-line-subtle bg-surface-subtle">
                <div className="text-[10px] uppercase font-mono tracking-wider text-ink-muted mb-1 font-semibold">
                  {layer}
                </div>
                <div className="text-xs font-semibold text-ink leading-snug">
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Recurring Costs (Opex) */}
        <div className="space-y-4 page-break-avoid">
          <h2 className="text-sm font-bold uppercase tracking-wider text-ink font-mono flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald" />
            <span>5. Estimated Operating Expenses (Recurring Opex)</span>
          </h2>

          <div className="overflow-x-auto rounded-xl border border-line-subtle">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-subtle border-b border-line-subtle text-ink-muted font-mono uppercase text-[10px]">
                <tr>
                  <th className="py-3 px-4 font-semibold">Provider / Service</th>
                  <th className="py-3 px-4 font-semibold">Usage Metric & Benchmark</th>
                  <th className="py-3 px-4 font-semibold text-right">Est. Monthly Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line-subtle">
                {data.recurringOpex.map((item, idx) => {
                  const monthlyCost = isUSD 
                    ? item.estimatedMonthlyUSD 
                    : Math.round(item.estimatedMonthlyUSD * 278.50);

                  return (
                    <tr key={idx} className="hover:bg-surface-subtle/50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-ink">
                        {item.service}
                      </td>
                      <td className="py-3 px-4 text-ink-secondary font-mono text-[11px]">
                        {item.unitMetric}
                      </td>
                      <td className="py-3 px-4 text-right font-mono font-bold text-emerald">
                        ~{formatCurrency(monthlyCost, currency)} / mo
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Assumptions & Exclusions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 page-break-avoid">
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink font-mono">
              Scope Assumptions
            </h3>
            <ul className="space-y-2 text-xs text-ink-secondary">
              {data.assumptions.map((assump, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald shrink-0 mt-1.5" />
                  <span>{assump}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink font-mono text-rose-600">
              Explicit Exclusions
            </h3>
            <ul className="space-y-2 text-xs text-ink-secondary">
              {data.exclusions.map((excl, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                  <span>{excl}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Research Citations */}
        {data.researchCitations && data.researchCitations.length > 0 && (
          <div className="space-y-3 pt-6 border-t border-line-subtle page-break-avoid">
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink font-mono flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-emerald" />
              <span>Grounded Research Sources (Tavily Engine)</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {data.researchCitations.map((cite) => (
                <a
                  key={cite.id}
                  href={cite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-line-subtle bg-surface-subtle hover:bg-white hover:border-ink transition-all block group"
                >
                  <div className="font-semibold text-ink group-hover:text-emerald transition-colors line-clamp-1">
                    [{cite.id}] {cite.title}
                  </div>
                  <div className="text-[11px] font-mono text-ink-muted truncate mt-0.5">
                    {cite.url}
                  </div>
                  <div className="text-[11px] text-ink-secondary mt-1 line-clamp-2">
                    {cite.snippet}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Document Footer Signature */}
        <div className="pt-8 border-t border-line-subtle flex flex-col sm:flex-row items-center justify-between text-xs text-ink-muted font-mono">
          <div>
            ScopeCraft AI Quotation Engine &bull; Ref: {data.quotationId}
          </div>
          <div>
            Valid for 30 days from generation date.
          </div>
        </div>
      </div>
    </div>
  );
}
