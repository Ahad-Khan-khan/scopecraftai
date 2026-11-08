import { CategoryDefinition, ProjectCategory } from "./types";

export const CATEGORIES: CategoryDefinition[] = [
  {
    id: "AI Voice Agent",
    title: "AI Voice Agent",
    description: "Inbound & outbound automated phone agents with ultra-low latency conversational WebRTC and telephony sync.",
    iconName: "PhoneCall",
    badge: "Hot Vertical",
    dynamicFields: [
      {
        id: "callDirection",
        label: "Call Direction",
        type: "select",
        options: ["Inbound (Customer Inquiries)", "Outbound (Follow-ups & Reminders)", "Both Inbound & Outbound"],
        defaultValue: "Both Inbound & Outbound",
        helperText: "Determines SIP trunk routing and concurrency setup."
      },
      {
        id: "callVolume",
        label: "Estimated Monthly Call Volume",
        type: "select",
        options: ["Under 500 minutes/month", "500 - 2,500 minutes/month", "2,500 - 10,000 minutes/month", "10,000+ minutes/month"],
        defaultValue: "500 - 2,500 minutes/month"
      },
      {
        id: "telephonyProvider",
        label: "Preferred Telephony Carrier",
        type: "select",
        options: ["Twilio Voice SIP", "Telnyx", "Plivo / Vonage", "Agency Recommended"],
        defaultValue: "Twilio Voice SIP"
      },
      {
        id: "voiceModel",
        label: "Speech Synthesis & Recognition Engine",
        type: "select",
        options: ["Deepgram Nova-2 + ElevenLabs", "OpenAI Realtime Voice API", "Cartesia Sonic + Whisper", "Standard Google Cloud TTS/STT"],
        defaultValue: "Deepgram Nova-2 + ElevenLabs"
      },
      {
        id: "humanHandoff",
        label: "Live Human Agent Transfer Fallback?",
        type: "boolean",
        defaultValue: true,
        helperText: "Includes warm SIP forwarding to a human desk phone if the AI detects complex escalations."
      },
      {
        id: "calendarBooking",
        label: "Direct Calendar & EHR/CRM Integration",
        type: "text",
        placeholder: "e.g. Google Calendar, Cal.com, HubSpot, Salesforce",
        defaultValue: "Google Calendar & Cal.com"
      }
    ]
  },
  {
    id: "SaaS Development",
    title: "SaaS Application",
    description: "Scalable B2B or B2C web applications with authentication, billing tiers, and multi-tenancy.",
    iconName: "Layers",
    badge: "High Value",
    dynamicFields: [
      {
        id: "multiTenancy",
        label: "Multi-Tenancy Model",
        type: "select",
        options: ["Shared DB with Organization Isolation", "Dedicated Database per Tenant (Enterprise)", "Single Tenant MVP"],
        defaultValue: "Shared DB with Organization Isolation"
      },
      {
        id: "billingModel",
        label: "Monetization & Billing",
        type: "select",
        options: ["Stripe Recurring Subscriptions (Tiers)", "Usage-Based Metered Billing", "One-Time License", "Freemium with Feature Gating"],
        defaultValue: "Stripe Recurring Subscriptions (Tiers)"
      },
      {
        id: "authProvider",
        label: "User Authentication & RBAC",
        type: "select",
        options: ["Supabase Auth + Row-Level Security", "Clerk Authentication", "Custom NextAuth + Session Cookies", "Auth0 Enterprise SSO"],
        defaultValue: "Supabase Auth + Row-Level Security"
      },
      {
        id: "adminDashboard",
        label: "Internal Admin & Operations Portal?",
        type: "boolean",
        defaultValue: true,
        helperText: "Includes user impersonation, plan overrides, telemetry metrics, and financial reporting."
      }
    ]
  },
  {
    id: "AI System Development",
    title: "AI System & RAG Platform",
    description: "Custom intelligent systems with Retrieval-Augmented Generation (RAG), vector search, and agent orchestration.",
    iconName: "Cpu",
    badge: "Specialized",
    dynamicFields: [
      {
        id: "ragRequirement",
        label: "Knowledge Base / RAG Ingestion",
        type: "select",
        options: ["Dynamic Vector RAG (PDFs, Docs, Web scraping)", "Structured SQL RAG (Text-to-SQL)", "Fine-Tuned Specialized Model", "Prompt-Engineered Standard LLM"],
        defaultValue: "Dynamic Vector RAG (PDFs, Docs, Web scraping)"
      },
      {
        id: "vectorDb",
        label: "Vector Store Infrastructure",
        type: "select",
        options: ["pgvector (Supabase / PostgreSQL)", "Pinecone Serverless", "Qdrant", "ChromaDB"],
        defaultValue: "pgvector (Supabase / PostgreSQL)"
      },
      {
        id: "llmProvider",
        label: "Primary LLM Family",
        type: "select",
        options: ["Google Gemini (1.5 Flash / Pro)", "OpenAI (GPT-4o / GPT-4o-mini)", "Anthropic Claude 3.5 Sonnet", "Self-Hosted Open Source (Llama-3 via Ollama/vLLM)"],
        defaultValue: "Google Gemini (1.5 Flash / Pro)"
      },
      {
        id: "autonomousWorkflows",
        label: "Multi-Step Autonomous Agent Loops?",
        type: "boolean",
        defaultValue: true,
        helperText: "Enables agents to call external tools, verify intermediate outputs, and self-correct."
      }
    ]
  },
  {
    id: "AI Chatbot",
    title: "AI Chatbot & Support Agent",
    description: "Conversational intelligence widgets for website customer support, internal onboarding, and lead capture.",
    iconName: "Bot",
    badge: "Popular",
    dynamicFields: [
      {
        id: "deploymentChannels",
        label: "Chatbot Embed Surfaces",
        type: "select",
        options: ["Website Floating Widget", "WhatsApp / Telegram Integration", "Slack / Discord Bot", "Omnichannel (Web + WhatsApp + Slack)"],
        defaultValue: "Website Floating Widget"
      },
      {
        id: "leadCapture",
        label: "Automated Lead Qualification & CRM Sync",
        type: "boolean",
        defaultValue: true,
        helperText: "Captures visitor emails/phone numbers and synchronizes directly into your sales pipeline."
      },
      {
        id: "docCount",
        label: "Size of Internal Knowledge Base",
        type: "select",
        options: ["Compact (< 25 articles/documents)", "Moderate (25 - 200 documents)", "Extensive (200+ manuals, policies & APIs)"],
        defaultValue: "Moderate (25 - 200 documents)"
      }
    ]
  },
  {
    id: "E-Commerce Development",
    title: "E-Commerce Platform",
    description: "High-conversion digital storefronts, cart checkouts, inventory synchronizers, and payment processors.",
    iconName: "ShoppingBag",
    badge: "Commerce",
    dynamicFields: [
      {
        id: "productCatalogSize",
        label: "Expected SKU / Product Count",
        type: "select",
        options: ["Boutique (< 50 products)", "Mid-Market (50 - 1,000 products)", "Enterprise / Multi-Vendor (1,000+ products)"],
        defaultValue: "Mid-Market (50 - 1,000 products)"
      },
      {
        id: "paymentGateways",
        label: "Payment Processors Required",
        type: "select",
        options: ["Stripe & Apple Pay", "Multi-Gateway (Stripe + PayPal)", "Local Pakistani (JazzCash, Easypaisa, Bank Transfer)", "Global Multi-Currency + Local Methods"],
        defaultValue: "Global Multi-Currency + Local Methods"
      },
      {
        id: "inventorySync",
        label: "Automated 3PL / Inventory Stock Sync?",
        type: "boolean",
        defaultValue: true
      }
    ]
  },
  {
    id: "CRM / Management System",
    title: "CRM & ERP Portal",
    description: "Tailored business operations management, deal pipeline tracking, role-based workflows, and reporting.",
    iconName: "Building2",
    badge: "Internal Ops",
    dynamicFields: [
      {
        id: "userRoles",
        label: "Access Control Roles Required",
        type: "select",
        options: ["Standard (Admin, Manager, Staff)", "Complex RBAC (Granular permissions per department)", "Client Portal + Internal Staff"],
        defaultValue: "Standard (Admin, Manager, Staff)"
      },
      {
        id: "reportingAudit",
        label: "Audit Logs & Exportable Analytics (CSV/PDF)",
        type: "boolean",
        defaultValue: true
      }
    ]
  },
  {
    id: "Workflow Automation",
    title: "Workflow Automation (n8n)",
    description: "Event-driven integration pipelines, webhooks, automated document generation, and CRM synchronizers.",
    iconName: "GitMerge",
    badge: "Automation",
    dynamicFields: [
      {
        id: "toolingStack",
        label: "Primary Automation Orchestrator",
        type: "select",
        options: ["Self-Hosted n8n Instance", "Make.com / Zapier", "Custom Serverless Node/Python Workers"],
        defaultValue: "Self-Hosted n8n Instance"
      },
      {
        id: "systemsToConnect",
        label: "Third-Party Tools to Connect",
        type: "text",
        placeholder: "e.g. Gmail, Google Sheets, HubSpot, Slack, Stripe",
        defaultValue: "Gmail, Google Sheets, Slack, Stripe"
      }
    ]
  },
  {
    id: "Website Development",
    title: "Corporate Website",
    description: "Modern, performant marketing websites with CMS content management, SEO optimization, and motion polish.",
    iconName: "Globe",
    badge: "Essential",
    dynamicFields: [
      {
        id: "pageCount",
        label: "Estimated Page Count",
        type: "select",
        options: ["Single-Page High-Conversion Landing", "Standard Corporate (4 - 7 pages)", "Extensive Web Portal (8 - 15+ pages)"],
        defaultValue: "Standard Corporate (4 - 7 pages)"
      },
      {
        id: "cmsRequirement",
        label: "Content Management System (CMS)",
        type: "select",
        options: ["Headless CMS (Sanity / Strapi)", "MDX Local Content Engine", "Notion as CMS", "Static Code (No CMS needed)"],
        defaultValue: "Headless CMS (Sanity / Strapi)"
      },
      {
        id: "seoAuditing",
        label: "Full Technical SEO & OpenGraph Optimization",
        type: "boolean",
        defaultValue: true
      }
    ]
  },
  {
    id: "Mobile Application",
    title: "Mobile Application",
    description: "Native-feel cross-platform iOS and Android applications with push notifications and offline sync.",
    iconName: "Smartphone",
    badge: "Native / Cross",
    dynamicFields: [
      {
        id: "framework",
        label: "Preferred Mobile Framework",
        type: "select",
        options: ["React Native (Expo EAS)", "Flutter", "PWA (Progressive Web App)", "Agency Recommendation"],
        defaultValue: "React Native (Expo EAS)"
      },
      {
        id: "pushNotifications",
        label: "Automated Push Notifications & Deep Linking",
        type: "boolean",
        defaultValue: true
      }
    ]
  },
  {
    id: "Custom Software",
    title: "Custom Engineering",
    description: "Bespoke engineering architectures, custom backend microservices, real-time data pipelines, or algorithmic systems.",
    iconName: "Wrench",
    badge: "Custom",
    dynamicFields: [
      {
        id: "architectureType",
        label: "Architectural Focus",
        type: "select",
        options: ["High-Throughput REST/GraphQL API", "Real-Time WebSocket Engine", "Custom Data Scraping & Pipeline", "Enterprise Legacy Migration"],
        defaultValue: "High-Throughput REST/GraphQL API"
      }
    ]
  }
];
