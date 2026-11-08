"use client";

import { CATEGORIES } from "@/lib/categories";
import { ProjectCategory } from "@/lib/types";
import { 
  PhoneCall, 
  Layers, 
  Cpu, 
  Bot, 
  ShoppingBag, 
  Building2, 
  GitMerge, 
  Globe, 
  Smartphone, 
  Wrench,
  CheckCircle2
} from "lucide-react";

interface StepCategoryProps {
  selectedCategory: ProjectCategory;
  onSelect: (category: ProjectCategory) => void;
}

const ICON_MAP: Record<string, any> = {
  PhoneCall,
  Layers,
  Cpu,
  Bot,
  ShoppingBag,
  Building2,
  GitMerge,
  Globe,
  Smartphone,
  Wrench
};

export function StepCategory({ selectedCategory, onSelect }: StepCategoryProps) {
  return (
    <div className="space-y-6">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
          Select Your Project Category
        </h2>
        <p className="mt-2 text-sm text-ink-secondary">
          Choose the architectural vertical that best reflects your project. Our scoping engine will adapt specific technical inquiries accordingly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
        {CATEGORIES.map((cat) => {
          const IconComponent = ICON_MAP[cat.iconName] || Globe;
          const isSelected = selectedCategory === cat.id;

          return (
            <div
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`cursor-pointer rounded-xl p-5 border text-left transition-all relative ${
                isSelected
                  ? "border-ink bg-surface-subtle ring-2 ring-ink shadow-card"
                  : "border-line-subtle bg-white hover:border-line-strong hover:shadow-subtle"
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                    isSelected ? "bg-ink text-white" : "bg-surface-muted text-ink"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-surface-muted text-ink-secondary border border-line-subtle">
                    {cat.badge}
                  </span>
                  {isSelected && (
                    <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
                  )}
                </div>
              </div>

              <h3 className="text-sm font-bold text-ink mb-1">
                {cat.title}
              </h3>
              <p className="text-xs text-ink-secondary leading-relaxed line-clamp-2">
                {cat.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
