import type React from "react";
import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sandesh Subedi | Full Stack Architect",
  description:
    "Architecting high-performance digital ecosystems with Next.js and modern engineering principles.",
  keywords: [
    "Next.js 15",
    "Supabase",
    "React Architect",
    "Full Stack Developer Nepal",
  ],
  authors: [{ name: "Sandesh Subedi" }],
  openGraph: {
    title: "Sandesh Subedi | Portfolio",
    description:
      "Building the future of the web with aesthetic mastery and technical precision.",
    url: "https://sandeshsubedi.dev",
    siteName: "Sandesh.sys",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandesh Subedi | Digital Architect",
    creator: "@sandeshsubedi",
  },
  metadataBase: new URL("https://sandeshsubedi.dev"),
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary`}
      >
        <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {children}

        <Toaster
          position="bottom-right"
          theme="dark"
          toastOptions={{
            style: {
              background: "var(--card)",
              borderColor: "var(--border)",
              color: "var(--foreground)",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              borderRadius: "12px",
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
