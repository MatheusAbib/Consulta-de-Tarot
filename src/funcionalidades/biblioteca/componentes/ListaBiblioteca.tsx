import { useMemo, useState, useEffect } from "react";
import { FichaBiblioteca, type FichaItem } from "./FichaBiblioteca";
import "./ListaBiblioteca.scss";

interface Props {
  titulo: string;
  subtitulo: string;
  itens: FichaItem[];
}

const POR_PAGINA_DESKTOP = 12;
const POR_PAGINA_MOBILE = 6;

function usarPorPagina() {
  const [porPagina, setPorPagina] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768
      ? POR_PAGINA_MOBILE
      : POR_PAGINA_DESKTOP
  );

  useEffect(() => {
    function atualizar() {
      setPorPagina(window.innerWidth <= 768 ? POR_PAGINA_MOBILE : POR_PAGINA_DESKTOP);
    }
    window.addEventListener("resize", atualizar);
    return () => window.removeEventListener("resize", atualizar);
  }, []);

  return porPagina;
}

export function ListaBiblioteca({ titulo, subtitulo, itens }: Props) {
  const [busca, setBusca] = useState("");
  const [pagina, setPagina] = useState(1);
  const porPagina = usarPorPagina();

  const filtrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    if (!termo) return itens;
    return itens.filter((item) => {
      const alvo = [
        item.nome,
        item.extra ?? "",
        ...item.propriedades,
        ...item.meta.map((m) => m.valor),
      ]
        .join(" ")
        .toLowerCase();
      return alvo.includes(termo);
    });
  }, [itens, busca]);

  const totalPaginas = Math.max(1, Math.ceil(filtrados.length / porPagina));
  const paginaAtual = Math.min(pagina, totalPaginas);
  const inicio = (paginaAtual - 1) * porPagina;
  const itensPagina = filtrados.slice(inicio, inicio + porPagina);

  useEffect(() => {
    setPagina(1);
  }, [busca, itens]);

  function irPara(p: number) {
    if (p < 1 || p > totalPaginas) return;
    setPagina(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function paginasVisiveis(): (number | "…")[] {
    if (totalPaginas <= 7) {
      return Array.from({ length: totalPaginas }, (_, i) => i + 1);
    }
    const paginas: (number | "…")[] = [1];
    if (paginaAtual > 3) paginas.push("…");
    const ini = Math.max(2, paginaAtual - 1);
    const fim = Math.min(totalPaginas - 1, paginaAtual + 1);
    for (let i = ini; i <= fim; i++) paginas.push(i);
    if (paginaAtual < totalPaginas - 2) paginas.push("…");
    paginas.push(totalPaginas);
    return paginas;
  }

  return (
    <section className="lista-biblioteca">
      <header className="lista-biblioteca__cabecalho">
        <h2 className="lista-biblioteca__titulo">{titulo}</h2>
        <p className="lista-biblioteca__subtitulo">{subtitulo}</p>
        <span className="lista-biblioteca__contagem">
          {filtrados.length} {filtrados.length === 1 ? "ficha" : "fichas"}
          {busca && ` (de ${itens.length})`}
        </span>
      </header>

      <div className="lista-biblioteca__busca">
        <i className="fa-solid fa-magnifying-glass" />
        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder={`Buscar em ${titulo.toLowerCase()}...`}
          aria-label={`Buscar em ${titulo}`}
        />
        {busca && (
          <button
            type="button"
            className="lista-biblioteca__busca-limpar"
            onClick={() => setBusca("")}
            aria-label="Limpar busca"
          >
            ×
          </button>
        )}
      </div>

      {filtrados.length === 0 ? (
        <p className="lista-biblioteca__vazio">
          Nenhuma ficha encontrada para "{busca}".
        </p>
      ) : (
        <>
          <div className="lista-biblioteca__grade">
            {itensPagina.map((item) => (
              <FichaBiblioteca key={item.nome} item={item} />
            ))}
          </div>

          {totalPaginas > 1 && (
            <nav className="lista-biblioteca__paginacao" aria-label="Paginação">
              <button
                type="button"
                className="lista-biblioteca__pag-btn"
                onClick={() => irPara(paginaAtual - 1)}
                disabled={paginaAtual === 1}
                aria-label="Página anterior"
              >
                ‹
              </button>

              {paginasVisiveis().map((p, i) =>
                p === "…" ? (
                  <span key={`ellipsis-${i}`} className="lista-biblioteca__pag-ellipsis">
                    …
                  </span>
                ) : (
                  <button
                    key={p}
                    type="button"
                    className={`lista-biblioteca__pag-btn ${p === paginaAtual ? "ativa" : ""}`}
                    onClick={() => irPara(p)}
                    aria-current={p === paginaAtual ? "page" : undefined}
                  >
                    {p}
                  </button>
                )
              )}

              <button
                type="button"
                className="lista-biblioteca__pag-btn"
                onClick={() => irPara(paginaAtual + 1)}
                disabled={paginaAtual === totalPaginas}
                aria-label="Próxima página"
              >
                ›
              </button>
            </nav>
          )}
        </>
      )}
    </section>
  );
}


