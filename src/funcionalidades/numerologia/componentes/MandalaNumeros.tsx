import type { NumeroInfo } from "../PainelNumerologia";
import "./MandalaNumeros.scss";

interface Props {
  numeros: NumeroInfo[];
  chaveAtiva: string;
  aoSelecionar: (chave: string) => void;
}

const POSICOES = [
  { x: 50, y: 10 },
  { x: 84, y: 30 },
  { x: 84, y: 70 },
  { x: 50, y: 90 },
  { x: 16, y: 70 },
  { x: 16, y: 30 },
];

export function MandalaNumeros({ numeros, chaveAtiva, aoSelecionar }: Props) {
  const centro = numeros[0];

  function rolarPara(chave: string) {
    aoSelecionar(chave);
    const el = document.getElementById(`numero-${chave}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="mandala-numeros">
      <div className="mandala-numeros__svg-wrapper">
        <svg
          viewBox="0 0 100 100"
          className="mandala-numeros__svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <radialGradient id="centro-mandala" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(167, 139, 250, 0.5)" />
              <stop offset="100%" stopColor="rgba(167, 139, 250, 0.05)" />
            </radialGradient>
          </defs>

          {POSICOES.map((pos, i) => (
            <line
              key={`centro-${i}`}
              x1="50"
              y1="50"
              x2={pos.x}
              y2={pos.y}
              stroke="rgba(167, 139, 250, 0.25)"
              strokeWidth="0.4"
            />
          ))}

          {POSICOES.map((pos, i) => {
            const proximo = POSICOES[(i + 1) % POSICOES.length];
            return (
              <line
                key={`externo-${i}`}
                x1={pos.x}
                y1={pos.y}
                x2={proximo.x}
                y2={proximo.y}
                stroke="rgba(167, 139, 250, 0.2)"
                strokeWidth="0.3"
                strokeDasharray="1 1"
              />
            );
          })}

          <circle cx="50" cy="50" r="11" fill="url(#centro-mandala)" />
        </svg>

        {centro && (
          <button
            type="button"
            className={`mandala-numeros__no mandala-numeros__no--centro ${chaveAtiva === centro.chave ? "ativo" : ""}`}
            style={{ left: "50%", top: "50%" }}
            onClick={() => rolarPara(centro.chave)}
          >
            <span className="mandala-numeros__valor">{centro.numero}</span>
            <span className="mandala-numeros__rotulo">{centro.titulo}</span>
          </button>
        )}

        {numeros.slice(1).map((info, i) => {
          const pos = POSICOES[i];
          return (
            <button
              key={info.chave}
              type="button"
              className={`mandala-numeros__no ${chaveAtiva === info.chave ? "ativo" : ""}`}
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              onClick={() => rolarPara(info.chave)}
            >
              <span className="mandala-numeros__valor">{info.numero}</span>
              <span className="mandala-numeros__rotulo">{info.titulo}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
