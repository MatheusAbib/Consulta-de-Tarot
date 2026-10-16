import "./IconePlaneta.scss";

interface Props {
  planeta: string;
  tamanho?: number;
}

function Simbolo({ planeta }: { planeta: string }) {
  const props = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (planeta) {
    case "Sol":
      return (
        <g {...props}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6l-1.4 1.4M7 17l-1.4 1.4" />
        </g>
      );
    case "Lua":
      return (
        <g {...props}>
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
        </g>
      );
    case "Mercúrio":
      return (
        <g {...props}>
          <circle cx="12" cy="9" r="5" />
          <path d="M12 14v6M9 17h6" />
          <path d="M8 4c1 1 1.5 2 2.5 2S12 5 12 5s1 1 2 1 1.5-1 2.5-2" />
        </g>
      );
    case "Vênus":
      return (
        <g {...props}>
          <circle cx="12" cy="9" r="6" />
          <path d="M12 15v6M9 18h6" />
        </g>
      );
    case "Marte":
      return (
        <g {...props}>
          <circle cx="10" cy="14" r="5" />
          <path d="M14 10l6-6M15 4h5v5" />
        </g>
      );
    case "Júpiter":
      return (
        <g {...props}>
          <path d="M6 6c0 5 2 12 6 12" />
          <path d="M6 6h12" />
        </g>
      );
    case "Saturno":
      return (
        <g {...props}>
          <path d="M6 20c2-1 4-5 4-8" />
          <path d="M14 8c0-2-1-4-2-4s-2 1-2 3" />
          <path d="M4 8h16" />
        </g>
      );
    case "Urano":
      return (
        <g {...props}>
          <path d="M6 20V8a4 4 0 0 1 4-4" />
          <path d="M14 4a4 4 0 0 1 4 4v12" />
          <path d="M12 8v8" />
          <circle cx="12" cy="6" r="1.5" />
        </g>
      );
    case "Netuno":
      return (
        <g {...props}>
          <path d="M5 16c2-3 4-3 7 0s5 3 7 0" />
          <path d="M12 4v12" />
          <path d="M8 8h8" />
        </g>
      );
    case "Plutão":
      return (
        <g {...props}>
          <path d="M8 4v10a4 4 0 0 0 8 0V4" />
          <path d="M12 10h8" />
          <circle cx="12" cy="19" r="1.5" fill="currentColor" />
        </g>
      );
    case "Ascendente":
      return (
        <g {...props}>
          <path d="M12 3v18" />
          <path d="M5 12l7-7 7 7" />
          <path d="M5 19h14" />
        </g>
      );
    default:
      return null;
  }
}

export function IconePlaneta({ planeta, tamanho = 36 }: Props) {
  return (
    <span
      className="icone-planeta"
      style={{ width: tamanho, height: tamanho }}
    >
      <svg viewBox="0 0 24 24" width={tamanho} height={tamanho} aria-label={planeta}>
        <circle cx="12" cy="12" r="11" className="icone-planeta__fundo" />
        <circle cx="12" cy="12" r="10" className="icone-planeta__borda" />
        <g transform="scale(0.72) translate(4.7, 4.7)">
          <Simbolo planeta={planeta} />
        </g>
      </svg>
    </span>
  );
}
