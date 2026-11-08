"use client";

import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

export function StepIndicator({ currentStep, totalSteps, stepLabels }: StepIndicatorProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8 sm:mb-12">
      <div className="flex items-center justify-between">
        {stepLabels.map((label, index) => {
          const stepNum = index + 1;
          const isCompleted = stepNum < currentStep;
          const isCurrent = stepNum === currentStep;

          return (
            <div key={index} className="flex-1 flex flex-col items-center relative">
              {/* Connector line */}
              {index !== 0 && (
                <div
                  className={`absolute top-4 -left-1/2 w-full h-[2px] -z-0 transition-all ${
                    stepNum <= currentStep ? "bg-emerald" : "bg-line-subtle"
                  }`}
                />
              )}

              {/* Step Circle */}
              <div
                className={`relative z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                  isCompleted
                    ? "bg-emerald text-white shadow-subtle"
                    : isCurrent
                    ? "bg-ink text-white ring-4 ring-slate-100 shadow-card"
                    : "bg-surface-muted text-ink-muted border border-line-subtle"
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : stepNum}
              </div>

              {/* Step Label */}
              <span
                className={`mt-2 text-[11px] sm:text-xs font-medium text-center hidden md:block transition-colors ${
                  isCurrent ? "text-ink font-semibold" : isCompleted ? "text-ink-secondary" : "text-ink-muted"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
