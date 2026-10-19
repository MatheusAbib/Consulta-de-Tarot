import type { ResultadoMapaAstral, PlanetaCalculado } from "./astrologia";

export type TipoAspecto =
  | "conjuncao"
  | "sextil"
  | "quadratura"
  | "trigono"
  | "oposicao";

export interface AspectoCruzado {
  planetaA: string;
  planetaB: string;
  tipo: TipoAspecto;
  angulo: number;
  orbe: number;
}

const PLANETAS_AMOR = ["Sol", "Lua", "Vênus", "Marte", "Ascendente"];

const DEF_ASPECTOS = [
  { tipo: "conjuncao" as TipoAspecto, angulo: 0, orbe: 8 },
  { tipo: "sextil" as TipoAspecto, angulo: 60, orbe: 5 },
  { tipo: "quadratura" as TipoAspecto, angulo: 90, orbe: 7 },
  { tipo: "trigono" as TipoAspecto, angulo: 120, orbe: 7 },
  { tipo: "oposicao" as TipoAspecto, angulo: 180, orbe: 8 },
];

function diferencaAngular(a: number, b: number): number {
  const d = Math.abs(a - b) % 360;
  return d > 180 ? 360 - d : d;
}

function obterLongitude(
  mapa: ResultadoMapaAstral,
  nome: string
): number | null {
  if (nome === "Ascendente") return mapa.ascendente;
  const p = mapa.planetas.find((pl) => pl.nome === nome);
  return p ? p.longitude : null;
}

export function calcularSinastria(
  mapaA: ResultadoMapaAstral,
  mapaB: ResultadoMapaAstral
): AspectoCruzado[] {
  const aspectos: AspectoCruzado[] = [];

  for (const nomeA of PLANETAS_AMOR) {
    for (const nomeB of PLANETAS_AMOR) {
      const lonA = obterLongitude(mapaA, nomeA);
      const lonB = obterLongitude(mapaB, nomeB);
      if (lonA === null || lonB === null) continue;

      const dif = diferencaAngular(lonA, lonB);

      for (const def of DEF_ASPECTOS) {
        const orbe = Math.abs(dif - def.angulo);
        if (orbe <= def.orbe) {
          aspectos.push({
            planetaA: nomeA,
            planetaB: nomeB,
            tipo: def.tipo,
            angulo: def.angulo,
            orbe: Math.round(orbe * 10) / 10,
          });
          break;
        }
      }
    }
  }

  return aspectos.sort((a, b) => a.orbe - b.orbe);
}

export function resumirSinastria(aspectos: AspectoCruzado[]): {
  total: number;
  harmonicos: number;
  tensos: number;
  neutros: number;
} {
  let harmonicos = 0;
  let tensos = 0;
  let neutros = 0;

  for (const a of aspectos) {
    if (a.tipo === "trigono" || a.tipo === "sextil") harmonicos++;
    else if (a.tipo === "quadratura" || a.tipo === "oposicao") tensos++;
    else neutros++;
  }

  return { total: aspectos.length, harmonicos, tensos, neutros };
}

export type { PlanetaCalculado };
