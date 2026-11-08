import { Database, Search, ShieldCheck, DollarSign, Terminal, Cpu } from "lucide-react";

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald mb-2">
            Engineered For Precision
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            Beyond Standard AI Text Generation
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ink-secondary">
            Generic LLMs invent arbitrary numbers out of thin air. ScopeCraft treats software estimation as an engineering discipline.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Wide Card (2 cols) */}
          <div className="md:col-span-2 bg-surface-subtle rounded-2xl p-8 border border-line-subtle shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white border border-line-subtle flex items-center justify-center text-ink mb-4 shadow-subtle">
                <Search className="w-5 h-5 text-emerald" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-2">
                Real-Time Vendor Pricing & Documentation Extraction
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed max-w-xl">
                Instead of using outdated static assumptions, Tavily actively searches official pricing pages for Twilio, Deepgram, OpenAI, Stripe, and AWS to extract real-world operational rates.
              </p>
            </div>

            {/* Code / Mock Citation preview */}
            <div className="mt-8 bg-white p-4 rounded-xl border border-line-subtle font-mono text-xs text-ink-secondary">
              <div className="text-emerald font-semibold mb-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald" />
                <span>Verified Source Citation [1]</span>
              </div>
              <div className="text-ink font-medium">Twilio Elastic SIP Trunking Pricing 2025/2026</div>
              <div className="text-ink-muted text-[11px] truncate mt-0.5">https://www.twilio.com/en-us/voice/pricing &bull; Retrieval timestamp: Active</div>
            </div>
          </div>

          {/* Card 2: Standard Card */}
          <div className="bg-surface-subtle rounded-2xl p-8 border border-line-subtle shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white border border-line-subtle flex items-center justify-center text-ink mb-4 shadow-subtle">
                <DollarSign className="w-5 h-5 text-emerald" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-2">
                Deterministic WBS Hours
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Development hours are computed using modular work breakdowns with complexity multipliers ($0.85\times$ to $1.45\times$), not arbitrary hallucinated figures.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line-subtle text-xs font-mono text-ink-secondary">
              Formula: (Base Hours &times; Complexity Multiplier &times; Rate)
            </div>
          </div>

          {/* Card 3: Standard Card */}
          <div className="bg-surface-subtle rounded-2xl p-8 border border-line-subtle shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white border border-line-subtle flex items-center justify-center text-ink mb-4 shadow-subtle">
                <Database className="w-5 h-5 text-emerald" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-2">
                Capex vs. Opex Separation
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Clear separation between one-time software engineering investments and recurring cloud/API infrastructure operating costs.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line-subtle text-xs font-mono text-emerald font-medium">
              Zero hidden surprise bills.
            </div>
          </div>

          {/* Card 4: Wide Card (2 cols) */}
          <div className="md:col-span-2 bg-surface-subtle rounded-2xl p-8 border border-line-subtle shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white border border-line-subtle flex items-center justify-center text-ink mb-4 shadow-subtle">
                <ShieldCheck className="w-5 h-5 text-emerald" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-2">
                Multi-Currency with Purchasing Power Parity (USD & PKR)
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed max-w-xl">
                Real-time currency localization supporting both US Dollar international contracts and Pakistani Rupee (PKR) domestic estimates, with transparent exchange assumptions.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-line-subtle text-ink font-semibold">
                USD ($50/hr base rate)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-line-subtle text-ink font-semibold">
                PKR (~278.50 PKR/USD parity)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
