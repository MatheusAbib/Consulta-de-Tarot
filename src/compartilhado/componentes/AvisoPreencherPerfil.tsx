import { usePerfil } from "../../nucleo/contextos/PerfilContexto";
import "./AvisoPreencherPerfil.scss";

interface Props {
  titulo: string;
  descricao: string;
  icone: string;
}

export function AvisoPreencherPerfil({ titulo, descricao, icone }: Props) {
  const { abrirModal } = usePerfil();

  return (
    <div className="aviso-preencher-perfil">
      <div className="aviso-preencher-perfil__icone">
        <i className={icone} />
      </div>
      <h2 className="aviso-preencher-perfil__titulo">{titulo}</h2>
      <p className="aviso-preencher-perfil__descricao">{descricao}</p>
      <button
        type="button"
        className="botao-mistico aviso-preencher-perfil__botao"
        onClick={abrirModal}
      >
        <i className="fa-solid fa-user" /> Preencher suas informações
      </button>
    </div>
  );
}
