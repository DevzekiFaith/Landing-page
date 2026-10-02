import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elevationstudiong.com.ng"),
  title: {
    default: "Diaspora Architecture & Home Design in Nigeria | Elevation Studio",
    template: "%s | Elevation Studio Nigeria",
  },
  description:
    "Design and plan your home or property in Nigeria remotely from abroad. Elevation Studio provides world-class architectural design, 3D visualisation, and project planning for Nigerians in the UK, USA, Canada, Europe and overseas.",
  keywords: [
    "architect for Nigerians abroad",
    "Nigerian architect for diaspora",
    "build house in Nigeria from UK",
    "architect in Nigeria for UK clients",
    "build in Nigeria from USA",
    "build in Nigeria from Canada",
    "house design Nigeria diaspora",
    "Nigerian house architect abroad",
    "build in Nigeria from abroad",
    "Lagos architect for diaspora",
    "Abuja architect for diaspora",
    "Ogun architect for diaspora",
    "remote architectural design Nigeria",
    "3D house design Nigeria",
    "Elevation Studio Nigeria",
    "architectural visualisation Nigeria",
    "diaspora building consultant Nigeria",
  ],
  authors: [{ name: "Elevation Studio", url: "https://www.elevationstudiong.com.ng" }],
  creator: "Elevation Studio",
  publisher: "Elevation Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Diaspora Architecture & Home Design in Nigeria | Elevation Studio",
    description:
      "Design your home or property in Nigeria from abroad. Elevation Studio provides remote architectural design, 3D visualisation and planning for Nigerians and international clients living overseas.",
    url: "https://elevationstudiong.com.ng/diaspora",
    siteName: "Elevation Studio",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=630&q=90",
        width: 1200,
        height: 630,
        alt: "Elevation Studio Diaspora Architecture & Home Design Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diaspora Architecture & Home Design in Nigeria | Elevation Studio",
    description:
      "Design your home or property in Nigeria from abroad. Remote architectural design & 3D visualisation.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=630&q=90"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://elevationstudiong.com.ng/diaspora",
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ArchitecturalFirm", "ProfessionalService", "Organization"],
      "@id": "https://elevationstudiong.com.ng/#organization",
      name: "Elevation Studio",
      alternateName: [
        "Elevation Studio Nigeria",
        "Elevation Architectural Studio",
        "Elevation Studio Diaspora Portal",
      ],
      url: "https://www.elevationstudiong.com.ng",
      logo: {
        "@type": "ImageObject",
        url: "https://www.elevationstudiong.com.ng/logo.png",
      },
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=630&q=90",
      description:
        "Elevation Studio is a premier Nigerian architectural design firm specializing in remote 3D home design, site masterplanning, and architectural visualization for Nigerians and international clients living in the diaspora (UK, US, Canada, Europe).",
      telephone: "+2349119059859",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        addressCountry: "NG",
        addressRegion: "Lagos State",
      },
      areaServed: [
        { "@type": "Country", name: "Nigeria" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Place", name: "Europe" },
        { "@type": "Place", name: "Worldwide" },
      ],
      sameAs: [
        "https://www.elevationstudiong.com.ng",
        "https://wa.me/2349119059859",
      ],
    },
    {
      "@type": "ArchitecturalService",
      "@id": "https://elevationstudiong.com.ng/#service",
      name: "Diaspora Remote Architectural Design & 3D Visualisation",
      provider: { "@id": "https://elevationstudiong.com.ng/#organization" },
      serviceType: [
        "Architectural Design",
        "3D Architectural Visualisation",
        "Residential Masterplanning",
        "Remote Architectural Consultation",
        "Diaspora House Design Planning",
      ],
      areaServed: [
        "Nigeria",
        "United Kingdom",
        "United States",
        "Canada",
        "Europe",
        "Worldwide",
      ],
      description:
        "End-to-end remote architectural design service for clients living overseas who want to build custom homes, luxury villas, or residential developments in Nigeria.",
      offers: {
        "@type": "Offer",
        url: "https://elevationstudiong.com.ng/diaspora",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://elevationstudiong.com.ng/#website",
      url: "https://elevationstudiong.com.ng",
      name: "Elevation Studio",
      description: "Architectural Design & 3D Visualisation Studio in Nigeria",
      publisher: { "@id": "https://elevationstudiong.com.ng/#organization" },
      inLanguage: "en-NG",
    },
    {
      "@type": "WebPage",
      "@id": "https://elevationstudiong.com.ng/diaspora/#webpage",
      url: "https://elevationstudiong.com.ng/diaspora",
      name: "Diaspora Architecture & Home Design in Nigeria | Elevation Studio",
      isPartOf: { "@id": "https://elevationstudiong.com.ng/#website" },
      about: { "@id": "https://elevationstudiong.com.ng/#service" },
      breadcrumb: { "@id": "https://elevationstudiong.com.ng/diaspora/#breadcrumb" },
      description:
        "Design your home or property in Nigeria from abroad. Elevation Studio provides remote architectural design, 3D visualisation and planning for Nigerians overseas.",
      inLanguage: "en-NG",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://elevationstudiong.com.ng/diaspora/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://elevationstudiong.com.ng",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Diaspora Architecture Portal",
          item: "https://elevationstudiong.com.ng/diaspora",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://elevationstudiong.com.ng/diaspora/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "CAN I WORK WITH ELEVATION STUDIO IF I LIVE ABROAD?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Elevation Studio is specifically set up to work with clients living abroad. The design process — from initial consultation to design review and feedback — is structured to be conducted remotely by video call, email, shared documents and digital design presentations. You do not need to be in Nigeria to begin.",
          },
        },
        {
          "@type": "Question",
          name: "DO I NEED TO TRAVEL TO NIGERIA BEFORE WE START?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. We can begin your project remotely. You will need to provide available site information — such as a survey plan, land documents, site photographs or coordinates — so the design process can be grounded in your actual land.",
          },
        },
        {
          "@type": "Question",
          name: "CAN YOU DESIGN A HOUSE IF I ALREADY OWN LAND?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. If you already own or are in the process of acquiring land in Nigeria, we can begin developing a design tailored specifically to your plot dimensions, orientation, climate context and requirements.",
          },
        },
        {
          "@type": "Question",
          name: "CAN I REVIEW MY DESIGN REMOTELY?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Design reviews are conducted remotely through digital presentations, scaled drawings, and 3D visualisations. You review, ask questions, and approve at key design stages from wherever you live.",
          },
        },
        {
          "@type": "Question",
          name: "DO YOU ALSO HANDLE CONSTRUCTION?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Elevation Studio focuses on the architectural design stage. This includes concept development, spatial planning, floor plans, elevations, 3D visualisation and design documentation. Services related to construction, contractor selection, site supervision and regulatory approvals are discussed at consultation based on project scope.",
          },
        },
        {
          "@type": "Question",
          name: "HOW LONG DOES THE DESIGN PROCESS TAKE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Timeline varies depending on project scope, size, complexity, and client feedback turnaround times at each review milestone. Realistic project schedules are established during the initial consultation.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-[#faf9f7] text-[#2d2926] selection:bg-[#b5784e] selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
