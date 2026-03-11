import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Founder TTR",
  description:
    "Questions about credit repair, funding, or AI trading? Contact Founder TTR. We reply within 24 hours.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
