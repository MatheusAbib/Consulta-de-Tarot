export interface Elemento {
  id: string;
  nome: string;
  cor: string;
  direcao: string;
  icone: string;
  descricao: string;
  propriedades: string[];
  uso: string;
  cuidados?: string;
}

export const ELEMENTOS: Elemento[] = [
  { id: "terra", nome: "Terra", cor: "Verde", direcao: "Norte", icone: "mdi:terrain", descricao: "A Terra é o elemento da estabilidade, do corpo, da matéria e da fundação. Está ligada ao que é concreto, tangível e duradouro.", propriedades: ["Estabilidade", "Aterramento", "Materialização"], uso: "Use em rituais de prosperidade, aterramento e construção de bases. Signos de Terra: Touro, Virgem, Capricórnio.", cuidados: "Excesso de Terra pode gerar rigidez e apego ao material." },
  { id: "agua", nome: "Água", cor: "Azul", direcao: "Oeste", icone: "mdi:water", descricao: "A Água é o elemento da emoção, da intuição, da cura e do fluxo. Está ligada ao que é fluido, profundo e transformador.", propriedades: ["Emoção", "Intuição", "Cura"], uso: "Use em rituais de amor, cura emocional e intuição. Signos de Água: Câncer, Escorpião, Peixes.", cuidados: "Excesso de Água pode gerar instabilidade emocional e fuga da realidade." },
  { id: "fogo", nome: "Fogo", cor: "Vermelho", direcao: "Sul", icone: "mdi:fire", descricao: "O Fogo é o elemento da ação, da paixão, da transformação e da vontade. Está ligado ao que é intenso, rápido e transformador.", propriedades: ["Ação", "Paixão", "Transformação"], uso: "Use em rituais de coragem, paixão e transformação. Signos de Fogo: Áries, Leão, Sagitário.", cuidados: "Excesso de Fogo pode gerar impulsividade, raiva e destruição." },
  { id: "ar", nome: "Ar", cor: "Amarelo", direcao: "Leste", icone: "mdi:weather-windy", descricao: "O Ar é o elemento da mente, da comunicação, da liberdade e da clareza. Está ligado ao que é leve, rápido e intelectual.", propriedades: ["Comunicação", "Clareza", "Liberdade"], uso: "Use em rituais de comunicação, clareza mental e liberdade. Signos de Ar: Gêmeos, Libra, Aquário.", cuidados: "Excesso de Ar pode gerar dispersão, ansiedade e frieza emocional." },
  { id: "eter", nome: "Éter", cor: "Violeta", direcao: "Centro", icone: "mdi:star-four-points", descricao: "O Éter é o quinto elemento, o elemento da espiritualidade e da conexão com o todo. Ele permeia todos os outros e está ligado ao que transcende o físico.", propriedades: ["Espiritualidade", "Conexão", "Transcendência"], uso: "Use em rituais de conexão espiritual, meditação e transcendência.", cuidados: "Excesso de Éter pode gerar desconexão da realidade e fuga espiritual." },
];
