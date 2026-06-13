import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/providers/ThemeProvider";
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { ScrollProgress } from "@/app/components/widgets/ScrollProgress";
import { BackToTop } from "@/app/components/widgets/BackToTop";
import { WhatsAppButton } from "@/app/components/widgets/WhatsAppButton";
import { ChatWidget } from "@/app/components/widgets/ChatWidget";
import Preloader from "@/app/components/widgets/Preloader";
import { OfflineIndicator } from "@/app/components/widgets/OfflineIndicator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://selinyx.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Selinyx — We Build Digital Solutions That Drive Real Growth",
    template: "%s · Selinyx",
  },

  description:
    "Selinyx is a technology company specializing in AI solutions, custom software development, web & mobile apps, cloud services, and digital transformation. We turn bold ideas into scalable products.",

  keywords: [
    "AI solutions",
    "artificial intelligence",
    "software development",
    "web development",
    "mobile app development",
    "cloud services",
    "automation",
    "digital transformation",
    "SaaS development",
    "tech startup",
    "Selinyx",
  ],

  authors: [{ name: "Selinyx", url: siteUrl }],
  creator: "Selinyx",
  publisher: "Selinyx",

  // Browser tab / bookmark icon
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  // Controls how search engines crawl and display the site
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Open Graph — Facebook, LinkedIn, WhatsApp previews
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Selinyx",
    title: "Selinyx — We Build Digital Solutions That Drive Real Growth",
    description:
      "Transforming bold ideas into scalable software, AI-powered products, and digital experiences that drive real business growth.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Selinyx — Digital Solutions That Drive Real Growth",
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: "Selinyx — Digital Solutions That Drive Real Growth",
    description:
      "Transforming bold ideas into scalable software, AI-powered products, and digital experiences.",
    images: ["/og-image.png"],
    creator: "@selinyx",
  },

  // Canonical URL — prevents duplicate-content penalties
  alternates: {
    canonical: siteUrl,
  },
};

// Separate export — required by Next.js 13.4+ for themeColor / viewport
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d111e" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-ink-950`}
    >
      <body className="min-h-screen font-sans text-ink-900 antialiased dark:text-ink-50">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Preloader />
          <OfflineIndicator />
          <ScrollProgress />
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
          <WhatsAppButton />
          <ChatWidget />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
