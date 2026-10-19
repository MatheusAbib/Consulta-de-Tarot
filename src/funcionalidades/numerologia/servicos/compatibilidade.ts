import { calcularCaminhoDeVida } from "./numerologia";
import { TABELA_COMPATIBILIDADE, type CompatibilidadePar } from "../dados/compatibilidade";

export interface DadosPessoa {
  nome: string;
  dataNascimento: string;
}

export type ResultadoCompatibilidade = CompatibilidadePar & {
  numeroA: number;
  numeroB: number;
};

export function calcularCompatibilidade(
  a: DadosPessoa,
  b: DadosPessoa
): ResultadoCompatibilidade {
  const numeroA = calcularCaminhoDeVida(a.dataNascimento);
  const numeroB = calcularCaminhoDeVida(b.dataNascimento);
  return avaliarPar(numeroA, numeroB);
}

export function avaliarPar(
  numeroA: number,
  numeroB: number
): ResultadoCompatibilidade {
  const chave = `${Math.min(numeroA, numeroB)}-${Math.max(numeroA, numeroB)}`;
  const dado = TABELA_COMPATIBILIDADE[chave];
  if (!dado) {
    throw new Error("Combinação não encontrada");
  }
  return { numeroA, numeroB, ...dado };
}
