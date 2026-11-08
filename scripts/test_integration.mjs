// Integration test suite for ScopeCraft AI Quotation Platform
import { spawn } from "child_process";

async function runTests() {
  console.log("=== STARTING INTEGRATION TEST SUITE ===");

  // Start Next.js standalone server on port 3005 for testing
  const server = spawn("node", ["./node_modules/next/dist/bin/next", "start", "-p", "3005"], {
    stdio: "inherit"
  });

  // Wait 3 seconds for server to boot
  await new Promise((resolve) => setTimeout(resolve, 3500));

  const testCases = [
    {
      name: "Test 1: AI Voice Agent System",
      payload: {
        projectCategory: "AI Voice Agent",
        projectName: "Apex Clinic Voice Receptionist",
        projectDescription: "Inbound dental clinic phone receptionist with WebRTC audio, Twilio SIP, and Google Calendar booking.",
        targetAudience: "Dental patients",
        industryNiche: "Healthcare",
        expectedOutcome: "Zero missed patient calls",
        complexity: "Moderate",
        targetTimeline: "Standard (6-8 weeks)",
        budgetRange: "$5,000 - $10,000",
        preferredTechStack: "Twilio SIP, Deepgram, Gemini 1.5 Flash",
        contactName: "Dr. Sarah",
        contactEmail: "sarah@apex.com",
        currency: "USD"
      }
    },
    {
      name: "Test 2: Corporate Business Website",
      payload: {
        projectCategory: "Website Development",
        projectName: "Zenith Law Firm Portal",
        projectDescription: "A high-performance corporate marketing website with Sanity CMS, lawyer bios, and consultation booking form.",
        targetAudience: "Corporate clients",
        industryNiche: "Legal",
        expectedOutcome: "Increase lead conversions by 40%",
        complexity: "MVP / Simple",
        targetTimeline: "Urgent (< 4 weeks)",
        budgetRange: "$2,000 - $4,000",
        preferredTechStack: "Next.js 15, Tailwind CSS, Sanity CMS",
        contactName: "John Doe",
        contactEmail: "john@zenithlaw.com",
        currency: "USD"
      }
    },
    {
      name: "Test 3: Complex Multi-Tenant B2B SaaS",
      payload: {
        projectCategory: "SaaS Development",
        projectName: "PulseFlow Logistics SaaS",
        projectDescription: "B2B freight logistics portal with multi-tenancy, Stripe subscription billing, granular RBAC, and telemetry audit logs.",
        targetAudience: "Logistics dispatchers and carriers",
        industryNiche: "Freight & Logistics",
        expectedOutcome: "Automate dispatch tracking",
        complexity: "Complex / Enterprise",
        targetTimeline: "Flexible (8-12+ weeks)",
        budgetRange: "$15,000 - $30,000",
        preferredTechStack: "Next.js 15, Supabase Auth, PostgreSQL, Stripe",
        contactName: "Marcus Vance",
        contactEmail: "marcus@pulseflow.io",
        currency: "USD"
      }
    },
    {
      name: "Test 4: Input Validation Guardrail (Missing Required Email)",
      payload: {
        projectCategory: "AI Chatbot",
        projectName: "SupportBot",
        projectDescription: "Customer support chatbot.",
        contactEmail: "" // Empty!
      },
      expectError: true
    }
  ];

  let passed = 0;
  let failed = 0;

  for (const tc of testCases) {
    console.log(`\n▶ Running: ${tc.name}...`);
    try {
      const res = await fetch("http://localhost:3005/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tc.payload)
      });

      const json = await res.json();

      if (tc.expectError) {
        if (!json.success && res.status === 400) {
          console.log(`  ✓ Successfully rejected invalid input: "${json.error}"`);
          passed++;
        } else {
          console.error(`  ✗ Expected validation error but got:`, json);
          failed++;
        }
      } else {
        if (json.success && json.data) {
          console.log(`  ✓ Success! Quotation ID: ${json.data.quotationId}`);
          console.log(`    Total Hours: ${json.data.summary.totalHours}h | Est Capex: $${json.data.summary.minCostUSD} - $${json.data.summary.maxCostUSD}`);
          console.log(`    PKR Equivalent: PKR ${json.data.summary.expectedCostPKR.toLocaleString()}`);
          console.log(`    Modules count: ${json.data.modules.length} | Opex items: ${json.data.recurringOpex.length}`);
          passed++;
        } else {
          console.error(`  ✗ Failed:`, json);
          failed++;
        }
      }
    } catch (err) {
      console.error(`  ✗ Request exception:`, err);
      failed++;
    }
  }

  console.log(`\n=== TEST RESULTS: ${passed} PASSED, ${failed} FAILED ===`);
  server.kill();
  process.exit(failed > 0 ? 1 : 0);
}

runTests();
