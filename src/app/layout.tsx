import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oxpier Academy | Remote Operator Training & Talent Pipeline",
  description:
    "Rigorous training, live performance benchmarks, and direct remote placement for elite virtual assistants and operators.",
  keywords: [
    "Oxpier Academy",
    "Remote Operator Training",
    "Executive Virtual Assistant",
    "Talent Leaderboard",
    "Remote Jobs",
    "Executive Assistant Training",
    "Virtual Assistant Placement",
    "Operator Pipeline",
  ],
  authors: [{ name: "Oxpier Academy" }],
  openGraph: {
    title: "Oxpier Academy | Remote Operator Training & Talent Pipeline",
    description:
      "Rigorous training, live performance benchmarks, and direct remote placement for elite virtual assistants and operators.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oxpier Academy | Remote Operator Training & Talent Pipeline",
    description:
      "Rigorous training, live performance benchmarks, and direct remote placement for elite virtual assistants and operators.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F1113",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-screen bg-[#0F1113] text-[#ECEDEF] font-sans antialiased selection:bg-[#3E5871]/30 selection:text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
