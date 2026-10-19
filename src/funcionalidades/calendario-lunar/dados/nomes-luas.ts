export interface NomeLua {
  mes: number;
  nome: string;
  significado: string;
}

export const NOMES_LUAS: NomeLua[] = [
  { mes: 1,  nome: "Lua do Lobo",      significado: "Tempo de introspecção e escuta do instinto. O frio convida ao recolhimento." },
  { mes: 2,  nome: "Lua da Neve",      significado: "Purificação e paciência. A terra dorme, mas a promessa da primavera já pulsa." },
  { mes: 3,  nome: "Lua do Verme",     significado: "Despertar da vida. O solo se aquece e os primeiros ciclos recomeçam." },
  { mes: 4,  nome: "Lua Rosa",         significado: "Florescimento e renovação. Beleza que surge depois do esforço." },
  { mes: 5,  nome: "Lua das Flores",   significado: "Abundância e fertilidade. Momento de colher o que foi semeado." },
  { mes: 6,  nome: "Lua do Morango",   significado: "Doçura e celebração. Os frutos do trabalho começam a amadurecer." },
  { mes: 7,  nome: "Lua do Cervo",     significado: "Força e proteção. O cervo troca os chifres — tempo de renovar a coragem." },
  { mes: 8,  nome: "Lua do Esturjão",  significado: "Abundância das águas. Honra à fartura e à generosidade." },
  { mes: 9,  nome: "Lua da Colheita",  significado: "Gratidão e equilíbrio. Recolher, agradecer e preparar o descanso." },
  { mes: 10, nome: "Lua do Caçador",   significado: "Foco e preparação. Tempo de afiar a mira e guardar para o inverno." },
  { mes: 11, nome: "Lua do Castor",    significado: "Construção e comunidade. Preparar o lar para o frio que vem." },
  { mes: 12, nome: "Lua Fria",         significado: "Silêncio e sabedoria. A escuridão guarda as sementes do próximo ciclo." },
];

export function obterNomeLua(mes: number): NomeLua {
  return NOMES_LUAS.find((l) => l.mes === mes) ?? NOMES_LUAS[0];
}
