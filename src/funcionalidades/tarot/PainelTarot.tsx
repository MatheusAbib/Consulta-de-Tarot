import { useEffect } from "react";
import { useTarot } from "./ganchos/useTarot";
import { SeletorTiragem } from "./componentes/SeletorTiragem";
import { CampoPergunta } from "./componentes/CampoPergunta";
import { MesaCartas } from "./componentes/MesaCartas";
import { MensagemRevelada } from "./componentes/MensagemRevelada";
import "./PainelTarot.scss";

export function PainelTarot() {
  const {
    tiragens,
    tiragemAtiva,
    cartasDisponiveis,
    leitura,
    pergunta,
    leituraCompleta,
    dataUso,
    jaUsouHoje,
    escolherTiragem,
    visualizarSalva,
    confirmarPergunta,
    cancelarPergunta,
    escolherProximaCarta,
    revelarCartaNaPosicao,
    finalizar,
    reiniciar,
    mostrandoCampoPergunta,
    tiragemPendente,
  } = useTarot();

  useEffect(() => {
    if (leituraCompleta) {
      finalizar();
    }
  }, [leituraCompleta, finalizar]);

  if (mostrandoCampoPergunta && tiragemPendente) {
    return (
      <div className="painel-tarot">
        <CampoPergunta
          tiragem={tiragemPendente}
          aoConfirmar={confirmarPergunta}
          aoCancelar={cancelarPergunta}
        />
      </div>
    );
  }

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
          pergunta={pergunta}
          aoReiniciar={reiniciar}
        />
      </div>
    );
  }

  return (
    <div className="painel-tarot">
      <MesaCartas
        aoVoltar={reiniciar}
        tiragem={tiragemAtiva}
        cartasDisponiveis={cartasDisponiveis}
        leitura={leitura}
        aoRevelarNaPosicao={revelarCartaNaPosicao}
        aoEscolherProxima={escolherProximaCarta}
      />
    </div>
  );
}




