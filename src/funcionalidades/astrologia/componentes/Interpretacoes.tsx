import { useState } from "react";
import type { ResultadoMapaAstral } from "../servicos/astrologia";
import type { InterpretacaoPlanetaSigno } from "../dados/interpretacoes/sol";
import { SOL } from "../dados/interpretacoes/sol";
import { LUA } from "../dados/interpretacoes/lua";
import { ASCENDENTE } from "../dados/interpretacoes/ascendente";
import { MERCURIO } from "../dados/interpretacoes/mercurio";
import { VENUS } from "../dados/interpretacoes/venus";
import { MARTE } from "../dados/interpretacoes/marte";
import { IconePlaneta } from "./IconePlaneta";
import { IconeSigno } from "./IconeSigno";
import "./Interpretacoes.scss";

interface Props {
  resultado: ResultadoMapaAstral;
}

type SecaoId = "essencia" | "talentos" | "desafios" | "amor" | "carreira" | "espiritualidade";

const SECOES: { id: SecaoId; titulo: string; icone: string }[] = [
  { id: "essencia", titulo: "Essência", icone: "fa-solid fa-fire" },
  { id: "talentos", titulo: "Talentos", icone: "fa-solid fa-star" },
  { id: "desafios", titulo: "Desafios", icone: "fa-solid fa-mountain" },
  { id: "amor", titulo: "Amor", icone: "fa-solid fa-heart" },
  { id: "carreira", titulo: "Carreira", icone: "fa-solid fa-briefcase" },
  { id: "espiritualidade", titulo: "Espiritualidade", icone: "fa-solid fa-dove" },
];

const FONTES: Record<string, Record<string, InterpretacaoPlanetaSigno>> = {
  Sol: SOL,
  Lua: LUA,
  Ascendente: ASCENDENTE,
  Mercúrio: MERCURIO,
  Vênus: VENUS,
  Marte: MARTE,
};

function grauParaSignoLocal(longitude: number): string {
  const SIGNOS = [
    "Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem",
    "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes",
  ];
  return SIGNOS[Math.floor(longitude / 30) % 12];
}

export function Interpretacoes({ resultado }: Props) {
  const ascendenteSigno = grauParaSignoLocal(resultado.ascendente);

  const todos = [
    { nome: "Ascendente", signo: ascendenteSigno },
    ...resultado.planetas
      .filter((p) => FONTES[p.nome])
      .map((p) => ({ nome: p.nome, signo: p.signo })),
  ];

  const [planetaAtivo, setPlanetaAtivo] = useState<string>("Ascendente");

  const ativo = todos.find((t) => t.nome === planetaAtivo) ?? todos[0];
  const fonte = FONTES[ativo.nome];
  const dados = fonte?.[ativo.signo];

  return (
    <div className="interpretacoes">
      <header className="interpretacoes__cabecalho">
        <h2 className="interpretacoes__titulo">Interpretações</h2>
        <p className="interpretacoes__subtitulo">
          Escolha um planeta para ler a interpretação detalhada.
        </p>
      </header>

      <div className="interpretacoes__abas">
        {todos.map(({ nome }) => {
          const ativo = nome === planetaAtivo;
          return (
            <button
              key={nome}
              type="button"
              className={`interpretacoes__aba ${ativo ? "ativa" : ""}`}
              onClick={() => setPlanetaAtivo(nome)}
            >
              <IconePlaneta planeta={nome} tamanho={28} />
              <span>{nome}</span>
            </button>
          );
        })}
      </div>

      {dados && (
        <article className="interpretacoes__cartao cartao-vidro">
          <header className="interpretacoes__cartao-cabecalho">
            <div className="interpretacoes__cartao-icone">
              <IconePlaneta planeta={ativo.nome} tamanho={56} />
            </div>
            <div className="interpretacoes__cartao-titulo">
              <span className="interpretacoes__cartao-planeta">{ativo.nome}</span>
              <div className="interpretacoes__cartao-signo-linha">
                <span className="interpretacoes__cartao-signo-prefixo">em</span>
                <IconeSigno signo={ativo.signo} tamanho={28} />
                <span className="interpretacoes__cartao-signo">{ativo.signo}</span>
              </div>
            </div>
          </header>

          <div className="interpretacoes__cartao-destaque">
            <h4 className="interpretacoes__cartao-subtitulo">{dados.titulo}</h4>
            <p className="interpretacoes__cartao-descricao">{dados.subtitulo}</p>
          </div>

          <div className="interpretacoes__secoes">
            {SECOES.map((secao) => (
              <SecaoAcordeao
                key={secao.id}
                titulo={secao.titulo}
                icone={secao.icone}
                paragrafos={dados[secao.id]}
              />
            ))}
          </div>
        </article>
      )}
    </div>
  );
}

interface SecaoAcordeaoProps {
  titulo: string;
  icone: string;
  paragrafos: string[];
}

function SecaoAcordeao({ titulo, icone, paragrafos }: SecaoAcordeaoProps) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className={`interpretacoes__secao-bloco ${aberto ? "expandido" : ""}`}>
      <button
        type="button"
        className="interpretacoes__secao-cabecalho"
        onClick={() => setAberto((v) => !v)}
      >
        <span className="interpretacoes__secao-titulo">
          <i className={icone} />
          <span>{titulo}</span>
        </span>
        <i className="fa-solid fa-chevron-down interpretacoes__secao-seta" />
      </button>

      {aberto && (
        <div className="interpretacoes__secao-corpo">
          {paragrafos.map((p, i) => (
            <p key={i} className="interpretacoes__paragrafo">{p}</p>
          ))}
        </div>
      )}
    </div>
  );
}
