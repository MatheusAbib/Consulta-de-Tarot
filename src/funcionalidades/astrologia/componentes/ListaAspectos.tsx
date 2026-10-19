import { useMemo, useState } from "react";
import type { PlanetaCalculado } from "../servicos/astrologia";
import { calcularAspectos } from "../servicos/aspectos";
import type { TipoAspecto } from "../servicos/aspectos";
import { obterTextoAspecto } from "../dados/aspectos/index";
import "./ListaAspectos.scss";

interface Props {
  planetas: PlanetaCalculado[];
}

const CORES: Record<TipoAspecto, string> = {
  conjuncao: "#a78bfa",
  sextil: "#86efac",
  quadratura: "#fca5a5",
  trigono: "#93c5fd",
  oposicao: "#f0a4b8",
};

const NOMES: Record<TipoAspecto, string> = {
  conjuncao: "Conjunção",
  sextil: "Sextil",
  quadratura: "Quadratura",
  trigono: "Trígono",
  oposicao: "Oposição",
};

type Filtro = "todos" | TipoAspecto;

const FILTROS: { id: Filtro; rotulo: string }[] = [
  { id: "todos", rotulo: "Todos" },
  { id: "conjuncao", rotulo: "Conjunção" },
  { id: "sextil", rotulo: "Sextil" },
  { id: "quadratura", rotulo: "Quadratura" },
  { id: "trigono", rotulo: "Trígono" },
  { id: "oposicao", rotulo: "Oposição" },
];

export function ListaAspectos({ planetas }: Props) {
  const aspectos = useMemo(() => calcularAspectos(planetas), [planetas]);
  const [filtro, setFiltro] = useState<Filtro>("todos");

  const filtrados = useMemo(
    () =>
      filtro === "todos"
        ? aspectos
        : aspectos.filter((a) => a.tipo === filtro),
    [aspectos, filtro]
  );

  if (aspectos.length === 0) {
    return (
      <p className="lista-aspectos__vazio">
        Nenhum aspecto relevante encontrado neste mapa.
      </p>
    );
  }

  return (
    <section className="lista-aspectos">
      <header className="lista-aspectos__cabecalho">
        <h3 className="lista-aspectos__titulo">Aspectos Planetários</h3>
        <p className="lista-aspectos__subtitulo">
          As relações entre os planetas — como eles conversam entre si.
        </p>
      </header>

      <div className="lista-aspectos__filtros">
        {FILTROS.map((f) => {
          const ativo = f.id === filtro;
          const cor = f.id === "todos" ? "#a78bfa" : CORES[f.id];
          return (
            <button
              key={f.id}
              type="button"
              className={`lista-aspectos__filtro ${ativo ? "ativo" : ""}`}
              onClick={() => setFiltro(f.id)}
              style={ativo ? { borderColor: cor, color: cor } : undefined}
            >
              {f.id !== "todos" && (
                <span
                  className="lista-aspectos__filtro-cor"
                  style={{ background: cor }}
                />
              )}
              {f.rotulo}
            </button>
          );
        })}
      </div>

      {filtrados.length === 0 ? (
        <p className="lista-aspectos__vazio">
          Nenhum aspecto desse tipo neste mapa.
        </p>
      ) : (
        <div className="lista-aspectos__grade">
          {filtrados.map((asp, i) => {
            const texto = obterTextoAspecto(asp.tipo, asp.planetaA, asp.planetaB);
            return (
              <article
                key={`${asp.planetaA}-${asp.planetaB}-${asp.tipo}-${i}`}
                className="lista-aspectos__item"
              >
                <div className="lista-aspectos__cabecalho-item">
                  <span
                    className="lista-aspectos__tipo"
                    style={{ background: CORES[asp.tipo] }}
                  />
                  <h4 className="lista-aspectos__titulo-item">
                    {asp.planetaA} em {NOMES[asp.tipo].toLowerCase()} com {asp.planetaB}
                  </h4>
                </div>
                <span className="lista-aspectos__orbe">orbe {asp.orbe}°</span>

                <p className="lista-aspectos__descricao">{texto.descricao}</p>

                <div className="lista-aspectos__blocos">
                  <div className="lista-aspectos__bloco lista-aspectos__bloco--bom">
                    <strong>O que funciona</strong>
                    <p>{texto.funciona}</p>
                  </div>
                  <div className="lista-aspectos__bloco lista-aspectos__bloco--atencao">
                    <strong>O que vigiar</strong>
                    <p>{texto.vigiar}</p>
                  </div>
                </div>

                <p className="lista-aspectos__conselho">
                  <strong>Conselho:</strong> {texto.conselho}
                </p>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
