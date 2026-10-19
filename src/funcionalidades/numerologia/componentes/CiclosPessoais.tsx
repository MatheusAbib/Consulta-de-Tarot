import { useState } from "react";
import type { CiclosPessoais as Ciclos } from "../servicos/ciclos";
import {
  ANO_PESSOAL,
  MES_PESSOAL,
  DIA_PESSOAL,
} from "../dados/interpretacoes/ciclos";
import "./CiclosPessoais.scss";

interface Props {
  ciclos: Ciclos;
}

type Chave = "ano" | "mes" | "dia";

const META: Record<
  Chave,
  { titulo: string; numero: (c: Ciclos) => number; textos: typeof ANO_PESSOAL; sufixo: string }
> = {
  ano: {
    titulo: "Ano Pessoal",
    numero: (c) => c.anoPessoal,
    textos: ANO_PESSOAL,
    sufixo: "tema do ano",
  },
  mes: {
    titulo: "Mês Pessoal",
    numero: (c) => c.mesPessoal,
    textos: MES_PESSOAL,
    sufixo: "tom do mês",
  },
  dia: {
    titulo: "Dia Pessoal",
    numero: (c) => c.diaPessoal,
    textos: DIA_PESSOAL,
    sufixo: "energia do dia",
  },
};

export function CiclosPessoais({ ciclos }: Props) {
  const [chave, setChave] = useState<Chave>("ano");
  const meta = META[chave];
  const numero = meta.numero(ciclos);
  const texto = meta.textos[numero];

  return (
    <section className="ciclos-pessoais">
      <header className="ciclos-pessoais__cabecalho">
        <h3 className="ciclos-pessoais__titulo">Seus Ciclos</h3>
        <p className="ciclos-pessoais__subtitulo">
          A numerologia se renova a cada ano, mês e dia. Veja onde você está agora.
        </p>
      </header>

      <div className="ciclos-pessoais__seletor">
        {(Object.keys(META) as Chave[]).map((k) => {
          const m = META[k];
          const ativo = k === chave;
          return (
            <button
              key={k}
              type="button"
              className={`ciclos-pessoais__opcao ${ativo ? "ativa" : ""}`}
              onClick={() => setChave(k)}
            >
              <span className="ciclos-pessoais__opcao-rotulo">{m.titulo}</span>
              <span className="ciclos-pessoais__opcao-numero">{m.numero(ciclos)}</span>
            </button>
          );
        })}
      </div>

      {texto && (
        <article className="ciclos-pessoais__texto" key={`${chave}-${numero}`}>
          <div className="ciclos-pessoais__texto-cabecalho">
            <span className="ciclos-pessoais__badge">{numero}</span>
            <div>
              <h4 className="ciclos-pessoais__texto-titulo">{texto.titulo}</h4>
              <span className="ciclos-pessoais__texto-sufixo">
                {meta.titulo} · {meta.sufixo}
              </span>
            </div>
          </div>

          <div className="ciclos-pessoais__bloco">
            <span className="ciclos-pessoais__rotulo">O que significa</span>
            <p>{texto.significado}</p>
          </div>

          <div className="ciclos-pessoais__bloco">
            <span className="ciclos-pessoais__rotulo">O que esperar</span>
            <p>{texto.esperar}</p>
          </div>

          <div className="ciclos-pessoais__dois-blocos">
            <div className="ciclos-pessoais__bloco ciclos-pessoais__bloco--fazer">
              <span className="ciclos-pessoais__rotulo">O que fazer</span>
              <p>{texto.fazer}</p>
            </div>
            <div className="ciclos-pessoais__bloco ciclos-pessoais__bloco--evitar">
              <span className="ciclos-pessoais__rotulo">O que evitar</span>
              <p>{texto.evitar}</p>
            </div>
          </div>
        </article>
      )}
    </section>
  );
}
