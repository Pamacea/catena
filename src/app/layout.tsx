import type { Metadata, Viewport } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://catena.vercel.app"),
  title: {
    default: "Catena — Chaîne de la Tradition",
    template: "%s | Catena",
  },
  description:
    "Exploration de la tradition chrétienne à travers la Bible, la doctrine, le catéchisme et la liturgie.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Catena",
    title: "Catena — Chaîne de la Tradition",
    description:
      "Exploration de la tradition chrétienne à travers la Bible, la doctrine, le catéchisme et la liturgie.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f3f0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta name="google-site-verification" content="RngM7SyDMb5xACx10fCkpCN6tsXHl8t2Y8FTNGsq9Cc" />
      </head>
      <body
        className={`${inter.variable} ${ebGaramond.variable} font-sans antialiased bg-stone-200 text-ink-900`}
      >
        {children}
        <Analytics mode="production" />
      </body>
    </html>
  );
}
