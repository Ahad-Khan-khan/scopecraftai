"use client";

import Link from "next/link";
import { ArrowRight, Layers, FileCheck2 } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-line-subtle bg-white/90 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Identity */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-ink flex items-center justify-center text-white shadow-subtle group-hover:scale-105 transition-transform">
            <Layers className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-ink text-base leading-tight">
              ScopeCraft<span className="text-emerald">.AI</span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-ink-muted uppercase">
              Technical Estimator
            </span>
          </div>
        </Link>

        {/* Navigation Anchors */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-secondary">
          <Link href="/#how-it-works" className="hover:text-ink transition-colors">
            How It Works
          </Link>
          <Link href="/#features" className="hover:text-ink transition-colors">
            Capabilities
          </Link>
          <Link href="/#preview" className="hover:text-ink transition-colors">
            Live Preview
          </Link>
          <Link href="/#faq" className="hover:text-ink transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-ink text-white px-4 py-2.5 rounded-lg hover:bg-slate-800 transition-all shadow-subtle active:scale-95"
          >
            <span>Generate Quotation</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </Link>
        </div>
      </div>
    </header>
  );
}
