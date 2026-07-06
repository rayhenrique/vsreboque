"use client";

import Link from "next/link";
import { MessageCircle, Phone, ChevronDown, Zap } from "lucide-react";
import {
  WHATSAPP_PRIMARY_URL,
  PHONE_PRIMARY,
  PHONE_PRIMARY_HREF,
  PHONE_SECONDARY,
  PHONE_SECONDARY_HREF,
} from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.12)_0%,_transparent_60%)]" />

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
          <Zap size={14} className="fill-amber-400" />
          Atendimento 24 Horas • 7 dias por semana
        </div>

        {/* Main heading - H1 for SEO */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] mb-4 tracking-tight">
          Guincho e Reboque 24h em{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
            Teotônio Vilela e Região
          </span>
        </h1>

        {/* Subheading / Slogan */}
        <p className="text-lg sm:text-xl text-slate-300 font-medium mb-4 max-w-2xl mx-auto">
          Agilidade e segurança para você nunca ficar na mão.
        </p>

        <p className="text-slate-400 text-base mb-10 max-w-xl mx-auto">
          Reboque, assistência em estrada e transporte de cargas em{" "}
          <strong className="text-slate-200">Teotônio Vilela - AL</strong> e
          toda a região. Chegamos onde você está!
        </p>

        {/* CTA Buttons — large, thumb-friendly */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary CTA — WhatsApp */}
          <Link
            href={WHATSAPP_PRIMARY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).gtag_report_whatsapp_conversion) {
                (window as any).gtag_report_whatsapp_conversion();
              }
            }}
            className="pulse-glow w-full sm:w-auto flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-black px-8 py-5 rounded-2xl text-lg transition-all duration-200 active:scale-95 shadow-xl shadow-green-500/30 min-h-[64px]"
            aria-label="Chamar guincho pelo WhatsApp agora"
          >
            <MessageCircle size={26} strokeWidth={2} />
            Chamar pelo WhatsApp
          </Link>

          {/* Secondary CTA — Call primary */}
          <Link
            href={PHONE_PRIMARY_HREF}
            onClick={(e) => {
              if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                e.preventDefault();
                (window as any).gtag_report_conversion(PHONE_PRIMARY_HREF);
              }
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-700/80 hover:bg-slate-600/80 text-white font-bold px-8 py-5 rounded-2xl text-lg transition-all duration-200 active:scale-95 border border-slate-500/50 hover:border-amber-500/50 min-h-[64px] backdrop-blur-sm"
            aria-label="Ligar para o guincho agora"
          >
            <Phone size={22} strokeWidth={2} />
            {PHONE_PRIMARY}
          </Link>
        </div>

        {/* Social proof badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Online agora
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-amber-400">★★★★★</span>
            Atendimento top
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-slate-300">🚛</span>
            Frota completa
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 text-xs animate-bounce">
        <span>Ver serviços</span>
        <ChevronDown size={18} />
      </div>
    </section>
  );
}
