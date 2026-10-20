import { useState } from "react";
import { usePerfil } from "../../nucleo/contextos/PerfilContexto";
import "./ModalBoasVindas.scss";

const APRESENTACAO = [
  {
    titulo: "ORACULVM",
    texto: "Olá. Eu não sou uma entidade mística além dessa vida, nem nada do tipo. Sou só uma ferramenta com o propósito de fazer você olhar pra si mesmo de um jeito diferente.",
  },
  {
    titulo: "O que faço aqui",
    texto: "Este site reúne tarô, astrologia, numerologia, matriz do destino, signos, lua e uma biblioteca. Tudo calculado de verdade, sem promessas mágicas.",
  },
  {
    titulo: "Como funciona",
    texto: "Você preenche seus dados no seu perfil. Depois é só navegar pelas abas — cada oráculo vai usar essas informações automaticamente.",
  },
];

export function ModalBoasVindas() {
  const { modalAberto, completo, fecharModal } = usePerfil();
  const [indice, setIndice] = useState(0);

  if (!modalAberto) return null;

  function proximo() {
    if (indice < APRESENTACAO.length - 1) {
      setIndice(indice + 1);
    } else {
      fecharModal();
    }
  }

  function pularApresentacao() {
    fecharModal();
  }

  return (
    <div className="modal-boas-vindas">
      <div className="modal-boas-vindas__caixa">
        <div className="modal-boas-vindas__etapa">
          <div className="modal-boas-vindas__logo">
            <img src={`${import.meta.env.BASE_URL}piramide-branco.png`} alt="ORACULVM" />
          </div>
          <h2 className="modal-boas-vindas__titulo">{APRESENTACAO[indice].titulo}</h2>
          <p className="modal-boas-vindas__texto">{APRESENTACAO[indice].texto}</p>

          <div className="modal-boas-vindas__progresso">
            {APRESENTACAO.map((_, i) => (
              <span
                key={i}
                className={`modal-boas-vindas__ponto ${i === indice ? "ativo" : ""}`}
              />
            ))}
          </div>

          <div className="modal-boas-vindas__acoes">
            <button
              type="button"
              className="modal-boas-vindas__pular"
              onClick={pularApresentacao}
            >
              Pular
            </button>
            <button
              type="button"
              className="botao-mistico modal-boas-vindas__botao"
              onClick={proximo}
            >
              {indice < APRESENTACAO.length - 1 ? (
                <>
                  Próximo <i className="fa-solid fa-arrow-right" />
                </>
              ) : (
                <>
                  Entendi <i className="fa-solid fa-check" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {completo && (
        <button
          type="button"
          className="modal-boas-vindas__fechar"
          onClick={fecharModal}
          aria-label="Fechar"
        >
          <i className="fa-solid fa-xmark" />
        </button>
      )}
    </div>
  );
}

