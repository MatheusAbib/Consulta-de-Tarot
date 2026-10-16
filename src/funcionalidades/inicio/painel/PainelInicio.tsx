import "./PainelInicio.scss";

const CARTOES = [
  {
    titulo: "Tarô",
    texto:
      "Três tiragens: uma carta do dia, passado/presente/futuro ou cruz celta de 10 posições. Você embaralha e escolhe suas cartas.",
    cor: "roxo",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="3" width="12" height="18" rx="2" />
        <rect x="5" y="5" width="12" height="18" rx="2" />
        <path d="M9 12h2M13 12h2M9 16h2M13 16h2" />
      </svg>
    ),
  },
  {
    titulo: "Mapa Astral",
    texto:
      "Sol, Lua, Ascendente e os 10 planetas calculados com precisão. Gráfico interativo e interpretação de cada posição.",
    cor: "azul",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    ),
  },
  {
    titulo: "Numerologia",
    texto:
      "Seis números tirados do seu nome e data: Caminho de Vida, Expressão, Alma, Personalidade, Aniversário e Maturidade.",
    cor: "rosa",
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
    titulo: "Matriz do Destino",
    texto:
      "Treze pontos calculados a partir dos 22 arcanos maiores. Cada um cobre uma área da vida — relação, dinheiro, saúde e propósito.",
    cor: "laranja",
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
    titulo: "Signos",
    texto:
      "Os 12 signos com elemento, regente, datas, essência, amor, carreira e lista de pontos fortes e desafios.",
    cor: "verde",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18" />
        <path d="M3 12h18" />
      </svg>
    ),
  },
];

export function PainelInicio() {
  return (
    <div className="painel-inicio">
      <div className="painel-inicio__grade">
        {CARTOES.map((cartao) => (
          <div
            key={cartao.titulo}
            className={`painel-inicio__cartao painel-inicio__cartao--${cartao.cor} cartao-vidro`}
          >
            <div className="painel-inicio__cartao-icone">{cartao.svg}</div>
            <h3 className="painel-inicio__cartao-titulo">{cartao.titulo}</h3>
            <p className="painel-inicio__cartao-texto">{cartao.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}