import "./AbasInline.scss";

export type AbaId = "inicio" | "tarot" | "astrologia" | "numerologia" | "matriz-destino" | "signos";

interface Aba {
  id: AbaId;
  rotulo: string;
  svg: React.ReactNode;
}

const ABAS: Aba[] = [
  {
    id: "inicio",
    rotulo: "Início",
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
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    ),
  },
  {
    id: "numerologia",
    rotulo: "Numerologia",
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
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18" />
        <path d="M3 12h18" />
      </svg>
    ),
  },
];

interface Props {
  abaAtiva: AbaId;
  onMudar: (id: AbaId) => void;
}

export function AbasInline({ abaAtiva, onMudar }: Props) {
  return (
    <nav className="abas-inline" aria-label="Oráculos">
      <ul className="abas-inline__lista">
        {ABAS.map((aba) => {
          const ativa = abaAtiva === aba.id;
          return (
            <li key={aba.id}>
              <button
                type="button"
                className={`abas-inline__item ${ativa ? "ativa" : ""}`}
                onClick={() => onMudar(aba.id)}
                aria-current={ativa ? "page" : undefined}
              >
                <span className="abas-inline__icone">{aba.svg}</span>
                <span className="abas-inline__rotulo">{aba.rotulo}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}