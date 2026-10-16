import { SwissEphemeris, Planet, HouseSystem } from "@swisseph/browser";
import { carregarMunicipios } from "municipios-brasil";

export interface DadosNascimento {
  nome: string;
  data: string;
  hora: string;
  cidadeNome: string;
  cidadeUf: string;
}

export interface PlanetaCalculado {
  nome: string;
  longitude: number;
  signo: string;
  grau: number;
}

export interface ResultadoMapaAstral {
  planetas: PlanetaCalculado[];
  casas: number[];
  ascendente: number;
  meioDoCeu: number;
}

const NOMES_PLANETAS: Record<number, string> = {
  [Planet.Sun]: "Sol",
  [Planet.Moon]: "Lua",
  [Planet.Mercury]: "Mercúrio",
  [Planet.Venus]: "Vênus",
  [Planet.Mars]: "Marte",
  [Planet.Jupiter]: "Júpiter",
  [Planet.Saturn]: "Saturno",
  [Planet.Uranus]: "Urano",
  [Planet.Neptune]: "Netuno",
  [Planet.Pluto]: "Plutão",
};

const SIGNOS = [
  "Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem",
  "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes",
];

export function grauParaSigno(longitude: number): string {
  const indice = Math.floor(longitude / 30) % 12;
  return SIGNOS[indice];
}

export function grauDentroDoSigno(longitude: number): number {
  return longitude % 30;
}

export async function calcularMapaAstral(
  dados: DadosNascimento
): Promise<ResultadoMapaAstral> {
  const api = await carregarMunicipios();
  const resultados = api.buscar(dados.cidadeNome, { uf: dados.cidadeUf as any, limite: 1 });
  const cidade = resultados[0];

  if (!cidade) {
    throw new Error("Cidade não encontrada");
  }

  const [ano, mes, dia] = dados.data.split("-").map(Number);
  const [hora, minuto] = dados.hora.split(":").map(Number);

  const dataUtc = new Date(Date.UTC(ano, mes - 1, dia, hora, minuto));

  const swe = new SwissEphemeris();
  await swe.init();

  const jd = swe.dateToJulianDay(dataUtc);

  const planetas: PlanetaCalculado[] = [];
  const listaPlanetas = [
    Planet.Sun, Planet.Moon, Planet.Mercury, Planet.Venus, Planet.Mars,
    Planet.Jupiter, Planet.Saturn, Planet.Uranus, Planet.Neptune, Planet.Pluto,
  ];

  for (const planeta of listaPlanetas) {
    const posicao = swe.calculatePosition(jd, planeta);
    planetas.push({
      nome: NOMES_PLANETAS[planeta] ?? String(planeta),
      longitude: posicao.longitude,
      signo: grauParaSigno(posicao.longitude),
      grau: grauDentroDoSigno(posicao.longitude),
    });
  }

  const casas = swe.calculateHouses(
    jd,
    cidade.latitude,
    cidade.longitude,
    HouseSystem.Placidus
  );

  swe.close();

  return {
    planetas,
    casas: casas.cusps.slice(1, 13),
    ascendente: casas.ascendant,
    meioDoCeu: casas.mc,
  };
}
