import { useCallback, useState } from "react";
import { calcularNumerologia } from "../servicos/numerologia";
import type { DadosNumerologia, ResultadoNumerologia } from "../servicos/numerologia";

export function useNumerologia() {
  const [resultado, setResultado] = useState<ResultadoNumerologia | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  const calcular = useCallback((dados: DadosNumerologia) => {
    setErro(null);
    try {
      const r = calcularNumerologia(dados);
      setResultado(r);
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro ao calcular numerologia");
    }
  }, []);

  const limpar = useCallback(() => {
    setResultado(null);
    setErro(null);
  }, []);

  return {
    resultado,
    erro,
    calcular,
    limpar,
  };
}
