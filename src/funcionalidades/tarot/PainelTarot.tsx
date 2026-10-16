import { useEffect } from "react";
import { useTarot } from "./ganchos/useTarot";
import { SeletorTiragem } from "./componentes/SeletorTiragem";
import { MesaCartas } from "./componentes/MesaCartas";
import { MensagemRevelada } from "./componentes/MensagemRevelada";
import "./PainelTarot.scss";

export function PainelTarot() {
  const {
    tiragens,
    tiragemAtiva,
    cartasDisponiveis,
    leitura,
    leituraCompleta,
    jaUsouHoje,
    dataUso,
    escolherTiragem,
    escolherProximaCarta,
    revelarCartaNaPosicao,
    visualizarSalva,
    finalizar,
    reiniciar,
  } = useTarot();

  useEffect(() => {
    if (leituraCompleta) {
      finalizar();
    }
  }, [leituraCompleta, finalizar]);

  if (!tiragemAtiva) {
    return (
      <div className="painel-tarot">
      <SeletorTiragem
        tiragens={tiragens}
        aoEscolher={escolherTiragem}
        aoVisualizar={visualizarSalva}
        jaUsouHoje={jaUsouHoje}
        dataUso={dataUso}
      />
      </div>
    );
  }

  if (leituraCompleta) {
    return (
      <div className="painel-tarot">
        <MensagemRevelada
          tiragem={tiragemAtiva}
          leitura={leitura}
          aoReiniciar={reiniciar}
        />
      </div>
    );
  }

  return (
    <div className="painel-tarot">
      <MesaCartas
        tiragem={tiragemAtiva}
        cartasDisponiveis={cartasDisponiveis}
        leitura={leitura}
        aoRevelarNaPosicao={revelarCartaNaPosicao}
        aoEscolherProxima={escolherProximaCarta}
      />
    </div>
  );
}
