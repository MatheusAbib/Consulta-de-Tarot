export interface TextoCiclo {
  titulo: string;
  significado: string;
  esperar: string;
  fazer: string;
  evitar: string;
}

export const ANO_PESSOAL: Record<number, TextoCiclo> = {
  1: {
    titulo: "Ano de Começos",
    significado: "O ano 1 abre um novo ciclo de 9 anos. É o momento de plantar — tudo o que você iniciar agora vai crescer nos próximos anos. O universo pede coragem, autonomia e iniciativa. É um ano de recomeço, mesmo que você não tenha pedido por ele.",
    esperar: "Oportunidades de começar algo novo: trabalho, relação, projeto pessoal, mudança de cidade. Sensação de que a vida está pedindo uma decisão que você vinha adiando. Portas que se abrem do nada.",
    fazer: "Tome a iniciativa. Não espere permissão. Escolha uma coisa importante e comece — mesmo pequeno. O ano 1 recompensa quem age primeiro.",
    evitar: "Esperar o momento perfeito. O momento é agora. E cuidado com a pressa: começar não é o mesmo que atropelar.",
  },
  2: {
    titulo: "Ano de Paciência",
    significado: "O ano 2 é o tempo da semente debaixo da terra. O que você plantou no ano 1 começa a crescer — mas devagar, no escuro, sem que você veja. É um ano de espera ativa, cooperação e construção de parcerias.",
    esperar: "Progressos lentos, mas reais. Sensação de que as coisas não avançam — mas estão avançando por baixo. Parcerias importantes aparecem. Conflitos antigos pedem diplomacia.",
    fazer: "Cultive paciência. Invista em relações e parcerias. Escute mais do que fala. O ano 2 recompensa quem sabe esperar e cooperar.",
    evitar: "Forçar resultados que ainda não estão prontos. Ansiedade e impulsividade destroem o que o ano 2 está construindo em silêncio.",
  },
  3: {
    titulo: "Ano de Expressão",
    significado: "O ano 3 é o tempo da flor. O que foi plantado no ano 1 e cuidado no ano 2 agora se mostra ao mundo. É um ano social, criativo e expansivo — a vida quer ser vista, compartilhada, celebrada.",
    esperar: "Convites sociais, projetos criativos, viagens, novos amigos. Vontade de se expressar — na arte, na fala, na aparência. Oportunidades de visibilidade.",
    fazer: "Mostre o que você faz. Comunique, crie, se exponha. O ano 3 recompensa quem tem coragem de aparecer.",
    evitar: "Dispersão. O ano 3 traz muitas portas — se você abrir todas, não entra em nenhuma. Escolha onde brilhar.",
  },
  4: {
    titulo: "Ano de Estrutura",
    significado: "O ano 4 é o tempo de construir a base. O que foi celebrado no ano 3 agora precisa de estrutura para durar. É um ano de trabalho, disciplina e responsabilidade — o que você fizer agora vai sustentar os próximos anos.",
    esperar: "Trabalho intenso, contas a resolver, organização necessária. Mudanças concretas: casa, carreira, rotina. Sensação de peso — mas também de solidez.",
    fazer: "Organize. Firme compromissos. Coloque a casa em ordem, física e financeira. O ano 4 recompensa o esforço consistente.",
    evitar: "Fugir da responsabilidade. O ano 4 não perdoa descuido — o que você não organizar agora vai cobrar depois.",
  },
  5: {
    titulo: "Ano de Mudança",
    significado: "O ano 5 é o tempo da liberdade e do movimento. A estrutura do ano 4 é sacudida — e o que estava preso começa a se soltar. É um ano de transformação, viagens, mudanças e novas experiências que ampliam quem você é.",
    esperar: "Mudanças inesperadas: viagens, mudanças de cidade, de trabalho, de relação. Vontade de liberdade. Oportunidades que aparecem do nada e exigem flexibilidade.",
    fazer: "Aceite o movimento. Não tente segurar o que está indo embora. O ano 5 recompensa quem tem coragem de se reinventar.",
    evitar: "Resistir ao fluxo. Quem tenta segurar tudo no ano 5 perde o que a mudança quer trazer. Mas cuidado: liberdade não é fuga.",
  },
  6: {
    titulo: "Ano de Responsabilidade",
    significado: "O ano 6 é o tempo do lar, da família e dos compromissos afetivos. O que foi transformado no ano 5 agora precisa de cuidado — é hora de olhar para quem está perto e assumir responsabilidades que você vinha adiando.",
    esperar: "Casamentos, filhos, mudanças de casa, cuidados com pais. Assuntos de família ganham força. Sensação de que a vida pede compromisso — não fuga.",
    fazer: "Cuide de quem você ama. Resolva pendências afetivas. O ano 6 recompensa quem assume o cuidado com maturidade.",
    evitar: "Sacrificar-se demais em nome do outro. Cuidar não é se anular — o ano 6 também pede cuidado com você.",
  },
  7: {
    titulo: "Ano de Introspecção",
    significado: "O ano 7 é o tempo do silêncio e do estudo. Depois de anos de ação e responsabilidade, o ciclo pede pausa. É um ano de autoconhecimento, espiritualidade e análise — o que você descobrir agora vai orientar os próximos anos.",
    esperar: "Vontade de ficar só. Estudos, leituras, terapia, espiritualidade. Questionamentos profundos sobre quem você é e o que quer. Amizades se afastam — não por perda, mas por escolha.",
    fazer: "Estude, medite, reflita. Escute sua intuição. O ano 7 recompensa quem tem coragem de se olhar por dentro.",
    evitar: "Decisões impulsivas. O ano 7 não é tempo de agir sem pensar — é tempo de entender antes de agir.",
  },
  8: {
    titulo: "Ano de Colheita",
    significado: "O ano 8 é o tempo de colher o que você plantou. Todo o esforço dos anos anteriores retorna em resultados concretos: dinheiro, reconhecimento, poder. É um ano de materialização — o que você fez nos últimos anos vai aparecer agora.",
    esperar: "Reconhecimento profissional, promoções, negócios que dão certo. Assuntos de dinheiro ganham força. Oportunidades de crescer materialmente.",
    fazer: "Administre o que você colheu. Seja firme, estratégico, generoso. O ano 8 recompensa quem construiu bem — mas cobra quem construiu mal.",
    evitar: "Arrogância e abuso de poder. O ano 8 pode te dar muito — mas também pode te tirar muito, se você não souber administrar.",
  },
  9: {
    titulo: "Ano de Encerramento",
    significado: "O ano 9 fecha o ciclo de 9 anos. É o tempo de soltar — o que não pertence ao próximo ciclo precisa ir embora. Perdão, desapego, encerramento de pendências. O que você não soltar agora vai te acompanhar por mais 9 anos.",
    esperar: "Fim de ciclos: relações, trabalhos, amizades, hábitos. Sensação de que algo está terminando — e está mesmo. Vontade de limpar, doar, perdoar.",
    fazer: "Solte. Encerre. Perdoe. Limpe. O ano 9 recompensa quem tem coragem de fechar portas para abrir outras.",
    evitar: "Segurar o que já acabou. Quem insiste em carregar o velho não tem mãos para receber o novo.",
  },
};

export const MES_PESSOAL: Record<number, TextoCiclo> = {
  1: {
    titulo: "Mês da Iniciativa",
    significado: "Um mês para começar. O que você vem adiando encontra agora o momento certo para o primeiro passo. A energia do mês 1 é de abertura — portas que estavam fechadas começam a se destravar, e você sente vontade de agir.",
    esperar: "Oportunidades de iniciar projetos, conversas e decisões que você vinha postergando. Convites que exigem resposta rápida. Sensação de que é agora ou nunca.",
    fazer: "Tome a frente. Dê o primeiro passo no que importa — mesmo pequeno. Marque a conversa, envie o e-mail, comece o projeto. O mês 1 recompensa quem age primeiro.",
    evitar: "Esperar permissão ou o momento perfeito. O mês 1 não espera — quem hesita perde a janela. Mas cuidado com a pressa: começar não é atropelar.",
  },
  2: {
    titulo: "Mês da Cooperação",
    significado: "Um mês para escutar, esperar e agir em parceria. Não é tempo de forçar — é tempo de nutrir o que já existe. A energia do mês 2 é de bastidor: o que você faz agora não aparece, mas sustenta o que vem depois.",
    esperar: "Progressos lentos, mas reais. Conversas importantes que exigem diplomacia. Parcerias que se fortalecem. Sensação de que as coisas não avançam — mas estão avançando por baixo.",
    fazer: "Escute mais do que fala. Ceda quando for preciso. Invista em relações. O mês 2 recompensa quem sabe esperar e cooperar.",
    evitar: "Ansiedade e pressa. O mês 2 não é tempo de atropelar — quem força perde o que estava sendo construído em silêncio.",
  },
  3: {
    titulo: "Mês da Comunicação",
    significado: "Um mês para falar, criar e se expor. A vida social ganha força e a criatividade flui com facilidade. A energia do mês 3 é de visibilidade — o que você mostrar agora será visto, e o que você calar agora ficará para depois.",
    esperar: "Convites, conversas importantes, inspiração para projetos criativos. Vontade de se expressar — na arte, na fala, na aparência. Pessoas novas aparecem.",
    fazer: "Comunique. Crie. Se exponha. Marque encontros, publique, mostre seu trabalho. O mês 3 recompensa quem tem coragem de aparecer.",
    evitar: "Dispersão. O mês 3 traz muitas portas — se você abrir todas, não entra em nenhuma. Escolha onde brilhar.",
  },
  4: {
    titulo: "Mês da Organização",
    significado: "Um mês para arrumar a casa e as contas. O que está solto precisa ser resolvido agora — não depois. A energia do mês 4 é de base: o que você organizar agora vai sustentar os próximos meses.",
    esperar: "Tarefas práticas, contas a resolver, rotina que precisa de ajuste. Sensação de peso — mas também de solidez. O que você adiar agora vai cobrar juros depois.",
    fazer: "Organize. Finalize pendências. Coloque a casa em ordem, física e financeira. O mês 4 recompensa o esforço consistente.",
    evitar: "Fugir do prático. O mês 4 não perdoa descuido — o que você não organizar agora vai cobrar depois.",
  },
  5: {
    titulo: "Mês da Mudança",
    significado: "Um mês para aceitar o imprevisto. O que estava parado ganha movimento — e você precisa acompanhar. A energia do mês 5 é de liberdade: o que estava preso começa a se soltar, e você sente vontade de mudar tudo.",
    esperar: "Imprevistos, oportunidades de mudança, vontade de liberdade. Viagens, convites inesperados, decisões que pedem flexibilidade. Sensação de que a vida está em movimento.",
    fazer: "Aceite o movimento. Seja flexível. Não tente segurar o que está indo embora. O mês 5 recompensa quem se adapta.",
    evitar: "Resistir ao fluxo. Quem trava no mês 5 perde o que a mudança traz. Mas cuidado: liberdade não é fuga.",
  },
  6: {
    titulo: "Mês do Cuidado",
    significado: "Um mês para voltar-se para casa e para as pessoas que você ama. A vida afetiva pede atenção. A energia do mês 6 é de cuidado: o que foi transformado no mês 5 agora precisa de atenção e responsabilidade.",
    esperar: "Assuntos de família, cuidado com quem está perto, harmonia a construir. Conversas afetivas que precisam acontecer. Sensação de que a vida pede compromisso — não fuga.",
    fazer: "Cuide. Escute. Resolva pendências afetivas. O mês 6 recompensa quem investe no afeto com maturidade.",
    evitar: "Sacrificar-se demais. Cuidar não é se anular — o mês 6 também pede cuidado com você.",
  },
  7: {
    titulo: "Mês da Introspecção",
    significado: "Um mês para se recolher e estudar. A vida exterior perde força — o que importa está dentro. A energia do mês 7 é de pausa: o que você descobrir agora vai orientar os próximos meses.",
    esperar: "Vontade de ficar só, estudos, reflexões, questionamentos profundos. Insights que chegam no silêncio. Amizades que se afastam — não por perda, mas por escolha.",
    fazer: "Estude. Medite. Reflita. Escute sua intuição. O mês 7 recompensa quem tem coragem de se olhar por dentro.",
    evitar: "Decisões impulsivas. O mês 7 não é tempo de agir sem pensar — é tempo de entender antes de agir.",
  },
  8: {
    titulo: "Mês da Realização",
    significado: "Um mês para resolver o material. Dinheiro, poder, reconhecimento — assuntos práticos ganham força. A energia do mês 8 é de colheita: o que você construiu nos últimos meses aparece agora em resultados concretos.",
    esperar: "Oportunidades de ganho, negociações, decisões financeiras importantes. Reconhecimento profissional. Sensação de que é hora de colher.",
    fazer: "Administre. Negocie. Seja firme e estratégico. O mês 8 recompensa quem age com maturidade.",
    evitar: "Arrogância e abuso. O mês 8 pode te dar muito — mas também pode te tirar muito, se você não souber administrar.",
  },
  9: {
    titulo: "Mês de Encerramento",
    significado: "Um mês para fechar ciclos. O que não pertence ao próximo precisa ir embora — com perdão e gratidão. A energia do mês 9 é de limpeza: o que você não soltar agora vai te acompanhar por mais tempo.",
    esperar: "Fins, conclusões, sensação de que algo está terminando. Vontade de limpar, doar, perdoar. Conversas que precisam de ponto final.",
    fazer: "Solte. Encerre. Perdoe. Limpe. O mês 9 recompensa quem tem coragem de fechar portas para abrir outras.",
    evitar: "Segurar o que já acabou. O velho precisa ir para o novo chegar — quem insiste em carregar perde o que vem depois.",
  },
};

export const DIA_PESSOAL: Record<number, TextoCiclo> = {
  1: {
    titulo: "Dia de Agir",
    significado: "Um dia para tomar iniciativa. O que está parado pede movimento — o primeiro passo é hoje. A energia do dia 1 é de abertura: o que você começar agora tem força para ir longe.",
    esperar: "Oportunidades de começar, decidir, resolver algo que você vinha adiando. Conversas que destravam. Sensação de que é agora.",
    fazer: "Aja. Resolva. Dê o primeiro passo no que importa — mesmo pequeno. O dia 1 recompensa quem age primeiro.",
    evitar: "Empurrar com a barriga. O dia 1 não espera — quem hesita perde a janela. Mas cuidado com a pressa: começar não é atropelar.",
  },
  2: {
    titulo: "Dia de Escutar",
    significado: "Um dia para ouvir mais do que falar. Parcerias e conversas delicadas fluem melhor hoje. A energia do dia 2 é de bastidor: o que você faz agora não aparece, mas sustenta o que vem depois.",
    esperar: "Conversas importantes que exigem diplomacia. Notícias que pedem paciência. Encontros afetivos que fortalecem laços.",
    fazer: "Escute. Ceda. Harmonize. Invista nas relações que importam. O dia 2 recompensa quem sabe esperar e cooperar.",
    evitar: "Impaciência e pressa. O dia 2 não é tempo de atropelar — quem força perde o que estava sendo construído em silêncio.",
  },
  3: {
    titulo: "Dia de Expressar",
    significado: "Um dia para falar, criar e se mostrar. A comunicação está especialmente fluida. A energia do dia 3 é de visibilidade: o que você mostrar agora será visto, e o que você calar agora ficará para depois.",
    esperar: "Conversas leves, ideias criativas, contatos sociais. Convites de última hora. Sensação de que é um bom dia para aparecer.",
    fazer: "Fale. Crie. Se exponha. Marque encontros, publique, mostre seu trabalho. O dia 3 recompensa quem tem coragem de aparecer.",
    evitar: "Dispersão. O dia 3 traz muitas portas — se você abrir todas, não entra em nenhuma. Foque no que importa.",
  },
  4: {
    titulo: "Dia de Organizar",
    significado: "Um dia para arrumar o que está solto. Tarefas práticas fluem bem hoje. A energia do dia 4 é de base: o que você organizar agora vai sustentar os próximos dias.",
    esperar: "Pendências a resolver, rotina a ajustar, tarefas que pedem constância. Sensação de peso — mas também de solidez.",
    fazer: "Organize. Finalize. Resolva o prático. Coloque a casa em ordem, física e financeira. O dia 4 recompensa o esforço consistente.",
    evitar: "Fugir do essencial. O dia 4 não perdoa descuido — o que você não organizar hoje vai cobrar depois.",
  },
  5: {
    titulo: "Dia de Mudar",
    significado: "Um dia para aceitar o imprevisto. O que estava parado pode se movimentar de repente. A energia do dia 5 é de liberdade: o que estava preso começa a se soltar.",
    esperar: "Mudanças de planos, convites inesperados, oportunidades de movimento. Sensação de que a vida está em movimento.",
    fazer: "Adapte-se. Seja flexível. Aceite o que muda. O dia 5 recompensa quem se adapta.",
    evitar: "Resistir ao que muda. Quem trava no dia 5 perde o que a mudança traz. Mas cuidado: liberdade não é fuga.",
  },
  6: {
    titulo: "Dia de Cuidar",
    significado: "Um dia para focar em casa e nas pessoas que você ama. Harmonia afetiva pede atenção. A energia do dia 6 é de cuidado: o que você plantar agora em relações vai florescer depois.",
    esperar: "Assuntos de família, encontros afetuosos, cuidado com quem está perto. Conversas afetivas que precisam acontecer.",
    fazer: "Cuide. Escute. Harmonize. Resolva pendências afetivas. O dia 6 recompensa quem investe no afeto com maturidade.",
    evitar: "Se anular pelos outros. Cuidar não é se apagar — o dia 6 também pede cuidado com você.",
  },
  7: {
    titulo: "Dia de Silenciar",
    significado: "Um dia para se recolher. O que importa está dentro — não fora. A energia do dia 7 é de pausa: o que você descobrir agora vai orientar os próximos dias.",
    esperar: "Vontade de ficar só, reflexões, estudos, insights que chegam no silêncio. Sensação de que é um dia para dentro, não para fora.",
    fazer: "Estude. Reflita. Medite. Escute sua intuição. O dia 7 recompensa quem tem coragem de se olhar por dentro.",
    evitar: "Decisões impulsivas. O dia 7 não é tempo de agir sem pensar — é tempo de entender antes de agir.",
  },
  8: {
    titulo: "Dia de Resolver",
    significado: "Um dia para tratar de assuntos materiais e práticos. Dinheiro, negociações e decisões pedem firmeza. A energia do dia 8 é de colheita: o que você construiu nos últimos dias aparece agora.",
    esperar: "Oportunidades de resolver pendências práticas, negociações, decisões financeiras. Sensação de que é hora de colher.",
    fazer: "Resolva. Negocie. Seja firme e estratégico. O dia 8 recompensa quem age com maturidade.",
    evitar: "Arrogância e excesso de controle. O dia 8 pode te dar muito — mas também pode te tirar muito, se você não souber administrar.",
  },
  9: {
    titulo: "Dia de Entregar",
    significado: "Um dia para concluir, perdoar e soltar. O que não pertence ao dia de hoje pede encerramento. A energia do dia 9 é de limpeza: o que você não soltar agora vai te acompanhar por mais tempo.",
    esperar: "Conclusões, fins de ciclo, vontade de limpar e perdoar. Conversas que precisam de ponto final.",
    fazer: "Finalize. Solte. Perdoe. Limpe. O dia 9 recompensa quem tem coragem de fechar portas.",
    evitar: "Começar coisas novas hoje. O dia 9 pede encerramento — não abertura. O novo vem depois.",
  },
};
