import { Icon } from "@iconify/react";
import "./FichaBiblioteca.scss";

export interface FichaItem {
  nome: string;
  icone: string;
  extra?: string;
  descricao: string;
  meta: { rotulo: string; valor: string }[];
  propriedades: string[];
  uso: string;
  cuidados?: string;
}

export function FichaBiblioteca({ item }: { item: FichaItem }) {
  return (
    <article className="ficha-biblioteca">
      <div className="ficha-biblioteca__topo">
        <div className="ficha-biblioteca__icone">
          <Icon icon={item.icone} width={28} />
        </div>
        <div>
          <h3 className="ficha-biblioteca__nome">{item.nome}</h3>
          {item.extra && <span className="ficha-biblioteca__extra">{item.extra}</span>}
        </div>
      </div>

      <p className="ficha-biblioteca__descricao">{item.descricao}</p>

      <div className="ficha-biblioteca__meta">
        {item.meta.map((m) => (
          <div key={m.rotulo} className="ficha-biblioteca__meta-item">
            <span className="ficha-biblioteca__meta-rotulo">{m.rotulo}</span>
            <span className="ficha-biblioteca__meta-valor">{m.valor}</span>
          </div>
        ))}
      </div>

      <div className="ficha-biblioteca__props">
        {item.propriedades.map((p) => (
          <span key={p} className="ficha-biblioteca__tag">{p}</span>
        ))}
      </div>

      <div className="ficha-biblioteca__bloco">
        <span className="ficha-biblioteca__bloco-rotulo">Como usar</span>
        <p className="ficha-biblioteca__bloco-texto">{item.uso}</p>
      </div>

      {item.cuidados && (
        <div className="ficha-biblioteca__cuidados">
          <i className="fa-solid fa-triangle-exclamation" />
          <p>{item.cuidados}</p>
        </div>
      )}
    </article>
  );
}
