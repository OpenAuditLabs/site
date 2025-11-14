import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenAuditLabs",
  description: "OpenAuditLabs provides open-source tools and resources for smart contract auditing.",
  alternates: {
    canonical: "https://openauditlabs.com",
  },
  openGraph: {
    url: "https://openauditlabs.com",
    title: "OpenAuditLabs",
    description: "OpenAuditLabs provides open-source tools and resources for smart contract auditing.",
    siteName: "OpenAuditLabs",
    images: [
      {
        url: "https://openauditlabs.com/og-image.jpg", // Replace with your actual Open Graph image
        width: 1200,
        height: 630,
        alt: "OpenAuditLabs",
      },
    ],
    type: "website",
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <main id="landing-main">{children}</main>
    </div>
  );

}
