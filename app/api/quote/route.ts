import { NextRequest, NextResponse } from "next/server";
import { QuotationFormData } from "@/lib/types";

export const maxDuration = 60; // Allow sufficient time for Tavily research & Gemini reasoning

export async function POST(req: NextRequest) {
  try {
    const body: QuotationFormData = await req.json();

    // 1. Basic Server-side Validation
    if (!body.projectName || !body.projectDescription || !body.contactEmail) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: Project Name, Description, or Contact Email." },
        { status: 400 }
      );
    }

    const n8nWebhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
    const geminiApiKey = process.env.GEMINI_API_KEY;
    const tavilyApiKey = process.env.TAVILY_API_KEY;

    if (!n8nWebhookUrl) {
      return NextResponse.json(
        { 
          success: false, 
          error: "n8n Webhook URL is not configured. Please set NEXT_PUBLIC_N8N_WEBHOOK_URL in .env.local." 
        },
        { status: 500 }
      );
    }

    // 2. Dispatch to n8n Webhook
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 55000);

    let n8nRes: Response;
    try {
      n8nRes = await fetch(n8nWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(geminiApiKey ? { "x-gemini-key": geminiApiKey } : {}),
          ...(tavilyApiKey ? { "x-tavily-key": tavilyApiKey } : {}),
        },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
    } catch (fetchErr: any) {
      clearTimeout(timeoutId);
      console.error("Failed to connect to n8n webhook:", fetchErr);
      return NextResponse.json(
        {
          success: false,
          error: `Could not connect to n8n webhook at ${n8nWebhookUrl}. Ensure n8n is online and listening. Details: ${fetchErr.message || fetchErr}`
        },
        { status: 502 }
      );
    }

    clearTimeout(timeoutId);

    // Parse n8n response
    const rawText = await n8nRes.text();
    let n8nData: any = {};
    try {
      n8nData = JSON.parse(rawText);
    } catch (e) {
      n8nData = { rawResponse: rawText };
    }

    // If n8n returned an error status or node failure
    if (!n8nRes.ok || n8nData.success === false) {
      const errorMsg = n8nData.error || n8nData.message || rawText || `n8n execution failed with HTTP ${n8nRes.status}`;
      return NextResponse.json(
        {
          success: false,
          error: `n8n Workflow Error (HTTP ${n8nRes.status}): ${typeof errorMsg === "string" ? errorMsg : JSON.stringify(errorMsg)}`,
          details: n8nData
        },
        { status: n8nRes.status || 500 }
      );
    }

    // Return the verified n8n response
    return NextResponse.json(n8nData);

  } catch (error: any) {
    console.error("API Quote Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "An unexpected error occurred while generating the quotation." },
      { status: 500 }
    );
  }
}
