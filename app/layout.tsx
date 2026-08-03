import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
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
      images: [{ url: new URL("/og.png", metadataBase).toString(), width: 1731, height: 909 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "WALLY WORLD",
      description: "Every gentle step reveals a world worth building.",
      images: [new URL("/og.png", metadataBase).toString()],
    },
  };
}

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
