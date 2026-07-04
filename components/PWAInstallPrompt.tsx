"use client";

import { useEffect, useState } from "react";
import { X, Download, Share2, PlusSquare } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: Array<string>;
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function PWAInstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    // 1. Register Service Worker
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => console.log("Service Worker registrado com sucesso:", reg.scope))
        .catch((err) => console.error("Erro ao registrar Service Worker:", err));
    }

    // 2. Check if already installed / running in standalone mode
    const isStandalone = 
      window.matchMedia("(display-mode: standalone)").matches || 
      (navigator as any).standalone === true;

    if (isStandalone) {
      return; // Already installed, do not show prompt
    }

    // 3. Check if dismissed recently (stored in localStorage)
    const dismissedTime = localStorage.getItem("pwa-prompt-dismissed");
    if (dismissedTime) {
      const now = new Date().getTime();
      const diffDays = (now - parseInt(dismissedTime)) / (1000 * 60 * 60 * 24);
      if (diffDays < 7) {
        return; // Don't prompt again for 7 days
      }
    }

    // 4. Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const iosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(iosDevice);

    // 5. Listen to beforeinstallprompt event (for Android/Chrome)
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // 6. Show after 5 seconds delay
    const timer = setTimeout(() => {
      // Only show if it's iOS OR we got the deferred install prompt (Android/Chrome)
      // On some platforms we can just show generic instructions even if deferredPrompt is null
      setShowPrompt(true);
    }, 5000);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      clearTimeout(timer);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      // Fallback for browsers that don't support beforeinstallprompt but are not iOS
      alert("Para instalar, clique no menu de opções do seu navegador (três pontos) e selecione 'Instalar aplicativo' ou 'Adicionar à tela inicial'.");
      handleDismiss();
      return;
    }
    
    // Show the native install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`Usuário respondeu ao prompt de instalação com: ${outcome}`);
    
    // We've used the prompt, and can't use it again
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Save current timestamp to localStorage
    localStorage.setItem("pwa-prompt-dismissed", new Date().getTime().toString());
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 md:left-auto md:right-6 md:w-[380px] z-[9999] animate-fade-in-up">
      <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-5 shadow-2xl shadow-amber-500/10 text-white relative">
        {/* Close Button */}
        <button 
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors"
          aria-label="Fechar aviso"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 pr-6">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20 shrink-0">
            <span className="text-xl font-black text-slate-950">VS</span>
          </div>
          <div>
            <h4 className="font-bold text-sm sm:text-base leading-snug">
              Instalar Aplicativo VS Reboque
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
              Tenha acesso imediato ao guincho 24h direto na tela inicial do seu celular, sem gastar memória.
            </p>
          </div>
        </div>

        {/* Content body based on OS */}
        <div className="mt-4 pt-3 border-t border-slate-800/80">
          {isIOS ? (
            /* iOS Instructions */
            <div className="space-y-3">
              <p className="text-xs text-slate-300">
                Siga os passos abaixo para instalar no seu **iPhone/iPad**:
              </p>
              <ol className="text-xs text-slate-400 space-y-2 list-decimal list-inside pl-1">
                <li>
                  Toque no ícone de <strong className="text-slate-200 inline-flex items-center gap-1">compartilhar <Share2 size={12} className="inline text-blue-400" /></strong> (no rodapé do Safari).
                </li>
                <li>
                  Role a lista e selecione <strong className="text-slate-200 inline-flex items-center gap-1">Adicionar à Tela de Início <PlusSquare size={12} className="inline text-slate-300" /></strong>.
                </li>
                <li>
                  Toque em **Adicionar** no canto superior direito.
                </li>
              </ol>
            </div>
          ) : (
            /* Android/Chrome Button */
            <div className="flex flex-col gap-2">
              <button
                onClick={handleInstallClick}
                className="w-full bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-slate-950 font-extrabold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-500/20"
              >
                <Download size={16} strokeWidth={2.5} />
                Instalar Aplicativo
              </button>
              <button
                onClick={handleDismiss}
                className="w-full bg-slate-800/50 hover:bg-slate-800 text-slate-300 text-xs py-2 rounded-xl transition-colors"
              >
                Não, obrigado
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
