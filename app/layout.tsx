import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "VS Reboque",
  description:
    "Serviços de guincho, reboque e assistência veicular 24h em Teotônio Vilela e região de Alagoas. Atendemos carros, motos e veículos especiais.",
  url: "https://vsreboque.com.br",
  telephone: "+55-82-99192-6889",
  alternateName: "VS Reboque Assistência Veicular",
  email: "valmirvitor41@gmail.com",
  taxID: "67.083.875/0001-75",
  logo: "https://vsreboque.com.br/logo.png",
  image: "https://vsreboque.com.br/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Francisco Pôrto, 337",
    addressLocality: "Teotônio Vilela",
    addressRegion: "AL",
    postalCode: "57265-398",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -9.9167,
    longitude: -36.3667,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
  areaServed: [
    "Teotônio Vilela",
    "Alagoas",
    "AL",
    "Nordeste do Brasil",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Reboque e Assistência Veicular",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reboque de Carros",
          description:
            "Reboque de carros de todos os portes: pequenos, médios e grandes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reboque de Motocicletas",
          description: "Reboque especializado para motocicletas.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reboque de Veículos Especiais",
          description: "Reboque de veículos especiais e pesados.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transporte de Cargas",
          description:
            "Transporte local e de longa distância de cargas.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Assistência em Estrada",
          description:
            "Bateria (chupeta e substituição), entrega de combustível, troca de pneus e serviços gerais.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Motorista/Piloto de Apoio",
          description:
            "Motorista ou piloto de apoio quando necessário.",
        },
      },
    ],
  },
  sameAs: [
    "https://wa.me/5582991926889?text=Ol%C3%A1%2C%20preciso%20de%20um%20reboque%2Fassist%C3%AAncia.%20Pode%20me%20ajudar%3F",
    "https://wa.me/5582999820076?text=Ol%C3%A1%2C%20preciso%20de%20um%20reboque%2Fassist%C3%AAncia.%20Pode%20me%20ajudar%3F",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vsreboque.com.br"),
  title: "Guincho e Reboque 24h em Teotônio Vilela - AL | VS Reboque",
  description:
    "VS Reboque — Guincho e assistência veicular 24 horas em Teotônio Vilela e região de Alagoas. Reboque de carros, motos, transporte de carga, troca de pneu, socorro de bateria e mais. Chame agora pelo WhatsApp!",
  keywords: [
    "guincho Teotônio Vilela",
    "reboque 24h Alagoas",
    "assistência veicular AL",
    "socorro mecânico estrada",
    "reboque moto Teotônio Vilela",
    "VS Reboque",
    "guincho 24 horas",
    "troca de pneu",
    "socorro de bateria",
  ],
  openGraph: {
    title: "VS Reboque | Guincho e Assistência 24h — Teotônio Vilela - AL",
    description:
      "Precisou de guincho? A VS Reboque está disponível 24h para reboque, assistência em estrada e transporte de cargas. Atendemos Teotônio Vilela e toda a região de Alagoas.",
    url: "https://vsreboque.com.br",
    siteName: "VS Reboque",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VS Reboque | Guincho 24h — Teotônio Vilela - AL",
    description:
      "Guincho e assistência veicular 24h. Teotônio Vilela e região de Alagoas. Chame pelo WhatsApp!",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://vsreboque.com.br",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png" },
    ],
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
