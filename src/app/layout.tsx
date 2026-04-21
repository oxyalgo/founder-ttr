import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AppBanner from "@/components/AppBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.phimindflow.com'),
  title: "Phi Mind Flow | AI Trading Automation",
  description:
    "8 AI agents scan 38 markets 24/7. Live trading signals, copy trading, and automated execution. Let AI trade for you while you sleep.",
  openGraph: {
    title: "Phi Mind Flow | AI Trading Automation",
    description:
      "8 AI agents scan 38 markets 24/7. Live signals. Copy trading. Automated execution.",
    type: "website",
    siteName: "Phi Mind Flow",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phi Mind Flow | AI Trading Automation',
    description: '8 AI agents scan 38 markets 24/7. Live signals. Copy trading. Automated execution.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Phi Mind Flow",
              description:
                "AI-powered trading automation. 8 AI agents scan 38 markets 24/7 for live signals, copy trading, and automated execution.",
              url: "https://www.phimindflow.com",
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                email: "support@phimindflow.com",
                contactType: "customer service",
              },
              offers: [
                {
                  "@type": "Offer",
                  name: "AI Trading Signals",
                  description: "Live AI-powered trading signals across 38 instruments",
                  price: "149",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Copy Trading",
                  description: "Automated copy trading with AI execution on your account",
                  price: "349",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Elite Trading",
                  description: "Priority execution, custom strategy, and direct analyst access",
                  price: "997",
                  priceCurrency: "USD",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppBanner />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <div className="mobile-sticky-cta">
          <a href="https://whop.com/oxy-algo-c9d2/starter-5f/?a=fitflyai" className="btn-gold w-full text-center block text-sm !py-3">
            Join Free
          </a>
        </div>
      </body>
    </html>
  );
}
