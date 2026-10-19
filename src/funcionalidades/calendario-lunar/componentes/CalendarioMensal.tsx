import { useMemo } from "react";
import { gerarCalendarioMensal, type DadosLua } from "../servicos/lunar";
import { IconeFaseLua } from "./IconeFaseLua";
import "./CalendarioMensal.scss";

interface Props {
  ano: number;
  mes: number;
  diaSelecionado: DadosLua;
  onSelecionarDia: (d: DadosLua) => void;
  onMesAnterior: () => void;
  onMesProximo: () => void;
  onIrParaHoje: () => void;
}

const NOMES_MESES = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

const DIAS_SEMANA = ["D", "S", "T", "Q", "Q", "S", "S"];

function mesmaData(a: Date, b: Date): boolean {
  return (
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear()
  );
}

export function CalendarioMensal({
  ano,
  mes,
  diaSelecionado,
  onSelecionarDia,
  onMesAnterior,
  onMesProximo,
  onIrParaHoje,
}: Props) {
  const dias = useMemo(() => gerarCalendarioMensal(ano, mes), [ano, mes]);
  const primeiroDia = new Date(ano, mes - 1, 1).getDay();
  const hoje = new Date();
  const celulasVazias = Array.from({ length: primeiroDia }, (_, i) => i);

  return (
    <div className="calendario-mensal">
      <header className="calendario-mensal__cabecalho">
        <button
          type="button"
          className="calendario-mensal__nav"
          onClick={onMesAnterior}
          aria-label="Mês anterior"
        >
          ‹
        </button>
        <div className="calendario-mensal__titulo-area">
          <h3 className="calendario-mensal__titulo">
            {NOMES_MESES[mes - 1]} de {ano}
          </h3>
          <button
            type="button"
            className="calendario-mensal__hoje-btn"
            onClick={onIrParaHoje}
          >
            hoje
          </button>
        </div>
        <button
          type="button"
          className="calendario-mensal__nav"
          onClick={onMesProximo}
          aria-label="Próximo mês"
        >
          ›
        </button>
      </header>

      <div className="calendario-mensal__dias-semana">
        {DIAS_SEMANA.map((dia, i) => (
          <div key={i} className="calendario-mensal__dia-semana">
            {dia}
          </div>
        ))}
      </div>

      <div className="calendario-mensal__grade">
        {celulasVazias.map((i) => (
          <div key={`vazio-${i}`} className="calendario-mensal__celula-vazia" />
        ))}

        {dias.map((d) => {
          const ehHoje = mesmaData(d.data, hoje);
          const ehSelecionado = mesmaData(d.data, diaSelecionado.data);
          const classes = [
            "calendario-mensal__celula",
            ehHoje ? "hoje" : "",
            ehSelecionado ? "selecionado" : "",
          ].filter(Boolean).join(" ");

          return (
            <button
              key={d.data.toISOString()}
              type="button"
              className={classes}
              title={`${d.nomeFase} — ${d.iluminacao}% iluminada`}
              onClick={() => onSelecionarDia(d)}
              aria-pressed={ehSelecionado}
              aria-label={`Dia ${d.data.getDate()}: ${d.nomeFase}`}
            >
              <span className="calendario-mensal__numero">{d.data.getDate()}</span>
              <IconeFaseLua fase={d.fase} tamanho={18} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
