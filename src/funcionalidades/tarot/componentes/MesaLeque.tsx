import type { Carta } from "../../../nucleo/modelos/carta";
import { CartaTarot } from "./CartaTarot";
import "./MesaLeque.scss";

interface Props {
  cartas: Carta[];
  cartasEscolhidas: Carta[];
  maxEscolhas: number;
  posicoesNomes: string[];
  aoEscolher: (carta: Carta) => void;
}

const TOTAL = 18;

export function MesaLeque({
  cartas,
  cartasEscolhidas,
  maxEscolhas,
  posicoesNomes,
  aoEscolher,
}: Props) {
  const cartasVisiveis = cartas.slice(0, TOTAL);
  const totalVisivel = cartasVisiveis.length;
  const completa = cartasEscolhidas.length >= maxEscolhas;

  function angulo(index: number): number {
    if (totalVisivel <= 1) return 0;
    const meio = (totalVisivel - 1) / 2;
    const maxAngulo = 30;
    return ((index - meio) / meio) * maxAngulo;
  }

  function deslocamentoY(index: number): number {
    return Math.abs(angulo(index)) * 0.9;
  }

  function foiEscolhida(carta: Carta): boolean {
    return cartasEscolhidas.some((c) => c.id === carta.id);
  }

  return (
    <div className="mesa-leque">
      <div className="mesa-leque__palco">
        {cartasVisiveis.map((carta, index) => {
          const escolhida = foiEscolhida(carta);
          const bloqueada = completa && !escolhida;

          return (
            <div
              key={carta.id}
              className={`mesa-leque__carta ${escolhida ? "escolhida" : ""} ${bloqueada ? "bloqueada" : ""}`}
              style={{
                transform: `rotate(${angulo(index)}deg) translateY(${deslocamentoY(index)}px)`,
                zIndex: escolhida ? 100 : index,
              }}
              onClick={() => {
                if (completa || escolhida) return;
                aoEscolher(carta);
              }}
            >
              <CartaTarot
                carta={carta}
                virada={false}
                desabilitada={false}
                mostrarPosicao={false}
              />
            </div>
          );
        })}
      </div>

      {cartasEscolhidas.length > 0 && (
        <div className="mesa-leque__escolhidas">
          {cartasEscolhidas.map((carta, indice) => (
            <div key={carta.id} className="mesa-leque__escolhida">
              <div className="mesa-leque__escolhida-slot">
                <CartaTarot
                  carta={carta}
                  virada
                  desabilitada
                  mostrarPosicao={false}
                />
              </div>
              <span className="mesa-leque__escolhida-posicao">
                {posicoesNomes[indice]}
              </span>
            </div>
          ))}
        </div>
      )}

      <p className="mesa-leque__instrucao">
        {completa ? (
          <>
            <i className="fa-solid fa-sparkles" />
            <span>Sua leitura está completa</span>
          </>
        ) : (
          <>
            <i className="fa-solid fa-hand-pointer" />
            <span>
              Escolha a carta para:{" "}
              <strong>{posicoesNomes[cartasEscolhidas.length]}</strong>
            </span>
          </>
        )}
      </p>
    </div>
  );
}
