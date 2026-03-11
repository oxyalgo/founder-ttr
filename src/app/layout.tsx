import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  title: "Founder TTR | Credit Repair, Funding & AI Trading",
  description:
    "Fix your credit. Get funded. Let AI trade for you. Founder TTR helps everyday people build real income through credit repair, smart funding, and automated trading.",
  openGraph: {
    title: "Founder TTR | Credit Repair, Funding & AI Trading",
    description:
      "Fix your credit. Get funded. Let AI trade for you. The Flywheel system turns bad credit into real income.",
    type: "website",
    siteName: "Founder TTR",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Founder TTR | Credit Repair, Funding & AI Trading',
    description: 'Fix your credit. Get funded. Let AI trade for you. The Flywheel system turns bad credit into real income.',
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
              name: "Founder TTR",
              description:
                "Credit repair, funding solutions, and AI-powered trading automation.",
              url: "https://www.phimindflow.com",
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                email: "support@founderttr.com",
                contactType: "customer service",
              },
              offers: [
                {
                  "@type": "Offer",
                  name: "Credit Repair",
                  description: "Professional credit repair services",
                },
                {
                  "@type": "Offer",
                  name: "Funding Assistance",
                  description: "Business and personal funding solutions",
                },
                {
                  "@type": "Offer",
                  name: "AI Trading",
                  description: "AI-powered automated trading signals and execution",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <div className="mobile-sticky-cta">
          <a href="/consultation" className="btn-gold w-full text-center block text-sm !py-3">
            Book Free Call
          </a>
        </div>
      </body>
    </html>
  );
}
