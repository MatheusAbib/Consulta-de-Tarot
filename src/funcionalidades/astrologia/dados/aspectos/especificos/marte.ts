import type { TextoAspecto } from "../tipos";

export const MARTE: Record<string, TextoAspecto> = {
  // ── Marte + Júpiter ──
  "conjuncao-Marte-Jupiter": {
    descricao: "Sua ação e sua fé estão fundidas. Você age com entusiasmo e coragem — a energia é expansiva e generosa. Isso te dá iniciativa e ousadia, mas pode gerar exagero, riscos desnecessários e dispersão.",
    funciona: "Entusiasmo e coragem — você age com fé e generosidade.",
    vigiar: "Exagerar nos riscos; prometer demais; dispersar energia em muitos projetos.",
    conselho: "Sua energia é grande. Mas escolha algumas batalhas — a coragem sem foco se perde.",
  },
  "sextil-Marte-Jupiter": {
    descricao: "Sua ação e sua fé se apoiam com leveza. Você age com otimismo e coragem — a energia flui sem drama. Há uma iniciativa natural que inspira quem está perto.",
    funciona: "Iniciativa natural — você age com fé sem exagero.",
    vigiar: "Acomodar-se e não usar a energia; evitar riscos necessários.",
    conselho: "Use essa força para começar o que você vem adiando. A coragem está disponível.",
  },
  "quadratura-Marte-Jupiter": {
    descricao: "Sua ação e sua fé entram em atrito. Você pode oscilar entre agir demais e não agir, ou correr riscos sem pensar. Há uma tensão entre a coragem e a prudência.",
    funciona: "Você tem coragem de ousar — a tensão te move.",
    vigiar: "Riscos desnecessários; impulsividade; exagero na ação.",
    conselho: "A quadratura vira força quando você alinha coragem e método. Nem tudo precisa ser agora — o passo certo transforma.",
  },
  "trigono-Marte-Jupiter": {
    descricao: "Sua ação e sua fé fluem com naturalidade. Você age com coragem e otimismo, sem exagero. Há uma iniciativa natural que contagia quem está perto.",
    funciona: "Coragem e otimismo — você age com confiança e propósito.",
    vigiar: "Achar que a coragem é óbvia; impaciência com quem hesita.",
    conselho: "Seu dom é inspirar. Use-o para levantar quem está caído — a coragem também protege.",
  },
  "oposicao-Marte-Jupiter": {
    descricao: "Sua ação e sua fé estão em lados opostos. Você pode oscilar entre agir e acreditar, ou projetar no outro a coragem que não assume. Pode haver uma sensação de que o mundo está sempre te desafiando a agir.",
    funciona: "Você enxerga as injustiças com clareza — sabe onde é preciso agir.",
    vigiar: "Projetar no outro a luta; viver relações de conflito.",
    conselho: "A integração pede que você reconheça sua força. Não projete no outro a batalha que é sua.",
  },

  // ── Marte + Saturno ──
  "conjuncao-Marte-Saturno": {
    descricao: "Sua ação e o limite estão fundidos. Você age com disciplina e responsabilidade — a energia é estruturada. Isso te dá constância e força, mas pode gerar travamento, medo de agir ou força excessiva até quebrar.",
    funciona: "Disciplina e constância — você constrói com força e método.",
    vigiar: "Travar diante do esforço; medo de agir; forçar demais até quebrar.",
    conselho: "Sua disciplina é um dom. Mas a força precisa de pausa — nem tudo é sobre empurrar.",
  },
  "sextil-Marte-Saturno": {
    descricao: "Sua ação e o limite se apoiam com leveza. Você age com disciplina sem travar. Há uma constância natural que te faz construir com paciência.",
    funciona: "Constância natural — você age com disciplina e equilíbrio.",
    vigiar: "Acomodar-se no que já funciona e evitar riscos necessários.",
    conselho: "Use essa disciplina para construir algo que te orgulhe. Você tem base — agora escolha o que erguer.",
  },
  "quadratura-Marte-Saturno": {
    descricao: "Sua ação e o limite entram em atrito. Você pode travar diante do esforço, ou forçar demais até quebrar. Há uma tensão entre a vontade de agir e o medo de errar.",
    funciona: "Você tem força e disciplina — não desiste fácil.",
    vigiar: "Travar diante do esforço; medo de falhar; forçar demais até quebrar.",
    conselho: "A quadratura vira força quando você aprende a agir com paciência. Nem tudo precisa ser agora — o passo certo transforma.",
  },
  "trigono-Marte-Saturno": {
    descricao: "Sua ação e o limite fluem com naturalidade. Você age com disciplina, constância e coragem — há uma força natural que constrói com paciência.",
    funciona: "Força e disciplina naturais — você constrói com constância.",
    vigiar: "Rigidez em excesso; esquecer de descansar.",
    conselho: "Seu dom é construir. Use-o para erguer algo duradouro — mas permita-se descansar.",
  },
  "oposicao-Marte-Saturno": {
    descricao: "Sua ação e o limite estão em lados opostos. Você pode oscilar entre agir e travar, ou projetar no outro a autoridade que não assume. Pode haver uma sensação de que o mundo te cobra força o tempo todo.",
    funciona: "Você enxerga os limites da ação com clareza — sabe onde é preciso parar.",
    vigiar: "Projetar no outro a dureza; viver relações onde um age e o outro controla.",
    conselho: "A integração pede que você reconheça seus próprios limites. Não projete no outro a dureza que você não quer admitir.",
  },

  // ── Marte + Urano ──
  "conjuncao-Marte-Urano": {
    descricao: "Sua ação e a liberdade estão fundidas. Você age com originalidade e ousadia — a energia é imprevisível e inovadora. Isso te dá coragem para romper, mas pode gerar impulsividade, explosões e quebra de regras.",
    funciona: "Coragem para romper — você age onde ninguém ousa.",
    vigiar: "Impulsividade; explosões; quebrar regras sem pensar.",
    conselho: "Sua ousadia é um dom. Mas a liberdade precisa de direção — nem tudo precisa ser quebrado.",
  },
  "sextil-Marte-Urano": {
    descricao: "Sua ação e a liberdade se apoiam com leveza. Você age com originalidade sem ser caótico. Há uma autenticidade natural na ação.",
    funciona: "Ação original e equilibrada — você inova sem quebrar tudo.",
    vigiar: "Acomodar-se numa versão aceitável de si; evitar mudanças.",
    conselho: "Use essa originalidade para inovar onde ninguém teve coragem de tentar.",
  },
  "quadratura-Marte-Urano": {
    descricao: "Sua ação e a liberdade entram em atrito. Você pode oscilar entre agir e explodir, ou quebrar regras sem pensar. Há uma tensão entre a vontade de agir e o desejo de liberdade.",
    funciona: "Você tem coragem de romper — a tensão te move.",
    vigiar: "Explosões; quebra de regras por impulso; impaciência.",
    conselho: "A quadratura vira força quando você escolhe o que vale romper. Nem tudo precisa ser quebrado — algumas coisas precisam ser construídas.",
  },
  "trigono-Marte-Urano": {
    descricao: "Sua ação e a liberdade fluem com naturalidade. Você age com originalidade sem explosão, autêntico sem quebrar tudo. Há uma coragem natural para inovar.",
    funciona: "Coragem original — você age onde ninguém ousa.",
    vigiar: "Achar que todos deveriam ser ousados; impaciência com quem hesita.",
    conselho: "Sua originalidade é um dom. Use-a para inspirar — o mundo precisa da sua coragem.",
  },
  "oposicao-Marte-Urano": {
    descricao: "Sua ação e a liberdade estão em lados opostos. Você pode oscilar entre agir e fugir, ou projetar no outro a ousadia que não assume. Pode haver uma busca constante por liberdade e ação ao mesmo tempo.",
    funciona: "Você enxerga as contradições da ação com clareza — não se engana fácil.",
    vigiar: "Projetar no outro a culpa pela sua prisão; oscilar entre ação e fuga.",
    conselho: "A integração pede que você assuma sua liberdade. Ninguém te prende — você pode ter escolhido ficar.",
  },

  // ── Marte + Netuno ──
  "conjuncao-Marte-Netuno": {
    descricao: "Sua ação e a fantasia estão fundidas. Você age com inspiração e idealismo — a energia é guiada por um sonho. Isso te dá força para causas, mas pode gerar confusão sobre o que quer e fuga da realidade.",
    funciona: "Ação inspirada — você luta pelo que sonha.",
    vigiar: "Agir sem saber por quê; fugir da realidade; iludir-se sobre o que quer.",
    conselho: "Sua inspiração é um dom. Mas o sonho precisa de chão — sem raiz, a ação vira fuga.",
  },
  "sextil-Marte-Netuno": {
    descricao: "Sua ação e a fantasia se apoiam com leveza. Você age com inspiração sem confusão. Há uma intuição natural que guia a ação.",
    funciona: "Ação intuitiva — você sente o que precisa ser feito.",
    vigiar: "Evitar a realidade em nome do sonho; anular-se pelos outros.",
    conselho: "Sua intuição é um talento. Use-a para criar beleza e agir com propósito.",
  },
  "quadratura-Marte-Netuno": {
    descricao: "Sua ação e a fantasia entram em atrito. Você pode oscilar entre agir e se perder em idealizações. Há uma tensão entre a realidade e o sonho na ação.",
    funciona: "Você age com profundidade — e essa visão move o mundo.",
    vigiar: "Agir sem saber por quê; fugir da realidade; iludir-se.",
    conselho: "A quadratura vira força quando você traz o sonho para o concreto. Não desista da visão — mas dê passos reais.",
  },
  "trigono-Marte-Netuno": {
    descricao: "Sua ação e a fantasia fluem com naturalidade. Você age com inspiração sem se perder. Há uma conexão natural com o invisível na ação.",
    funciona: "Ação inspirada — você luta pelo que sente.",
    vigiar: "Acomodar-se no sonho e não agir; fugir do concreto.",
    conselho: "Seu dom é a conexão com o invisível. Traga-a para o mundo — a ação inspirada transforma.",
  },
  "oposicao-Marte-Netuno": {
    descricao: "Sua ação e a fantasia estão em lados opostos. Você pode oscilar entre agir e fugir, ou projetar no outro o ideal que não consegue viver. Pode haver uma busca constante por algo que nem você sabe o que é.",
    funciona: "Você sente o que está por trás das ações — vê além do óbvio.",
    vigiar: "Projetar no outro o ideal; agir sem saber por quê.",
    conselho: "A integração pede que você reconheça a diferença entre o que sonha e o que vive. O ideal pode inspirar — mas não pode substituir o real.",
  },

  // ── Marte + Plutão ──
  "conjuncao-Marte-Plutao": {
    descricao: "Sua ação e o poder estão fundidos. Você age com intensidade profunda — a energia é transformadora e magnética. Isso te dá força e determinação, mas pode gerar obsessão, controle e uso da força para dominar.",
    funciona: "Força e determinação — você age com intensidade transformadora.",
    vigiar: "Obsessão, controle, manipulação; medo de perder o poder.",
    conselho: "Sua força é um dom. Mas poder sem consciência vira prisão — use sua intensidade para construir, não para controlar.",
  },
  "sextil-Marte-Plutao": {
    descricao: "Sua ação e o poder se apoiam com leveza. Você age com força sem obsessão, e tem determinação sem drama. Há uma capacidade natural de transformar sem destruir.",
    funciona: "Força equilibrada — você transforma sem destruir.",
    vigiar: "Acomodar-se no que já funciona e evitar transformações necessárias.",
    conselho: "Use essa força para se reinventar e inspirar. Você tem poder — escolha bem onde aplicá-lo.",
  },
  "quadratura-Marte-Plutao": {
    descricao: "Sua ação e o poder entram em atrito. Você pode sentir uma tensão entre o que quer e o controle que exerce, ou ter medo de perder o poder. Há uma intensidade interna que pode se manifestar como obsessão ou controle.",
    funciona: "Você tem uma força interna que poucos têm — e sabe usá-la quando escolhe.",
    vigiar: "Controlar pessoas e situações; medo de perder o controle; obsessões.",
    conselho: "A quadratura vira força quando você aprende a soltar. Nem tudo precisa estar sob seu controle — a ação flui melhor quando você confia.",
  },
  "trigono-Marte-Plutao": {
    descricao: "Sua ação e o poder fluem com naturalidade. Você age com força sem obsessão e tem determinação sem drama. Há uma capacidade natural de transformar com suavidade.",
    funciona: "Poder natural que não precisa se impor — as pessoas seguem sem que você peça.",
    vigiar: "Achar que a força é óbvia; não se esforçar para transformar o que precisa ser mudado.",
    conselho: "Seu poder é um dom. Use-o para transformar vidas — começando pela sua.",
  },
  "oposicao-Marte-Plutao": {
    descricao: "Sua ação e o poder estão em lados opostos. Você pode oscilar entre o controle e a entrega, ou projetar no outro o poder que não assume. Pode haver uma busca constante de domínio sobre si e sobre os outros.",
    funciona: "Você vê o poder onde ele está — não se engana com aparências.",
    vigiar: "Projetar no outro o controle; viver relações de poder em vez de relações de verdade.",
    conselho: "A integração pede que você reconheça seu próprio poder. Ninguém tem poder sobre você — a menos que você entregue.",
  },
};
