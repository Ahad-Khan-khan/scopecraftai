"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "How does ScopeCraft calculate development pricing without guessing?",
    a: "We decouple mathematics from natural language generation. Development hours are calculated using a deterministic Work Breakdown Structure (WBS) with base hours per vertical and verified complexity multipliers (0.85x to 1.45x). Gemini then synthesizes the architectural rationale strictly within these bounds."
  },
  {
    q: "What role does Tavily web search play in the quotation?",
    a: "Tavily queries live documentation and vendor pricing tables (Twilio, Deepgram, OpenAI, Supabase, Stripe). This ensures the operational expense (Opex) section reflects real-world current market rates rather than outdated knowledge-cutoff estimates."
  },
  {
    q: "Can I adjust currency between USD and Pakistani Rupee (PKR)?",
    a: "Yes. The quotation engine natively computes in USD and provides automatic conversion to PKR using transparent currency exchange multipliers, clearly labeling purchasing power assumptions."
  },
  {
    q: "How do I export or share the resulting quotation?",
    a: "Every quotation is assigned a unique tracking ID (e.g. QC-20261108-4821) and features a one-click Vector-Clean PDF export button. The document is styled with dedicated print rules to produce a crisp, multi-page agency proposal without broken page cuts."
  },
  {
    q: "Can this system integrate into an agency's existing n8n and CRM stack?",
    a: "Yes. The platform communicates via standard JSON webhooks. We provide the complete importable n8n workflow file (`n8n/quotation_workflow.json`) which can push quotation leads directly to HubSpot, Salesforce, or Slack."
  }
];

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-24 bg-surface-subtle border-t border-line-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald mb-2">
            Transparency & Integrity
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-ink-secondary">
            Everything you need to know about our research methodology and pricing architecture.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-line-subtle shadow-subtle overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-ink text-sm sm:text-base hover:text-emerald transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-ink-muted transition-transform shrink-0 ${
                      isOpen ? "rotate-180 text-emerald" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-ink-secondary leading-relaxed border-t border-line-subtle/50 bg-surface-subtle/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
