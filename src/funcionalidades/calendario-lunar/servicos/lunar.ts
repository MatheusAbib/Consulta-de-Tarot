import * as SunCalc from "suncalc";

export type FaseLua =
  | "nova"
  | "crescente-inicial"
  | "quarto-crescente"
  | "crescente-gibosa"
  | "cheia"
  | "minguante-gibosa"
  | "quarto-minguante"
  | "minguante-final";

export interface DadosLua {
  data: Date;
  fase: FaseLua;
  nomeFase: string;
  descricao: string;
  significado: string;
  esperar: string;
  fazer: string;
  evitar: string;
  iluminacao: number;
  idadeDias: number;
  distancia: number;
}

const CICLO_LUNAR = 29.530588853;

const TEXTOS: Record<
  FaseLua,
  {
    nome: string;
    descricao: string;
    significado: string;
    esperar: string;
    fazer: string;
    evitar: string;
  }
> = {
  nova: {
    nome: "Lua Nova",
    descricao:
      "A Lua Nova é o começo do ciclo lunar. O céu está escuro — e é nesse escuro que você planta o que quer ver crescer. É o momento de definir intenções, não de agir.",
    significado:
      "A Lua Nova marca o início de um ciclo de 29,5 dias. Tudo o que você plantar agora — intenções, projetos, decisões — vai crescer nas próximas semanas. É o momento de silêncio e definição, não de movimento.",
    esperar:
      "Vontade de recomeçar. Sensação de vazio fértil, como se algo estivesse por vir. Sonhos e intuições mais fortes. Cansaço físico é comum — o corpo também sente o ciclo.",
    fazer:
      "Defina suas intenções. Escreva o que você quer manifestar neste ciclo. Medite, faça um ritual, acenda uma vela. O que você plantar agora vai frutificar na Lua Cheia.",
    evitar:
      "Começar coisas grandes sem clareza. A energia da Lua Nova é de definição, não de ação. Quem age sem intenção colhe o que não plantou.",
  },
  "crescente-inicial": {
    nome: "Lua Crescente",
    descricao:
      "A Lua começa a crescer no céu — e o que você plantou na Lua Nova começa a ganhar forma. É o momento de dar os primeiros passos, com coragem e confiança.",
    significado:
      "A Lua Crescente é o momento de movimento. O que era intenção começa a se tornar ação. A energia está subindo, e o universo recompensa quem se mexe.",
    esperar:
      "Vontade de agir. Oportunidades que aparecem do nada. Sensação de que as coisas estão se movendo — devagar, mas se movendo. Entusiasmo e impulso.",
    fazer:
      "Dê o primeiro passo. Marque a conversa, envie o e-mail, comece o projeto. Confie no impulso — ele está te levando na direção certa.",
    evitar:
      "Hesitar. A Lua Crescente recompensa quem age primeiro. Quem espera o momento perfeito perde a janela que se abriu.",
  },
  "quarto-crescente": {
    nome: "Quarto Crescente",
    descricao:
      "O primeiro grande teste do ciclo. O que você plantou na Lua Nova encontra obstáculos — e é agora que você decide se continua ou desiste. O esforço define o resultado.",
    significado:
      "O Quarto Crescente é o momento da decisão. Os desafios aparecem para fortalecer sua intenção. Não é sinal de que você errou o caminho — é sinal de que está no caminho certo.",
    esperar:
      "Obstáculos, dúvidas, cansaço. Sensação de que as coisas ficaram mais difíceis. Conflitos internos entre continuar e desistir. Mas também clareza sobre o que realmente importa.",
    fazer:
      "Persista. Ajuste o que precisa ser ajustado, mas não abandone o que você plantou. O esforço agora define o resultado na Lua Cheia.",
    evitar:
      "Desistir no primeiro obstáculo. O Quarto Crescente testa sua determinação — quem desiste agora perde o que estava quase pronto.",
  },
  "crescente-gibosa": {
    nome: "Lua Crescente Gibosa",
    descricao:
      "A Lua está quase cheia. O que você plantou está quase pronto — e é hora de refinar, ajustar, aperfeiçoar. A energia está alta, mas pede atenção aos detalhes.",
    significado:
      "A Lua Crescente Gibosa é o momento do refinamento. Você já vê progresso, mas ainda há ajustes a fazer antes da colheita. É o momento de gratidão pelo que já cresceu e foco no que falta.",
    esperar:
      "Sensação de que está quase lá. Ansiedade para colher. Detalhes que precisam de atenção. Vontade de acelerar — mas o ciclo pede paciência.",
    fazer:
      "Refine. Ajuste os detalhes. Agradeça pelo que já cresceu. Prepare-se para a colheita da Lua Cheia — ela está próxima.",
    evitar:
      "Precipitar a colheita. O que ainda não está pronto não vai ficar pronto por pressa. Confie no tempo do ciclo.",
  },
  cheia: {
    nome: "Lua Cheia",
    descricao:
      "O auge do ciclo. Tudo o que estava oculto se revela — o que você plantou na Lua Nova agora aparece em resultados concretos. É o momento de celebrar, mas também de soltar.",
    significado:
      "A Lua Cheia é o ponto máximo de iluminação. O que estava escondido vem à tona, as emoções ficam à flor da pele, e a colheita acontece. É o momento de celebrar o que cresceu e liberar o que não serve mais.",
    esperar:
      "Emoções intensas. Revelações, confrontos, verdades que vêm à tona. Resultados concretos do que você plantou. Sensação de plenitude — ou de sobrecarga.",
    fazer:
      "Celebre o que cresceu. Agradeça. Libere o que não serve mais. Faça uma limpeza emocional — a Lua Cheia pede desapego do que pesa.",
    evitar:
      "Segurar o que já está pronto para ir embora. A Lua Cheia ilumina o que precisa ser visto — quem fecha os olhos perde a lição do ciclo.",
  },
  "minguante-gibosa": {
    nome: "Lua Minguante Gibosa",
    descricao:
      "A Lua começa a minguar. A colheita foi feita — agora é hora de compartilhar, ensinar, dividir o que aprendeu. A energia começa a se recolher.",
    significado:
      "A Lua Minguante Gibosa é o momento da partilha. O que você colheu na Lua Cheia precisa ser compartilhado — conhecimento, sabedoria, experiências. É o momento de ensinar pelo exemplo.",
    esperar:
      "Vontade de compartilhar. Sensação de que é hora de passar adiante o que aprendeu. Cansaço começando a aparecer. Necessidade de mais silêncio.",
    fazer:
      "Compartilhe o que aprendeu. Ensine, escreva, converse. Divida o que você colheu — o conhecimento cresce quando é compartilhado.",
    evitar:
      "Guardar tudo para si. O que você não compartilha se perde — a Lua Minguante pede generosidade.",
  },
  "quarto-minguante": {
    nome: "Quarto Minguante",
    descricao:
      "O segundo grande teste do ciclo. O que não serve mais precisa ser solto — mágoas, hábitos, pessoas, versões antigas de você. A liberação é o foco.",
    significado:
      "O Quarto Minguante é o momento da liberação. Tudo o que você não precisa mais — físico, emocional, mental — pede para ir embora. É o momento de perdoar, soltar, limpar.",
    esperar:
      "Vontade de limpar. Cansaço emocional. Memórias antigas vindo à tona. Sensação de que é hora de deixar algumas coisas irem.",
    fazer:
      "Solte. Perdoe. Limpe. Jogue fora o que não usa, perdoe quem magoou, deixe ir o que pesa. O corpo e a mente pedem limpeza.",
    evitar:
      "Segurar o que já está pronto para ir. Quem insiste em carregar o velho não tem mãos para receber o novo.",
  },
  "minguante-final": {
    nome: "Lua Minguante",
    descricao:
      "O fim do ciclo. A Lua está quase invisível — e o silêncio é o convite. É hora de descansar, de se recolher, de preparar o terreno para a próxima Lua Nova.",
    significado:
      "A Lua Minguante final marca o encerramento do ciclo lunar. Antes de um novo começo, o descanso. É o momento de silêncio, entrega e preparação — não de ação.",
    esperar:
      "Cansaço profundo. Vontade de ficar só. Introspecção. Sensação de que algo está terminando — e está mesmo. O corpo pede descanso.",
    fazer:
      "Descanse. Recolha-se. Prepare o terreno para a próxima Lua Nova. Medite, durma mais, silencie. O novo ciclo vai começar — e você precisa de energia.",
    evitar:
      "Começar coisas novas agora. A Lua Minguante pede encerramento, não abertura. O novo vem na Lua Nova.",
  },
};

export function calcularFaseLua(data: Date): DadosLua {
  const iluminacao = SunCalc.getMoonIllumination(data);
  const posicao = SunCalc.getMoonPosition(data, 0, 0);

  const fase = iluminacao.phase;
  const idade = fase * CICLO_LUNAR;

  let faseNome: FaseLua;

  if (fase < 0.03 || fase > 0.97) faseNome = "nova";
  else if (fase < 0.22) faseNome = "crescente-inicial";
  else if (fase < 0.28) faseNome = "quarto-crescente";
  else if (fase < 0.47) faseNome = "crescente-gibosa";
  else if (fase < 0.53) faseNome = "cheia";
  else if (fase < 0.72) faseNome = "minguante-gibosa";
  else if (fase < 0.78) faseNome = "quarto-minguante";
  else faseNome = "minguante-final";

  const texto = TEXTOS[faseNome];

  return {
    data,
    fase: faseNome,
    nomeFase: texto.nome,
    descricao: texto.descricao,
    significado: texto.significado,
    esperar: texto.esperar,
    fazer: texto.fazer,
    evitar: texto.evitar,
    iluminacao: Math.round(iluminacao.fraction * 100),
    idadeDias: Math.round(idade * 10) / 10,
    distancia: Math.round(posicao.distance),
  };
}

export function gerarCalendarioMensal(ano: number, mes: number): DadosLua[] {
  const dias: DadosLua[] = [];
  const ultimoDia = new Date(ano, mes, 0).getDate();

  for (let dia = 1; dia <= ultimoDia; dia++) {
    const data = new Date(ano, mes - 1, dia, 12, 0, 0);
    dias.push(calcularFaseLua(data));
  }

  return dias;
}

export function obterProximasFases(quantidade: number = 4): DadosLua[] {
  const fases: DadosLua[] = [];
  const hoje = new Date();

  for (let i = 0; i < quantidade * 7 && fases.length < quantidade; i++) {
    const data = new Date(hoje);
    data.setDate(hoje.getDate() + i);
    const dados = calcularFaseLua(data);

    if (["nova", "quarto-crescente", "cheia", "quarto-minguante"].includes(dados.fase)) {
      const jaTem = fases.some((f) => f.fase === dados.fase);
      if (!jaTem) fases.push(dados);
    }
  }

  return fases;
}
