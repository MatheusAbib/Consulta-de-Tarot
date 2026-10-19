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
    <section className="interpretacoes">
      <header className="interpretacoes__cabecalho">
        <h2 className="interpretacoes__titulo">Interpretações</h2>
        <p className="interpretacoes__subtitulo">
          Escolha um planeta para ler a interpretação detalhada.
        </p>
      </header>

      <div className="interpretacoes__layout">
        <aside className="interpretacoes__menu" role="tablist">
          {todos.map(({ nome }) => {
            const isAtivo = nome === planetaAtivo;
            return (
              <button
                key={nome}
                type="button"
                role="tab"
                aria-selected={isAtivo}
                className={`interpretacoes__aba ${isAtivo ? "ativa" : ""}`}
                onClick={() => setPlanetaAtivo(nome)}
              >
                <IconePlaneta planeta={nome} tamanho={24} />
                <span>{nome}</span>
              </button>
            );
          })}
        </aside>

        <div className="interpretacoes__conteudo">
          {dados && (
            <article className="interpretacoes__cartao">
              <header className="interpretacoes__cartao-cabecalho">
                <div className="interpretacoes__cartao-icone">
                  <IconePlaneta planeta={ativo.nome} tamanho={48} />
                </div>
                <div className="interpretacoes__cartao-titulo">
                  <span className="interpretacoes__cartao-planeta">
                    {ativo.nome} em {ativo.signo}
                  </span>
                  <div className="interpretacoes__cartao-signo-linha">
                    <IconeSigno signo={ativo.signo} tamanho={22} />
                    <span className="interpretacoes__cartao-signo">{ativo.signo}</span>
                  </div>
                </div>
              </header>

              <div className="interpretacoes__cartao-destaque">
                <h4 className="interpretacoes__cartao-subtitulo">{dados.titulo}</h4>
                <p className="interpretacoes__cartao-descricao">{dados.subtitulo}</p>
              </div>

              <div className="interpretacoes__secoes">
                {SECOES.map((secao, i) => (
                  <SecaoAcordeao
                    key={secao.id}
                    titulo={secao.titulo}
                    icone={secao.icone}
                    paragrafos={dados[secao.id]}
                    padraoAberto={i === 0}
                  />
                ))}
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}

interface SecaoAcordeaoProps {
  titulo: string;
  icone: string;
  paragrafos: string[];
  padraoAberto?: boolean;
}

function SecaoAcordeao({ titulo, icone, paragrafos, padraoAberto }: SecaoAcordeaoProps) {
  const [aberto, setAberto] = useState(!!padraoAberto);

  return (
    <div className={`interpretacoes__secao-bloco ${aberto ? "expandido" : ""}`}>
      <button
        type="button"
        className="interpretacoes__secao-cabecalho"
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
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
