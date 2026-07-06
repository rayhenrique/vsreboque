import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "AutoTowing",
  name: "VS Reboque",
  url: "https://diskreboque.com.br",
  logo: "https://diskreboque.com.br/icon.png",
  image: "https://diskreboque.com.br/icon.png",
  telephone: "+5582991926889",
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
    latitude: -9.9450,
    longitude: -36.3530,
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
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-amber-500 focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
      >
        Pular para o conteúdo principal
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <Services />
        <Trust />
      </main>

      <Footer />

      {/* Floating WhatsApp CTA — always visible */}
      <FloatingWhatsApp />

      {/* PWA Install Suggestion Banner */}
      <PWAInstallPrompt />
    </>
  );
}
