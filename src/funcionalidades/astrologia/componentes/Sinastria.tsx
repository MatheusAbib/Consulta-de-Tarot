import { useState } from "react";
import { FormularioNascimento } from "./FormularioNascimento";
import { useAstrologia } from "../ganchos/useAstrologia";
import type { ResultadoMapaAstral } from "../servicos/astrologia";
import { calcularSinastria, resumirSinastria } from "../servicos/sinastria";
import { obterTextoSinastria } from "../dados/sinastria";
import "./Sinastria.scss";

interface Props {
  mapaA: ResultadoMapaAstral;
  nomeA: string;
}

const CORES: Record<string, string> = {
  conjuncao: "#a78bfa",
  sextil: "#86efac",
  quadratura: "#fca5a5",
  trigono: "#93c5fd",
  oposicao: "#f0a4b8",
};

const NOMES: Record<string, string> = {
  conjuncao: "Conjunção",
  sextil: "Sextil",
  quadratura: "Quadratura",
  trigono: "Trígono",
  oposicao: "Oposição",
};

export function Sinastria({ mapaA, nomeA }: Props) {
  const { resultado: mapaB, carregando, erro, calcular } = useAstrologia();
  const [nomeB, setNomeB] = useState("");
  const [aberto, setAberto] = useState(false);

  const aspectos = mapaB ? calcularSinastria(mapaA, mapaB) : [];
  const resumo = resumirSinastria(aspectos);

  return (
    <section className="sinastria">
      <header className="sinastria__cabecalho">
        <h3 className="sinastria__titulo">Sinastria Amorosa</h3>
        <p className="sinastria__subtitulo">
          Compare seu mapa astral com o de outra pessoa para entender como as
          energias de vocês se encontram no amor.
        </p>
      </header>

      {!aberto && !mapaB && (
        <button
          type="button"
          className="sinastria__btn"
          onClick={() => setAberto(true)}
        >
          Comparar com alguém
        </button>
      )}

      {aberto && !mapaB && (
        <div className="sinastria__formulario">
          <FormularioNascimento
            aoEnviar={(dados) => {
              setNomeB(dados.nome);
              calcular(dados);
            }}
            carregando={carregando}
            titulo="Dados da outra pessoa"
            subtitulo="Preencha os dados de nascimento da pessoa com quem você quer comparar."
            rotuloBotao="Calcular Sinastria"
          />
          {erro && <p className="sinastria__erro">{erro}</p>}
        </div>
      )}

      {mapaB && (
        <div className="sinastria__resultado">
          <div className="sinastria__resumo">
            <h4>Resumo da conexão</h4>
            <div className="sinastria__contadores">
              <div className="sinastria__contador sinastria__contador--total">
                <span>{resumo.total}</span>
                <small>aspectos</small>
              </div>
              <div className="sinastria__contador sinastria__contador--harmonico">
                <span>{resumo.harmonicos}</span>
                <small>harmônicos</small>
              </div>
              <div className="sinastria__contador sinastria__contador--tenso">
                <span>{resumo.tensos}</span>
                <small>tensos</small>
              </div>
            </div>
            <p className="sinastria__resumo-texto">
              {resumo.harmonicos > resumo.tensos
                ? "A relação tem mais fluidez do que atrito. Há uma base harmônica que pode ser cultivada."
                : resumo.tensos > resumo.harmonicos
                ? "A relação tem mais desafios do que facilidades. Exige negociação constante, mas pode gerar grande crescimento."
                : "A relação é equilibrada entre harmonia e desafio. Há espaço para construir com consciência."}
            </p>
          </div>

          <div className="sinastria__lista">
            {aspectos.map((asp, i) => {
              const texto = obterTextoSinastria(asp.tipo, asp.planetaA, asp.planetaB);
              return (
                <article key={i} className="sinastria__item">
                  <div className="sinastria__item-cabecalho">
                    <span
                      className="sinastria__item-cor"
                      style={{ background: CORES[asp.tipo] }}
                    />
                    <h5>
                      {asp.planetaA} de {nomeA} em{" "}
                      {NOMES[asp.tipo].toLowerCase()} com{" "}
                      {asp.planetaB} de {nomeB || "outra pessoa"}
                    </h5>
                    <span className="sinastria__orbe">orbe {asp.orbe}°</span>
                  </div>
                  <p className="sinastria__descricao">{texto.descricao}</p>
                  <div className="sinastria__blocos">
                    <div className="sinastria__bloco sinastria__bloco--bom">
                      <strong>O que funciona</strong>
                      <p>{texto.funciona}</p>
                    </div>
                    <div className="sinastria__bloco sinastria__bloco--atencao">
                      <strong>O que vigiar</strong>
                      <p>{texto.vigiar}</p>
                    </div>
                  </div>
                  <p className="sinastria__conselho">
                    <strong>Conselho:</strong> {texto.conselho}
                  </p>
                </article>
              );
            })}
          </div>

          <button
            type="button"
            className="sinastria__btn sinastria__btn--secundario"
            onClick={() => {
              setAberto(false);
              setNomeB("");
              window.location.reload();
            }}
          >
            Comparar com outra pessoa
          </button>
        </div>
      )}
    </section>
  );
}


