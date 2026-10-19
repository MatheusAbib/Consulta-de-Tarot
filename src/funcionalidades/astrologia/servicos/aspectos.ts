import type { PlanetaCalculado } from "./astrologia";

export type TipoAspecto =
  | "conjuncao"
  | "sextil"
  | "quadratura"
  | "trigono"
  | "oposicao";

export interface Aspecto {
  planetaA: string;
  planetaB: string;
  tipo: TipoAspecto;
  angulo: number;
  orbe: number;
}

interface DefAspecto {
  tipo: TipoAspecto;
  angulo: number;
  orbe: number;
  nome: string;
}

const DEF_ASPECTOS: DefAspecto[] = [
  { tipo: "conjuncao", angulo: 0, orbe: 8, nome: "Conjunção" },
  { tipo: "sextil", angulo: 60, orbe: 5, nome: "Sextil" },
  { tipo: "quadratura", angulo: 90, orbe: 7, nome: "Quadratura" },
  { tipo: "trigono", angulo: 120, orbe: 7, nome: "Trígono" },
  { tipo: "oposicao", angulo: 180, orbe: 8, nome: "Oposição" },
];

const PLANETAS_ASPECTOS = [
  "Sol", "Lua", "Mercúrio", "Vênus", "Marte",
  "Júpiter", "Saturno", "Urano", "Netuno", "Plutão",
];

function diferencaAngular(a: number, b: number): number {
  const d = Math.abs(a - b) % 360;
  return d > 180 ? 360 - d : d;
}

export function calcularAspectos(
  planetas: PlanetaCalculado[]
): Aspecto[] {
  const relevantes = planetas.filter((p) =>
    PLANETAS_ASPECTOS.includes(p.nome)
  );
  const aspectos: Aspecto[] = [];

  for (let i = 0; i < relevantes.length; i++) {
    for (let j = i + 1; j < relevantes.length; j++) {
      const a = relevantes[i];
      const b = relevantes[j];
      const dif = diferencaAngular(a.longitude, b.longitude);

      for (const def of DEF_ASPECTOS) {
        const orbe = Math.abs(dif - def.angulo);
        if (orbe <= def.orbe) {
          aspectos.push({
            planetaA: a.nome,
            planetaB: b.nome,
            tipo: def.tipo,
            angulo: def.angulo,
            orbe: Math.round(orbe * 10) / 10,
          });
          break;
        }
      }
    }
  }

  return aspectos;
}
