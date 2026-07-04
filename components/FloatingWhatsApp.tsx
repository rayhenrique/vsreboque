"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_PRIMARY_URL } from "@/lib/constants";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-5 z-50" aria-label="Botão WhatsApp flutuante">
      {/* Tooltip label */}
      <div className="flex flex-col items-end gap-2">
        <div className="bg-slate-900/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-700/50 shadow-lg whitespace-nowrap animate-pulse">
          💬 Chame agora!
        </div>

        {/* FAB Button */}
        <Link
          href={WHATSAPP_PRIMARY_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir WhatsApp para solicitar guincho ou assistência"
          className="float-anim relative flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-400 rounded-full shadow-2xl shadow-green-500/40 transition-all duration-200 hover:scale-110 active:scale-95"
        >
          {/* Ping ring animation */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
          {/* Icon */}
          <MessageCircle
            size={30}
            strokeWidth={1.75}
            className="text-white relative z-10 drop-shadow"
          />
        </Link>
      </div>
    </div>
  );
}
