"use client";

import { QuotationFormData } from "@/lib/types";
import { CheckCircle2, ShieldCheck } from "lucide-react";

interface StepContactProps {
  formData: QuotationFormData;
  onChange: (field: string, value: any) => void;
}

export function StepContact({ formData, onChange }: StepContactProps) {
  return (
    <div className="space-y-6 max-w-2xl mx-auto text-left">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
          Contact Details & Executive Review
        </h2>
        <p className="mt-2 text-sm text-ink-secondary">
          Where should the finalized proposal be addressed? Verify your parameters before generation.
        </p>
      </div>

      {/* Contact Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
            Your Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={formData.contactName}
            onChange={(e) => onChange("contactName", e.target.value)}
            placeholder="e.g. Alex Morgan"
            className="w-full px-4 py-2.5 rounded-lg border border-line-subtle bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-ink placeholder:text-ink-muted"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
            Work Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            value={formData.contactEmail}
            onChange={(e) => onChange("contactEmail", e.target.value)}
            placeholder="e.g. alex@company.com"
            className="w-full px-4 py-2.5 rounded-lg border border-line-subtle bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-ink placeholder:text-ink-muted"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
          Company or Organization Name <span className="text-ink-muted font-normal">(Optional)</span>
        </label>
        <input
          type="text"
          value={formData.companyName}
          onChange={(e) => onChange("companyName", e.target.value)}
          placeholder="e.g. Acme Health Technologies"
          className="w-full px-4 py-2.5 rounded-lg border border-line-subtle bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-ink placeholder:text-ink-muted"
        />
      </div>

      {/* Pre-submission Audit Card */}
      <div className="bg-surface-subtle p-5 rounded-2xl border border-line-subtle space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink">
          <CheckCircle2 className="w-4 h-4 text-emerald" />
          <span>Scoping Audit Summary</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-1">
          <div>
            <span className="text-ink-muted block text-[10px] uppercase">Category</span>
            <span className="font-semibold text-ink">{formData.projectCategory}</span>
          </div>
          <div>
            <span className="text-ink-muted block text-[10px] uppercase">Project Title</span>
            <span className="font-semibold text-ink truncate block">{formData.projectName || "Untitled"}</span>
          </div>
          <div>
            <span className="text-ink-muted block text-[10px] uppercase">Complexity</span>
            <span className="font-semibold text-ink">{formData.complexity}</span>
          </div>
          <div>
            <span className="text-ink-muted block text-[10px] uppercase">Timeline</span>
            <span className="font-semibold text-ink">{formData.targetTimeline}</span>
          </div>
          <div>
            <span className="text-ink-muted block text-[10px] uppercase">Currency</span>
            <span className="font-semibold text-ink">{formData.currency}</span>
          </div>
          <div>
            <span className="text-ink-muted block text-[10px] uppercase">Tavily Engine</span>
            <span className="font-semibold text-emerald">Active Search</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-ink-muted pt-2">
        <ShieldCheck className="w-4 h-4 text-emerald shrink-0" />
        <span>Your project specifications are sanitized and never used for public training.</span>
      </div>
    </div>
  );
}
