import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/" className="barra-navegacao__logo">
          ORACULVM
        </Link>
        <BotaoPerfil />
      </div>
    </nav>
  );
}
