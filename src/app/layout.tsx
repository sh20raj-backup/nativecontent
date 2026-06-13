import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Native Content | Creative Production Studio",
  description: "A premium, forward-thinking creative production company designed for the pace of modern media.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-brand-dark text-white relative font-sans overflow-x-hidden selection:bg-brand-blue selection:text-white">
        {/* Grain Noise Overlay */}
        <div className="noise-backdrop" />
        {children}
      </body>
    </html>
  );
}
