import type { Tiragem } from "../modelos/carta";

export const TIRAGENS: Tiragem[] = [
  {
    id: "uma-carta",
    nome: "Carta do Dia",
    descricao: "Uma única carta para orientar seu dia.",
    icone: "fa-solid fa-sun",
    quantidadeCartas: 1,
    posicoes: [
      { indice: 0, nome: "Mensagem do dia", descricao: "A energia que rege seu momento atual." },
    ],
  },
  {
    id: "tres-cartas",
    nome: "Passado, Presente e Futuro",
    descricao: "Três cartas para revelar a linha do tempo da sua questão.",
    icone: "fa-solid fa-timeline",
    quantidadeCartas: 3,
    posicoes: [
      { indice: 0, nome: "Passado", descricao: "As raízes da situação." },
      { indice: 1, nome: "Presente", descricao: "O que está acontecendo agora." },
      { indice: 2, nome: "Futuro", descricao: "Para onde os caminhos apontam." },
    ],
  },
  {
    id: "cruz-celta",
    nome: "Cruz Celta",
    descricao: "Dez cartas para uma análise profunda e completa.",
    icone: "fa-solid fa-cross",
    quantidadeCartas: 10,
    posicoes: [
      { indice: 0, nome: "Situação atual", descricao: "O centro da questão." },
      { indice: 1, nome: "O que cruza", descricao: "O desafio ou influência direta." },
      { indice: 2, nome: "Base", descricao: "A raiz inconsciente da situação." },
      { indice: 3, nome: "Passado recente", descricao: "O que está se dissolvendo." },
      { indice: 4, nome: "Possível resultado", descricao: "O melhor cenário visível." },
      { indice: 5, nome: "Próximo futuro", descricao: "O que se aproxima em breve." },
      { indice: 6, nome: "Sua postura", descricao: "Como você se posiciona." },
      { indice: 7, nome: "Influências externas", descricao: "Pessoas e forças ao redor." },
      { indice: 8, nome: "Esperanças e medos", descricao: "O que habita seu íntimo." },
      { indice: 9, nome: "Resultado final", descricao: "O desfecho provável." },
    ],
  },
];
