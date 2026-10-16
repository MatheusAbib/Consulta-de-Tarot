import { useEffect, useState } from "react";
import { SIGNOS } from "./dados/signos";
import type { Signo } from "./dados/signos";
import { signoPorData } from "./dados/signoPorData";
import { usePerfil } from "../../nucleo/contextos/PerfilContexto";
import { CardSigno } from "./componentes/CardSigno";
import { DetalheSigno } from "./componentes/DetalheSigno";
import { ModalSignos } from "./componentes/ModalSignos";
import "./PainelSignos.scss";

export function PainelSignos() {
  const { perfil, completo } = usePerfil();
  const [signoAtivo, setSignoAtivo] = useState<Signo | null>(null);
  const [modalAberto, setModalAberto] = useState(false);

  useEffect(() => {
    if (completo && perfil && !signoAtivo) {
      const signo = signoPorData(perfil.dataNascimento);
      if (signo) setSignoAtivo(signo);
    }
  }, [completo, perfil, signoAtivo]);

  return (
    <div className="painel-signos">
      <header className="painel-signos__cabecalho">
        <div className="painel-signos__titulo-linha">
          <h2 className="painel-signos__titulo">Os Doze Signos</h2>
          <button
            type="button"
            className="painel-signos__info"
            onClick={() => setModalAberto(true)}
            aria-label="Como funciona"
          >
            <i className="fa-solid fa-circle-info" />
          </button>
        </div>
        <p className="painel-signos__descricao">
          {completo && perfil
            ? `${perfil.nome.split(" ")[0]}, seu signo é destacado abaixo. Clique em qualquer outro para explorar.`
            : "Explore a essência de cada signo do zodíaco."}
        </p>
      </header>

      <div className="painel-signos__grade">
        {SIGNOS.map((signo) => (
          <CardSigno
            key={signo.nome}
            signo={signo}
            ativo={signoAtivo?.nome === signo.nome}
            aoClicar={() =>
              setSignoAtivo(signoAtivo?.nome === signo.nome ? null : signo)
            }
          />
        ))}
      </div>

      {signoAtivo && (
        <div className="painel-signos__detalhe" key={signoAtivo.nome}>
          <DetalheSigno signo={signoAtivo} />
        </div>
      )}

      <ModalSignos aberto={modalAberto} aoFechar={() => setModalAberto(false)} />
    </div>
  );
}
