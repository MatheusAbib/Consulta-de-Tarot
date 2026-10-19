import { useEffect, useRef, useState } from "react";
import "./AbasInline.scss";

export type AbaId = "inicio" | "tarot" | "astrologia" | "numerologia" | "matriz-destino" | "signos" | "calendario-lunar" | "biblioteca";

interface Aba {
  id: AbaId;
  rotulo: string;
  cor: string;
  svg: React.ReactNode;
}

const ABAS: Aba[] = [
  {
    id: "inicio",
    rotulo: "Início",
    cor: "#a78bfa",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
  {
    id: "tarot",
    rotulo: "Tarô",
    cor: "#c084fc",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="3" width="12" height="18" rx="2" />
        <rect x="5" y="5" width="12" height="18" rx="2" />
        <path d="M9 12h2M13 12h2M9 16h2M13 16h2" />
      </svg>
    ),
  },
  {
    id: "astrologia",
    rotulo: "Astrologia",
    cor: "#93c5fd",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="7" />
        <ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(-25 12 12)" />
      </svg>
    ),
  },
  {
    id: "numerologia",
    rotulo: "Numerologia",
    cor: "#f0a4b8",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" x2="16" y1="6" y2="6" />
        <line x1="16" x2="16" y1="14" y2="18" />
        <path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01" />
      </svg>
    ),
  },
  {
    id: "matriz-destino",
    rotulo: "Matriz",
    cor: "#fb923c",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        <circle cx="12" cy="4" r="1" />
        <circle cx="12" cy="20" r="1" />
        <circle cx="4" cy="12" r="1" />
        <circle cx="20" cy="12" r="1" />
        <circle cx="6" cy="6" r="1" />
        <circle cx="18" cy="6" r="1" />
        <circle cx="6" cy="18" r="1" />
        <circle cx="18" cy="18" r="1" />
      </svg>
    ),
  },
  {
    id: "signos",
    rotulo: "Signos",
    cor: "#86efac",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18" />
        <path d="M3 12h18" />
      </svg>
    ),
  },
  {
    id: "calendario-lunar",
    rotulo: "Lua",
    cor: "#7dd3fc",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      </svg>
    ),
  },
  {
    id: "biblioteca",
    rotulo: "Biblioteca",
    cor: "#d8b4fe",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5V5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2Z" />
        <path d="M8 7h8M8 11h8M8 15h5" />
      </svg>
    ),
  },
];

interface Props {
  abaAtiva: AbaId;
  onMudar: (id: AbaId) => void;
}

export function AbasInline({ abaAtiva, onMudar }: Props) {
  const listaRef = useRef<HTMLUListElement>(null);
  const [indicador, setIndicador] = useState({ left: 0, width: 0, cor: "#a78bfa" });

  useEffect(() => {
    function atualizar() {
      if (!listaRef.current) return;
      const ativa = listaRef.current.querySelector<HTMLButtonElement>("button.ativa");
      if (!ativa) return;
      const aba = ABAS.find((a) => a.id === abaAtiva);
      setIndicador({
        left: ativa.offsetLeft,
        width: ativa.offsetWidth,
        cor: aba?.cor ?? "#a78bfa",
      });
    }

    atualizar();
    window.addEventListener("resize", atualizar);
    return () => window.removeEventListener("resize", atualizar);
  }, [abaAtiva]);

  return (
    <nav className="abas-inline" aria-label="Oráculos">
      <div className="abas-inline__barra">
        <ul className="abas-inline__lista" ref={listaRef}>
          {ABAS.map((aba) => {
            const ativa = abaAtiva === aba.id;
            return (
              <li key={aba.id}>
                <button
                  type="button"
                  className={`abas-inline__item ${ativa ? "ativa" : ""}`}
                  onClick={() => onMudar(aba.id)}
                  aria-current={ativa ? "page" : undefined}
                  style={{ "--cor-aba": aba.cor } as React.CSSProperties}
                >
                  <span className="abas-inline__icone">{aba.svg}</span>
                  <span className="abas-inline__rotulo">{aba.rotulo}</span>
                </button>
              </li>
            );
          })}
        </ul>
        <span
          className="abas-inline__indicador"
          style={{
            left: indicador.left,
            width: indicador.width,
            background: indicador.cor,
          }}
        />
      </div>
    </nav>
  );
}


