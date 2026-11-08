"use client";

import { useState } from "react";
import { QuotationFormData, QuotationResponseData, ProjectCategory } from "@/lib/types";
import { CATEGORIES } from "@/lib/categories";
import { StepIndicator } from "./StepIndicator";
import { StepCategory } from "./StepCategory";
import { StepDetails } from "./StepDetails";
import { StepDynamic } from "./StepDynamic";
import { StepScale } from "./StepScale";
import { StepContact } from "./StepContact";
import { LiveResearchProgress } from "./LiveResearchProgress";
import { ProposalView } from "../proposal/ProposalView";
import { ArrowLeft, ArrowRight, Loader2, Sparkles, AlertCircle } from "lucide-react";

const STEP_LABELS = [
  "Category",
  "Project Scope",
  "Requirements",
  "Scale & Tech",
  "Contact & Review"
];

const INITIAL_FORM_DATA: QuotationFormData = {
  projectCategory: "AI Voice Agent",
  projectName: "OmniVoice Receptionist AI",
  projectDescription: "An intelligent autonomous voice receptionist for dental clinics. The system answers inbound phone calls 24/7, checks dentist availability via Google Calendar API, books and reschedules appointments, and provides warm SIP transfer to human desk staff when complex cases are detected.",
  targetAudience: "Dental patients and clinic front-desk staff",
  industryNiche: "Healthcare / Dentistry",
  expectedOutcome: "Zero missed patient inquiries and 60% reduction in phone call burden for staff.",
  dynamicFields: {
    callDirection: "Both Inbound & Outbound",
    callVolume: "500 - 2,500 minutes/month",
    telephonyProvider: "Twilio Voice SIP",
    voiceModel: "Deepgram Nova-2 + ElevenLabs",
    humanHandoff: true,
    calendarBooking: "Google Calendar & Cal.com"
  },
  complexity: "Moderate",
  targetTimeline: "Standard (6-8 weeks)",
  budgetRange: "$5,000 - $12,000",
  preferredTechStack: "Twilio SIP, LiveKit WebRTC, Next.js, Deepgram STT, Gemini 1.5 Flash",
  contactName: "Dr. Sarah Jenkins",
  contactEmail: "sarah.jenkins@apexdental.com",
  companyName: "Apex Dental Clinic",
  currency: "USD"
};

export function QuotationWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuotationFormData>(INITIAL_FORM_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<QuotationResponseData | null>(null);

  // Field update handler
  const handleFieldChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  // Dynamic field update handler
  const handleDynamicChange = (fieldId: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      dynamicFields: {
        ...prev.dynamicFields,
        [fieldId]: value
      }
    }));
  };

  // Step 1 Category selector
  const handleCategorySelect = (category: ProjectCategory) => {
    const catDef = CATEGORIES.find((c) => c.id === category);
    const defaultDynamic: Record<string, any> = {};
    if (catDef && catDef.dynamicFields) {
      catDef.dynamicFields.forEach((f) => {
        if (f.defaultValue !== undefined) {
          defaultDynamic[f.id] = f.defaultValue;
        }
      });
    }

    setFormData((prev) => ({
      ...prev,
      projectCategory: category,
      dynamicFields: defaultDynamic
    }));
  };

  // Validation before proceeding
  const validateStep = (currentStep: number): boolean => {
    setError(null);
    if (currentStep === 2) {
      if (!formData.projectName.trim()) {
        setError("Please enter a Project Name or title.");
        return false;
      }
      if (!formData.projectDescription.trim() || formData.projectDescription.trim().length < 20) {
        setError("Please provide a descriptive project overview (at least 20 characters).");
        return false;
      }
    }

    if (currentStep === 5) {
      if (!formData.contactName.trim()) {
        setError("Please enter your name.");
        return false;
      }
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (!formData.contactEmail.trim() || !emailRegex.test(formData.contactEmail.trim())) {
        setError("Please enter a valid work email address.");
        return false;
      }
    }

    return true;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 5));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setError(null);
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Submit form to API
  const handleSubmit = async () => {
    if (!validateStep(5)) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const json = await response.json();

      if (!response.ok || !json.success) {
        throw new Error(json.error || "Failed to generate quotation. Please review inputs.");
      }

      setResult(json.data);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred. Please check network connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setStep(1);
  };

  const handleEdit = () => {
    setResult(null);
    setStep(2);
  };

  // Render proposal if already generated
  if (result) {
    return <ProposalView data={result} onReset={handleReset} onEdit={handleEdit} />;
  }

  // Render loading state if currently processing
  if (isLoading) {
    return (
      <LiveResearchProgress
        projectName={formData.projectName || "Custom Project"}
        category={formData.projectCategory}
      />
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6">
      {/* Step Indicator */}
      <StepIndicator
        currentStep={step}
        totalSteps={5}
        stepLabels={STEP_LABELS}
      />

      {/* Error Alert */}
      {error && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-center gap-3">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
          <span>{error}</span>
        </div>
      )}

      {/* Step Views */}
      <div className="bg-white rounded-2xl border border-line-subtle p-6 sm:p-10 shadow-elevated">
        {step === 1 && (
          <StepCategory
            selectedCategory={formData.projectCategory}
            onSelect={handleCategorySelect}
          />
        )}

        {step === 2 && (
          <StepDetails
            projectName={formData.projectName}
            projectDescription={formData.projectDescription}
            targetAudience={formData.targetAudience}
            industryNiche={formData.industryNiche}
            expectedOutcome={formData.expectedOutcome}
            onChange={handleFieldChange}
          />
        )}

        {step === 3 && (
          <StepDynamic
            category={formData.projectCategory}
            dynamicValues={formData.dynamicFields}
            onChange={handleDynamicChange}
          />
        )}

        {step === 4 && (
          <StepScale
            complexity={formData.complexity}
            targetTimeline={formData.targetTimeline}
            budgetRange={formData.budgetRange}
            preferredTechStack={formData.preferredTechStack}
            currency={formData.currency}
            onChange={handleFieldChange}
          />
        )}

        {step === 5 && (
          <StepContact
            formData={formData}
            onChange={handleFieldChange}
          />
        )}

        {/* Wizard Controls */}
        <div className="mt-10 pt-6 border-t border-line-subtle flex items-center justify-between gap-4">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg border border-line-subtle text-xs sm:text-sm font-semibold text-ink-secondary hover:text-ink hover:bg-surface-subtle transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 5 ? (
            <button
              type="button"
              onClick={nextStep}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg bg-ink text-white text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-all shadow-subtle active:scale-95"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-emerald text-white text-xs sm:text-sm font-bold hover:bg-emerald-hover transition-all shadow-card active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate Research-Backed Quotation</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
