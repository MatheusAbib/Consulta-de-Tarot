import "./IconeSigno.scss";

export type Elemento = "Fogo" | "Terra" | "Ar" | "Água";

interface Props {
  signo: string;
  tamanho?: number;
}

const ELEMENTOS: Record<string, Elemento> = {
  "Áries": "Fogo",
  "Leão": "Fogo",
  "Sagitário": "Fogo",
  "Touro": "Terra",
  "Virgem": "Terra",
  "Capricórnio": "Terra",
  "Gêmeos": "Ar",
  "Libra": "Ar",
  "Aquário": "Ar",
  "Câncer": "Água",
  "Escorpião": "Água",
  "Peixes": "Água",
};

function SimboloSigno({ signo }: { signo: string }) {
  switch (signo) {
    case "Áries":
      return (
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 17 C12 11 9 6 5 6 C3.5 6 3 7.5 3 9" />
          <path d="M12 17 C12 11 15 6 19 6 C20.5 6 21 7.5 21 9" />
        </g>
      );
    case "Touro":
      return (
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="15" r="4" />
          <path d="M8 11 C6 9 4 7 4 4" />
          <path d="M16 11 C18 9 20 7 20 4" />
        </g>
      );
    case "Gêmeos":
      return (
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 4 v16" />
          <path d="M17 4 v16" />
          <path d="M7 6 C9 5 15 5 17 6" />
          <path d="M7 18 C9 19 15 19 17 18" />
        </g>
      );
    case "Câncer":
      return (
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 8 C6 5 9 3 12 3 C15 3 18 5 18 8" />
          <circle cx="6.5" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
          <path d="M18 16 C18 19 15 21 12 21 C9 21 6 19 6 16" />
          <circle cx="17.5" cy="16.5" r="1.5" fill="currentColor" stroke="none" />
        </g>
      );
    case "Leão":
      return (
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="9" r="3.2" />
          <path d="M12 9 C14 9 15 10.5 15 12 C15 14 13.5 15.5 11.5 15.5 C9.5 15.5 8.5 14.5 8.5 13" />
          <path d="M15 12 C17 12 19 13 19 15 C19 17.5 17 19 15 19 C13.5 19 12 18.5 11 17.5" />
        </g>
      );
    case "Virgem":
      return (
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18 v-8 c0-2 1.5-3 3-3 s3 1 3 3" />
          <path d="M12 10 c0-2 1.5-3 3-3 s3 1 3 3 v8" />
          <path d="M18 18 c2 0 3-1 3-3" />
          <path d="M6 18 c0 2-1 3-3 3" />
        </g>
      );
    case "Libra":
      return (
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 18 h16" />
          <path d="M4 14 h16" />
          <path d="M4 14 C4 8 8 5 12 5 s8 3 8 9" />
        </g>
      );
    case "Escorpião":
      return (
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 18 v-8 c0-2 1.5-3 3-3 s3 1 3 3" />
          <path d="M10 10 c0-2 1.5-3 3-3 s3 1 3 3 v3" />
          <path d="M16 13 c0 3 1.5 4 3 4 s3-1 3-4 v-1" />
          <path d="M22 12 l1 2 l-2 0" />
        </g>
      );
    case "Sagitário":
      return (
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20 L18 6" />
          <path d="M12 6 h6 v6" />
          <path d="M10 18 l-6 -6" />
        </g>
      );
    case "Capricórnio":
      return (
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 10 c1-3 3-4 5-2 l4 8 c2 2 4 1 5-2" />
          <path d="M18 8 c1-3 3-4 4-2" />
          <path d="M6 18 c1-2 3-3 5-2" />
        </g>
      );
    case "Aquário":
      return (
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 9 l2-3 l2 3 l2-3 l2 3 l2-3 l2 3 l2-3 l2 3" />
          <path d="M4 15 l2-3 l2 3 l2-3 l2 3 l2-3 l2 3 l2-3 l2 3" />
        </g>
      );
    case "Peixes":
      return (
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 6 C12 10 12 14 5 18" />
          <path d="M19 6 C12 10 12 14 19 18" />
          <line x1="10" y1="12" x2="14" y2="12" />
        </g>
      );
    default:
      return null;
  }
}

export function IconeSigno({ signo, tamanho = 48 }: Props) {
  const elemento = ELEMENTOS[signo] ?? "Fogo";

  return (
    <span
      className={`icone-signo icone-signo--${elemento.toLowerCase()}`}
      style={{ width: tamanho, height: tamanho }}
    >
      <svg viewBox="0 0 24 24" width={tamanho} height={tamanho} aria-label={signo}>
        <circle cx="12" cy="12" r="11" className="icone-signo__fundo" />
        <circle cx="12" cy="12" r="10" className="icone-signo__borda" />
        <circle cx="12" cy="12" r="8.5" className="icone-signo__anel" />
        <g transform="translate(0, 0) scale(0.72) translate(4.7, 4.7)">
          <SimboloSigno signo={signo} />
        </g>
      </svg>
    </span>
  );
}
