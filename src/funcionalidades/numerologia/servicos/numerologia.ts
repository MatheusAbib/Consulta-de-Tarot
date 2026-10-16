export interface DadosNumerologia {
  nomeCompleto: string;
  dataNascimento: string;
}

export interface ResultadoNumerologia {
  caminhoDeVida: number;
  expressao: number;
  alma: number;
  personalidade: number;
  aniversario: number;
  maturidade: number;
  karmico: number;
}

const TABELA_PITAGORICA: Record<string, number> = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8,
};

const VOGAIS = new Set(["A", "E", "I", "O", "U"]);

function reduzir(numero: number): number {
  while (numero > 9 && numero !== 11 && numero !== 22 && numero !== 33) {
    numero = String(numero)
      .split("")
      .reduce((soma, digito) => soma + Number(digito), 0);
  }
  return numero;
}

function normalizar(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/[^A-Z]/g, "");
}

function somaLetras(texto: string, filtro?: (letra: string) => boolean): number {
  const normalizado = normalizar(texto);
  let soma = 0;
  for (const letra of normalizado) {
    if (filtro && !filtro(letra)) continue;
    const valor = TABELA_PITAGORICA[letra];
    if (valor) soma += valor;
  }
  return soma;
}

export function calcularCaminhoDeVida(dataNascimento: string): number {
  const [ano, mes, dia] = dataNascimento.split("-").map(Number);
  const diaReduzido = reduzir(dia);
  const mesReduzido = reduzir(mes);
  const anoReduzido = reduzir(ano);
  return reduzir(diaReduzido + mesReduzido + anoReduzido);
}

export function calcularExpressao(nomeCompleto: string): number {
  return reduzir(somaLetras(nomeCompleto));
}

export function calcularAlma(nomeCompleto: string): number {
  return reduzir(somaLetras(nomeCompleto, (letra) => VOGAIS.has(letra)));
}

export function calcularPersonalidade(nomeCompleto: string): number {
  return reduzir(somaLetras(nomeCompleto, (letra) => !VOGAIS.has(letra)));
}

export function calcularAniversario(dataNascimento: string): number {
  const dia = Number(dataNascimento.split("-")[2]);
  return reduzir(dia);
}

export function calcularMaturidade(
  caminhoDeVida: number,
  expressao: number
): number {
  return reduzir(caminhoDeVida + expressao);
}

export function calcularKarmico(nomeCompleto: string): number {
  const normalizado = normalizar(nomeCompleto);
  const letrasPresentes = new Set(normalizado.split(""));

  const numerosFaltantes: number[] = [];
  const numerosUsados = new Set<number>();

  for (const letra of letrasPresentes) {
    const valor = TABELA_PITAGORICA[letra];
    if (valor) numerosUsados.add(valor);
  }

  for (let n = 1; n <= 9; n++) {
    if (!numerosUsados.has(n)) numerosFaltantes.push(n);
  }

  const soma = numerosFaltantes.reduce((acc, n) => acc + n, 0);
  return reduzir(soma);
}

export function calcularNumerologia(
  dados: DadosNumerologia
): ResultadoNumerologia {
  const caminhoDeVida = calcularCaminhoDeVida(dados.dataNascimento);
  const expressao = calcularExpressao(dados.nomeCompleto);
  const alma = calcularAlma(dados.nomeCompleto);
  const personalidade = calcularPersonalidade(dados.nomeCompleto);
  const aniversario = calcularAniversario(dados.dataNascimento);
  const maturidade = calcularMaturidade(caminhoDeVida, expressao);
  const karmico = calcularKarmico(dados.nomeCompleto);

  return {
    caminhoDeVida,
    expressao,
    alma,
    personalidade,
    aniversario,
    maturidade,
    karmico,
  };
}