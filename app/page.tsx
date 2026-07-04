import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";

export default function HomePage() {
  return (
    <>
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
