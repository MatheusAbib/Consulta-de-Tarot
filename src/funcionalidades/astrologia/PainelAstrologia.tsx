import { useEffect } from "react";
import { useAstrologia } from "./ganchos/useAstrologia";
import { usePerfil } from "../../nucleo/contextos/PerfilContexto";
import { AvisoPreencherPerfil } from "../../compartilhado/componentes/AvisoPreencherPerfil";
import { MapaAstral } from "./componentes/MapaAstral";
import { ResumoPlanetas } from "./componentes/ResumoPlanetas";
import { Interpretacoes } from "./componentes/Interpretacoes";
import { ListaAspectos } from "./componentes/ListaAspectos";
import { MapaAstralSkeleton } from "./componentes/MapaAstralSkeleton";
import { Sinastria } from "./componentes/Sinastria";
import "./PainelAstrologia.scss";

export function PainelAstrologia() {
  const { perfil, completo } = usePerfil();
  const { resultado, carregando, erro, calcular } = useAstrologia();

  useEffect(() => {
    if (completo && perfil && !resultado) {
      calcular({
        nome: perfil.nome,
        data: perfil.dataNascimento,
        hora: perfil.horaNascimento,
        cidadeNome: perfil.cidadeNome,
        cidadeUf: perfil.cidadeUf,
      });
    }
  }, [completo, perfil, resultado, calcular]);

  if (!completo) {
    return (
      <div className="painel-astrologia">
        <AvisoPreencherPerfil
          titulo="Mapa Astral"
          descricao="Preciso dos seus dados de nascimento para calcular seu mapa astral completo."
          icone="fa-solid fa-star"
        />
      </div>
    );
  }

  return (
    <div className="painel-astrologia">
      <header className="painel-astrologia__cabecalho">
        <h2 className="painel-astrologia__titulo">Seu Mapa Astral</h2>
        <p className="painel-astrologia__descricao">
          Os astros falam. Leia com atenção cada posição e reflita sobre como
          ela se manifesta na sua vida.
        </p>
      </header>

      {(carregando || !resultado) && <MapaAstralSkeleton />}

      {erro && (
        <div className="painel-astrologia__erro">
          <i className="fa-solid fa-triangle-exclamation" />
          <span>{erro}</span>
        </div>
      )}

      {resultado && !carregando && (
        <>
          <MapaAstral resultado={resultado} />
          <ResumoPlanetas resultado={resultado} />
          <Sinastria mapaA={resultado} nomeA={perfil?.nome ?? "Você"} />
          <Interpretacoes resultado={resultado} />
          <ListaAspectos planetas={resultado.planetas} />
        </>
      )}
    </div>
  );
}





