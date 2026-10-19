import { useState } from "react";
import { Icon } from "@iconify/react";
import { calcularCompatibilidade, type ResultadoCompatibilidade } from "../servicos/compatibilidade";
import "./Compatibilidade.scss";

interface Props {
  nomeA: string;
  dataA: string;
}

export function Compatibilidade({ nomeA, dataA }: Props) {
  const [aberto, setAberto] = useState(false);
  const [nomeB, setNomeB] = useState("");
  const [dataB, setDataB] = useState("");
  const [resultado, setResultado] = useState<ResultadoCompatibilidade | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  function calcular() {
    setErro(null);
    if (!nomeB.trim() || !dataB) {
      setErro("Preencha nome e data da segunda pessoa.");
      return;
    }
    try {
      const r = calcularCompatibilidade(
        { nome: nomeA, dataNascimento: dataA },
        { nome: nomeB, dataNascimento: dataB }
      );
      setResultado(r);
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro ao calcular");
    }
  }

  function resetar() {
    setResultado(null);
    setNomeB("");
    setDataB("");
    setErro(null);
  }

  function fechar() {
    setAberto(false);
    resetar();
  }

  return (
    <section className="compatibilidade">
      <header className="compatibilidade__cabecalho">
        <h3 className="compatibilidade__titulo">Compatibilidade Numerológica</h3>
        <p className="compatibilidade__subtitulo">
          Compare seu Caminho de Vida com o de outra pessoa para entender como os
          números de vocês se cruzam.
        </p>
      </header>

      {!aberto && !resultado && (
        <button
          type="button"
          className="compatibilidade__btn"
          onClick={() => setAberto(true)}
        >
          <Icon icon="mdi:heart-multiple" width={18} />
          Comparar com alguém
        </button>
      )}

      {aberto && !resultado && (
        <div className="compatibilidade__painel">
          <div className="compatibilidade__form">
            <label className="compatibilidade__campo">
              <span>Nome da pessoa</span>
              <input
                type="text"
                value={nomeB}
                onChange={(e) => setNomeB(e.target.value)}
                placeholder="Nome completo"
              />
            </label>
            <label className="compatibilidade__campo">
              <span>Data de nascimento</span>
              <input
                type="date"
                value={dataB}
                onChange={(e) => setDataB(e.target.value)}
              />
            </label>
            <div className="compatibilidade__acoes">
              <button type="button" className="compatibilidade__btn compatibilidade__btn--calcular" onClick={calcular}>
                Calcular
              </button>
              <button
                type="button"
                className="compatibilidade__btn-fechar"
                onClick={fechar}
                aria-label="Fechar"
              >
                ×
              </button>
            </div>
          </div>
          {erro && <p className="compatibilidade__erro">{erro}</p>}
        </div>
      )}

      {resultado && (
        <div className="compatibilidade__resultado">
          <div className="compatibilidade__resumo">
            <div className="compatibilidade__numeros">
              <div className="compatibilidade__numero">
                <span className="compatibilidade__numero-valor">{resultado.numeroA}</span>
                <span className="compatibilidade__numero-nome">Você</span>
              </div>
              <Icon icon="mdi:heart" width={22} className="compatibilidade__coracao" />
              <div className="compatibilidade__numero">
                <span className="compatibilidade__numero-valor">{resultado.numeroB}</span>
                <span className="compatibilidade__numero-nome">{nomeB}</span>
              </div>
            </div>

            <div className="compatibilidade__barra">
              <div
                className="compatibilidade__barra-fill"
                style={{ width: `${resultado.percentual}%` }}
              />
            </div>
            <p className="compatibilidade__percentual">{resultado.percentual}% de afinidade</p>
            <h4 className="compatibilidade__subtitulo-relacao">{resultado.titulo}</h4>
            <p className="compatibilidade__resumo-texto">{resultado.resumo}</p>
          </div>

          <div className="compatibilidade__blocos">
            <div className="compatibilidade__bloco compatibilidade__bloco--bom">
              <strong>O que funciona</strong>
              <ul>
                {resultado.forcas.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
            <div className="compatibilidade__bloco compatibilidade__bloco--atencao">
              <strong>O que precisa de atenção</strong>
              <ul>
                {resultado.atritos.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>
          </div>

          <div className="compatibilidade__conselho">
            <Icon icon="mdi:lightbulb-on" width={18} />
            <p>{resultado.conselho}</p>
          </div>

          <button type="button" className="compatibilidade__btn compatibilidade__btn--secundario" onClick={resetar}>
            Comparar com outra pessoa
          </button>
        </div>
      )}
    </section>
  );
}

