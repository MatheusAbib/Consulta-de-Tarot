import { useState } from "react";
import type { Signo } from "../dados/signos";
import { IconeSigno } from "../../astrologia/componentes/IconeSigno";
import "./DetalheSigno.scss";

interface Props {
  signo: Signo;
}

type SecaoId = "quemE" | "amor" | "trabalho" | "luz" | "sombra" | "jornada";

const SECOES: { id: SecaoId; titulo: string; icone: string }[] = [
  { id: "quemE", titulo: "Quem é", icone: "fa-solid fa-user" },
  { id: "amor", titulo: "Amor e Relações", icone: "fa-solid fa-heart" },
  { id: "trabalho", titulo: "Trabalho e Propósito", icone: "fa-solid fa-briefcase" },
  { id: "luz", titulo: "Luz", icone: "fa-solid fa-sun" },
  { id: "sombra", titulo: "Sombra", icone: "fa-solid fa-moon" },
  { id: "jornada", titulo: "Jornada", icone: "fa-solid fa-compass" },
];

export function DetalheSigno({ signo }: Props) {
  return (
    <article className="detalhe-signo cartao-vidro">
      <header className="detalhe-signo__cabecalho">
        <div className="detalhe-signo__simbolo">
          <IconeSigno signo={signo.nome} tamanho={110} />
        </div>
        <div className="detalhe-signo__info">
          <h2 className="detalhe-signo__nome">{signo.nome}</h2>
          <p className="detalhe-signo__descricao">{signo.descricao}</p>
          <div className="detalhe-signo__tags">
            <span className="detalhe-signo__tag">{signo.elemento}</span>
            <span className="detalhe-signo__tag">{signo.modalidade}</span>
            <span className="detalhe-signo__tag">Regido por {signo.regente}</span>
            <span className="detalhe-signo__tag">
              {signo.dataInicio} — {signo.dataFim}
            </span>
          </div>
        </div>
      </header>

      <div className="detalhe-signo__resumo">
        <i className="fa-solid fa-quote-left detalhe-signo__resumo-icone" />
        <p className="detalhe-signo__resumo-texto">{signo.resumo}</p>
      </div>

      <div className="detalhe-signo__secoes">
        {SECOES.map((secao) => (
          <SecaoAcordeao
            key={secao.id}
            titulo={secao.titulo}
            icone={secao.icone}
            paragrafos={signo[secao.id]}
          />
        ))}
      </div>
    </article>
  );
}

interface SecaoAcordeaoProps {
  titulo: string;
  icone: string;
  paragrafos: string[];
}

function SecaoAcordeao({ titulo, icone, paragrafos }: SecaoAcordeaoProps) {
  const [aberto, setAberto] = useState(false);
  const ehLista = titulo === "Luz" || titulo === "Sombra";

  return (
    <div className={`detalhe-signo__secao-bloco ${aberto ? "expandido" : ""}`}>
      <button
        type="button"
        className="detalhe-signo__secao-cabecalho"
        onClick={() => setAberto((v) => !v)}
      >
        <span className="detalhe-signo__secao-titulo">
          <i className={icone} />
          <span>{titulo}</span>
        </span>
        <i className="fa-solid fa-chevron-down detalhe-signo__secao-seta" />
      </button>

      {aberto && (
        <div className="detalhe-signo__secao-corpo">
          {ehLista ? (
            <ul className={`detalhe-signo__lista ${titulo === "Sombra" ? "detalhe-signo__lista--negativa" : "detalhe-signo__lista--positiva"}`}>
              {paragrafos.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            paragrafos.map((p, i) => (
              <p key={i} className="detalhe-signo__paragrafo">{p}</p>
            ))
          )}
        </div>
      )}
    </div>
  );
}
