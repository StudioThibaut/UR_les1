import { AppToaster } from "@/components/ui/toast"
import GlobalNavbar from "@/components/GlobalNavbar"
import Footer from "@/components/Footer"
import Script from "next/script"
import GoogleAnalyticsTracker from "@/components/GoogleAnalyticsTracker"
import VisualEditor from "@/components/VisualEditor" 
import { TitleStyleProvider } from "@/context/StyleContext"

// Fonts importeren
import {
  Inter, Roboto, Roboto_Condensed, Jost, Lexend, Sofia_Sans_Condensed, Gabarito,
  Nunito, Raleway, Oswald, Work_Sans, Quicksand, Josefin_Sans, Maven_Pro, Rubik, Exo_2,
  Catamaran, Comfortaa, Playfair_Display, Merriweather, Crimson_Pro, Noto_Serif, Bitter, Josefin_Slab,
  Alegreya, Cormorant, Cormorant_Garamond
} from "next/font/google";

import "./globals.css"
import "./editor-overrides.css" 

// --- Initialiseer alle fonts ---
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-roboto" });
const robotoCondensed = Roboto_Condensed({ subsets: ["latin"], variable: "--font-roboto-condensed" });
const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
const sofiaSansCondensed = Sofia_Sans_Condensed({ subsets: ["latin"], variable: "--font-sofia-sans-condensed" });
const gabarito = Gabarito({ subsets: ["latin"], variable: "--font-gabarito" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans" });
const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand" });
const josefinSans = Josefin_Sans({ subsets: ["latin"], variable: "--font-josefin-sans" });
const mavenPro = Maven_Pro({ subsets: ["latin"], variable: "--font-maven-pro" });
const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });
const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo-2" });
const catamaran = Catamaran({ subsets: ["latin"], variable: "--font-catamaran" });
const comfortaa = Comfortaa({ subsets: ["latin"], variable: "--font-comfortaa" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-merriweather" });
const crimsonPro = Crimson_Pro({ subsets: ["latin"], variable: "--font-crimson-pro" });
const notoSerif = Noto_Serif({ subsets: ["latin"], variable: "--font-noto-serif" });
const bitter = Bitter({ subsets: ["latin"], variable: "--font-bitter" });
const josefinSlab = Josefin_Slab({ subsets: ["latin"], variable: "--font-josefin-slab" });
const alegreya = Alegreya({ subsets: ["latin"], variable: "--font-alegreya" });
const cormorant = Cormorant({ subsets: ["latin"], variable: "--font-cormorant" });
const cormorantGaramond = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant-garamond" });

// Combineer alle variabelen in één string
const fontVariables = [
  inter.variable, roboto.variable, robotoCondensed.variable, jost.variable, 
  lexend.variable, sofiaSansCondensed.variable, gabarito.variable, nunito.variable, 
  raleway.variable, oswald.variable, workSans.variable, quicksand.variable, 
  josefinSans.variable, mavenPro.variable, rubik.variable, exo2.variable, 
  catamaran.variable, comfortaa.variable, playfair.variable, merriweather.variable, 
  crimsonPro.variable, notoSerif.variable, bitter.variable, josefinSlab.variable, 
  alegreya.variable, cormorant.variable, cormorantGaramond.variable
].join(" ");

export const metadata = {
  title: "Thibaut Vanden Eynden | Portfolio",
  description: "Grafisch Ontwerp & Digitale Media - Class of '26",
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

      {/* Voeg de fontVariables toe aan de body class */}
      <body className={`antialiased min-h-screen flex flex-col ${fontVariables}`}>
        <TitleStyleProvider>
          <GoogleAnalyticsTracker />
          <GlobalNavbar />
          <main className="grow pt-24">
            {children}
          </main>
          <Footer />
          <VisualEditor />
          <AppToaster />
        </TitleStyleProvider>
      </body>
    </html>
  )
}