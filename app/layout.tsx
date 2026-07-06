import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://diskreboque.com.br"),
  title: "Guincho e Reboque 24h em Teotônio Vilela - AL | VS Reboque",
  description:
    "Serviço de reboque, guincho 24 horas, transporte de cargas e assistência em estrada em Teotônio Vilela e toda a região. Chegamos rápido!",
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
    title: "Guincho e Reboque 24h em Teotônio Vilela - AL | VS Reboque",
    description:
      "Serviço de reboque, guincho 24 horas, transporte de cargas e assistência em estrada em Teotônio Vilela e toda a região. Chegamos rápido!",
    url: "https://diskreboque.com.br",
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
    canonical: "https://diskreboque.com.br",
  },
  manifest: "/manifest.json",
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
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="VS Reboque" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
