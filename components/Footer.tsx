"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";
import {
  WHATSAPP_PRIMARY_URL,
  WHATSAPP_SECONDARY_URL,
  PHONE_PRIMARY,
  PHONE_PRIMARY_HREF,
  PHONE_SECONDARY,
  PHONE_SECONDARY_HREF,
  EMAIL,
  EMAIL_HREF,
  COMPANY_CNPJ,
  MAPS_URL,
} from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="bg-slate-950 border-t border-slate-800"
      aria-label="Rodapé com informações de contato"
    >
      {/* Pre-footer CTA band */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500 py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
            Ficou na mão? Chame agora!
          </h2>
          <p className="text-slate-800 mb-6 text-base font-medium">
            Atendemos 24h por dia, 7 dias por semana. Estamos prontos para te
            ajudar.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={WHATSAPP_PRIMARY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag_report_whatsapp_conversion) {
                  (window as any).gtag_report_whatsapp_conversion();
                }
              }}
              className="inline-flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-4 rounded-xl text-base transition-all duration-200 active:scale-95"
            >
              <MessageCircle size={20} />
              WhatsApp Agora
            </Link>
            <Link
              href={PHONE_PRIMARY_HREF}
              onClick={(e) => {
                if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                  e.preventDefault();
                  (window as any).gtag_report_conversion(PHONE_PRIMARY_HREF);
                }
              }}
              className="inline-flex items-center justify-center gap-2.5 bg-white/20 hover:bg-white/30 text-slate-900 font-bold px-6 py-4 rounded-xl text-base transition-all duration-200 active:scale-95"
            >
              <Phone size={20} />
              {PHONE_PRIMARY}
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Ícone */}
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 ring-1 ring-white/10">
                <Image
                  src="/icon.png"
                  alt="Escudo VS Reboque"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              {/* Texto */}
              <div className="flex flex-col leading-none">
                <span className="font-black text-white text-lg tracking-tight">
                  VS <span className="text-amber-400">Reboque</span>
                </span>
                <span className="text-slate-400 text-[10px] font-semibold tracking-widest uppercase mt-0.5">
                  Assistência 24 horas
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Agilidade e segurança para você nunca ficar na mão. Atendimento
              24h em Teotônio Vilela e região de Alagoas.
            </p>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={PHONE_PRIMARY_HREF}
                  onClick={(e) => {
                    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                      e.preventDefault();
                      (window as any).gtag_report_conversion(PHONE_PRIMARY_HREF);
                    }
                  }}
                  className="flex items-start gap-2.5 text-slate-400 hover:text-amber-400 transition-colors text-sm group"
                >
                  <Phone size={15} className="mt-0.5 shrink-0 group-hover:text-amber-400" />
                  <span>
                    {PHONE_PRIMARY}
                    <span className="ml-1.5 text-[10px] font-bold text-amber-500/80 uppercase tracking-wide">
                      principal
                    </span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={PHONE_SECONDARY_HREF}
                  onClick={(e) => {
                    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                      e.preventDefault();
                      (window as any).gtag_report_conversion(PHONE_SECONDARY_HREF);
                    }
                  }}
                  className="flex items-start gap-2.5 text-slate-400 hover:text-amber-400 transition-colors text-sm group"
                >
                  <Phone size={15} className="mt-0.5 shrink-0 group-hover:text-amber-400" />
                  {PHONE_SECONDARY}
                </Link>
              </li>
              <li>
                <Link
                  href={WHATSAPP_PRIMARY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).gtag_report_whatsapp_conversion) {
                      (window as any).gtag_report_whatsapp_conversion();
                    }
                  }}
                  className="flex items-start gap-2.5 text-slate-400 hover:text-green-400 transition-colors text-sm group"
                >
                  <MessageCircle size={15} className="mt-0.5 shrink-0" />
                  <span>
                    WhatsApp: {PHONE_PRIMARY}
                    <span className="ml-1.5 text-[10px] font-bold text-amber-500/80 uppercase tracking-wide">
                      principal
                    </span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={WHATSAPP_SECONDARY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).gtag_report_whatsapp_conversion) {
                      (window as any).gtag_report_whatsapp_conversion();
                    }
                  }}
                  className="flex items-start gap-2.5 text-slate-400 hover:text-green-400 transition-colors text-sm group"
                >
                  <MessageCircle size={15} className="mt-0.5 shrink-0" />
                  WhatsApp: {PHONE_SECONDARY}
                </Link>
              </li>
              <li>
                <Link
                  href={EMAIL_HREF}
                  className="flex items-start gap-2.5 text-slate-400 hover:text-amber-400 transition-colors text-sm group"
                >
                  <Mail size={15} className="mt-0.5 shrink-0" />
                  {EMAIL}
                </Link>
              </li>
            </ul>
          </div>

          {/* Address column */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Localização
            </h3>
            <Link
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 text-slate-400 hover:text-amber-400 transition-colors text-sm group"
              aria-label="Ver localização no Google Maps"
            >
              <MapPin size={15} className="mt-0.5 shrink-0" />
              <span>
                Rua Francisco Pôrto, 337
                <br />
                Teotônio Vilela - AL
                <br />
                CEP: 57265-398
                <br />
                <span className="inline-flex items-center gap-1 text-xs text-amber-500/80 mt-1">
                  Ver no mapa <ExternalLink size={10} />
                </span>
              </span>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col sm:flex-row justify-between gap-3 text-xs text-slate-500">
            <p>
              © {currentYear} VS Reboque. Todos os direitos reservados.
            </p>
            <p>
              CNPJ: <span className="font-mono text-slate-400">{COMPANY_CNPJ}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
