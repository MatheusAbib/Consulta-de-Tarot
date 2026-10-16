export type Elemento = "fogo" | "terra" | "ar" | "agua";

export interface Signo {
  id: number;
  nome: string;
  elemento: Elemento;
  regente: string;
  dataInicio: string;
  dataFim: string;
  descricao: string;
  caracteristicas: string[];
}
