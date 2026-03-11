import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Free Consultation | Founder TTR",
  description:
    "Schedule a free 15-minute consultation about credit repair, funding, or AI trading. No obligation, no hidden fees.",
};

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
