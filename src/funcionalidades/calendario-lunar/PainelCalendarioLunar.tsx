import { CalendarioMensal } from "./componentes/CalendarioMensal";
import { IconeFaseLua } from "./componentes/IconeFaseLua";
import { useCalendarioLunar } from "./ganchos/useCalendarioLunar";
import "./PainelCalendarioLunar.scss";

export function PainelCalendarioLunar() {
  const {
    ano,
    mes,
    diaSelecionado,
    proximasFases,
    selecionarDia,
    ehHoje,
    mesAnterior,
    mesProximo,
    irParaHoje,
  } = useCalendarioLunar();

  const selecionadoEhHoje = ehHoje(diaSelecionado.data);
  const rotuloDia = selecionadoEhHoje
    ? "Hoje"
    : diaSelecionado.data.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });

  return (
    <section className="painel-calendario">
      <header className="painel-calendario__cabecalho">
        <h1 className="painel-calendario__titulo">Calendário Lunar</h1>
        <p className="painel-calendario__subtitulo">
          Acompanhe as fases da lua e alinhe seus ciclos ao ritmo do céu.
        </p>
      </header>

      <div className="painel-calendario__detalhe">
        <div className="painel-calendario__detalhe-topo">
          <div className="painel-calendario__detalhe-icone">
            <IconeFaseLua fase={diaSelecionado.fase} tamanho={64} />
          </div>
          <div className="painel-calendario__detalhe-info">
            <span className="painel-calendario__detalhe-rotulo">{rotuloDia}</span>
            <h2 className="painel-calendario__detalhe-fase">
              {diaSelecionado.nomeFase}
            </h2>
            <p className="painel-calendario__detalhe-desc">
              {diaSelecionado.descricao}
            </p>
            <div className="painel-calendario__detalhe-metricas">
              <span>{diaSelecionado.iluminacao}% iluminada</span>
              <span>{diaSelecionado.idadeDias} dias de idade</span>
            </div>
          </div>
        </div>

        <div className="painel-calendario__blocos">
          <div className="painel-calendario__bloco">
            <span className="painel-calendario__rotulo">O que significa</span>
            <p>{diaSelecionado.significado}</p>
          </div>
          <div className="painel-calendario__bloco">
            <span className="painel-calendario__rotulo">O que esperar</span>
            <p>{diaSelecionado.esperar}</p>
          </div>
          <div className="painel-calendario__dois-blocos">
            <div className="painel-calendario__bloco painel-calendario__bloco--fazer">
              <span className="painel-calendario__rotulo">O que fazer</span>
              <p>{diaSelecionado.fazer}</p>
            </div>
            <div className="painel-calendario__bloco painel-calendario__bloco--evitar">
              <span className="painel-calendario__rotulo">O que evitar</span>
              <p>{diaSelecionado.evitar}</p>
            </div>
          </div>
        </div>
      </div>

      <CalendarioMensal
        ano={ano}
        mes={mes}
        diaSelecionado={diaSelecionado}
        onSelecionarDia={selecionarDia}
        onMesAnterior={mesAnterior}
        onMesProximo={mesProximo}
        onIrParaHoje={irParaHoje}
      />

      <div className="painel-calendario__proximas">
        <h3 className="painel-calendario__proximas-titulo">
          Próximas fases principais
        </h3>
        <div className="painel-calendario__proximas-grade">
          {proximasFases.map((f) => (
            <div key={f.fase} className="painel-calendario__proxima">
              <IconeFaseLua fase={f.fase} tamanho={36} />
              <div>
                <strong>{f.nomeFase}</strong>
                <span>
                  {f.data.toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "short",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
