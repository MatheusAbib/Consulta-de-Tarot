import type { Carta } from "../../../nucleo/modelos/carta";
import "./CartaTarot.scss";

interface Props {
  carta: Carta;
  virada: boolean;
  desabilitada: boolean;
  posicao?: string;
  indicePosicao?: number;
  aoClicar?: () => void;
  mostrarPosicao?: boolean;
}

export function CartaTarot({
  carta,
  virada,
  desabilitada,
  posicao,
  indicePosicao,
  aoClicar,
  mostrarPosicao = true,
}: Props) {
  return (
    <div className="carta-tarot__wrapper">
      <button
        type="button"
        className={`carta-tarot ${virada ? "virada" : ""} ${desabilitada ? "desabilitada" : ""}`}
        onClick={aoClicar}
        disabled={desabilitada || virada}
        aria-label={virada ? `${carta.titulo} — ${carta.descricao}` : "Carta virada para baixo"}
      >
        <div className="carta-tarot__face carta-tarot__verso" />
        <div className="carta-tarot__face carta-tarot__frente">
          <div className="carta-tarot__numero">{carta.numero}</div>
          <div className="carta-tarot__titulo">{carta.titulo}</div>
          <div className="carta-tarot__descricao">{carta.descricao}</div>
        </div>
      </button>

      {mostrarPosicao && virada && posicao && (
        <div className="carta-tarot__posicao">
          {typeof indicePosicao === "number" && (
            <span className="carta-tarot__posicao-indice">{indicePosicao + 1}</span>
          )}
          <span className="carta-tarot__posicao-nome">{posicao}</span>
        </div>
      )}
    </div>
  );
}
