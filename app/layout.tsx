import type { Metadata } from "next";
import { Zilla_Slab, Archivo } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Display = Zilla Slab — a sturdy, low-contrast slab. Reads like stamped
// lumber / workwear signage: heritage and rugged, but still well-built.
const display = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display-src",
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body-src",
});

const SITE_URL = "https://www.busybeaverdeckco.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Busy Beaver Deck Co. — Pacific Northwest Custom Deck Builders | Built Dam Good",
    template: "%s | Busy Beaver Deck Co.",
  },
  description:
    "Luxury custom decks & outdoor living for the Eastside and Snohomish County. Composite, Trex, TimberTech/AZEK, Fiberon & wood decks engineered for the Pacific Northwest. Family-owned since 2007. Built Dam Good.",
  keywords: [
    "deck builder Snohomish",
    "composite deck builder",
    "Trex deck installer",
    "TimberTech AZEK deck builder",
    "custom deck builder Eastside",
    "luxury outdoor living Seattle",
    "covered deck contractor",
    "waterfront deck builder Washington",
  ],
  authors: [{ name: "Josh Wight" }],
  creator: "Busy Beaver Deck Co.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Busy Beaver Deck Co.",
    title: "Busy Beaver Deck Co. — Pacific Northwest Custom Deck Builders",
    description:
      "Luxury custom decks & outdoor living for the Eastside and Snohomish County. Built Dam Good.",
    images: [
      {
        url: "/IMG_0204.jpg",
        width: 1200,
        height: 400,
        alt: "Luxury waterfront composite deck at dusk in the Pacific Northwest",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Busy Beaver Deck Co. — Pacific Northwest Custom Deck Builders",
    description:
      "Luxury custom decks & outdoor living, engineered for PNW weather. Built Dam Good.",
    images: ["/IMG_0204.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Busy Beaver Deck Co.",
  alternateName: "Busy Beaver Deck Company",
  description:
    "Luxury custom deck builder and outdoor living contractor serving the Eastside and Snohomish County, Washington. Composite, Trex, TimberTech/AZEK, Fiberon and wood decks.",
  url: SITE_URL,
  telephone: "+1-425-381-7244",
  image: `${SITE_URL}/IMG_0204.jpg`,
  logo: `${SITE_URL}/brand_transparent.png`,
  priceRange: "$$$",
  slogan: "Built Dam Good.",
  foundingDate: "2007",
  founder: { "@type": "Person", name: "Josh Wight" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Snohomish",
    addressRegion: "WA",
    addressCountry: "US",
  },
  areaServed: [
    "Snohomish",
    "Woodinville",
    "Monroe",
    "Lake Stevens",
    "Bothell",
    "Mill Creek",
    "Kirkland",
    "Bellevue",
    "Redmond",
    "Sammamish",
    "Issaquah",
    "Mercer Island",
    "Kenmore",
    "Lake Forest Park",
  ].map((c) => ({ "@type": "City", name: `${c}, WA` })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "47",
  },
  knowsAbout: [
    "Composite decking",
    "Trex decking",
    "TimberTech AZEK decking",
    "Fiberon decking",
    "Covered decks",
    "Outdoor living spaces",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${display.variable} ${archivo.variable} h-full`}
    >
      <body className="grain min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
