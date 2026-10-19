import type { FaseLua } from "../servicos/lunar";
import "./IconeFaseLua.scss";

interface Props {
  fase: FaseLua;
  tamanho?: number;
}

function Simbolo({ fase }: { fase: FaseLua }) {
  switch (fase) {
    case "nova":
      return <circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.2" />;
    case "crescente-inicial":
      return (
        <g>
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
          <path d="M12 4 A8 8 0 0 1 12 20 A4 8 0 0 0 12 4" fill="currentColor" />
        </g>
      );
    case "quarto-crescente":
      return (
        <g>
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
          <path d="M12 4 A8 8 0 0 1 12 20 L12 4" fill="currentColor" />
        </g>
      );
    case "crescente-gibosa":
      return (
        <g>
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
          <path d="M12 4 A8 8 0 0 1 12 20 A6 8 0 0 0 12 4" fill="currentColor" />
        </g>
      );
    case "cheia":
      return <circle cx="12" cy="12" r="8" fill="currentColor" />;
    case "minguante-gibosa":
      return (
        <g>
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
          <path d="M12 4 A8 8 0 0 0 12 20 A6 8 0 0 1 12 4" fill="currentColor" />
        </g>
      );
    case "quarto-minguante":
      return (
        <g>
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
          <path d="M12 4 A8 8 0 0 0 12 20 L12 4" fill="currentColor" />
        </g>
      );
    case "minguante-final":
      return (
        <g>
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
          <path d="M12 4 A8 8 0 0 0 12 20 A4 8 0 0 1 12 4" fill="currentColor" />
        </g>
      );
    default:
      return null;
  }
}

export function IconeFaseLua({ fase, tamanho = 32 }: Props) {
  return (
    <span className="icone-fase-lua" style={{ width: tamanho, height: tamanho }}>
      <svg viewBox="0 0 24 24" width={tamanho} height={tamanho} aria-label={fase}>
        <Simbolo fase={fase} />
      </svg>
    </span>
  );
}
