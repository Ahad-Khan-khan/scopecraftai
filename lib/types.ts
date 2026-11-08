export type ProjectCategory =
  | "Website Development"
  | "E-Commerce Development"
  | "SaaS Development"
  | "AI System Development"
  | "AI Chatbot"
  | "AI Voice Agent"
  | "CRM / Management System"
  | "Workflow Automation"
  | "Mobile Application"
  | "Custom Software"
  | "Other";

export type ComplexityLevel = "MVP / Simple" | "Moderate" | "Complex / Enterprise";
export type TimelineOption = "Urgent (< 4 weeks)" | "Standard (6-8 weeks)" | "Flexible (8-12+ weeks)";

export interface DynamicCategoryField {
  id: string;
  label: string;
  type: "select" | "text" | "number" | "boolean" | "multiselect";
  placeholder?: string;
  options?: string[];
  helperText?: string;
  defaultValue?: any;
}

export interface CategoryDefinition {
  id: ProjectCategory;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  dynamicFields: DynamicCategoryField[];
}

export interface QuotationFormData {
  // Step 1: Category
  projectCategory: ProjectCategory;
  
  // Step 2: Information
  projectName: string;
  projectDescription: string;
  targetAudience: string;
  industryNiche: string;
  expectedOutcome: string;
  
  // Step 3: Dynamic Requirements
  dynamicFields: Record<string, any>;
  
  // Step 4: Scale & Preferences
  complexity: ComplexityLevel;
  targetTimeline: TimelineOption;
  budgetRange: string;
  preferredTechStack: string;
  
  // Step 5: Contact
  contactName: string;
  contactEmail: string;
  companyName: string;
  additionalNotes?: string;
  currency: "USD" | "PKR";
}

export interface WBSModule {
  name: string;
  description: string;
  hours: number;
  complexity: "Low" | "Medium" | "High";
  costUSD: number;
  confidence: "High" | "Medium" | "Low";
}

export interface RecurringOpexItem {
  service: string;
  unitMetric: string;
  estimatedMonthlyUSD: number;
}

export interface ResearchCitation {
  id: number;
  title: string;
  url: string;
  snippet: string;
}

export interface QuotationResponseData {
  quotationId: string;
  projectName: string;
  projectCategory: ProjectCategory;
  clientName: string;
  clientEmail: string;
  generatedAt: string;
  summary: {
    totalHours: number;
    hourlyRateUSD: number;
    expectedCostUSD: number;
    minCostUSD: number;
    maxCostUSD: number;
    expectedCostPKR: number;
    minCostPKR: number;
    maxCostPKR: number;
    timeline: string;
    complexity: string;
    currency: "USD" | "PKR";
  };
  executiveSummary: string;
  scopeOfWork: string[];
  techStack: {
    frontend?: string;
    backend?: string;
    database?: string;
    aiModels?: string;
    infrastructure?: string;
    [key: string]: string | undefined;
  };
  modules: WBSModule[];
  recurringOpex: RecurringOpexItem[];
  assumptions: string[];
  exclusions: string[];
  confidenceRating: "High" | "Medium" | "Low";
  confidenceRationale: string;
  researchCitations: ResearchCitation[];
}

export interface ApiResponse {
  success: boolean;
  quotationId?: string;
  data?: QuotationResponseData;
  error?: string;
}
