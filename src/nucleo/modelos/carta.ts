export type Arcano = "maior" | "menor";

export interface Carta {
  id: number;
  numero: number;
  titulo: string;
  descricao: string;
  fortuna: string;
  arcano: Arcano;
}

export type TipoTiragem = "uma-carta" | "tres-cartas" | "cruz-celta";

export interface PosicaoTiragem {
  indice: number;
  nome: string;
  descricao: string;
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
}
