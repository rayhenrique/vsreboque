"use client";

import {
  Car,
  Bike,
  Truck,
  Package,
  BatteryCharging,
  Fuel,
  WrenchIcon,
  UserCheck,
  CircleAlert,
} from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Reboque de Carros",
    description:
      "Guincho para carros de todos os portes — pequenos, médios e grandes. Atendimento rápido e seguro.",
    highlight: true,
  },
  {
    icon: Bike,
    title: "Reboque de Motos",
    description:
      "Plataforma especializada para motocicletas. Sua moto transportada com total segurança.",
    highlight: false,
  },
  {
    icon: Truck,
    title: "Veículos Especiais",
    description:
      "Equipamentos e estrutura preparados para rebocar veículos especiais e de grande porte.",
    highlight: false,
  },
  {
    icon: Package,
    title: "Transporte de Cargas",
    description:
      "Transporte local e de longa distância de cargas com responsabilidade e pontualidade.",
    highlight: false,
  },
  {
    icon: BatteryCharging,
    title: "Socorro de Bateria",
    description:
      "Chupeta (carga) ou substituição de bateria. Voltamos seu carro a funcionar no menor tempo.",
    highlight: false,
  },
  {
    icon: Fuel,
    title: "Entrega de Combustível",
    description:
      "Ficou sem gasolina ou diesel? Entregamos combustível onde você estiver na estrada.",
    highlight: false,
  },
  {
    icon: WrenchIcon,
    title: "Troca de Pneu",
    description:
      "Troca de pneu furado na estrada, com segurança e agilidade para você seguir viagem.",
    highlight: false,
  },
  {
    icon: UserCheck,
    title: "Motorista/Piloto de Apoio",
    description:
      "Precisa de um condutor de apoio? Disponibilizamos motoristas e pilotos experientes.",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-20 px-4 bg-slate-900 relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(245,158,11,0.06)_0%,_transparent_60%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <CircleAlert size={14} />
            O que oferecemos
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-black text-white mb-3 tracking-tight"
          >
            Nossos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Serviços
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Do simples reboque ao atendimento completo em estrada — estamos
            prontos para qualquer situação, 24 horas por dia.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={index}
                className={`group relative p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  service.highlight
                    ? "bg-gradient-to-br from-amber-500/15 to-orange-500/10 border-amber-500/40 hover:border-amber-400 hover:shadow-amber-500/10"
                    : "bg-slate-800/60 border-slate-700/50 hover:border-amber-500/30 hover:shadow-slate-900/50 hover:bg-slate-800/90"
                }`}
              >
                {/* Highlight badge */}
                {service.highlight && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                )}

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 transition-colors ${
                    service.highlight
                      ? "bg-amber-500/20 text-amber-400"
                      : "bg-slate-700/80 text-amber-400 group-hover:bg-amber-500/15"
                  }`}
                >
                  <Icon size={22} strokeWidth={1.75} />
                </div>

                {/* Text */}
                <h3 className="font-bold text-white text-base mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
