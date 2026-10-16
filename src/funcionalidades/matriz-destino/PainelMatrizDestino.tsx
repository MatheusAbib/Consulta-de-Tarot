import { useEffect, useState } from "react";
import { useMatrizDestino } from "./ganchos/useMatrizDestino";
import { usePerfil } from "../../nucleo/contextos/PerfilContexto";
import { AvisoPreencherPerfil } from "../../compartilhado/componentes/AvisoPreencherPerfil";
import { DiagramaMatriz } from "./componentes/DiagramaMatriz";
import { ModalMatriz } from "./componentes/ModalMatriz";
import "./PainelMatrizDestino.scss";

export function PainelMatrizDestino() {
  const { perfil, completo } = usePerfil();
  const { resultado, erro, calcular } = useMatrizDestino();
  const [modalAberto, setModalAberto] = useState(false);

  useEffect(() => {
    if (completo && perfil && !resultado) {
      calcular({
        nome: perfil.nome,
        dataNascimento: perfil.dataNascimento,
      });
    }
  }, [completo, perfil, resultado, calcular]);

  if (!completo) {
    return (
      <div className="painel-matriz-destino">
        <AvisoPreencherPerfil
          titulo="Matriz do Destino"
          descricao="Preciso do seu nome e data de nascimento para revelar sua matriz energética."
          icone="fa-solid fa-diamond"
        />
      </div>
    );
  }

  return (
    <div className="painel-matriz-destino">
      <header className="painel-matriz-destino__cabecalho">
        <div className="painel-matriz-destino__titulo-linha">
          <h2 className="painel-matriz-destino__titulo">Sua Matriz do Destino</h2>
          <button
            type="button"
            className="painel-matriz-destino__info"
            onClick={() => setModalAberto(true)}
            aria-label="Como funciona"
          >
            <i className="fa-solid fa-circle-info" />
          </button>
        </div>
        <p className="painel-matriz-destino__descricao">
          Cada ponto é um arcano que fala sobre uma área da sua vida.
        </p>
      </header>

      {erro && (
        <div className="painel-matriz-destino__erro">
          <i className="fa-solid fa-triangle-exclamation" />
          <span>{erro}</span>
        </div>
      )}

      {resultado && (
        <>
          <DiagramaMatriz pontos={resultado} />
          <div className="painel-matriz-destino__acoes">

          </div>
        </>
      )}

      <ModalMatriz
        aberto={modalAberto}
        aoFechar={() => setModalAberto(false)}
        dataNascimento={perfil?.dataNascimento ?? ""}
      />
    </div>
  );
}

