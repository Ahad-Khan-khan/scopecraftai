"use client";

import { ComplexityLevel, TimelineOption } from "@/lib/types";

interface StepScaleProps {
  complexity: ComplexityLevel;
  targetTimeline: TimelineOption;
  budgetRange: string;
  preferredTechStack: string;
  currency: "USD" | "PKR";
  onChange: (field: string, value: any) => void;
}

export function StepScale({
  complexity,
  targetTimeline,
  budgetRange,
  preferredTechStack,
  currency,
  onChange,
}: StepScaleProps) {
  return (
    <div className="space-y-6 max-w-2xl mx-auto text-left">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
          Scale & Technical Preferences
        </h2>
        <p className="mt-2 text-sm text-ink-secondary">
          Define delivery urgency, project tier, and preferred currencies.
        </p>
      </div>

      {/* Complexity Tier Cards */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
          Project Complexity Tier
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {(["MVP / Simple", "Moderate", "Complex / Enterprise"] as ComplexityLevel[]).map((level) => {
            const isSelected = complexity === level;
            return (
              <div
                key={level}
                onClick={() => onChange("complexity", level)}
                className={`cursor-pointer p-4 rounded-xl border text-center transition-all ${
                  isSelected
                    ? "border-ink bg-surface-subtle ring-2 ring-ink shadow-card"
                    : "border-line-subtle bg-white hover:border-line-strong"
                }`}
              >
                <div className="font-bold text-sm text-ink mb-1">{level}</div>
                <div className="text-[11px] text-ink-muted">
                  {level === "MVP / Simple" && "Core features, essential CRUD, rapid launch."}
                  {level === "Moderate" && "Full auth, payments, standard integrations."}
                  {level === "Complex / Enterprise" && "High concurrency, custom AI, complex RBAC."}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timeline & Currency Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
            Target Delivery Timeline
          </label>
          <select
            value={targetTimeline}
            onChange={(e) => onChange("targetTimeline", e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-line-subtle bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-ink"
          >
            <option value="Standard (6-8 weeks)">Standard (6-8 weeks)</option>
            <option value="Urgent (< 4 weeks)">Urgent (&lt; 4 weeks - expedited)</option>
            <option value="Flexible (8-12+ weeks)">Flexible (8-12+ weeks)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
            Primary Quotation Currency
          </label>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onChange("currency", "USD")}
              className={`flex-1 py-2.5 rounded-lg border text-xs font-bold transition-all ${
                currency === "USD"
                  ? "bg-ink text-white border-ink shadow-subtle"
                  : "bg-white text-ink-secondary border-line-subtle hover:bg-surface-subtle"
              }`}
            >
              USD ($)
            </button>
            <button
              type="button"
              onClick={() => onChange("currency", "PKR")}
              className={`flex-1 py-2.5 rounded-lg border text-xs font-bold transition-all ${
                currency === "PKR"
                  ? "bg-ink text-white border-ink shadow-subtle"
                  : "bg-white text-ink-secondary border-line-subtle hover:bg-surface-subtle"
              }`}
            >
              PKR (Rs.)
            </button>
          </div>
        </div>
      </div>

      {/* Optional Budget Range */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
          Target Budget Bracket <span className="text-ink-muted font-normal">(Optional)</span>
        </label>
        <input
          type="text"
          value={budgetRange}
          onChange={(e) => onChange("budgetRange", e.target.value)}
          placeholder="e.g. $5,000 - $12,000 USD or PKR 1.5M - 3M (or leave flexible)"
          className="w-full px-4 py-2.5 rounded-lg border border-line-subtle bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-ink placeholder:text-ink-muted"
        />
      </div>

      {/* Preferred Stack */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
          Preferred Technology Stack <span className="text-ink-muted font-normal">(Optional)</span>
        </label>
        <input
          type="text"
          value={preferredTechStack}
          onChange={(e) => onChange("preferredTechStack", e.target.value)}
          placeholder="e.g. Next.js, FastAPI, Supabase, Twilio, Deepgram (or leave for AI recommendation)"
          className="w-full px-4 py-2.5 rounded-lg border border-line-subtle bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-ink placeholder:text-ink-muted"
        />
      </div>
    </div>
  );
}
