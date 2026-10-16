import { SIGNOS } from "./signos";
import type { Signo } from "./signos";

export function signoPorData(data: string): Signo | null {
  const [, mes, dia] = data.split("-").map(Number);
  const dataNum = mes * 100 + dia;

  const limites = [
    { nome: "Capricórnio", inicio: 1222, fim: 119 },
    { nome: "Aquário", inicio: 120, fim: 218 },
    { nome: "Peixes", inicio: 219, fim: 320 },
    { nome: "Áries", inicio: 321, fim: 419 },
    { nome: "Touro", inicio: 420, fim: 520 },
    { nome: "Gêmeos", inicio: 521, fim: 620 },
    { nome: "Câncer", inicio: 621, fim: 722 },
    { nome: "Leão", inicio: 723, fim: 822 },
    { nome: "Virgem", inicio: 823, fim: 922 },
    { nome: "Libra", inicio: 923, fim: 1022 },
    { nome: "Escorpião", inicio: 1023, fim: 1121 },
    { nome: "Sagitário", inicio: 1122, fim: 1221 },
  ];

  for (const lim of limites) {
    if (lim.inicio > lim.fim) {
      if (dataNum >= lim.inicio || dataNum <= lim.fim) {
        return SIGNOS.find((s) => s.nome === lim.nome) ?? null;
      }
    } else if (dataNum >= lim.inicio && dataNum <= lim.fim) {
      return SIGNOS.find((s) => s.nome === lim.nome) ?? null;
    }
  }
  return null;
}
