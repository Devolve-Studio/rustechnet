import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreloaderWrapper from "@/components/PreloaderWrapper";

const roboto = Roboto({
    variable: "--font-orbitron",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// src/app/layout.tsx

export const metadata = {
    title: {
        default: "Rustechnet",
        template: "%s | Rustechnet"
    },
    description: "Smart surveillance for a greener solution.",
    keywords: [
        "CCTV for solar farms", "CCTV for wind farms", "solar CCTV India", "wind energy surveillance",
        "smart surveillance for green energy", "industrial CCTV India", "green power site CCTV",
        "AI-based surveillance systems", "AI CCTV alerts", "AI security India", "AI surveillance Gujarat",
        "AI surveillance Maharashtra", "AI security Tamil Nadu", "AI surveillance Karnataka",
        "fire alarm systems for solar sites", "fire alarm systems for wind farms", "EPABX systems for renewable plants",
        "PA systems for green farms", "intercom systems for solar", "LAN networking for solar farms",
        "structured cabling solar farms", "CCTV AMC India", "AMC for industrial CCTV", "solar farm AMC contracts",
        "energy infrastructure surveillance", "sustainable energy CCTV", "cost-efficient surveillance", "fast setup CCTV",
        "renewable energy compliance systems", "eco-friendly surveillance solutions", "remote monitoring green energy",
        "CCTV installation Gujarat", "CCTV installation Maharashtra", "CCTV installation Karnataka",
        "CCTV installation Tamil Nadu", "green energy security Gujarat", "smart monitoring solar farms",
        "security for solar EPC", "solar farm control rooms", "CCTV inverters solar panels",
        "perimeter CCTV renewable sites", "IP camera solar farms", "PTZ cameras wind farms",
        "thermal cameras for solar plants", "energy-efficient surveillance", "long-distance CCTV monitoring",
        "solar energy camera solutions", "wind farm surveillance systems", "AI alert monitoring CCTV",
        "smart grid monitoring", "solar SCADA CCTV", "power plant surveillance India", "government CCTV projects India",
        "industrial site monitoring India", "IP-based PA systems", "public announcement solar plants",
        "wired LAN solar farms", "wireless LAN solar farms", "rural site surveillance India",
        "smart surveillance Tamil Nadu", "energy security Maharashtra", "industrial surveillance Karnataka",
        "multi-site CCTV deployment", "CCTV command center solar farms", "solar panel theft detection CCTV",
        "security automation solar farms", "CCTV Gujarat industrial sites", "CCTV Karnataka green energy",
        "AMC for smart CCTV systems", "solar EPC CCTV integration", "industrial security Tamil Nadu",
        "smart cameras renewable farms", "networked surveillance India", "CCTV with energy compliance",
        "AI-powered CCTV India", "high-resolution cameras for solar", "rugged CCTV systems for harsh climates",
        "remote CCTV access renewable sites", "eco-security systems", "AI-driven surveillance solutions",
        "green energy surveillance vendor India", "fire and security solar farms", "CCTV integrator for solar energy",
        "CCTV contractor India renewable", "AI surveillance companies India", "EPABX for solar industries",
        "PA system integrator India", "emergency alert systems for green energy", "LAN contractor India solar projects",
        "wind turbine CCTV cameras", "energy sector surveillance AI", "clean energy monitoring India",
        "sustainable security provider", "industrial IoT surveillance India", "AMC services Gujarat",
        "AMC services Tamil Nadu", "AMC services Maharashtra", "AMC services Karnataka",
        "fire detection renewable sector", "energy site communication systems", "public address in green energy",
        "AI video analytics renewable sites", "surveillance for utility-scale solar", "wind monitoring security systems",
        "CCTV for solar substations", "solar tracker camera monitoring", "time-lapse solar CCTV",
        "site-wide surveillance systems", "hybrid solar wind CCTV systems", "advanced surveillance clean energy",
        "real-time alerts AI CCTV", "solar CCTV remote access", "AI monitoring for solar EPCs",
        "Gujarat renewable surveillance", "Maharashtra wind site security", "Karnataka solar surveillance",
        "Tamil Nadu industrial CCTV", "India-wide green energy security", "fast deployment surveillance India",
        "remote site security solutions", "CCTV integration EPC solar", "CCTV for grid-connected solar plants",
        "CCTV for off-grid solar sites", "heavy-duty cameras solar farms", "security solution renewable infra",
        "sustainability-focused security systems India"
    ],
    openGraph: {
        title: "Rustechnet",
        description: "Smart surveillance for a greener solution.",
        url: "https://rustechnet.com",
        siteName: "Rustechnet",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Rustechnet Open Graph Image",
            }
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Rustechnet",
        description: "Smart surveillance for a greener solution.",
        images: ["/og-image.jpg"],
        creator: "@rustechnet" // if you ever have a Twitter handle
    },
    metadataBase: new URL("https://rustechnet.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
      <PreloaderWrapper>
      <Header />
      <div className="mt-25" />
        {children}
      <Footer />
      </PreloaderWrapper>
      <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "RUS Technet Solutions Pvt. Ltd.",
              url: "https://rustechnet.com",
              logo: "https://rustechnet.com/logo.webp",
              "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "SF-21, DARSHANAM TRADE CENTRE-3,NR. SURYA PALACE HOTEL, SAYAJIGUNJ, VADODARA, GUJARAT",
                  "addressLocality": "Vadodara",
                  "addressRegion": "Gujarat",
                  "postalCode": "390020",
                  "addressCountry": "IN"
              },
              "description": "RUS Technet Solutions Pvt. Ltd. provides AI-powered CCTV surveillance, fire alarm systems, EPABX, and networking solutions across India, specializing in green energy farms and industrial projects.",
              "openingHoursSpecification": [
                  {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": [
                          "Monday",
                          "Tuesday",
                          "Wednesday",
                          "Thursday",
                          "Friday",
                          "Saturday",
                          "Sunday"
                      ],
                      "opens": "00:00",
                      "closes": "23:59"
                  }
              ],
              contactPoint: [
                  {
                      "@type": "ContactPoint",
                      telephone: "+91-9727128593",
                      contactType: "office",
                      areaServed: "IN",
                      availableLanguage: ["English", "Hindi", "Gujarati"]
                  },
                  {
                      "@type": "ContactPoint",
                      telephone: "+91-8160923809",
                      contactType: "sales",
                      areaServed: "IN",
                      availableLanguage: ["English", "Hindi", "Gujarati"]
                  },
                  {
                      "@type": "ContactPoint",
                      telephone: "+91-9537747130 ",
                      contactType: "service",
                      areaServed: "IN",
                      availableLanguage: ["English", "Hindi", "Gujarati"]
                  }
              ],
              sameAs: [
                  "https://www.linkedin.com/company/rus-technet-solutions-pvt-ltd/",
                  "https://maps.app.goo.gl/pbMY2d7xgTB7QeZT8",
                  "https://www.instagram.com/rus.technet"
              ]
          })}
      </script>
      </body>
    </html>
  );
}
