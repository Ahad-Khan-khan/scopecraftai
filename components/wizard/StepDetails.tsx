"use client";

interface StepDetailsProps {
  projectName: string;
  projectDescription: string;
  targetAudience: string;
  industryNiche: string;
  expectedOutcome: string;
  onChange: (field: string, value: string) => void;
}

export function StepDetails({
  projectName,
  projectDescription,
  targetAudience,
  industryNiche,
  expectedOutcome,
  onChange,
}: StepDetailsProps) {
  return (
    <div className="space-y-6 max-w-2xl mx-auto text-left">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
          Project Identity & Scope
        </h2>
        <p className="mt-2 text-sm text-ink-secondary">
          Help our AI understand what you are building, the problem it solves, and the target audience.
        </p>
      </div>

      {/* Project Name */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
          Project Name or Working Title <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => onChange("projectName", e.target.value)}
          placeholder="e.g. Apex Dental AI Receptionist or CloudSync SaaS"
          className="w-full px-4 py-3 rounded-lg border border-line-subtle bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-ink transition-all placeholder:text-ink-muted"
        />
      </div>

      {/* Industry Niche & Target Audience */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
            Industry / Business Niche
          </label>
          <input
            type="text"
            value={industryNiche}
            onChange={(e) => onChange("industryNiche", e.target.value)}
            placeholder="e.g. Healthcare, FinTech, Real Estate, E-Commerce"
            className="w-full px-4 py-3 rounded-lg border border-line-subtle bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-ink transition-all placeholder:text-ink-muted"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
            Primary Target Audience
          </label>
          <input
            type="text"
            value={targetAudience}
            onChange={(e) => onChange("targetAudience", e.target.value)}
            placeholder="e.g. B2B Enterprise Teams, Patients, Consumers"
            className="w-full px-4 py-3 rounded-lg border border-line-subtle bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-ink transition-all placeholder:text-ink-muted"
          />
        </div>
      </div>

      {/* Comprehensive Project Description */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
          Detailed Functional Description <span className="text-rose-500">*</span>
        </label>
        <p className="text-xs text-ink-muted mb-2">
          Describe the core workflows, user actions, or integrations in natural language. The more specific your requirements, the more precise the market research.
        </p>
        <textarea
          rows={5}
          value={projectDescription}
          onChange={(e) => onChange("projectDescription", e.target.value)}
          placeholder="Explain what the system should do. For example: 'We need an autonomous voice receptionist that receives incoming customer calls via Twilio, uses Deepgram to transcribe voice in real-time, queries our Google Calendar API for open slots, and confirms bookings with an SMS notification...'"
          className="w-full px-4 py-3 rounded-lg border border-line-subtle bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-ink transition-all placeholder:text-ink-muted resize-y"
        />
      </div>

      {/* Expected Outcome */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
          Desired Business Outcome or Success Metric
        </label>
        <input
          type="text"
          value={expectedOutcome}
          onChange={(e) => onChange("expectedOutcome", e.target.value)}
          placeholder="e.g. Reduce missed client calls to zero, automate lead qualification, launch MVP within 6 weeks"
          className="w-full px-4 py-3 rounded-lg border border-line-subtle bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-ink transition-all placeholder:text-ink-muted"
        />
      </div>
    </div>
  );
}
