import { useState } from "react";
import type { PontosMatriz } from "../servicos/matrizDestino";
import { ARCANOS } from "../dados/arcanos";
import "./DiagramaMatriz.scss";

interface Props {
  pontos: PontosMatriz;
}

type ChavePonto = keyof PontosMatriz;

const PONTOS_POSICAO: { chave: ChavePonto; x: number; y: number; rotulo: string }[] = [
  { chave: "C", x: 50, y: 10, rotulo: "Céu (Talento)" },
  { chave: "L", x: 50, y: 28, rotulo: "Dharma" },
  { chave: "D", x: 85, y: 22, rotulo: "Direita (Mãe)" },
  { chave: "E", x: 15, y: 22, rotulo: "Esquerda (Pai)" },
  { chave: "A", x: 50, y: 50, rotulo: "Eu (Personalidade)" },
  { chave: "M", x: 85, y: 50, rotulo: "Propósito" },
  { chave: "F", x: 15, y: 50, rotulo: "Passado" },
  { chave: "B", x: 50, y: 72, rotulo: "Futuro" },
  { chave: "K", x: 50, y: 62, rotulo: "Karma" },
  { chave: "I", x: 85, y: 78, rotulo: "Finanças" },
  { chave: "G", x: 15, y: 78, rotulo: "Saúde" },
  { chave: "H", x: 50, y: 90, rotulo: "Terra (Missão)" },
  { chave: "J", x: 50, y: 40, rotulo: "Ancestral" },
];

export function DiagramaMatriz({ pontos }: Props) {
  const [selecionado, setSelecionado] = useState<ChavePonto | null>(null);

  const pontoSelecionado = selecionado
    ? PONTOS_POSICAO.find((p) => p.chave === selecionado)
    : null;
  const arcanoSelecionado = selecionado ? ARCANOS[pontos[selecionado]] : null;

  return (
    <div className="diagrama-matriz">
      <div className="diagrama-matriz__svg-wrapper">
        <svg viewBox="0 0 100 100" className="diagrama-matriz__svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <radialGradient id="centro-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(167, 139, 250, 0.4)" />
              <stop offset="100%" stopColor="rgba(167, 139, 250, 0.05)" />
            </radialGradient>
            <linearGradient id="linha-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#f0a4b8" />
            </linearGradient>
          </defs>

          <rect x="18" y="18" width="64" height="64" fill="none" stroke="rgba(167,139,250,0.2)" strokeWidth="0.3" />
          <rect x="18" y="18" width="64" height="64" fill="none" stroke="rgba(167,139,250,0.2)" strokeWidth="0.3" transform="rotate(45 50 50)" />

          <line x1="50" y1="18" x2="50" y2="82" stroke="rgba(167,139,250,0.15)" strokeWidth="0.3" />
          <line x1="18" y1="50" x2="82" y2="50" stroke="rgba(167,139,250,0.15)" strokeWidth="0.3" />

          <circle cx="50" cy="50" r="11" fill="url(#centro-grad)" />

          {PONTOS_POSICAO.map((p) => {
            const ativo = selecionado === p.chave;
            const valor = pontos[p.chave];
            const raio = p.chave === "A" ? 7 : 6;

            return (
              <g
                key={p.chave}
                className={`diagrama-matriz__ponto ${ativo ? "ativo" : ""}`}
                onClick={() => setSelecionado(p.chave)}
                style={{ cursor: "pointer" }}
              >
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={raio}
                  fill={ativo ? "url(#linha-grad)" : "rgba(30, 25, 50, 0.95)"}
                  stroke={ativo ? "#f0a4b8" : "rgba(167, 139, 250, 0.6)"}
                  strokeWidth="0.4"
                />
                <text
                  x={p.x}
                  y={p.y - 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={p.chave === "A" ? "4.2" : "3.8"}
                  fill="#f0a4b8"
                  fontFamily="Cinzel, serif"
                  fontWeight="700"
                  pointerEvents="none"
                >
                  {p.chave}
                </text>
                <text
                  x={p.x}
                  y={p.y + 2.4}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={p.chave === "A" ? "4.2" : "3.5"}
                  fill="#ffffff"
                  fontFamily="Cinzel, serif"
                  fontWeight="700"
                  pointerEvents="none"
                >
                  {valor}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {arcanoSelecionado && pontoSelecionado && (
        <div className="diagrama-matriz__detalhe cartao-vidro">
          <header className="diagrama-matriz__detalhe-cabecalho">
            <div className="diagrama-matriz__detalhe-numero">{arcanoSelecionado.numero}</div>
            <div>
              <h3 className="diagrama-matriz__detalhe-titulo">{arcanoSelecionado.nome}</h3>
              <p className="diagrama-matriz__detalhe-rotulo">
                Ponto {pontoSelecionado.chave} — {pontoSelecionado.rotulo}
              </p>
            </div>
          </header>

          <div className="diagrama-matriz__destaque">
            <h4 className="diagrama-matriz__destaque-titulo">{arcanoSelecionado.titulo}</h4>
            <p className="diagrama-matriz__destaque-subtitulo">{arcanoSelecionado.subtitulo}</p>
          </div>

          <div className="diagrama-matriz__texto">
            {arcanoSelecionado.texto.map((p, i) => (
              <p key={i} className="diagrama-matriz__paragrafo">{p}</p>
            ))}
          </div>
        </div>
      )}

      <p className="diagrama-matriz__instrucao">
        <i className="fa-solid fa-hand-pointer" /> Toque em cada ponto para revelar sua interpretação
      </p>
    </div>
  );
}
