export interface PontosMatriz {
  A: number;
  B: number;
  C: number;
  D: number;
  E: number;
  F: number;
  G: number;
  H: number;
  I: number;
  J: number;
  K: number;
  L: number;
  M: number;
}

export interface DadosMatriz {
  nome: string;
  dataNascimento: string;
}

function reduzir(numero: number): number {
  while (numero > 22) {
    numero = String(numero)
      .split("")
      .reduce((soma, d) => soma + Number(d), 0);
  }
  return numero;
}

function somaDigitos(texto: string): number {
  return texto
    .replace(/\D/g, "")
    .split("")
    .reduce((soma, d) => soma + Number(d), 0);
}

export function calcularMatriz(dados: DadosMatriz): PontosMatriz {
  const [ano, mes, dia] = dados.dataNascimento.split("-").map(Number);
  const diaStr = String(dia).padStart(2, "0");
  const mesStr = String(mes).padStart(2, "0");
  const anoStr = String(ano);

  const A = reduzir(somaDigitos(diaStr));
  const B = reduzir(somaDigitos(mesStr));
  const C = reduzir(somaDigitos(anoStr));
  const D = reduzir(A + B + C);

  const E = reduzir(A + B);
  const F = reduzir(B + C);
  const G = reduzir(C + D);
  const H = reduzir(D + A);

  const I = reduzir(A + D);
  const J = reduzir(B + D);
  const K = reduzir(E + F);
  const L = reduzir(G + H);
  const M = reduzir(K + L);

  return { A, B, C, D, E, F, G, H, I, J, K, L, M };
}
