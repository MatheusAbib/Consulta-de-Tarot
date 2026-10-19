import { useEffect, useState } from "react";
import { AbasInline } from "../../compartilhado/componentes/AbasInline";
import type { AbaId } from "../../compartilhado/componentes/AbasInline";
import { PainelInicio } from "./painel/PainelInicio";
import { PainelTarot } from "../tarot/PainelTarot";
import { PainelAstrologia } from "../astrologia/PainelAstrologia";
import { PainelNumerologia } from "../numerologia/PainelNumerologia";
import { PainelMatrizDestino } from "../matriz-destino/PainelMatrizDestino";
import { PainelSignos } from "../signos/PainelSignos";
import { PainelCalendarioLunar } from "../calendario-lunar/PainelCalendarioLunar";
import { PainelBiblioteca } from "../biblioteca/PainelBiblioteca";
import "./PaginaInicio.scss";

export function PaginaInicio() {
  const [abaAtiva, setAbaAtiva] = useState<AbaId>("inicio");

  useEffect(() => {
    function irInicio() {
      setAbaAtiva("inicio");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.addEventListener("oraculvm:ir-inicio", irInicio);
    return () => window.removeEventListener("oraculvm:ir-inicio", irInicio);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [abaAtiva]);

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
      case "calendario-lunar":
        return <PainelCalendarioLunar />;
      case "biblioteca":
        return <PainelBiblioteca />;
      default:
        return <PainelInicio onMudar={setAbaAtiva} />;
    }
  }

  return (
    <section className="pagina-inicio secao">
      <div className="conteudo-secao">
        {abaAtiva !== "inicio" && (
          <AbasInline abaAtiva={abaAtiva} onMudar={setAbaAtiva} />
        )}

        <div className="pagina-inicio__painel" key={abaAtiva}>
          {renderizarPainel()}
        </div>
      </div>
    </section>
  );
}



