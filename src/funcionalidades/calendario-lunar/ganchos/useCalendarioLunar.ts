import { useMemo, useState } from "react";
import {
  calcularFaseLua,
  gerarCalendarioMensal,
  obterProximasFases,
  type DadosLua,
} from "../servicos/lunar";
import { obterNomeLua } from "../dados/nomes-luas";

export function useCalendarioLunar() {
  const hoje = useMemo(() => new Date(), []);
  const [ano, setAno] = useState(hoje.getFullYear());
  const [mes, setMes] = useState(hoje.getMonth() + 1);

  const [diaSelecionado, setDiaSelecionado] = useState<DadosLua>(() =>
    calcularFaseLua(hoje)
  );

  const diasDoMes = useMemo(() => gerarCalendarioMensal(ano, mes), [ano, mes]);
  const proximasFases = useMemo(() => obterProximasFases(4), []);
  const nomeLuaDoMes = useMemo(() => obterNomeLua(mes), [mes]);

  function ehHoje(data: Date): boolean {
    return (
      data.getDate() === hoje.getDate() &&
      data.getMonth() === hoje.getMonth() &&
      data.getFullYear() === hoje.getFullYear()
    );
  }

  function selecionarDia(d: DadosLua) {
    setDiaSelecionado(d);
  }

  function mesAnterior() {
    if (mes === 1) {
      setMes(12);
      setAno(ano - 1);
    } else {
      setMes(mes - 1);
    }
  }

  function mesProximo() {
    if (mes === 12) {
      setMes(1);
      setAno(ano + 1);
    } else {
      setMes(mes + 1);
    }
  }

  function irParaHoje() {
    setAno(hoje.getFullYear());
    setMes(hoje.getMonth() + 1);
    setDiaSelecionado(calcularFaseLua(hoje));
  }

  return {
    ano,
    mes,
    hoje,
    diasDoMes,
    diaSelecionado,
    proximasFases,
    nomeLuaDoMes,
    selecionarDia,
    ehHoje,
    mesAnterior,
    mesProximo,
    irParaHoje,
  };
}
