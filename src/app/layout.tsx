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
              url: "https://founderttr.com",
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
