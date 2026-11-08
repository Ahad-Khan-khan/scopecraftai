import Link from "next/link";
import { Layers, ShieldCheck, Cpu, Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-line-subtle bg-surface-subtle text-ink-secondary py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-ink flex items-center justify-center text-white">
                <Layers className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="font-bold tracking-tight text-ink text-base">
                ScopeCraft<span className="text-emerald">.AI</span>
              </span>
            </div>
            <p className="text-xs text-ink-secondary leading-relaxed">
              Research-backed quotation and engineering scoping engine for modern software products, AI platforms, and web systems.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
              <span>Grounded in Tavily & Gemini AI</span>
            </div>
          </div>

          {/* Core Verticals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-4">Supported Solutions</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/quote?cat=ai-voice" className="hover:text-ink transition-colors">AI Voice Agents & Telephony</Link></li>
              <li><Link href="/quote?cat=saas" className="hover:text-ink transition-colors">B2B SaaS Architectures</Link></li>
              <li><Link href="/quote?cat=rag" className="hover:text-ink transition-colors">AI Systems & Vector RAG</Link></li>
              <li><Link href="/quote?cat=ecommerce" className="hover:text-ink transition-colors">E-Commerce & Multi-Vendor</Link></li>
              <li><Link href="/quote?cat=workflow" className="hover:text-ink transition-colors">n8n Automation Pipelines</Link></li>
            </ul>
          </div>

          {/* Architecture & Methodology */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-4">Architecture</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="hover:text-ink cursor-default">Deterministic WBS Formula</span></li>
              <li><span className="hover:text-ink cursor-default">Live Tavily Vendor Search</span></li>
              <li><span className="hover:text-ink cursor-default">Opex & Capex Segregation</span></li>
              <li><span className="hover:text-ink cursor-default">Dual Currency (USD / PKR)</span></li>
              <li><span className="hover:text-ink cursor-default">Vector Print PDF Engine</span></li>
            </ul>
          </div>

          {/* Trust & Transparency */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-4">Enterprise Trust</h4>
            <p className="text-xs text-ink-muted leading-relaxed mb-4">
              Estimates are derived from verified engineering day-rates and real-time vendor APIs. Zero hallucinated lump-sum pricing.
            </p>
            <div className="flex items-center gap-3 text-xs text-ink font-mono bg-white p-3 rounded-lg border border-line-subtle shadow-subtle">
              <ShieldCheck className="w-4 h-4 text-emerald" />
              <span>Sanitized & Prompt-Guard Protected</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-line-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
          <div>
            &copy; {new Date().getFullYear()} ScopeCraft AI. Built for modern software engineering agencies and founders.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-ink cursor-pointer">Privacy Protocol</span>
            <span className="hover:text-ink cursor-pointer">Terms of Estimation</span>
            <span className="hover:text-ink cursor-pointer">API Integration Docs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
