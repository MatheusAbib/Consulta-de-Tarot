import { useEffect, useState } from "react";

import { BotaoPerfil } from "./BotaoPerfil";
import "./BarraNavegacao.scss";

export function BarraNavegacao() {
  const [rolado, setRolado] = useState(false);

  useEffect(() => {
    function aoRolar() {
      setRolado(window.scrollY > 50);
    }
    window.addEventListener("scroll", aoRolar);
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <nav className={`barra-navegacao ${rolado ? "rolado" : ""}`}>
      <div className="barra-navegacao__container">
        <button
          type="button"
          className="barra-navegacao__logo"
          onClick={() => window.dispatchEvent(new CustomEvent("oraculvm:ir-inicio"))}
        >
          ORACULVM
        </button>
        <BotaoPerfil />
      </div>
    </nav>
  );
}

