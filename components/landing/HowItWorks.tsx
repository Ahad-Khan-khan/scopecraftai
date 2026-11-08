import { FileEdit, Globe, Calculator, FileCheck } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Describe Your Project",
    description: "Select your project vertical and complete adaptive scoping questions tailored to your exact technical requirements.",
    icon: FileEdit
  },
  {
    step: "02",
    title: "AI Researches Live Data",
    description: "Tavily queries current documentation, official API pricing tables (Twilio, OpenAI, Stripe), and cloud infrastructure day-rates.",
    icon: Globe
  },
  {
    step: "03",
    title: "Deterministic Cost Math",
    description: "Our heuristic Work Breakdown Structure (WBS) computes discrete module hours, contingency buffers, and regional currency conversions.",
    icon: Calculator
  },
  {
    step: "04",
    title: "Receive Agency Proposal",
    description: "Review an executive technical dossier with tech stacks, Capex/Opex segregation, research citations, and one-click PDF export.",
    icon: FileCheck
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-20 bg-surface-subtle border-y border-line-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald mb-2">
            The Scoping Pipeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            How ScopeCraft Operates
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ink-secondary">
            A transparent four-stage pipeline that eliminates arbitrary AI guesses and grounds every dollar in auditable market data.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-6 sm:p-7 border border-line-subtle shadow-subtle hover:shadow-card transition-shadow"
              >
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-bold text-ink-subtle">
                    {s.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-surface-muted flex items-center justify-center text-ink">
                    <Icon className="w-5 h-5 text-emerald" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-ink mb-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
