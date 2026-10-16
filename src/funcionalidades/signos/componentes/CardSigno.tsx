import type { Signo } from "../dados/signos";
import { IconeSigno } from "../../astrologia/componentes/IconeSigno";
import "./CardSigno.scss";

interface Props {
  signo: Signo;
  ativo: boolean;
  aoClicar: () => void;
}

export function CardSigno({ signo, ativo, aoClicar }: Props) {
  return (
    <button
      type="button"
      className={`card-signo cartao-vidro ${ativo ? "ativo" : ""}`}
      onClick={aoClicar}
    >
      <div className="card-signo__simbolo">
        <IconeSigno signo={signo.nome} tamanho={56} />
      </div>
      <h3 className="card-signo__nome">{signo.nome}</h3>
      <p className="card-signo__elemento">
        {signo.elemento} · {signo.modalidade}
      </p>
      <p className="card-signo__datas">
        {signo.dataInicio} — {signo.dataFim}
      </p>
    </button>
  );
}

