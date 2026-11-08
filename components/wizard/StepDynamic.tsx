"use client";

import { CATEGORIES } from "@/lib/categories";
import { ProjectCategory } from "@/lib/types";
import { Sparkles, HelpCircle } from "lucide-react";

interface StepDynamicProps {
  category: ProjectCategory;
  dynamicValues: Record<string, any>;
  onChange: (fieldId: string, value: any) => void;
}

export function StepDynamic({ category, dynamicValues, onChange }: StepDynamicProps) {
  const currentCategoryDef = CATEGORIES.find((c) => c.id === category) || CATEGORIES[0];
  const fields = currentCategoryDef.dynamicFields || [];

  return (
    <div className="space-y-6 max-w-2xl mx-auto text-left">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-subtle text-emerald-hover mb-2">
          <Sparkles className="w-3.5 h-3.5 text-emerald" />
          <span>Category Adaptive Questions</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
          {currentCategoryDef.title} Specifications
        </h2>
        <p className="mt-2 text-sm text-ink-secondary">
          Configure the specific architectural parameters and technical components required for your {category}.
        </p>
      </div>

      <div className="space-y-5 bg-surface-subtle p-6 rounded-2xl border border-line-subtle">
        {fields.map((field) => {
          const currentValue = dynamicValues[field.id] !== undefined ? dynamicValues[field.id] : field.defaultValue;

          if (field.type === "select") {
            return (
              <div key={field.id} className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-ink">
                  {field.label}
                </label>
                {field.helperText && (
                  <p className="text-xs text-ink-muted">{field.helperText}</p>
                )}
                <select
                  value={currentValue || ""}
                  onChange={(e) => onChange(field.id, e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-line-subtle bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-ink transition-all"
                >
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            );
          }

          if (field.type === "boolean") {
            return (
              <div
                key={field.id}
                className="flex items-center justify-between p-4 bg-white rounded-xl border border-line-subtle gap-4"
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-ink">
                    {field.label}
                  </div>
                  {field.helperText && (
                    <p className="text-xs text-ink-secondary mt-0.5">{field.helperText}</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => onChange(field.id, !currentValue)}
                  className={`w-12 h-6 rounded-full transition-colors relative focus:outline-none shrink-0 ${
                    currentValue ? "bg-emerald" : "bg-slate-300"
                  }`}
                >
                  <span
                    className={`block w-5 h-5 rounded-full bg-white shadow transform transition-transform ${
                      currentValue ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            );
          }

          return (
            <div key={field.id} className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-ink">
                {field.label}
              </label>
              {field.helperText && (
                <p className="text-xs text-ink-muted">{field.helperText}</p>
              )}
              <input
                type={field.type === "number" ? "number" : "text"}
                value={currentValue || ""}
                onChange={(e) => onChange(field.id, e.target.value)}
                placeholder={field.placeholder || ""}
                className="w-full px-4 py-2.5 rounded-lg border border-line-subtle bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-ink transition-all placeholder:text-ink-muted"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
