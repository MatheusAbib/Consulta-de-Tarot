import { useState } from "react";
import { AbasInline } from "../../compartilhado/componentes/AbasInline";
import type { AbaId } from "../../compartilhado/componentes/AbasInline";
import { PainelInicio } from "./painel/PainelInicio";
import { PainelTarot } from "../tarot/PainelTarot";
import { PainelAstrologia } from "../astrologia/PainelAstrologia";
import { PainelNumerologia } from "../numerologia/PainelNumerologia";
import { PainelMatrizDestino } from "../matriz-destino/PainelMatrizDestino";
import { PainelSignos } from "../signos/PainelSignos";
import "./PaginaInicio.scss";

export function PaginaInicio() {
  const [abaAtiva, setAbaAtiva] = useState<AbaId>("inicio");

  function renderizarPainel() {
    switch (abaAtiva) {
      case "tarot":
        return <PainelTarot />;
      case "astrologia":
        return <PainelAstrologia />;
      case "numerologia":
        return <PainelNumerologia />;
      case "matriz-destino":
        return <PainelMatrizDestino />;
      case "signos":
        return <PainelSignos />;
      default:
        return <PainelInicio />;
    }
  }

  return (
    <section className="pagina-inicio secao">
      <div className="conteudo-secao">
        <header className="pagina-inicio__cabecalho">
          <h1 className="pagina-inicio__titulo">Escolha uma das abas e inicie</h1>

        </header>

        <AbasInline abaAtiva={abaAtiva} onMudar={setAbaAtiva} />

        <div className="pagina-inicio__painel" key={abaAtiva}>
          {renderizarPainel()}
        </div>
      </div>
    </section>
  );
}
