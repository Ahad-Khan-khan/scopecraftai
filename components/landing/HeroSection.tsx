"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Search, Cpu, Calculator } from "lucide-react";
import { InteractivePreview } from "./InteractivePreview";

export function HeroSection() {
  return (
    <section className="relative w-full pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden bg-gradient-to-b from-surface-subtle via-white to-white">
      {/* Subtle Grid Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#0F172A 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Value Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-subtle text-emerald-hover border border-emerald-border mb-6 shadow-subtle">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
          <span>Research-First Software Quotation & Scoping Engine</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink max-w-4xl mx-auto leading-[1.15]">
          Turn Your Project Idea Into a{" "}
          <span className="underline decoration-emerald decoration-4 underline-offset-8">
            Research-Backed
          </span>{" "}
          Quotation.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-ink-secondary max-w-2xl mx-auto leading-relaxed">
          Stop guessing software development costs. ScopeCraft analyzes your exact technical specifications, cross-references real-time vendor pricing with Tavily web research, and builds an agency-grade technical proposal in seconds.
        </p>

        {/* CTA Group */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold bg-ink text-white px-7 py-3.5 rounded-xl hover:bg-slate-800 transition-all shadow-elevated active:scale-95"
          >
            <span>Generate Your Quotation</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </Link>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-ink bg-white border border-line-subtle px-7 py-3.5 rounded-xl hover:bg-surface-subtle transition-all shadow-subtle"
          >
            <span>Explore How It Works</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-ink-muted">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald" />
            <span>Zero Hallucinated Lump-Sums</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald" />
            <span>Dual Currency (USD & PKR)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald" />
            <span>Clean Vector-Print PDF Export</span>
          </div>
        </div>

        {/* Interactive Live Sandbox Preview */}
        <div className="mt-14" id="preview">
          <InteractivePreview />
        </div>
      </div>
    </section>
  );
}
