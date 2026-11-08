# n8n Quotation Engine Workflow Guide

This directory contains the production-ready n8n workflow for the **AI-Powered Smart Quotation & Estimation Platform**.

## Files
- `quotation_workflow.json`: Complete importable n8n workflow JSON with all nodes, connections, and error handlers.

---

## 1. Required API Credentials & Keys

The workflow requires access to two external APIs:

1. **Google Gemini API Key**
   - **Service:** Google AI Studio / Gemini API
   - **Key Name:** `GEMINI_API_KEY`
   - **Model Used:** `gemini-1.5-flash`
   - **Acquire:** [Google AI Studio](https://aistudio.google.com/)

2. **Tavily API Key**
   - **Service:** Tavily Search API
   - **Key Name:** `TAVILY_API_KEY`
   - **Acquire:** [Tavily](https://tavily.com/)

---

## 2. Environment Variables Configuration

In your n8n instance environment (e.g., in `.env` or Docker environment variables):

```bash
# n8n Environment Configuration
WEBHOOK_URL=https://your-n8n-instance.domain.com/
N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true

# API Keys (Used by the workflow HTTP nodes)
GEMINI_API_KEY=AIzaSy...your-gemini-key
TAVILY_API_KEY=tvly-...your-tavily-key
```

> **Note on Client-Passable Keys:** The workflow is also engineered to optionally accept header overrides `x-gemini-key` and `x-tavily-key` from the Next.js API route proxy if you prefer to manage environment variables solely inside your Next.js application.

---

## 3. How to Import Into n8n

1. Log into your n8n dashboard (`http://localhost:5678` or cloud instance).
2. Click **Workflows** in the left sidebar.
3. In the top-right corner, click the **three dots menu (...)** or **Add Workflow**.
4. Select **Import from File**.
5. Choose `n8n/quotation_workflow.json`.
6. Once loaded, click **Save** in the top-right corner.
7. Toggle the workflow status switch from **Inactive** to **Active**.

---

## 4. Webhook URL Configuration

Once activated, your webhook endpoint will be:
- **Test Webhook URL:** `https://your-n8n-domain/webhook-test/generate-quotation`
- **Production Webhook URL:** `https://your-n8n-domain/webhook/generate-quotation`

---

## 5. Webhook Request Payload Contract

The workflow expects a `POST` request with `Content-Type: application/json`.

### Example Request (`POST /webhook/generate-quotation`):

```json
{
  "projectCategory": "AI Voice Agent",
  "projectName": "OmniVoice Clinic Receptionist",
  "projectDescription": "An autonomous AI phone receptionist for dental clinics that answers patient inquiries 24/7, checks dentist availability via Google Calendar, and books or reschedules appointments with human transfer fallback.",
  "targetAudience": "Dental patients and clinic front-desk staff",
  "industryNiche": "Healthcare / Dentistry",
  "expectedOutcome": "Zero missed patient phone calls and 60% reduction in front-desk call burden.",
  "complexity": "Moderate",
  "targetTimeline": "Standard (6-8 weeks)",
  "budgetRange": "$5,000 - $15,000",
  "preferredTechStack": "Twilio SIP, LiveKit WebRTC, Next.js, Deepgram STT, Gemini Flash",
  "contactName": "Dr. Sarah Jenkins",
  "contactEmail": "sarah.jenkins@apexdental.com",
  "companyName": "Apex Dental Clinic",
  "currency": "USD",
  "dynamicFields": {
    "callDirection": "Inbound & Outbound",
    "callVolume": "1,000 - 5,000 minutes/month",
    "telephony": "Twilio Voice SIP Trunking",
    "voiceEngine": "ElevenLabs / Deepgram",
    "humanHandoff": true,
    "calendarIntegration": "Google Calendar & Cal.com"
  }
}
```

---

## 6. Example Successful Webhook Response (200 OK)

```json
{
  "success": true,
  "quotationId": "QC-20261108-4821",
  "data": {
    "quotationId": "QC-20261108-4821",
    "projectName": "OmniVoice Clinic Receptionist",
    "projectCategory": "AI Voice Agent",
    "clientName": "Dr. Sarah Jenkins",
    "clientEmail": "sarah.jenkins@apexdental.com",
    "generatedAt": "2026-11-08T13:00:00.000Z",
    "summary": {
      "totalHours": 127,
      "hourlyRateUSD": 50,
      "expectedCostUSD": 6350,
      "minCostUSD": 5398,
      "maxCostUSD": 8255,
      "expectedCostPKR": 1768475,
      "minCostPKR": 1503343,
      "maxCostPKR": 2299018,
      "timeline": "Standard (6-8 weeks)",
      "complexity": "Moderate",
      "currency": "USD"
    },
    "executiveSummary": "Engineered autonomous AI telephony system integrating low-latency WebRTC audio streaming, Deepgram STT, and Google Gemini reasoning for conversational appointment booking with real-time EHR calendar sync.",
    "scopeOfWork": [
      "Twilio SIP Trunking & WebRTC Audio Pipeline",
      "Real-Time Conversational AI Voice Engine",
      "Calendar Availability & Appointment Booking Engine",
      "Human Receptionist Call Handoff & Transfer SIP Bridge",
      "Clinic Admin Dashboard with Audio Call Logs & Transcripts"
    ],
    "techStack": {
      "frontend": "Next.js 15 (React 19, Tailwind CSS, Lucide)",
      "backend": "Node.js / FastAPI WebRTC Gateway",
      "database": "PostgreSQL on Supabase",
      "aiModels": "Deepgram Nova-2 (STT), Gemini 1.5 Flash (Reasoning), ElevenLabs (TTS)",
      "infrastructure": "Twilio SIP Trunking + Vercel + Docker AWS Fargate"
    },
    "modules": [
      {
        "name": "Telephony & Audio Stream Pipeline",
        "description": "Bi-directional WebSocket audio bridge connecting Twilio SIP with WebRTC stream.",
        "hours": 35,
        "complexity": "High",
        "costUSD": 1750,
        "confidence": "High"
      },
      {
        "name": "Voice Intelligence & Prompt State Machine",
        "description": "Interruption handling, barge-in logic, and prompt state machines.",
        "hours": 32,
        "complexity": "Medium",
        "costUSD": 1600,
        "confidence": "High"
      },
      {
        "name": "Clinic Calendar & Booking Synchronization",
        "description": "Integration with Google Calendar & clinic scheduling API.",
        "hours": 25,
        "complexity": "Medium",
        "costUSD": 1250,
        "confidence": "High"
      },
      {
        "name": "Admin Portal, Transcripts & Analytics",
        "description": "Multi-tenant portal for listening to recordings and viewing appointment summaries.",
        "hours": 20,
        "complexity": "Low",
        "costUSD": 1000,
        "confidence": "High"
      },
      {
        "name": "Security, HIPAA Compliance & Production QA",
        "description": "Audio encryption in transit, load testing, and edge failure recovery.",
        "hours": 15,
        "complexity": "Medium",
        "costUSD": 750,
        "confidence": "High"
      }
    ],
    "recurringOpex": [
      {
        "service": "Twilio Voice SIP Inbound/Outbound",
        "unitMetric": "$0.014 / minute",
        "estimatedMonthlyUSD": 70
      },
      {
        "service": "Deepgram Speech-to-Text API",
        "unitMetric": "$0.0043 / audio minute",
        "estimatedMonthlyUSD": 35
      },
      {
        "service": "ElevenLabs Multilingual TTS",
        "unitMetric": "$0.18 / 1,000 characters",
        "estimatedMonthlyUSD": 45
      },
      {
        "service": "Vercel Pro & Supabase Database Compute",
        "unitMetric": "Monthly Pro subscription tier",
        "estimatedMonthlyUSD": 45
      }
    ],
    "assumptions": [
      "Client will provide Twilio account credentials and calendar scheduling API access.",
      "Telephony regulatory filings (A2P 10DLC) handled under client's business registration."
    ],
    "exclusions": [
      "24/7 dedicated human receptionist call center staffing.",
      "Hardware desk phone terminal purchases."
    ],
    "confidenceRating": "High",
    "confidenceRationale": "Directly grounded in official Twilio/Deepgram API pricing and verified agency day-rate formulas.",
    "researchCitations": [
      {
        "id": 1,
        "title": "Twilio Voice Pricing Official Guide",
        "url": "https://www.twilio.com/en-us/voice/pricing",
        "snippet": "Elastic SIP Trunking starts at $0.007/min inbound and $0.014/min outbound US."
      },
      {
        "id": 2,
        "title": "Deepgram Automated Speech Recognition Cost",
        "url": "https://deepgram.com/pricing",
        "snippet": "Nova-2 real-time streaming speech-to-text starting at $0.0043 per minute."
      }
    ]
  }
}
```

---

## 7. Testing Instructions via cURL

You can test the workflow directly via terminal:

```bash
curl -X POST https://your-n8n-instance/webhook/generate-quotation \
  -H "Content-Type: application/json" \
  -d '{
    "projectCategory": "Website Development",
    "projectName": "Apex Dental Web Portal",
    "projectDescription": "A modern responsive corporate website with patient testimonials, service catalog, and appointment inquiry form.",
    "contactEmail": "admin@apexdental.com"
  }'
```

---

## 8. Troubleshooting Guide

| Issue | Cause | Solution |
|---|---|---|
| `400 Bad Request: Missing required field(s)` | Request payload did not contain `projectName`, `projectDescription`, or valid `contactEmail`. | Verify all required fields exist in request body. |
| `HTTP Request Node 6 or 9 timed out` | n8n default HTTP timeout reached. | Node timeouts are preconfigured to 45s. Verify internet egress connectivity on your n8n host. |
| `Gemini 403 Forbidden` | `GEMINI_API_KEY` is missing or invalid. | Check `.env` or set `x-gemini-key` header in the request. |
| `Tavily 401 Unauthorized` | `TAVILY_API_KEY` is missing or invalid. | Check `.env` or set `x-tavily-key` header in the request. |
