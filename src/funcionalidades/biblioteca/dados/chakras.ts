export interface Chakra {
  id: string;
  nome: string;
  numero: string;
  cor: string;
  elemento: "Terra" | "Água" | "Fogo" | "Ar" | "Éter";
  icone: string;
  descricao: string;
  propriedades: string[];
  uso: string;
  cuidados?: string;
}

export const CHAKRAS: Chakra[] = [
  { id: "raiz", nome: "Chakra Raiz", numero: "1º", cor: "Vermelho", elemento: "Terra", icone: "mdi:circle", descricao: "O chakra raiz fica na base da coluna e é a fundação de todo o sistema energético. Ele está ligado à sobrevivência, à segurança, ao corpo físico e ao pertencimento.", propriedades: ["Segurança", "Estabilidade", "Vitalidade"], uso: "Trabalhe com aterramento, caminhe descalço, use cristais vermelhos ou pretos e medite sobre segurança.", cuidados: "Bloqueios podem gerar medo, insegurança e problemas físicos na base da coluna." },
  { id: "sacral", nome: "Chakra Sacral", numero: "2º", cor: "Laranja", elemento: "Água", icone: "mdi:water", descricao: "O chakra sacral fica abaixo do umbigo e é o centro da criatividade, do prazer, da sexualidade e das emoções. Ele está ligado à capacidade de sentir e criar.", propriedades: ["Criatividade", "Prazer", "Emoção"], uso: "Trabalhe com água, cristais laranja, dança, arte e práticas que despertem o prazer.", cuidados: "Bloqueios podem gerar culpa, bloqueio criativo e dificuldade em sentir prazer." },
  { id: "plexo-solar", nome: "Chakra Plexo Solar", numero: "3º", cor: "Amarelo", elemento: "Fogo", icone: "mdi:white-balance-sunny", descricao: "O chakra plexo solar fica na região do estômago e é o centro do poder pessoal, da autoestima e da vontade. Ele está ligado à capacidade de agir e se posicionar.", propriedades: ["Poder pessoal", "Autoestima", "Vontade"], uso: "Trabalhe com sol, cristais amarelos e práticas de autoafirmação.", cuidados: "Bloqueios podem gerar baixa autoestima, dificuldade em dizer não e problemas digestivos." },
  { id: "cardiaco", nome: "Chakra Cardíaco", numero: "4º", cor: "Verde", elemento: "Ar", icone: "mdi:heart", descricao: "O chakra cardíaco fica no centro do peito e é a ponte entre os chakras inferiores e superiores. Ele está ligado ao amor, à compaixão e à conexão com o outro.", propriedades: ["Amor", "Compaixão", "Conexão"], uso: "Trabalhe com cristais verdes e rosa, práticas de gratidão e meditações de amor.", cuidados: "Bloqueios podem gerar dificuldade em amar, mágoas antigas e problemas cardíacos." },
  { id: "laringeo", nome: "Chakra Laríngeo", numero: "5º", cor: "Azul", elemento: "Éter", icone: "mdi:water-outline", descricao: "O chakra laríngeo fica na garganta e é o centro da comunicação e da verdade. Ele está ligado à capacidade de expressar o que se sente e de falar a própria verdade.", propriedades: ["Comunicação", "Verdade", "Expressão"], uso: "Trabalhe com cristais azuis, canto, escrita e práticas de falar a verdade.", cuidados: "Bloqueios podem gerar dificuldade em se expressar, mentiras e problemas na garganta." },
  { id: "frontal", nome: "Chakra Frontal", numero: "6º", cor: "Índigo", elemento: "Éter", icone: "mdi:eye", descricao: "O chakra frontal fica entre as sobrancelhas e é o centro da intuição, da clareza e da visão. Ele está ligado à capacidade de enxergar além das aparências.", propriedades: ["Intuição", "Clareza", "Visão"], uso: "Trabalhe com cristais índigo, meditação e práticas de intuição.", cuidados: "Bloqueios podem gerar confusão, descrença na intuição e dores de cabeça." },
  { id: "coronario", nome: "Chakra Coronário", numero: "7º", cor: "Violeta", elemento: "Éter", icone: "mdi:moon-full", descricao: "O chakra coronário fica no topo da cabeça e é o centro da conexão espiritual. Ele está ligado à capacidade de se conectar com algo maior e de acessar a sabedoria universal.", propriedades: ["Espiritualidade", "Conexão", "Sabedoria"], uso: "Trabalhe com cristais violeta e branco, meditação e práticas espirituais.", cuidados: "Bloqueios podem gerar sensação de vazio, desconexão espiritual e dificuldade em confiar." },
];
