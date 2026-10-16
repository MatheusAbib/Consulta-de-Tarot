export interface InterpretacaoNumero {
  numero: number;
  titulo: string;
  descricao: string;
  palavrasChave: string[];
}

export interface ResultadoNumerologia {
  caminhoDeVida: InterpretacaoNumero;
  expressao: InterpretacaoNumero;
  alma: InterpretacaoNumero;
  personalidade: InterpretacaoNumero;
  aniversario: InterpretacaoNumero;
}

export interface DadosNumerologia {
  nomeCompleto: string;
  dataNascimento: string;
}
