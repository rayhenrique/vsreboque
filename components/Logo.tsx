/**
 * VS Reboque Logo — SVG inline component
 *
 * Reproduz o escudo + letras VS + gancho + swoosh da marca real.
 * Funciona sobre qualquer fundo (sem background) e escala perfeitamente.
 *
 * Props:
 *  variant  — "full" (ícone + texto) | "icon" (apenas escudo)
 *  darkText — se true, texto em branco; se false, em navy
 */

interface LogoProps {
  variant?: "full" | "icon";
  darkText?: boolean;
  className?: string;
}

export default function Logo({
  variant = "full",
  darkText = true,
  className = "",
}: LogoProps) {
  const textColor = darkText ? "#ffffff" : "#1e3a5f";
  const subColor = darkText ? "#f97316" : "#f97316";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 80"
      aria-label="VS Reboque — Assistência Veicular 24h"
      role="img"
      className={className}
      fill="none"
    >
      {/* ── Shield outline ─────────────────────────────────────────── */}
      <path
        d="M38 8 L58 14 L58 42 Q58 55 38 64 Q18 55 18 42 L18 14 Z"
        fill="none"
        stroke="#334155"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Shield inner highlight */}
      <path
        d="M38 11 L55 16.5 L55 41.5 Q55 52.5 38 60.5 Q21 52.5 21 41.5 L21 16.5 Z"
        fill="#0f172a"
        opacity="0.6"
      />

      {/* ── Tow hook arm (top right) ───────────────────────────────── */}
      <line x1="55" y1="14" x2="63" y2="7" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
      <path
        d="M62 7 Q66 5 66 9 Q66 13 62 13"
        stroke="#94a3b8"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* ── Orange swoosh ──────────────────────────────────────────── */}
      <path
        d="M22 49 Q30 56 38 57 Q46 56 54 49"
        stroke="#f97316"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* ── Letter V (navy/white) ──────────────────────────────────── */}
      <text
        x="23"
        y="46"
        fontFamily="'Arial Black', 'Arial', sans-serif"
        fontWeight="900"
        fontSize="22"
        fill={darkText ? "#e2e8f0" : "#1e3a5f"}
        letterSpacing="-1"
      >
        V
      </text>

      {/* ── Letter S (orange) ──────────────────────────────────────── */}
      <text
        x="33"
        y="46"
        fontFamily="'Arial Black', 'Arial', sans-serif"
        fontWeight="900"
        fontSize="22"
        fill="#f97316"
        letterSpacing="-1"
      >
        S
      </text>

      {/* ── Text block (only in "full" variant) ───────────────────── */}
      {variant === "full" && (
        <>
          <text
            x="76"
            y="38"
            fontFamily="'Arial Black', 'Arial', sans-serif"
            fontWeight="900"
            fontSize="20"
            fill={textColor}
            letterSpacing="0.5"
          >
            VS REBOQUE
          </text>
          <text
            x="76"
            y="54"
            fontFamily="'Arial', sans-serif"
            fontWeight="700"
            fontSize="10"
            fill={subColor}
            letterSpacing="2"
          >
            ASSISTÊNCIA 24h
          </text>
        </>
      )}
    </svg>
  );
}
