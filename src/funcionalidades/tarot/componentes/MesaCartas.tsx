import type { Carta, Leitura, Tiragem } from "../../../nucleo/modelos/carta";
import { CartaTarot } from "./CartaTarot";
import { MesaLeque } from "./MesaLeque";
import "./MesaCartas.scss";

interface Props {
  tiragem: Tiragem;
  cartasDisponiveis: Carta[];
  leitura: Leitura;
  aoRevelarNaPosicao: (carta: Carta, posicao: number) => void;
  aoEscolherProxima: (carta: Carta) => void;
}

export function MesaCartas({
  tiragem,
  cartasDisponiveis,
  leitura,
  aoRevelarNaPosicao,
}: Props) {
  const completa = leitura.every((c) => c !== null);
  const cartasEscolhidas = leitura.filter((c): c is Carta => c !== null);
  const proximaVazia = leitura.findIndex((c) => c === null);
  const proximaPosicao = proximaVazia !== -1 ? tiragem.posicoes[proximaVazia] : null;

  if (tiragem.id === "uma-carta" || tiragem.id === "tres-cartas") {
    return (
      <div className="mesa-cartas">
        <div className="mesa-cartas__instrucao">
          {completa ? (
            <span className="mesa-cartas__instrucao-titulo">
              Sua leitura está completa
            </span>
          ) : (
            <>
              <span className="mesa-cartas__instrucao-titulo">
                Escolha a carta para: <strong>{proximaPosicao?.nome}</strong>
              </span>
              <span className="mesa-cartas__instrucao-descricao">
                {proximaPosicao?.descricao}
              </span>
            </>
          )}
        </div>

        <MesaLeque
          cartas={cartasDisponiveis}
          cartasEscolhidas={cartasEscolhidas}
          maxEscolhas={tiragem.quantidadeCartas}
          posicoesNomes={tiragem.posicoes.map((p) => p.nome)}
          aoEscolher={(carta) => {
            if (proximaVazia !== -1) aoRevelarNaPosicao(carta, proximaVazia);
          }}
        />
      </div>
    );
  }

  if (tiragem.id === "cruz-celta") {
    const cartasDoBaralho = cartasDisponiveis.filter(
      (c) => !leitura.some((l) => l?.id === c.id)
    );

    return (
      <div className="mesa-cartas">
        <div className="mesa-cartas__instrucao">
          {completa ? (
            <span className="mesa-cartas__instrucao-titulo">
              Sua leitura está completa
            </span>
          ) : (
            <>
              <span className="mesa-cartas__instrucao-titulo">
                Escolha a carta para: <strong>{proximaPosicao?.nome}</strong>
              </span>
              <span className="mesa-cartas__instrucao-descricao">
                {proximaPosicao?.descricao}
              </span>
            </>
          )}
        </div>

        <div className="mesa-cartas__campo mesa-cartas--cruz">
          {tiragem.posicoes.map((posicao, indice) => {
            const carta = leitura[indice];

            return (
              <div key={indice} className="mesa-cartas__slot">
                {carta && (
                  <CartaTarot
                    carta={carta}
                    virada
                    desabilitada
                    posicao={posicao.nome}
                    indicePosicao={indice}
                    mostrarPosicao={false}
                  />
                )}
              </div>
            );
          })}
        </div>

        {!completa && (
          <div className="mesa-cartas__baralho">
            {cartasDoBaralho.map((carta) => (
              <button
                key={carta.id}
                type="button"
                className="mesa-cartas__baralho-carta"
                onClick={() => {
                  if (proximaVazia === -1) return;
                  aoRevelarNaPosicao(carta, proximaVazia);
                }}
                aria-label="Escolher esta carta"
              >
                <span className="mesa-cartas__baralho-verso" />
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return null;
}
