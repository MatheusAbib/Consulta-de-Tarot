import { FormEvent, useState } from "react";
import type { DadosNumerologia } from "../servicos/numerologia";
import "./FormularioNome.scss";

interface Props {
  aoEnviar: (dados: DadosNumerologia) => void;
}

export function FormularioNome({ aoEnviar }: Props) {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const valido =
    nomeCompleto.trim().length >= 3 && dataNascimento.length === 10;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!valido) return;
    aoEnviar({ nomeCompleto, dataNascimento });
  }

  return (
    <form className="formulario-nome cartao-vidro" onSubmit={handleSubmit}>
      <h2 className="formulario-nome__titulo">
        <i className="fa-solid fa-hashtag" /> Seus Dados
      </h2>
      <p className="formulario-nome__subtitulo">
        Digite seu nome completo de nascimento e sua data para calcular seus números.
      </p>

      <div className="formulario-nome__campo">
        <label htmlFor="nome">Nome completo de nascimento</label>
        <input
          id="nome"
          type="text"
          value={nomeCompleto}
          onChange={(e) => setNomeCompleto(e.target.value)}
          placeholder="Como está na certidão"
          autoComplete="name"
          required
        />
      </div>

      <div className="formulario-nome__campo">
        <label htmlFor="data">Data de nascimento</label>
        <input
          id="data"
          type="date"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="botao-mistico formulario-nome__enviar"
        disabled={!valido}
      >
        <i className="fa-solid fa-wand-sparkles" /> Calcular Numerologia
      </button>
    </form>
  );
}
