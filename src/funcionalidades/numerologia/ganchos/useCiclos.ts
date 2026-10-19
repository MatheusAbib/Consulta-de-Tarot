import { useMemo } from "react";
import { calcularCiclos, type CiclosPessoais } from "../servicos/ciclos";

export function useCiclos(dataNascimento: string | null | undefined): CiclosPessoais | null {
  return useMemo(() => {
    if (!dataNascimento) return null;
    try {
      return calcularCiclos(dataNascimento);
    } catch {
      return null;
    }
  }, [dataNascimento]);
}
