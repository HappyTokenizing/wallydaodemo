import type { Metadata, Viewport } from "next";
import "./globals.css";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const vercelHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const metadataBase = new URL(
  configuredSiteUrl ?? (vercelHost ? `https://${vercelHost}` : "http://localhost:3000"),
);

export const metadata: Metadata = {
  metadataBase,
  title: "WALLY WORLD",
  description:
    "A peaceful, hand-painted town-building adventure. Wander, discover tokens, and watch a living neighborhood grow around Wally.",
  applicationName: "WALLY WORLD",
  icons: {
    icon: "/assets/wally-icon.png",
    apple: "/assets/wally-icon.png",
  },
  openGraph: {
    title: "WALLY WORLD",
    description: "Every gentle step reveals a world worth building.",
    type: "website",
    images: [{ url: "/og.png", width: 1731, height: 909 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WALLY WORLD",
    description: "Every gentle step reveals a world worth building.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#d67b4e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
