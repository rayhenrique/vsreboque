"use client";

import Link from "next/link";
import { Clock, MapPin, ShieldCheck, Zap, MessageCircle } from "lucide-react";
import { WHATSAPP_PRIMARY_URL } from "@/lib/constants";

const highlights = [
  {
    icon: Clock,
    title: "24h / 7 dias",
    description:
      "Não importa o horário — madrugada, feriado ou fim de semana — estamos sempre de prontidão.",
  },
  {
    icon: Zap,
    title: "Resposta Rápida",
    description:
      "Atendemos chamados em minutos. Agilidade é nossa prioridade para tirar você da situação o mais rápido possível.",
  },
  {
    icon: MapPin,
    title: "Teotônio Vilela e Região",
    description:
      "Baseados em Teotônio Vilela - AL, cobrimos toda a região e rodovias próximas com facilidade.",
  },
  {
    icon: ShieldCheck,
    title: "Frota Preparada",
    description:
      "Veículos equipados e bem mantidos para garantir o transporte seguro do seu veículo, sem danos.",
  },
];

const stats = [
  { value: "24h", label: "Atendimento" },
  { value: "100%", label: "Comprometimento" },
  { value: "+100", label: "Clientes atendidos" },
];

export default function Trust() {
  return (
    <section
      id="sobre"
      className="py-20 px-4 bg-slate-950 relative overflow-hidden"
      aria-labelledby="trust-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(245,158,11,0.07)_0%,_transparent_55%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-5 bg-slate-800/50 rounded-2xl border border-slate-700/50"
            >
              <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-1">
                {stat.value}
              </div>
              <div className="text-slate-400 text-xs sm:text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
              <ShieldCheck size={14} />
              Por que nos escolher?
            </div>
            <h2
              id="trust-heading"
              className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight tracking-tight"
            >
              Confiança e{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Agilidade
              </span>{" "}
              quando você mais precisa
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-6">
              A <strong className="text-slate-200">VS Reboque</strong> nasceu
              para ser a solução rápida e confiável de quem fica parado na
              estrada ou precisa transportar seu veículo com segurança em{" "}
              <strong className="text-slate-200">Teotônio Vilela - AL</strong>{" "}
              e toda a região.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Nossa equipe é treinada, nossa frota é preparada e nosso compromisso
              é chegar até você o mais rápido possível — seja qual for o horário
              ou o dia.
            </p>

            {/* CTA within trust section */}
            <Link
              href={WHATSAPP_PRIMARY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black px-6 py-4 rounded-2xl text-base transition-all duration-200 active:scale-95 shadow-lg shadow-amber-500/25"
            >
              <MessageCircle size={20} />
              Falar com a VS Reboque
            </Link>
          </div>

          {/* Right — Feature cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-5 bg-slate-800/60 border border-slate-700/50 rounded-2xl hover:border-amber-500/30 hover:bg-slate-800/90 transition-all duration-200"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-amber-500/15 rounded-xl mb-3">
                    <Icon size={20} className="text-amber-400" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-white text-base mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* Coverage section for Local SEO */}
        <div className="mt-20 pt-16 border-t border-slate-800/80">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-extrabold text-white mb-3">
              Área de Atendimento e Cobertura (Até 250km)
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              Nossa base estratégica em <strong className="text-slate-300">Teotônio Vilela - AL</strong> nos permite oferecer socorro veicular rápido nas principais rodovias (como a BR-101) e atendimento em diversas cidades e regiões vizinhas:
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Alagoas */}
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800/60">
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full" />
                Alagoas (Cidades Principais e Rodovias)
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Teotônio Vilela (Base)",
                  "Arapiraca",
                  "São Miguel dos Campos",
                  "Campo Alegre",
                  "Junqueiro",
                  "Coruripe",
                  "Penedo",
                  "Maceió",
                  "Palmeira dos Índios",
                  "Boca da Mata",
                  "Maribondo",
                  "Anadia",
                  "São Sebastião",
                  "Limoeiro de Anadia",
                  "Marechal Deodoro",
                  "Rio Largo",
                  "Pilar",
                  "Porto Real do Colégio",
                  "Igreja Nova",
                  "Jequiá da Praia",
                  "Feliz Deserto",
                  "Piaçabuçu"
                ].map((city, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-slate-300 bg-slate-800/70 border border-slate-700/40 rounded-lg px-3 py-1.5 hover:border-amber-500/30 hover:text-white transition-colors"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Divisas Sergipe & Pernambuco */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800/60">
                <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full" />
                  Divisa com Sergipe
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Propriá", "Neópolis", "Pacatuba", "Carira", "Aracaju", "Nossa Senhora do Socorro"].map((city, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-slate-300 bg-slate-800/70 border border-slate-700/40 rounded-lg px-3 py-1.5"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800/60">
                <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full" />
                  Divisa com Pernambuco
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Garanhuns", "Caruaru", "Palmares", "Bom Conselho", "Lajedo"].map((city, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-slate-300 bg-slate-800/70 border border-slate-700/40 rounded-lg px-3 py-1.5"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
