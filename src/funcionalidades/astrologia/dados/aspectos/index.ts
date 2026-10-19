import type { TipoAspecto } from "../../servicos/aspectos";
import type { TextoAspecto } from "./tipos";

import { SOL } from "./especificos/sol";
import { LUA } from "./especificos/lua";
import { MERCURIO } from "./especificos/mercurio";
import { VENUS } from "./especificos/venus";
import { MARTE } from "./especificos/marte";
import { JUPITER } from "./especificos/jupiter";
import { SATURNO } from "./especificos/saturno";
import { URANO } from "./especificos/urano";
import { NETUNO } from "./especificos/netuno";

const TODOS: Record<string, TextoAspecto> = {
  ...SOL,
  ...LUA,
  ...MERCURIO,
  ...VENUS,
  ...MARTE,
  ...JUPITER,
  ...SATURNO,
  ...URANO,
  ...NETUNO,
};

export function obterTextoAspecto(
  tipo: TipoAspecto,
  planetaA: string,
  planetaB: string
): TextoAspecto {
  const chave1 = `${tipo}-${planetaA}-${planetaB}`;
  const chave2 = `${tipo}-${planetaB}-${planetaA}`;

  const texto = TODOS[chave1] ?? TODOS[chave2];
  if (texto) return texto;

  // fallback de segurança (não deve ser atingido com a cobertura atual)
  return {
    descricao: `${planetaA} e ${planetaB} formam um aspecto de ${tipo}. As duas energias se relacionam de forma particular, e o efeito depende de como cada uma se manifesta no seu mapa.`,
    funciona: "Você tem acesso a duas forças internas que, quando integradas, ampliam sua percepção.",
    vigiar: "Confundir as duas forças e agir de forma desequilibrada.",
    conselho: "Observe como essas duas energias se manifestam no seu dia a dia e busque integrá-las.",
  };
}

export type { TextoAspecto } from "./tipos";
