import "./PainelPlaceholder.scss";

interface Props {
  icone: string;
  descricao: string;
}

export function PainelPlaceholder({ icone, descricao }: Props) {
  return (
    <div className="painel-placeholder">
      <div className="painel-placeholder__icone">
        <i className={icone} />
      </div>
      <p className="painel-placeholder__descricao">{descricao}</p>
      <div className="painel-placeholder__aviso cartao-vidro">
        <i className="fa-solid fa-hourglass-half" />
        <span>Este oráculo está em construção. Em breve estará disponível.</span>
      </div>
    </div>
  );
}
