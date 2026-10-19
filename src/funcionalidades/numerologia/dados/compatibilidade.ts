export type CategoriaCompat = "harmoniosa" | "neutra" | "desafiadora";

export interface CompatibilidadePar {
  categoria: CategoriaCompat;
  percentual: number;
  titulo: string;
  resumo: string;
  forcas: string[];
  atritos: string[];
  conselho: string;
}

const P = (
  categoria: CategoriaCompat,
  percentual: number,
  titulo: string,
  resumo: string,
  forcas: string[],
  atritos: string[],
  conselho: string
): CompatibilidadePar => ({ categoria, percentual, titulo, resumo, forcas, atritos, conselho });

export const TABELA_COMPATIBILIDADE: Record<string, CompatibilidadePar> = {
  // ─── 1 com 1 ───
  "1-1": P("harmoniosa", 78, "Dois Pioneiros",
    "Dois números 1 juntos formam uma parceria de muita energia, ambição e independência. Ambos gostam de liderar, decidir e seguir o próprio ritmo — o desafio é não transformar a relação numa disputa de ego.",
    ["Vocês se admiram pela força e pela determinação um do outro.", "Conseguem realizar projetos grandes juntos, porque ninguém desiste fácil.", "Há respeito mútuo pela autonomia de cada um."],
    ["Os dois querem mandar. Decisões simples podem virar embate.", "Falta de espaço para o outro ceder pode gerar mágoas acumuladas.", "A competição pode substituir a parceria se não houver consciência."],
    "Combinem papéis claros e revezem a liderança. Quem cede hoje não está perdendo — está construindo."),

  // ─── 1 com 2 ───
  "1-2": P("neutra", 65, "O Líder e o Parceiro",
    "O 1 é iniciativa e ação; o 2 é escuta e cooperação. Vocês se completam quando o 1 aprende a ouvir e o 2 aprende a se posicionar. Sem esse equilíbrio, o 1 atropela e o 2 se ressente.",
    ["O 2 traz sensibilidade e diplomacia que suavizam o ímpeto do 1.", "O 1 dá direção e coragem que o 2 às vezes não encontra sozinho.", "Juntos, formam uma dupla que age e cuida ao mesmo tempo."],
    ["O 1 pode ser autoritário sem perceber; o 2 pode se calar demais.", "O 2 espera reconhecimento que o 1 esquece de dar.", "Ritmos diferentes: o 1 quer resolver já, o 2 precisa de tempo."],
    "O 1 precisa perguntar mais antes de decidir. O 2 precisa dizer o que sente antes de acumular."),

  // ─── 1 com 3 ───
  "1-3": P("harmoniosa", 85, "Ação e Expressão",
    "O 1 é a pessoa que começa; o 3 é a que dá vida, cor e comunicação ao que foi começado. É uma combinação criativa e motivadora — um puxa o outro para frente.",
    ["O 1 admira a leveza e a criatividade do 3; o 3 admira a coragem do 1.", "Juntos, tiram ideias do papel com entusiasmo e visibilidade.", "A relação é animada, cheia de conversa, planos e movimento."],
    ["O 3 pode se dispersar; o 1 pode se impacientar com a falta de foco.", "O 1 às vezes fala mais duro do que o 3 gostaria de ouvir.", "O 3 pode sentir que o 1 só pensa em trabalho e metas."],
    "Deixem o 3 sonhar e o 1 executar — cada um no seu tempo. E reservem momentos de pura diversão, sem meta nenhuma."),

  // ─── 1 com 4 ───
  "1-4": P("desafiadora", 45, "Ímpeto vs. Estrutura",
    "O 1 quer liberdade e movimento; o 4 quer segurança e rotina. São ritmos opostos. Um acha o outro lento; o outro acha o primeiro imprudente. Exige muita conversa para funcionar.",
    ["O 4 dá base e estabilidade que o 1, no fundo, precisa.", "O 1 traz novidade e coragem que o 4 dificilmente teria sozinho.", "Quando se respeitam, formam uma dupla que sonha e realiza com pé no chão."],
    ["O 1 se sente podado; o 4 se sente desestabilizado.", "Discussões sobre planejamento, dinheiro e tempo são frequentes.", "O 1 pode achar o 4 rígido; o 4 pode achar o 1 irresponsável."],
    "Combinem regras claras e revisem juntos. O 1 precisa avisar antes de mudar planos; o 4 precisa abrir espaço para o inesperado."),

  // ─── 1 com 5 ───
  "1-5": P("harmoniosa", 85, "Dois Espíritos Livres",
    "O 1 é iniciativa; o 5 é liberdade. Juntos, formam uma dupla aventureira, ousada e cheia de movimento. Ninguém segura vocês — o risco é a falta de raízes.",
    ["Vocês se entendem na vontade de explorar, viajar e experimentar.", "Ninguém cobra do outro uma rotina que não quer.", "A relação é vibrante, cheia de novidade e estímulo."],
    ["Falta de constância: os dois podem fugir de compromissos mais profundos.", "Decisões impulsivas podem gerar consequências que ninguém quer assumir.", "Pode faltar aquele 'chão' que toda relação precisa em algum momento."],
    "Escolham juntos algumas âncoras — uma casa, um projeto, uma rotina — que não sejam negociáveis. Liberdade com raiz sustenta mais."),

  // ─── 1 com 6 ───
  "1-6": P("neutra", 60, "O Individualista e o Cuidador",
    "O 1 pensa em si e no próprio caminho; o 6 pensa na família, no outro, no lar. A relação funciona quando o 1 entende que cuidar também é força, e o 6 entende que o 1 precisa de espaço.",
    ["O 6 traz acolhimento, estabilidade emocional e senso de lar.", "O 1 traz direção, coragem e capacidade de resolver.", "Juntos, podem construir uma vida sólida e afetuosa."],
    ["O 1 pode se sentir cobrado demais; o 6 pode se sentir preterido.", "O 6 quer mais presença do que o 1 naturalmente oferece.", "O 1 pode magoar o 6 com franqueza excessiva."],
    "O 1 precisa demonstrar cuidado com atitudes pequenas e frequentes. O 6 precisa lembrar que o 1 demonstra amor também realizando."),

  // ─── 1 com 7 ───
  "1-7": P("neutra", 55, "Ação e Introspecção",
    "O 1 é exterior; o 7 é interior. Um quer fazer, o outro quer entender. A relação funciona quando cada um respeita o tempo do outro — e quando o 1 não força o 7 a se expor.",
    ["O 7 traz profundidade, sabedoria e calma que o 1 admira.", "O 1 traz empurrão e praticidade que o 7 às vezes precisa.", "Há respeito pela individualidade — ninguém tenta moldar o outro."],
    ["O 1 pode achar o 7 lento e distante; o 7 pode achar o 1 superficial.", "Falta de sintonia emocional em momentos de crise.", "O 7 precisa de silêncio onde o 1 quer conversa."],
    "O 1 deve aprender a esperar respostas; o 7 deve aprender a se abrir antes de se fechar. Silêncio demais esfria; pressa demais sufoca."),

  // ─── 1 com 8 ───
  "1-8": P("harmoniosa", 80, "Dois Realizadores",
    "O 1 é iniciativa; o 8 é poder de realização. Juntos, formam uma dupla forte, ambiciosa e capaz de construir coisas grandes. O risco é a relação virar sociedade e perder o afeto.",
    ["Há admiração mútua pela força, pela coragem e pela capacidade de realizar.", "Vocês se impulsionam para metas cada vez maiores.", "Ninguém precisa segurar o outro — ambos voam alto."],
    ["Pode faltar ternura e vulnerabilidade na relação.", "Discussões sobre controle e dinheiro podem aparecer.", "Os dois podem competir em vez de somar."],
    "Reservem tempo para o afeto puro, sem meta, sem produtividade. Amor não é projeto — precisa de espaço para ser só amor."),

  // ─── 1 com 9 ───
  "1-9": P("harmoniosa", 75, "Iniciativa e Propósito",
    "O 1 quer começar; o 9 quer servir. Juntos, formam uma dupla que age com propósito — o 1 puxa a execução, o 9 dá sentido ao que se faz.",
    ["O 9 traz visão ampla e compaixão; o 1 traz coragem de agir.", "Vocês se inspiram mutuamente a fazer algo que importa.", "Há generosidade e respeito na relação."],
    ["O 1 pode achar o 9 idealista demais; o 9 pode achar o 1 individualista.", "O 9 pode se doar demais e esquecer de si; o 1 pode não perceber.", "Diferença entre o prático (1) e o humanitário (9) pode gerar atrito."],
    "Alinhem o que querem construir juntos. Quando o propósito é comum, o 1 executa e o 9 cuida do sentido — é uma dupla poderosa."),

  // ─── 2 com 2 ───
  "2-2": P("harmoniosa", 85, "Dois Corações",
    "Dois números 2 formam uma relação de muita sensibilidade, escuta e cuidado. Vocês se entendem no olhar. O risco é a falta de iniciativa — ninguém quer decidir nada.",
    ["Há profunda sintonia emocional e empatia.", "Ninguém atropela o outro; há muito respeito.", "A relação é acolhedora, gentil e segura."],
    ["Falta de atitude: decisões práticas podem ficar pendentes.", "Excesso de sensibilidade pode gerar mágoas silenciosas.", "Os dois podem evitar conflito e acumular tensão."],
    "Combinem que um de vocês será o 'decididor' em situações do dia a dia. E criem o hábito de conversar sobre o que incomoda antes que vire bola de neve."),

  // ─── 2 com 3 ───
  "2-3": P("harmoniosa", 80, "Sensibilidade e Expressão",
    "O 2 sente; o 3 comunica. Juntos, formam uma dupla afetuosa, criativa e comunicativa. O 3 ajuda o 2 a se expressar; o 2 ajuda o 3 a sentir mais fundo.",
    ["O 3 traz alegria, comunicação e leveza para o 2.", "O 2 traz acolhimento e escuta para o 3.", "A relação é cheia de conversa, afeto e criatividade."],
    ["O 3 pode ser disperso e o 2 pode se sentir preterido.", "O 2 pode levar as coisas mais a sério do que o 3 quis dizer.", "O 3 pode evitar temas profundos que o 2 precisa conversar."],
    "O 2 precisa dizer o que sente sem rodeios. O 3 precisa ouvir com mais atenção, sem transformar tudo em piada."),

  // ─── 2 com 4 ───
  "2-4": P("harmoniosa", 80, "Cuidado e Estrutura",
    "O 2 cuida; o 4 constrói. Juntos, formam uma dupla sólida e estável — aquele tipo de casal que constrói uma vida com raízes, rotina e afeto. Combinação de longo prazo.",
    ["O 4 traz segurança e o 2 traz suavidade — um equilibra o outro.", "Vocês gostam de rotina, de lar, de estabilidade.", "A relação é duradoura e confiável."],
    ["Excesso de rotina pode gerar tédio.", "O 2 pode se anular para manter a harmonia; o 4 pode não perceber.", "Falta de novidade pode pesar com o tempo."],
    "De vez em quando, quebrem a rotina de propósito. Viagem, hobby novo, mudança pequena — o 4 precisa treinar a flexibilidade, o 2 precisa pedir o que quer."),

  // ─── 2 com 5 ───
  "2-5": P("neutra", 55, "O Estável e o Inquieto",
    "O 2 quer segurança; o 5 quer liberdade. A relação pode funcionar, mas exige que o 5 não fuja e o 2 não se agarre. É uma das combinações mais desafiadoras se não houver maturidade.",
    ["O 5 traz novidade, movimento e entusiasmo para o 2.", "O 2 traz raiz e cuidado que o 5, no fundo, precisa.", "Quando se entendem, é uma dupla que descobre o mundo com afeto."],
    ["O 5 pode se sentir sufocado; o 2 pode se sentir abandonado.", "Planos de longo prazo e liberdade são tensão constante.", "O 5 pode magoar o 2 com inconstância."],
    "O 5 precisa dar sinal de presença — não só liberdade. O 2 precisa aprender a ficar bem mesmo quando o 5 está longe. Sozinhos, ambos precisam se bastar."),

  // ─── 2 com 6 ───
  "2-6": P("harmoniosa", 90, "Dois Corações que Cuidam",
    "O 2 e o 6 são a combinação mais afetuosa da numerologia. Ambos valorizam o lar, o cuidado, a família e o amor. Vocês se entendem sem esforço — a relação flui.",
    ["Profunda sintonia emocional e cuidado mútuo.", "Vocês gostam das mesmas coisas: casa, família, afeto, rotina tranquila.", "Há generosidade e doação dos dois lados."],
    ["Podem se anular em nome do outro.", "Falta de limites pode gerar sobrecarga emocional.", "Podem evitar conversas difíceis para não gerar conflito."],
    "Cuidem de vocês dois com o mesmo carinho com que cuidam do outro. E não tenham medo de conversar sobre o que dói — silêncio também machuca."),

  // ─── 2 com 7 ───
  "2-7": P("neutra", 60, "O Afetivo e o Reservado",
    "O 2 quer proximidade; o 7 precisa de silêncio. A relação funciona quando o 2 entende que o silêncio do 7 não é rejeição, e o 7 entende que o 2 precisa de demonstrações concretas de afeto.",
    ["O 2 traz calor humano e cuidado para o 7.", "O 7 traz profundidade e calma para o 2.", "Há respeito pela individualidade quando ambos estão conscientes."],
    ["O 2 pode se sentir carente; o 7 pode se sentir invadido.", "O 7 precisa de solidão que o 2 interpreta como distância.", "Diálogo emocional pode ser difícil."],
    "O 7 precisa se abrir um pouco mais; o 2 precisa aprender a ficar bem com o silêncio do outro. Combinem espaços de presença e espaços de solidão sem culpa."),

  // ─── 2 com 8 ───
  "2-8": P("neutra", 60, "Afeto e Ambição",
    "O 2 é emoção; o 8 é realização. A relação pode ser muito fértil quando o 8 entende que o 2 precisa de afeto, e o 2 entende que o 8 demonstra amor realizando. Casal que pode construir muito junto.",
    ["O 8 traz segurança material e direção para o 2.", "O 2 traz suavidade e sensibilidade para o 8.", "Juntos, constroem uma vida sólida e afetuosa."],
    ["O 8 pode ser frio; o 2 pode se sentir desvalorizado.", "O 2 pode se anular em nome da relação.", "Ritmos diferentes: o 8 pensa em metas, o 2 pensa em pessoas."],
    "O 8 precisa reservar tempo para o afeto puro; o 2 precisa aprender a pedir o que precisa. Ambos precisam entender que amor e realização não são opostos."),

  // ─── 2 com 9 ───
  "2-9": P("harmoniosa", 85, "Cuidado e Compaixão",
    "O 2 cuida do próximo; o 9 cuida do mundo. Juntos, formam uma dupla generosa, empática e voltada ao outro. Combinação de muita sensibilidade e propósito.",
    ["Há sintonia no desejo de ajudar, acolher e fazer o bem.", "O 9 traz visão ampla; o 2 traz cuidado concreto.", "A relação é generosa, afetuosa e cheia de propósito."],
    ["Podem se anular pelos outros e esquecer de si.", "Excesso de idealismo pode gerar frustração.", "Falta de limites pode gerar sobrecarga emocional."],
    "Reservem tempo e energia para vocês dois. Cuidar do mundo é bonito — mas o mundo não é o casal. Cuidem primeiro de vocês."),

  // ─── 3 com 3 ───
  "3-3": P("harmoniosa", 80, "Dois Comunicadores",
    "Dois números 3 formam uma relação vibrante, criativa, cheia de conversa e movimento. Nunca falta assunto — mas pode faltar profundidade. Combinação animada e desafiadora.",
    ["Há muita sintonia na comunicação, na criatividade e na alegria.", "A relação é leve, animada e cheia de planos.", "Os dois se divertem muito juntos."],
    ["Falta de profundidade emocional — tudo vira piada.", "Ninguém quer assumir responsabilidades mais sérias.", "Excesso de dispersão pode gerar instabilidade financeira."],
    "Reservem momentos de silêncio e conversa séria, sem piada. O 3 precisa aprender a ficar com o desconforto — e não fugir dele com humor."),

  // ─── 3 com 4 ───
  "3-4": P("neutra", 60, "Leveza e Solidez",
    "O 3 é criatividade; o 4 é estrutura. A relação funciona quando o 3 aceita regras e o 4 aceita o imprevisto. Um dá cor, o outro dá chão.",
    ["O 4 traz estabilidade e o 3 traz alegria — combinação que pode equilibrar.", "O 4 organiza o que o 3 inventa.", "A relação pode ser criativa e segura ao mesmo tempo."],
    ["O 3 pode se sentir podado; o 4 pode se sentir desorganizado.", "Ritmos muito diferentes — o 3 quer brincar, o 4 quer planejar.", "O 3 pode achar o 4 chato; o 4 pode achar o 3 irresponsável."],
    "O 4 precisa deixar espaço para o improviso; o 3 precisa cumprir o que promete. Combinem regras flexíveis — nem rigidez, nem caos."),

  // ─── 3 com 5 ───
  "3-5": P("harmoniosa", 85, "Dois Aventureiros",
    "O 3 e o 5 são a combinação da liberdade e da expressão. Juntos, formam uma dupla animada, criativa e inquieta. Ninguém segura vocês — o desafio é criar raízes.",
    ["Muita sintonia na aventura, na novidade e na comunicação.", "Vocês se divertem, viajam, criam e se reinventam juntos.", "Ninguém cobra rotina do outro."],
    ["Falta de constância e de compromisso profundo.", "Decisões impulsivas podem gerar consequências.", "Fuga de conversas difíceis em nome da leveza."],
    "Reservem um projeto sério em comum — algo que exija tempo, constância e compromisso. Liberdade sem propósito vira fuga."),

  // ─── 3 com 6 ───
  "3-6": P("harmoniosa", 80, "Criatividade e Cuidado",
    "O 3 traz alegria; o 6 traz afeto. Juntos, formam uma dupla criativa e acolhedora. O lar vira palco de arte, conversa e afeto. Combinação muito fértil.",
    ["O 6 traz acolhimento; o 3 traz leveza.", "A relação é afetuosa, criativa e cheia de vida.", "Juntos, criam um ambiente acolhedor e estimulante."],
    ["O 3 pode se dispersar; o 6 pode cobrar presença.", "O 3 pode magoar o 6 com franqueza excessiva.", "O 6 pode se anular para manter a harmonia."],
    "O 3 precisa demonstrar cuidado concreto; o 6 precisa deixar o 3 brilhar sem cobrar presença o tempo todo. Equilíbrio entre afeto e liberdade."),

  // ─── 3 com 7 ───
  "3-7": P("neutra", 60, "Expressão e Introspecção",
    "O 3 quer conversa; o 7 quer silêncio. A relação exige respeito ao tempo do outro — o 3 pode achar o 7 frio; o 7 pode achar o 3 superficial. Mas há muito a aprender.",
    ["O 7 traz profundidade que o 3 precisa; o 3 traz leveza que o 7 admira.", "Há aprendizado mútuo — o 3 aprende a calar; o 7 aprende a falar.", "Quando há respeito, a relação é rica em descobertas."],
    ["O 3 pode se sentir rejeitado; o 7 pode se sentir invadido.", "Comunicação emocional é desafiadora.", "Ritmos opostos podem gerar cansaço."],
    "O 3 precisa aprender a ficar em silêncio sem se sentir rejeitado. O 7 precisa aprender a se abrir sem se sentir invadido. Combinem tempos de presença e tempos de solidão."),

  // ─── 3 com 8 ───
  "3-8": P("neutra", 60, "Criatividade e Ambição",
    "O 3 é expressão; o 8 é realização. A relação funciona quando o 8 entende que a criatividade do 3 também é produtiva, e o 3 entende que o 8 precisa de foco. Combinação fértil se houver respeito.",
    ["O 8 traz direção e realização; o 3 traz criatividade e comunicação.", "Juntos, podem criar projetos visíveis e bem-sucedidos.", "Há admiração mútua quando cada um respeita o ritmo do outro."],
    ["O 8 pode achar o 3 disperso; o 3 pode achar o 8 frio.", "Foco e leveza são tensão constante.", "O 3 pode se sentir cobrado; o 8 pode se sentir sozinho na execução."],
    "O 8 precisa dar espaço para a criatividade do 3; o 3 precisa entregar o que promete. Combinem metas claras mas com margem para o improviso."),

  // ─── 3 com 9 ───
  "3-9": P("harmoniosa", 85, "Expressão e Propósito",
    "O 3 quer brilhar; o 9 quer servir. Juntos, formam uma dupla criativa, generosa e inspiradora. O 3 traz a arte; o 9 traz o sentido. Combinação de muita beleza.",
    ["O 3 traz criatividade; o 9 traz propósito.", "Juntos, podem criar algo com impacto social e beleza.", "A relação é generosa, inspiradora e cheia de arte."],
    ["O 3 pode se dispersar; o 9 pode se doar demais.", "Falta de limites emocionais pode gerar sobrecarga.", "O 3 pode se sentir cobrado a ter propósito; o 9 pode se sentir cobrado a ter leveza."],
    "Unam o que cada um tem de melhor: o 3 cria, o 9 dá sentido. Reservem tempo para a alegria pura — sem missão, sem causa."),

  // ─── 4 com 4 ───
  "4-4": P("harmoniosa", 80, "Dois Construtores",
    "Dois números 4 formam uma relação sólida, estável e confiável. Vocês gostam de rotina, de planejamento, de construir. O desafio é não virar uma relação sem graça.",
    ["Há muita confiança, estabilidade e segurança.", "Vocês constroem juntos com paciência e método.", "Ninguém precisa cobrar compromisso — ele já existe."],
    ["Falta de novidade e de leveza.", "Rigidez excessiva pode sufocar.", "Os dois podem evitar conversas emocionais difíceis."],
    "Reservem tempo para a diversão e para o imprevisto. O 4 precisa treinar a flexibilidade; os dois precisam conversar sobre o que sentem, não só sobre o que fazem."),

  // ─── 4 com 5 ───
  "4-5": P("desafiadora", 45, "Estrutura vs. Liberdade",
    "O 4 é segurança; o 5 é movimento. Um quer raiz; o outro quer asas. É uma das combinações mais desafiadoras — exige muita conversa, concessão e maturidade dos dois lados.",
    ["O 4 traz estabilidade que o 5 precisa, mesmo sem saber.", "O 5 traz novidade que o 4 precisa, mesmo sem querer.", "Quando se entendem, a relação é cheia de descobertas."],
    ["O 5 se sente preso; o 4 se sente desestabilizado.", "Planos e rotina são tensão constante.", "O 5 pode fugir; o 4 pode se agarrar."],
    "O 5 precisa dar sinal de presença concreta; o 4 precisa abrir espaço para a mudança. Combinem o que é fixo e o que é flexível — sem isso, não funciona."),

  // ─── 4 com 6 ───
  "4-6": P("harmoniosa", 80, "Estrutura e Cuidado",
    "O 4 constrói; o 6 cuida. Juntos, formam uma relação sólida, afetuosa e duradoura — o tipo de casal que constrói família, lar e raízes. Combinação de longo prazo.",
    ["Há estabilidade e afeto na mesma medida.", "Vocês gostam das mesmas coisas: casa, rotina, família.", "A relação é confiável e acolhedora."],
    ["Excesso de rotina pode gerar tédio.", "O 6 pode se doar demais; o 4 pode não perceber.", "Falta de novidade pode pesar."],
    "Reservem momentos de novidade sem quebrar a base. O 6 precisa pedir mais; o 4 precisa perceber mais. E cuidem para não virar 'só rotina'."),

  // ─── 4 com 7 ───
  "4-7": P("neutra", 65, "Método e Introspecção",
    "O 4 é ação prática; o 7 é reflexão. A relação funciona quando o 4 entende o silêncio do 7, e o 7 entende a necessidade de concretude do 4. Combinação que exige paciência.",
    ["O 7 traz profundidade; o 4 traz praticidade.", "Juntos, podem unir o pensar e o fazer.", "Há respeito pela individualidade quando conscientes."],
    ["O 4 pode achar o 7 lento; o 7 pode achar o 4 superficial.", "Comunicação emocional é difícil.", "Ritmos diferentes podem gerar afastamento."],
    "O 4 precisa dar tempo ao 7; o 7 precisa trazer à tona o que sente. Combinem momentos de conversa e momentos de silêncio — sem cobrança."),

  // ─── 4 com 8 ───
  "4-8": P("harmoniosa", 85, "Dois Realizadores",
    "O 4 e o 8 são a combinação da realização prática. Ambos valorizam trabalho, disciplina, segurança e conquistas concretas. Juntos, constroem patrimônio e estabilidade — mas podem esquecer do afeto.",
    ["Há alinhamento total em metas, ambição e trabalho.", "Vocês constroem juntos de forma sólida e duradoura.", "Há admiração pela força e pela disciplina do outro."],
    ["Falta de ternura e vulnerabilidade.", "Excesso de foco em produtividade pode esfriar o afeto.", "Discussões sobre dinheiro podem aparecer."],
    "Reservem tempo para o afeto puro, sem meta. O amor não é projeto — precisa de espaço para ser só amor. E cuidem para não virar sociedade."),

  // ─── 4 com 9 ───
  "4-9": P("neutra", 60, "Estrutura e Propósito",
    "O 4 constrói; o 9 serve. A relação funciona quando o 4 entende que o 9 também precisa de ideal, e o 9 entende que o 4 também precisa de chão. Combinação desafiadora mas fértil.",
    ["O 4 traz chão; o 9 traz propósito.", "Juntos, podem construir algo com impacto real.", "Há aprendizado mútuo."],
    ["O 4 pode achar o 9 idealista demais; o 9 pode achar o 4 materialista.", "Ritmos diferentes — o 4 quer planejar, o 9 quer sentir.", "Podem divergir sobre dinheiro e doação."],
    "O 4 precisa abrir espaço para o ideal do 9; o 9 precisa trazer o ideal para a prática. Combinem metas concretas e causas que importam."),

  // ─── 5 com 5 ───
  "5-5": P("harmoniosa", 80, "Dois Espíritos Livres",
    "Dois números 5 formam uma relação vibrante, aventureira e cheia de movimento. Vocês se entendem na liberdade — mas podem ter dificuldade de criar raízes.",
    ["Há muita sintonia na aventura, na novidade e na liberdade.", "Ninguém cobra rotina do outro.", "A relação é vibrante e estimulante."],
    ["Falta de constância e de compromisso profundo.", "Fuga de conversas difíceis em nome da leveza.", "Decisões impulsivas podem gerar consequências."],
    "Escolham juntos algumas âncoras — um projeto, uma casa, uma causa. Liberdade sem propósito vira fuga. E conversem sobre o que dói."),

  // ─── 5 com 6 ───
  "5-6": P("desafiadora", 45, "Liberdade vs. Cuidado",
    "O 5 quer liberdade; o 6 quer lar. A relação exige muita concessão dos dois lados. Um se sente preso; o outro se sente abandonado. Combinação difícil, mas não impossível.",
    ["O 6 traz acolhimento e estabilidade que o 5, no fundo, precisa.", "O 5 traz novidade que o 6 precisa.", "Quando se entendem, a relação é rica."],
    ["O 5 se sente preso; o 6 se sente abandonado.", "Ritmos muito opostos — liberdade vs. lar.", "O 5 pode fugir; o 6 pode se agarrar."],
    "O 5 precisa dar sinal de presença concreta; o 6 precisa abrir espaço para a liberdade. Sem esse equilíbrio, é difícil."),

  // ─── 5 com 7 ───
  "5-7": P("harmoniosa", 80, "Liberdade e Profundidade",
    "O 5 quer experimentar; o 7 quer entender. Juntos, formam uma relação que explora o mundo e o interior — combinação rica em descobertas. Mas exige espaço.",
    ["O 5 traz movimento; o 7 traz profundidade.", "Juntos, exploram tanto o mundo quanto o interior.", "Ninguém cobra rotina do outro."],
    ["Falta de chão — os dois podem evitar compromisso.", "Fuga de temas práticos em nome da liberdade.", "Pode faltar consistência no dia a dia."],
    "Reservem projetos concretos em comum — algo que exija tempo. Liberdade e profundidade precisam de chão para não virarem fuga."),

  // ─── 5 com 8 ───
  "5-8": P("neutra", 60, "Liberdade e Ambição",
    "O 5 quer liberdade; o 8 quer realização. A relação funciona quando o 8 entende que a liberdade do 5 é parte do que o atrai, e o 5 entende que a ambição do 8 não é prisão.",
    ["O 8 traz direção; o 5 traz movimento.", "Juntos, podem ter sucesso e diversão.", "Há admiração mútua quando conscientes."],
    ["O 5 pode se sentir preso; o 8 pode achar o 5 disperso.", "Ritmos diferentes — liberdade vs. meta.", "Discussões sobre dinheiro e tempo podem aparecer."],
    "O 8 precisa dar espaço para a liberdade do 5; o 5 precisa entregar o que promete. Combinem metas claras e momentos de pura liberdade."),

  // ─── 5 com 9 ───
  "5-9": P("harmoniosa", 80, "Liberdade e Propósito",
    "O 5 quer experimentar; o 9 quer servir. Juntos, formam uma relação aventureira e generosa — combinação de muita descoberta e propósito.",
    ["O 5 traz aventura; o 9 traz propósito.", "Juntos, podem viajar, descobrir e ajudar.", "A relação é rica em experiências."],
    ["Falta de chão e de constância.", "Excesso de idealismo pode gerar frustração.", "O 5 pode fugir; o 9 pode se doar demais."],
    "Unam o que cada um tem de melhor: o 5 explora, o 9 dá sentido. Reservem projetos concretos em comum — sem eles, a relação flutua."),

  // ─── 6 com 6 ───
  "6-6": P("harmoniosa", 85, "Dois Corações que Cuidam",
    "Dois números 6 formam uma relação muito afetuosa, acolhedora e voltada para o lar. Vocês se entendem no cuidado. O desafio é não se anularem um pelo outro.",
    ["Profunda sintonia no cuidado, no lar e na família.", "Há generosidade e doação mútua.", "A relação é acolhedora e afetuosa."],
    ["Podem se anular em nome do outro.", "Falta de limites pode gerar sobrecarga emocional.", "Podem evitar conversas difíceis para não gerar conflito."],
    "Cuidem de vocês com o mesmo carinho com que cuidam do outro. E não tenham medo de conversar sobre o que dói — silêncio também machuca."),

  // ─── 6 com 7 ───
  "6-7": P("neutra", 60, "Cuidado e Introspecção",
    "O 6 quer proximidade; o 7 precisa de silêncio. A relação exige que o 6 entenda que o silêncio do 7 não é rejeição, e o 7 entenda que o 6 precisa de demonstrações concretas.",
    ["O 6 traz acolhimento; o 7 traz profundidade.", "Juntos, podem construir uma relação profunda e afetuosa.", "Há aprendizado mútuo quando conscientes."],
    ["O 6 pode se sentir preterido; o 7 pode se sentir invadido.", "Ritmos diferentes — proximidade vs. solidão.", "Comunicação emocional é desafiadora."],
    "O 7 precisa se abrir; o 6 precisa aprender a ficar bem com o silêncio do outro. Combinem espaços de presença e solidão sem culpa."),

  // ─── 6 com 8 ───
  "6-8": P("neutra", 65, "Afeto e Ambição",
    "O 6 cuida; o 8 realiza. A relação funciona quando o 8 entende que o 6 precisa de afeto, e o 6 entende que o 8 demonstra amor realizando. Combinação fértil.",
    ["O 8 traz segurança material; o 6 traz acolhimento.", "Juntos, constroem uma vida sólida e afetuosa.", "Há complementaridade clara."],
    ["O 8 pode ser frio; o 6 pode se sentir desvalorizado.", "Ritmos diferentes — afeto vs. meta.", "Discussões sobre dinheiro podem aparecer."],
    "O 8 precisa reservar tempo para o afeto; o 6 precisa aprender a pedir. E cuidem para não transformar a relação em empresa."),

  // ─── 6 com 9 ───
  "6-9": P("harmoniosa", 90, "Cuidado e Compaixão",
    "O 6 cuida do próximo; o 9 cuida do mundo. Juntos, formam uma dupla generosa, empática e voltada ao outro. Combinação de muita sensibilidade e propósito.",
    ["Há sintonia no desejo de ajudar, acolher e fazer o bem.", "O 9 traz visão ampla; o 6 traz cuidado concreto.", "A relação é generosa, afetuosa e cheia de propósito."],
    ["Podem se anular pelos outros e esquecer de si.", "Excesso de idealismo pode gerar frustração.", "Falta de limites pode gerar sobrecarga."],
    "Reservem tempo e energia para vocês dois. Cuidar do mundo é bonito — mas o mundo não é o casal. Cuidem primeiro de vocês."),

  // ─── 7 com 7 ───
  "7-7": P("harmoniosa", 85, "Duas Almas Profundas",
    "Dois números 7 formam uma relação profunda, introspectiva e espiritualmente rica. Vocês se entendem no silêncio. O desafio é não se isolarem do mundo.",
    ["Profunda sintonia espiritual e intelectual.", "Há respeito total pelo silêncio e pelo espaço do outro.", "A relação é íntima, profunda e verdadeira."],
    ["Tendência ao isolamento — os dois podem se fechar para o mundo.", "Falta de comunicação prática pode gerar problemas concretos.", "Excesso de introspecção pode esfriar o afeto."],
    "Reservem tempo para o mundo — amigos, família, atividades práticas. E conversem sobre o que sentem, não só sobre o que pensam. Intimidade também precisa de palavra."),

  // ─── 7 com 8 ───
  "7-8": P("neutra", 60, "Profundidade e Realização",
    "O 7 é reflexão; o 8 é ação. A relação exige respeito pelo tempo do outro — o 7 pode achar o 8 superficial; o 8 pode achar o 7 lento. Mas há muito a aprender.",
    ["O 7 traz profundidade; o 8 traz direção.", "Juntos, podem unir visão e execução.", "Há complementaridade clara quando conscientes."],
    ["O 7 pode achar o 8 frio; o 8 pode achar o 7 abstrato.", "Ritmos muito diferentes — reflexão vs. ação.", "Comunicação emocional é desafiadora."],
    "O 8 precisa dar tempo ao 7; o 7 precisa trazer à tona o que pensa. Combinem metas concretas e momentos de reflexão."),

  // ─── 7 com 9 ───
  "7-9": P("harmoniosa", 80, "Profundidade e Propósito",
    "O 7 busca a verdade; o 9 busca o sentido. Juntos, formam uma relação profunda, espiritual e generosa. Combinação de muita riqueza interior.",
    ["Há sintonia no desejo de entender e servir.", "O 7 traz profundidade; o 9 traz propósito.", "A relação é espiritualmente rica e generosa."],
    ["Excesso de idealismo pode gerar frustração.", "Fuga do concreto em nome do abstrato.", "Os dois podem se doar demais."],
    "Reservem tempo para o prático e o concreto. O mundo interior é rico — mas a relação também precisa de chão. Cuidem dos detalhes do dia a dia."),

  // ─── 8 com 8 ───
  "8-8": P("harmoniosa", 80, "Dois Realizadores",
    "Dois números 8 formam uma relação de poder, ambição e realização. Vocês se admiram pela força. O desafio é não transformar a relação numa competição de ego.",
    ["Há admiração mútua pela força e pela capacidade de realização.", "Juntos, podem construir impérios.", "Ninguém segura o outro — ambos voam alto."],
    ["Pode faltar ternura e vulnerabilidade.", "Discussões sobre controle e dinheiro podem aparecer.", "Os dois podem competir em vez de somar."],
    "Reservem tempo para o afeto puro, sem meta. O amor não é projeto — precisa de espaço para ser só amor. E revezem o controle."),

  // ─── 8 com 9 ───
  "8-9": P("neutra", 65, "Realização e Propósito",
    "O 8 realiza; o 9 serve. A relação funciona quando o 8 entende que o 9 também precisa de ideal, e o 9 entende que o 8 também precisa de realização. Combinação fértil.",
    ["O 8 traz direção; o 9 traz propósito.", "Juntos, podem criar algo com impacto real.", "Há complementaridade clara."],
    ["O 8 pode achar o 9 idealista demais; o 9 pode achar o 8 materialista.", "Ritmos diferentes — meta vs. causa.", "Discussões sobre dinheiro e doação podem aparecer."],
    "O 8 precisa abrir espaço para o ideal do 9; o 9 precisa trazer o ideal para a prática. Combinem metas concretas e causas que importam."),

  // ─── 9 com 9 ───
  "9-9": P("harmoniosa", 85, "Duas Almas Generosas",
    "Dois números 9 formam uma relação generosa, compassiva e cheia de propósito. Vocês se entendem no desejo de ajudar o mundo. O desafio é não se anularem pelos outros.",
    ["Há profunda sintonia no desejo de servir e ajudar.", "A relação é generosa, acolhedora e cheia de propósito.", "Há compreensão mútua do mundo."],
    ["Podem se anular pelos outros e esquecer de si.", "Excesso de idealismo pode gerar frustração.", "Falta de limites emocionais."],
    "Reservem tempo para vocês dois. Cuidar do mundo é bonito — mas o mundo não é o casal. Cuidem primeiro de vocês, com o mesmo carinho que dão aos outros."),
};
