import { useRef } from "react";
import type { ResultadoMapaAstral } from "../servicos/astrologia";
import { IconePlaneta } from "./IconePlaneta";
import { IconeSigno } from "./IconeSigno";
import { calcularAspectos } from "../servicos/aspectos";
import "./MapaAstral.scss";

interface Props {
  resultado: ResultadoMapaAstral;
}

const NOMES_SIGNOS = [
  "Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem",
  "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes",
];

export function MapaAstral({ resultado }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tamanho = 600;
  const centro = tamanho / 2;
  const raioExterno = 280;
  const raioInterno = 200;
  const raioPlanetas = 160;
  const raioCasas = 110;
  const aspectos = calcularAspectos(resultado.planetas);
  const planetasPorNome = Object.fromEntries(resultado.planetas.map(p => [p.nome, p]));

  function pontoNoCirculo(grau: number, raio: number) {
    const rad = ((grau - 90) * Math.PI) / 180;
    return {
      x: centro + Math.cos(rad) * raio,
      y: centro + Math.sin(rad) * raio,
    };
  }

  return (
    <div className="mapa-astral" ref={containerRef}>
      <svg
        className="mapa-astral__svg"
        viewBox={`0 0 ${tamanho} ${tamanho}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Mapa astral"
      >
        <defs>
          <radialGradient id="fundo-mapa" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1a1333" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0d0b1a" stopOpacity="1" />
          </radialGradient>
          <linearGradient id="anel-gradiente" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9969ff" />
            <stop offset="100%" stopColor="#ff69a1" />
          </linearGradient>
        </defs>

        <circle cx={centro} cy={centro} r={raioExterno + 10} fill="url(#fundo-mapa)" />
        <circle
          cx={centro}
          cy={centro}
          r={raioExterno}
          fill="none"
          stroke="url(#anel-gradiente)"
          strokeWidth="2"
        />
        <circle
          cx={centro}
          cy={centro}
          r={raioInterno}
          fill="none"
          stroke="rgba(153, 105, 255, 0.4)"
          strokeWidth="1"
        />
        <circle
          cx={centro}
          cy={centro}
          r={raioCasas}
          fill="none"
          stroke="rgba(153, 105, 255, 0.2)"
          strokeWidth="1"
        />

        {Array.from({ length: 12 }).map((_, i) => {
          const inicio = pontoNoCirculo(i * 30, raioInterno);
          const fim = pontoNoCirculo(i * 30, raioExterno);
          return (
            <line
              key={i}
              x1={inicio.x}
              y1={inicio.y}
              x2={fim.x}
              y2={fim.y}
              stroke="rgba(153, 105, 255, 0.3)"
              strokeWidth="1"
            />
          );
        })}

        {resultado.casas.map((cuspide, i) => {
          const proxima = resultado.casas[(i + 1) % 12];
          const diferenca = (proxima - cuspide + 360) % 360;
          const inicio = pontoNoCirculo(cuspide, raioInterno);
          const fim = pontoNoCirculo(cuspide, raioCasas);
          const meio = cuspide + diferenca / 2;
          const posNumero = pontoNoCirculo(meio, raioCasas - 20);

          return (
            <g key={i}>
              <line
                x1={inicio.x}
                y1={inicio.y}
                x2={fim.x}
                y2={fim.y}
                stroke="rgba(255, 105, 161, 0.5)"
                strokeWidth="1.5"
              />
              <text
                x={posNumero.x}
                y={posNumero.y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="12"
                fill="rgba(255, 255, 255, 0.6)"
                fontFamily="Cinzel, serif"
              >
                {i + 1}
              </text>
            </g>
          );
        })}

        <line
          x1={pontoNoCirculo(resultado.ascendente, raioCasas).x}
          y1={pontoNoCirculo(resultado.ascendente, raioCasas).y}
          x2={pontoNoCirculo(resultado.ascendente + 180, raioExterno).x}
          y2={pontoNoCirculo(resultado.ascendente + 180, raioExterno).y}
          stroke="#ff69a1"
          strokeWidth="2"
          strokeDasharray="6 4"
        />

        {aspectos.map((asp, i) => {
          const pA = planetasPorNome[asp.planetaA];
          const pB = planetasPorNome[asp.planetaB];
          if (!pA || !pB) return null;
          const a = pontoNoCirculo(pA.longitude, raioPlanetas);
          const b = pontoNoCirculo(pB.longitude, raioPlanetas);
          const cores: Record<string, string> = {
            conjuncao: "#a78bfa",
            sextil: "#86efac",
            quadratura: "#fca5a5",
            trigono: "#93c5fd",
            oposicao: "#f0a4b8",
          };
          const tracejada = asp.tipo === "quadratura" || asp.tipo === "oposicao";
          return (
            <line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={cores[asp.tipo]}
              strokeWidth="1.2"
              strokeOpacity="0.55"
              strokeDasharray={tracejada ? "4 3" : undefined}
            />
          );
        })}
      </svg>

      <div className="mapa-astral__sobreposicao">
        {NOMES_SIGNOS.map((nome, i) => {
          const pos = pontoNoCirculo(i * 30 + 15, raioExterno - 30);
          const xPercent = (pos.x / tamanho) * 100;
          const yPercent = (pos.y / tamanho) * 100;
          return (
            <div
              key={i}
              className="mapa-astral__signo"
              style={{ left: `${xPercent}%`, top: `${yPercent}%` }}
            >
              <IconeSigno signo={nome} tamanho={36} />
            </div>
          );
        })}

        {resultado.planetas.map((planeta, i) => {
          const pos = pontoNoCirculo(planeta.longitude, raioPlanetas);
          const xPercent = (pos.x / tamanho) * 100;
          const yPercent = (pos.y / tamanho) * 100;
          return (
            <div
              key={i}
              className="mapa-astral__planeta"
              style={{ left: `${xPercent}%`, top: `${yPercent}%` }}
              title={`${planeta.nome} em ${planeta.signo} — ${Math.round(planeta.grau)}°`}
            >
              <IconePlaneta planeta={planeta.nome} tamanho={28} />
              <span className="mapa-astral__planeta-grau">{Math.round(planeta.grau)}°</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}




