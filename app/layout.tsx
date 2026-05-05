import type { Metadata } from "next"
import type React from "react"
import { AppToaster } from "@/components/ui/toast"
import GlobalNavbar from "@/components/GlobalNavbar"
import Footer from "@/components/Footer"
import Script from "next/script"
import GoogleAnalyticsTracker from "@/components/GoogleAnalyticsTracker"
import "./globals.css"
import SocialShare from "@/components/SocialShare"

export const metadata: Metadata = {
  title: "Thibaut Vanden Eynden | Portfolio",
  description: "Grafisch Ontwerp & Digitale Media",
  openGraph: {
    title: "Thibaut Vanden Eynden | Portfolio",
    description: "Grafisch Ontwerp & Digitale Media",
    url: "https://stthibaut.netlify.app",
    siteName: "Thibaut Vanden Eynden",
    locale: "nl_BE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thibaut Vanden Eynden – Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thibaut Vanden Eynden | Portfolio",
    description: "Grafisch Ontwerp & Digitale Media",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://stthibaut.netlify.app",
  },
  authors: [{ name: "Thibaut Vanden Eynden" }],
  keywords: [
  "grafisch ontwerp",
  "digitale media",
  "portfolio",
  "student",
  "Thibaut Vanden Eynden",
  "graphic design",
  "digital media",
  "branding",
  "visuele identiteit",
  "visual identity",
  "fotografie",
  "photography",
  "typografie",
  "typography",
  "packaging design",
  "logo design",
  "motion design",
  "web design",
  "UI design",
  "UX design",
  "illustratie",
  "illustration",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Next.js",
  "Tailwind CSS",
  "Antwerpen",
  "Antwerp",
  "België",
  "Belgium",
  "AP Hogeschool",
  "grafische en digitale media",
  "creatief ontwerper",
  "creative designer",
  "freelance designer",
  "Studio Thibaut",
],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
        <body className="antialiased min-h-screen flex flex-col">
          {/* Google Analytics page view tracker */}
          <GoogleAnalyticsTracker />
          <GlobalNavbar />
          <SocialShare />  {/* ← dit toevoegen */}
          {/* De main content groeit om de footer naar beneden te duwen */}
          <main className="grow pt-24">
            {children}
          </main>
          {/* De footer staat nu gewoon onderaan de content stroom */}
          <Footer />
          <AppToaster />
        </body>
    </html>
  )
}