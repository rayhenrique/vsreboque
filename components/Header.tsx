"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import {
  PHONE_PRIMARY,
  PHONE_PRIMARY_HREF,
} from "@/lib/constants";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-amber-500/20 shadow-lg shadow-black/20">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* ── Logo: ícone + texto ──────────────────────────────────── */}
        <Link
          href="#inicio"
          className="flex items-center gap-3 group"
          aria-label="VS Reboque — Página inicial"
        >
          {/* Ícone (imagem 4 — escudo VS sobre fundo escuro) */}
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 ring-1 ring-white/10 group-hover:ring-amber-500/40 transition-all duration-200">
            <Image
              src="/icon.png"
              alt="Escudo VS Reboque"
              fill
              sizes="40px"
              priority
              className="object-cover"
            />
          </div>

          {/* Texto ao lado do ícone */}
          <div className="flex flex-col leading-none">
            <span className="font-black text-white text-[17px] tracking-tight group-hover:text-amber-100 transition-colors">
              VS <span className="text-amber-400">Reboque</span>
            </span>
            <span className="text-slate-400 text-[10px] font-semibold tracking-widest uppercase mt-0.5">
              Assistência 24 horas
            </span>
          </div>
        </Link>

        {/* ── CTA: Ligue Agora ─────────────────────────────────────── */}
        <Link
          href={PHONE_PRIMARY_HREF}
          onClick={(e) => {
            if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
              e.preventDefault();
              (window as any).gtag_report_conversion(PHONE_PRIMARY_HREF);
            }
          }}
          className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-4 py-2.5 rounded-xl text-sm transition-all duration-200 active:scale-95 shadow-md shadow-amber-500/25"
          aria-label={`Ligue agora para ${PHONE_PRIMARY}`}
        >
          <Phone size={16} strokeWidth={2.5} />
          <span className="hidden sm:inline">Ligue Agora</span>
          <span className="sm:hidden">Ligar</span>
        </Link>

      </div>
    </header>
  );
}
