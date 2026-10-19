import { useState } from "react";
import type { Tiragem } from "../../../nucleo/modelos/carta";
import { BotaoMistico } from "../../../compartilhado/componentes/BotaoMistico";
import "./CampoPergunta.scss";

interface Props {
  tiragem: Tiragem;
  aoConfirmar: (pergunta: string) => void;
  aoCancelar: () => void;
}

export function CampoPergunta({ tiragem, aoConfirmar, aoCancelar }: Props) {
  const [texto, setTexto] = useState("");

  return (
    <div className="campo-pergunta">
      <header className="campo-pergunta__cabecalho">
        <span className="campo-pergunta__badge">
          <i className="fa-solid fa-wand-sparkles" /> {tiragem.nome}
        </span>
        <h2 className="campo-pergunta__titulo">O que você quer saber?</h2>
        <p className="campo-pergunta__descricao">
          Opcional. Se quiser, escreva sua pergunta ou o que está pensando.
          Ela vai aparecer no topo da sua leitura pra te ajudar a interpretar as cartas
          com mais conexão.
        </p>
      </header>

      <div className="campo-pergunta__campo">
        <label htmlFor="pergunta" className="campo-pergunta__label">
          Sua pergunta (opcional)
        </label>
        <textarea
          id="pergunta"
          className="campo-pergunta__textarea"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Ex: Vou conseguir o emprego que quero? Como está meu relacionamento? O que preciso saber agora?"
          rows={4}
          maxLength={300}
        />
        <span className="campo-pergunta__contador">
          {texto.length}/300
        </span>
      </div>

      <div className="campo-pergunta__acoes">
        <button
          type="button"
          className="campo-pergunta__cancelar"
          onClick={aoCancelar}
        >
          <i className="fa-solid fa-arrow-left" /> Voltar às tiragens
        </button>
        <BotaoMistico onClick={() => aoConfirmar(texto)}>
          <i className="fa-solid fa-cards-blank" /> Tirar as cartas
        </BotaoMistico>
      </div>
    </div>
  );
}

