import { useCallback, useState } from "react";
import { calcularMapaAstral } from "../servicos/astrologia";
import type { ResultadoMapaAstral, DadosNascimento } from "../servicos/astrologia";

export function useAstrologia() {
  const [resultado, setResultado] = useState<ResultadoMapaAstral | null>(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const calcular = useCallback(async (dados: DadosNascimento) => {
    setCarregando(true);
    setErro(null);
    setResultado(null);

    try {
      const mapa = await calcularMapaAstral(dados);
      setResultado(mapa);
    } catch (e) {
      const mensagem = e instanceof Error ? e.message : "Erro ao calcular mapa";
      setErro(mensagem);
    } finally {
      setCarregando(false);
    }
  }, []);

  const limpar = useCallback(() => {
    setResultado(null);
    setErro(null);
  }, []);

  return {
    resultado,
    carregando,
    erro,
    calcular,
    limpar,
  };
}
