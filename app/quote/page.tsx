import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { QuotationWizard } from "@/components/wizard/QuotationWizard";

export const metadata = {
  title: "Generate Quotation | ScopeCraft AI",
  description: "Configure your technical specifications and receive a research-backed agency quotation in seconds.",
};

export default function QuotePage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-subtle">
      <Navbar />
      <main className="flex-1">
        <QuotationWizard />
      </main>
      <Footer />
    </div>
  );
}
