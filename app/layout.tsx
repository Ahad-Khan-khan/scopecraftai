import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScopeCraft AI | Research-Backed Software Estimation & Proposal Platform",
  description: "Stop guessing software development costs. ScopeCraft analyzes your exact specifications, cross-references live vendor pricing with Tavily web research, and constructs verified technical quotations in seconds.",
  keywords: ["software quotation", "AI agency estimation", "development cost calculator", "Tavily web research", "SaaS pricing benchmark"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-canvas text-ink antialiased flex flex-col selection:bg-emerald-subtle selection:text-emerald-hover">
        {children}
      </body>
    </html>
  );
}
