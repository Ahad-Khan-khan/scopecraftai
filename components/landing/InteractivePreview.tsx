"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu, PhoneCall, Layers, Globe, Shield, Sparkles } from "lucide-react";

interface Preset {
  title: string;
  category: string;
  hours: number;
  estUSD: string;
  estPKR: string;
  opex: string;
  stack: string[];
  features: string[];
}

const PRESETS: Record<string, Preset> = {
  voice: {
    title: "AI Voice Dental Receptionist",
    category: "AI Voice Agent",
    hours: 125,
    estUSD: "$6,250",
    estPKR: "PKR 1.74M",
    opex: "$115/mo (Twilio + Deepgram)",
    stack: ["Twilio SIP", "Deepgram Nova-2", "ElevenLabs", "Gemini 1.5 Flash"],
    features: ["Bi-directional WebRTC", "Google Calendar Booking", "SIP Human Transfer"]
  },
  saas: {
    title: "Multi-Tenant B2B Workflow SaaS",
    category: "SaaS Development",
    hours: 175,
    estUSD: "$8,750",
    estPKR: "PKR 2.43M",
    opex: "$75/mo (Vercel + Supabase)",
    stack: ["Next.js 15", "Supabase Auth", "Stripe Billing", "pgvector"],
    features: ["Multi-Tenant RBAC", "Tiered Metered Subscriptions", "Telemetry Audit Logs"]
  },
  web: {
    title: "Corporate Brand Portal & CMS",
    category: "Website Development",
    hours: 60,
    estUSD: "$3,000",
    estPKR: "PKR 835K",
    opex: "$20/mo (Vercel Hosting)",
    stack: ["Next.js App Router", "Tailwind CSS", "Sanity Headless CMS"],
    features: ["100/100 Core Web Vitals", "Dynamic Editorial Blog", "Automated Lead Capture"]
  }
};

export function InteractivePreview() {
  const [activeTab, setActiveTab] = useState<"voice" | "saas" | "web">("voice");
  const p = PRESETS[activeTab];

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border border-line-subtle bg-white shadow-elevated overflow-hidden text-left">
      {/* Window Header */}
      <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-line-subtle bg-surface-subtle gap-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-300" />
            <div className="w-3 h-3 rounded-full bg-amber-300" />
            <div className="w-3 h-3 rounded-full bg-emerald-300" />
          </div>
          <span className="text-xs font-mono text-ink-secondary ml-2 font-medium">
            Quotation Sandbox Preview
          </span>
        </div>

        {/* Vertical Toggles */}
        <div className="flex items-center p-1 rounded-lg bg-surface-muted text-xs font-medium">
          <button
            onClick={() => setActiveTab("voice")}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeTab === "voice"
                ? "bg-white text-ink shadow-subtle font-semibold"
                : "text-ink-secondary hover:text-ink"
            }`}
          >
            Voice AI Agent
          </button>
          <button
            onClick={() => setActiveTab("saas")}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeTab === "saas"
                ? "bg-white text-ink shadow-subtle font-semibold"
                : "text-ink-secondary hover:text-ink"
            }`}
          >
            B2B SaaS
          </button>
          <button
            onClick={() => setActiveTab("web")}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeTab === "web"
                ? "bg-white text-ink shadow-subtle font-semibold"
                : "text-ink-secondary hover:text-ink"
            }`}
          >
            Corporate Web
          </button>
        </div>
      </div>

      {/* Main Sandbox Body */}
      <div className="p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-line-subtle">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-subtle text-emerald-hover mb-2">
              <Sparkles className="w-3 h-3 text-emerald" />
              <span>Grounded Market Research Active</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight">
              {p.title}
            </h3>
            <p className="text-xs sm:text-sm text-ink-secondary mt-1">
              Category: <span className="font-semibold text-ink">{p.category}</span> &bull; Agency Rate: $50/hr
            </p>
          </div>

          {/* Pricing Badges */}
          <div className="flex items-center gap-4 bg-surface-subtle p-4 rounded-xl border border-line-subtle">
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-ink-muted">Development Capex</div>
              <div className="text-2xl font-bold font-mono text-ink">{p.estUSD}</div>
              <div className="text-[11px] font-mono text-ink-secondary">{p.estPKR}</div>
            </div>
            <div className="h-10 w-[1px] bg-line-subtle" />
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-ink-muted">Est. Opex</div>
              <div className="text-sm font-bold font-mono text-emerald">{p.opex}</div>
              <div className="text-[11px] text-ink-secondary">{p.hours} Engineering Hrs</div>
            </div>
          </div>
        </div>

        {/* Feature deliverables & Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-ink mb-3">
              Included Technical Deliverables
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-ink-secondary">
              {p.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-ink mb-3">
              Recommended Production Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((item, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-surface-muted text-ink border border-line-subtle"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-lg bg-surface-subtle border border-line-subtle text-[11px] text-ink-secondary flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-emerald shrink-0" />
              <span>Verified against Tavily 2025/2026 API documentation.</span>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-8 pt-6 border-t border-line-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-muted">
            Want an exact quotation tailored to your specific feature specifications?
          </p>
          <Link
            href="/quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-semibold bg-emerald text-white px-5 py-2.5 rounded-lg hover:bg-emerald-hover transition-all shadow-subtle"
          >
            <span>Scope Your Custom Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
