import type { Leitura, Tiragem } from "../../../nucleo/modelos/carta";
import { BotaoMistico } from "../../../compartilhado/componentes/BotaoMistico";
import { IconeNaipe } from "./IconeNaipe";
import "./MensagemRevelada.scss";

interface Props {
  tiragem: Tiragem;
  leitura: Leitura;
  pergunta?: string;
  aoReiniciar: () => void;
}

export function MensagemRevelada({ tiragem, leitura, pergunta, aoReiniciar }: Props) {
  return (
    <div className="mensagem-revelada">
      <header className="mensagem-revelada__cabecalho">
        <h2 className="mensagem-revelada__titulo">Sua leitura de {tiragem.nome}</h2>
        <p className="mensagem-revelada__subtitulo">
          Leia cada mensagem com calma e reflita sobre como ela se aplica à sua vida.
        </p>

        {pergunta && pergunta.trim() && (
          <div className="mensagem-revelada__pergunta">
            <i className="fa-solid fa-quote-left mensagem-revelada__pergunta-icone" />
            <div>
              <span className="mensagem-revelada__pergunta-rotulo">Sua pergunta</span>
              <p className="mensagem-revelada__pergunta-texto">{pergunta}</p>
            </div>
          </div>
        )}
      </header>

      <div className="mensagem-revelada__lista">
        {leitura.map((carta, indice) => {
          if (!carta) return null;
          const posicao = tiragem.posicoes[indice];
          const textoContexto = carta.fortuna[posicao.contexto];

          return (
            <article
              key={`${indice}-${carta.id}`}
              className="mensagem-revelada__item cartao-vidro"
            >
              <header className="mensagem-revelada__item-cabecalho">
                <span className="mensagem-revelada__posicao">
                  <span className="mensagem-revelada__posicao-indice">{indice + 1}</span>
                  <span className="mensagem-revelada__posicao-nome">{posicao.nome}</span>
                </span>
                <span className="mensagem-revelada__posicao-descricao">
                  {posicao.descricao}
                </span>
              </header>

              <div className="mensagem-revelada__carta-info">
                {carta.naipe && (
                  <div className="mensagem-revelada__carta-naipe">
                    <IconeNaipe naipe={carta.naipe} tamanho={32} />
                    <span className="mensagem-revelada__carta-naipe-nome">{carta.naipe}</span>
                  </div>
                )}
                <span className="mensagem-revelada__carta-numero">{carta.numero}</span>
                <h3 className="mensagem-revelada__carta-titulo">{carta.titulo}</h3>
                <p className="mensagem-revelada__carta-descricao">{carta.descricao}</p>
              </div>

              <div className="mensagem-revelada__contexto">
                <i className="fa-solid fa-quote-left mensagem-revelada__contexto-icone" />
                <p className="mensagem-revelada__contexto-texto">{textoContexto}</p>
              </div>

              <div className="mensagem-revelada__geral">
                {carta.fortuna.geral.map((paragrafo, i) => (
                  <p key={i} className="mensagem-revelada__paragrafo">
                    {paragrafo}
                  </p>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <div className="mensagem-revelada__acoes">
        <BotaoMistico onClick={aoReiniciar}>
          <i className="fa-solid fa-arrow-left" /> Voltar às tiragens
        </BotaoMistico>
        <p className="mensagem-revelada__aviso">
          <i className="fa-solid fa-clock" /> Esta leitura ficará disponível por 24 horas.
        </p>
      </div>
    </div>
  );
}

