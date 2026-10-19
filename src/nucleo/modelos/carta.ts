export type Arcano = "maior" | "menor";
export type Naipe = "Espadas" | "Copas" | "Ouros" | "Paus";

export interface CartaFortuna {
  geral: string[];
  noDia: string;
  noPassado: string;
  noPresente: string;
  noFuturo: string;
  comoDesafio: string;
  comoConselho: string;
  comoResultado: string;
}

export interface Carta {
  id: number;
  numero: number;
  titulo: string;
  descricao: string;
  arcano: Arcano;
  naipe?: Naipe;
  fortuna: CartaFortuna;
}

export type TipoTiragem = "uma-carta" | "tres-cartas" | "cruz-celta";

export interface PosicaoTiragem {
  indice: number;
  nome: string;
  descricao: string;
  contexto: keyof Omit<CartaFortuna, "geral">;
}

export interface Tiragem {
  id: TipoTiragem;
  nome: string;
  descricao: string;
  icone: string;
  quantidadeCartas: number;
  posicoes: PosicaoTiragem[];
}

export type Leitura = (Carta | null)[];

export interface LeituraSalva {
  tipo: TipoTiragem;
  data: string;
  cartas: Carta[];
  pergunta?: string;
}

