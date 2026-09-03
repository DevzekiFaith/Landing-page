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
  title: "Diaspora Architecture & Home Design in Nigeria | Elevation Studio",
  description:
    "Design your home or property in Nigeria from abroad. Elevation Studio provides remote architectural design, 3D visualisation and planning for Nigerians and international clients living overseas.",
  keywords: [
    "architect for Nigerians abroad",
    "Nigerian architect for diaspora",
    "build house in Nigeria from UK",
    "architect in Nigeria for UK clients",
    "house design Nigeria diaspora",
    "Nigerian house architect abroad",
    "build in Nigeria from abroad",
    "Lagos architect for diaspora",
    "Ogun architect for diaspora",
    "remote architectural design Nigeria",
  ],
  openGraph: {
    title: "Diaspora Architecture & Home Design in Nigeria | Elevation Studio",
    description:
      "Design your home or property in Nigeria from abroad. Elevation Studio provides remote architectural design, 3D visualisation and planning for Nigerians and international clients living overseas.",
    url: "https://elevationstudiong.com.ng/diaspora",
    siteName: "Elevation Studio",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diaspora Architecture & Home Design in Nigeria | Elevation Studio",
    description:
      "Design your home or property in Nigeria from abroad. Remote architectural design & 3D visualisation.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://elevationstudiong.com.ng/diaspora",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ArchitecturalService",
  name: "Elevation Studio",
  url: "https://elevationstudiong.com.ng/diaspora",
  description:
    "Professional architectural design for clients living abroad who want to build, develop or invest in property in Nigeria with a remote design process.",
  areaServed: ["Nigeria", "United Kingdom", "United States", "Canada", "Europe", "Worldwide"],
  serviceType: [
    "Architectural Design",
    "3D Visualisation",
    "Residential Masterplanning",
    "Remote Architectural Design",
  ],
  provider: {
    "@type": "Organization",
    name: "Elevation Studio",
    url: "https://elevationstudiong.com.ng",
  },
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
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#faf9f7] text-[#2d2926] selection:bg-[#b5784e] selection:text-white">
        {children}
      </body>
    </html>
  );
}
