import { usePerfil } from "../../nucleo/contextos/PerfilContexto";
import "./BotaoPerfil.scss";

export function BotaoPerfil() {
  const { perfil, abrirModal } = usePerfil();

  return (
    <button
      type="button"
      className="botao-perfil"
      onClick={abrirModal}
      title="Suas informações"
    >
      <i className="fa-solid fa-user" />
      <span>Perfil de {perfil?.nome?.split(" ")[0] ?? "Suas informações"}</span>
    </button>
  );
}
