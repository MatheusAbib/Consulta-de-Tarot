import { useEffect, useRef, useState } from "react";
import type { InterpretacaoNumero } from "../dados/interpretacoes/modelo";
import "./ResultadoNumero.scss";

interface Props {
  numero: number;
  titulo: string;
  contexto?: string;
  resumo?: string;
  interpretacao: InterpretacaoNumero | undefined;
  destaque?: boolean;
  aberto?: boolean;
  aoClicar?: () => void;
}

interface SecaoProps {
  titulo: string;
  paragrafos: string[];
}

function Secao({ titulo, paragrafos }: SecaoProps) {
  const [expandido, setExpandido] = useState(false);

  return (
    <div className={`resultado-numero__secao-bloco ${expandido ? "expandido" : ""}`}>
      <button
        type="button"
        className="resultado-numero__secao-cabecalho"
        onClick={(e) => {
          e.stopPropagation();
          setExpandido((v) => !v);
        }}
      >
        <span className="resultado-numero__secao-titulo">{titulo}</span>
        <i className="fa-solid fa-chevron-down resultado-numero__secao-seta" />
      </button>

      {expandido && (
        <div className="resultado-numero__secao-corpo">
          {paragrafos.map((p, i) => (
            <p key={i} className="resultado-numero__paragrafo">
              {p}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export function ResultadoNumero({
  numero,
  titulo,
  contexto,
  resumo,
  interpretacao,
  destaque = false,
  aberto = false,
  aoClicar,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (aberto) {
      ref.current.style.borderColor = "rgba(240, 164, 184, 0.6)";
      ref.current.style.boxShadow = "0 0 30px rgba(167, 139, 250, 0.25)";
    } else {
      ref.current.style.borderColor = "";
      ref.current.style.boxShadow = "";
    }
  }, [aberto]);

  return (
    <article
      ref={ref}
      className={`resultado-numero cartao-vidro ${destaque ? "resultado-numero--destaque" : ""}`}
      onClick={aoClicar}
    >
      <header className="resultado-numero__cabecalho">
        <div className="resultado-numero__circulo">
          <span className="resultado-numero__valor">{numero}</span>
        </div>
        <div className="resultado-numero__info">
          <h3 className="resultado-numero__titulo">{titulo}</h3>
          {contexto && <p className="resultado-numero__contexto">{contexto}</p>}
        </div>
      </header>

      {resumo && (
        <div className="resultado-numero__resumo">
          <i className="fa-solid fa-quote-left resultado-numero__resumo-icone" />
          <p className="resultado-numero__resumo-texto">{resumo}</p>
        </div>
      )}

      {!interpretacao && (
        <p className="resultado-numero__em-breve">
          <i className="fa-solid fa-hourglass-half" /> Texto em produção — em breve.
        </p>
      )}

      {interpretacao && (
        <div className="resultado-numero__conteudo">
          <h4 className="resultado-numero__subtitulo-numero">{interpretacao.titulo}</h4>
          <p className="resultado-numero__descricao-curta">{interpretacao.subtitulo}</p>

          <Secao titulo="Quem você é" paragrafos={interpretacao.quemVoceE} />
          <Secao titulo="Seu maior desafio" paragrafos={interpretacao.desafio} />
          <Secao titulo="Onde você brilha" paragrafos={interpretacao.ondeBrilha} />
          <Secao titulo="Na prática" paragrafos={interpretacao.naPratica} />
        </div>
      )}
    </article>
  );
}
