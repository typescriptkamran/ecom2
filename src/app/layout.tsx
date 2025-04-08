import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { TempoInit } from "@/components/tempo-init";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bloom & Basket - Premium Flower Shop",
  description:
    "Beautiful flowers for every occasion, delivered fresh to your doorstep. Shop our wide selection of bouquets, gift baskets, and personalized arrangements.",
  keywords:
    "flower delivery, bouquets, gift baskets, floral arrangements, birthday flowers, anniversary flowers, same day delivery",
  openGraph: {
    title: "Bloom & Basket - Premium Flower Shop",
    description:
      "Beautiful flowers for every occasion, delivered fresh to your doorstep.",
    url: "https://bloomandbasket.com",
    siteName: "Bloom & Basket",
    images: [
      {
        url: "https://images.unsplash.com/photo-1596438459194-f275f413d6ff?w=800&q=80",
        width: 800,
        height: 600,
        alt: "Beautiful flower arrangements from Bloom & Basket",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloom & Basket - Premium Flower Shop",
    description:
      "Beautiful flowers for every occasion, delivered fresh to your doorstep.",
    images: [
      "https://images.unsplash.com/photo-1596438459194-f275f413d6ff?w=800&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bloomandbasket.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <TempoInit />
      </body>
    </html>
  );
}
