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
    "Serviços de guincho 24h, reboque e assistência veicular em Teotônio Vilela e região de Alagoas. Atendemos carros, motos, vans, caminhões leves e máquinas em um raio de até 250km.",
  url: "https://vsreboque.kltecnologia.com",
  telephone: "+55-82-99192-6889",
  alternateName: "VS Reboque Assistência Veicular 24h",
  email: "valmirvitor41@gmail.com",
  taxID: "67.083.875/0001-75",
  logo: "https://vsreboque.kltecnologia.com/favicon.png",
  image: "https://vsreboque.kltecnologia.com/favicon.png",
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
    { "@type": "AdministrativeArea", "name": "Teotônio Vilela" },
    { "@type": "AdministrativeArea", "name": "Arapiraca" },
    { "@type": "AdministrativeArea", "name": "São Miguel dos Campos" },
    { "@type": "AdministrativeArea", "name": "Campo Alegre" },
    { "@type": "AdministrativeArea", "name": "Junqueiro" },
    { "@type": "AdministrativeArea", "name": "Coruripe" },
    { "@type": "AdministrativeArea", "name": "Penedo" },
    { "@type": "AdministrativeArea", "name": "Maceió" },
    { "@type": "AdministrativeArea", "name": "Palmeira dos Índios" },
    { "@type": "AdministrativeArea", "name": "Boca da Mata" },
    { "@type": "AdministrativeArea", "name": "Limoeiro de Anadia" },
    { "@type": "AdministrativeArea", "name": "São Sebastião" },
    { "@type": "AdministrativeArea", "name": "Rio Largo" },
    { "@type": "AdministrativeArea", "name": "Marechal Deodoro" },
    { "@type": "AdministrativeArea", "name": "Propriá" },
    { "@type": "AdministrativeArea", "name": "Garanhuns" },
    { "@type": "AdministrativeArea", "name": "Alagoas" }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Reboque, Guincho e Assistência Veicular 24h",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reboque de Carros e SUVs",
          description: "Guincho rápido para automóveis de passeio, SUVs e caminhonetes."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reboque de Motos",
          description: "Transporte seguro e especializado para motocicletas com prancha adaptada."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reboque de Vans e Caminhões Leves",
          description: "Guincho com plataforma reforçada para vans, utilitários e caminhões de pequeno porte."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Socorro e Carga de Bateria (Chupeta)",
          description: "Auxílio de partida rápida para panes elétricas de bateria na rodovia ou residência."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Troca de Pneu Furado",
          description: "Assistência ágil para troca de pneu furado ou danificado na estrada."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pane Seca / Entrega de Combustível",
          description: "Suporte com abastecimento emergencial de combustível (gasolina/diesel)."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reboque de Máquinas e Equipamentos",
          description: "Transporte de pequenas máquinas industriais ou agrícolas com total segurança."
        }
      }
    ],
  },
  sameAs: [
    "https://wa.me/5582991926889?text=Ol%C3%A1%2C%20preciso%20de%20um%20reboque%2Fassist%C3%AAncia.%20Pode%20me%20ajudar%3F",
    "https://wa.me/5582999820076?text=Ol%C3%A1%2C%20preciso%20de%20um%20reboque%2Fassist%C3%AAncia.%20Pode%20me%20ajudar%3F",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vsreboque.kltecnologia.com"),
  title: "Guincho e Reboque 24h | Teotônio Vilela e Região (250km) | VS Reboque",
  description:
    "VS Reboque — Guincho 24 horas e reboque veicular ágil para carros, motos, vans e utilitários. Atendimento em Teotônio Vilela, Arapiraca, São Miguel dos Campos, Coruripe, Campo Alegre, Penedo, Maceió e região em até 250km. Chame já no WhatsApp!",
  keywords: [
    "guincho Teotônio Vilela",
    "reboque 24h Alagoas",
    "guincho Arapiraca",
    "reboque São Miguel dos Campos",
    "reboque Coruripe",
    "socorro veicular Campo Alegre",
    "guincho Junqueiro",
    "reboque Penedo",
    "guincho Maceió 24h",
    "guincho Propriá SE",
    "reboque Garanhuns PE",
    "assistência veicular BR-101",
    "socorro mecânico estrada 24 horas",
    "reboque de motos",
    "guincho para vans",
    "carga de bateria carro",
    "troca de pneu furado",
    "panes secas socorro"
  ],
  openGraph: {
    title: "VS Reboque | Guincho 24h e Assistência Veicular — Teotônio Vilela - AL",
    description:
      "Precisou de guincho? A VS Reboque oferece atendimento 24h para reboque de veículos, troca de pneus, carga de bateria e mais em Teotônio Vilela e um raio de até 250km.",
    url: "https://vsreboque.kltecnologia.com",
    siteName: "VS Reboque",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VS Reboque | Guincho e Reboque 24h — Teotônio Vilela e Região",
    description:
      "Guincho e assistência veicular 24h. Atendemos em um raio de até 250km de Teotônio Vilela - AL. Chame pelo WhatsApp!",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://vsreboque.kltecnologia.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" }
    ],
    apple: [
      { url: "/favicon.png" }
    ],
    shortcut: "/favicon.ico"
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
