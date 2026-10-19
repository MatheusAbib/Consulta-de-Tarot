import { reduzir } from "./numerologia";

export interface CiclosPessoais {
  anoPessoal: number;
  mesPessoal: number;
  diaPessoal: number;
  anoAtual: number;
  mesAtual: number;
  diaAtual: number;
}

/** Redução teosófica pura: sempre até 1 dígito (ciclos não usam números mestres). */
function reduzirCiclo(n: number): number {
  let r = reduzir(n);
  while (r > 9) r = reduzir(r);
  return r;
}

function partesData(dataISO: string): { dia: number; mes: number; ano: number } {
  const [ano, mes, dia] = dataISO.split("-").map(Number);
  return { dia, mes, ano };
}

export function calcularCiclos(
  dataNascimento: string,
  hoje: Date = new Date()
): CiclosPessoais {
  const nasc = partesData(dataNascimento);
  const diaAtual = hoje.getDate();
  const mesAtual = hoje.getMonth() + 1;
  const anoAtual = hoje.getFullYear();

  const anoPessoal = reduzirCiclo(
    reduzirCiclo(nasc.dia) +
      reduzirCiclo(nasc.mes) +
      reduzirCiclo(diaAtual) +
      reduzirCiclo(mesAtual) +
      reduzirCiclo(anoAtual)
  );

  const mesPessoal = reduzirCiclo(anoPessoal + reduzirCiclo(mesAtual));
  const diaPessoal = reduzirCiclo(mesPessoal + reduzirCiclo(diaAtual));

  return { anoPessoal, mesPessoal, diaPessoal, anoAtual, mesAtual, diaAtual };
}
