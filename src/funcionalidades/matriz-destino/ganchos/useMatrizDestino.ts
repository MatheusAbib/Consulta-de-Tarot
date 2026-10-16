import { useCallback, useState } from "react";
import { calcularMatriz } from "../servicos/matrizDestino";
import type { DadosMatriz, PontosMatriz } from "../servicos/matrizDestino";

export function useMatrizDestino() {
  const [resultado, setResultado] = useState<PontosMatriz | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  const calcular = useCallback((dados: DadosMatriz) => {
    setErro(null);
    try {
      const r = calcularMatriz(dados);
      setResultado(r);
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro ao calcular matriz");
    }
  }, []);

  const limpar = useCallback(() => {
    setResultado(null);
    setErro(null);
  }, []);

  return { resultado, erro, calcular, limpar };
}
