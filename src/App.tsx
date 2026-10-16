import { ToastContainer } from "react-toastify";
import { BarraNavegacao } from "./compartilhado/componentes/BarraNavegacao";
import { Rodape } from "./compartilhado/componentes/Rodape";
import { FundoParticulas } from "./compartilhado/componentes/FundoParticulas";
import { ModalBoasVindas } from "./compartilhado/componentes/ModalBoasVindas";
import { PerfilProvedor } from "./nucleo/contextos/PerfilContexto";
import { Rotas } from "./rotas";
import "react-toastify/dist/ReactToastify.css";
import "./estilos/toast.scss";

export function App() {
  return (
    <PerfilProvedor>
      <FundoParticulas />
      <BarraNavegacao />
      <main>
        <Rotas />
      </main>
      <Rodape />
      <ModalBoasVindas />
      <ToastContainer />
    </PerfilProvedor>
  );
}
