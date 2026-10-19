import type { TipoAspecto } from "../servicos/sinastria";

export interface TextoSinastria {
  descricao: string;
  funciona: string;
  vigiar: string;
  conselho: string;
}

export const TEXTOS_SINastria: Record<string, TextoSinastria> = {
  // ── Sol A × Sol B ──
  "conjuncao-Sol-Sol": {
    descricao: "Os dois Sóis se fundem — vocês têm essências parecidas e se reconhecem no outro. Isso cria uma identificação imediata e forte, mas pode gerar competição de ego e falta de espaço para a individualidade.",
    funciona: "Identificação profunda — vocês se entendem sem precisar explicar.",
    vigiar: "Competição de ego; anular a individualidade em nome da fusão.",
    conselho: "Vocês são parecidos, mas não são a mesma pessoa. Reservem espaço para cada um brilhar sozinho.",
  },
  "sextil-Sol-Sol": {
    descricao: "Os dois Sóis se apoiam com leveza. Vocês têm essências compatíveis e se incentivam mutuamente. Há uma facilidade natural em caminhar juntos.",
    funciona: "Apoio mútuo — vocês se incentivam sem cobrança.",
    vigiar: "Acomodar-se na harmonia e não se desafiar.",
    conselho: "Aproveitem a leveza para crescerem juntos — sem deixar de crescer individualmente.",
  },
  "quadratura-Sol-Sol": {
    descricao: "Os dois Sóis entram em atrito. Vocês têm essências diferentes e podem se estranhar no começo — cada um quer impor seu jeito. A relação exige negociação constante.",
    funciona: "Vocês se completam — o que um tem, o outro aprende.",
    vigiar: "Competição; tentar mudar o outro; brigas de ego.",
    conselho: "Ninguém precisa vencer. A quadratura vira força quando vocês aprendem a ceder — e a valorizar o que o outro traz de diferente.",
  },
  "trigono-Sol-Sol": {
    descricao: "Os dois Sóis fluem juntos. Vocês têm essências que se harmonizam sem esforço — há uma compreensão natural e uma facilidade em caminhar na mesma direção.",
    funciona: "Harmonia natural — vocês caminham na mesma direção.",
    vigiar: "Achar que a relação é fácil demais; evitar conflitos necessários.",
    conselho: "Aproveitem para construir algo duradouro — a sintonia é um dom, mas precisa de manutenção.",
  },
  "oposicao-Sol-Sol": {
    descricao: "Os dois Sóis estão em lados opostos. Vocês têm essências complementares, mas que se atraem e se estranham ao mesmo tempo. A relação tem muito a ensinar — e muito a enfrentar.",
    funciona: "Complementaridade — o que falta em um, o outro tem.",
    vigiar: "Atração e repulsa; viver uma relação de opostos sem integração.",
    conselho: "A integração é o convite. Vocês não precisam ser iguais — precisam aprender a caminhar juntos.",
  },

  // ── Sol A × Lua B ──
  "conjuncao-Sol-Lua": {
    descricao: "Sua identidade ilumina a emoção do outro. Você é a pessoa que o outro sente como 'casa' — há uma atração afetiva imediata e profunda. Isso pode criar uma dependência emocional difícil de perceber.",
    funciona: "Atração afetiva imediata — vocês se sentem em casa um no outro.",
    vigiar: "Dependência emocional; confundir atração com amor.",
    conselho: "Aprofundem a conexão sem se anular. O outro precisa ser ele mesmo — e você também.",
  },
  "sextil-Sol-Lua": {
    descricao: "Sua identidade apoia a emoção do outro. Vocês se entendem com leveza — o que um sente, o outro acolhe. Há uma harmonia afetiva natural.",
    funciona: "Acolhimento natural — vocês se entendem com o coração.",
    vigiar: "Evitar conversas difíceis em nome da harmonia.",
    conselho: "Aproveitem a leveza para se conhecerem profundamente — a emoção fácil também pode esconder o que precisa ser dito.",
  },
  "quadratura-Sol-Lua": {
    descricao: "Sua identidade e a emoção do outro entram em atrito. O que você é nem sempre é o que o outro precisa sentir — há um descompasso entre querer e acolher.",
    funciona: "Vocês se ensinam mutuamente — identidade e emoção aprendem a se encontrar.",
    vigiar: "Brigas entre razão e emoção; sentir-se rejeitado sem motivo real.",
    conselho: "A quadratura vira força quando vocês param de brigar por estar certos e começam a se escutar de verdade.",
  },
  "trigono-Sol-Lua": {
    descricao: "Sua identidade e a emoção do outro fluem juntos. Há uma compreensão afetiva natural — o que você é, o outro sente com facilidade.",
    funciona: "Compreensão afetiva natural — vocês se conectam com o coração.",
    vigiar: "Achar que a relação é óbvia; evitar conflitos necessários.",
    conselho: "Aproveitem para construir algo duradouro — a sintonia é um dom.",
  },
  "oposicao-Sol-Lua": {
    descricao: "Sua identidade e a emoção do outro estão em lados opostos. Vocês se atraem, mas podem se estranhar — o que um é, o outro sente como diferente.",
    funciona: "Complementaridade — vocês se completam afetivamente.",
    vigiar: "Atração e estranhamento; viver uma relação de opostos sem integração.",
    conselho: "O convite é integrar. Vocês não precisam ser iguais — precisam aprender a se encontrar.",
  },

  // ── Sol A × Vênus B ──
  "conjuncao-Sol-Venus": {
    descricao: "Sua identidade ilumina o afeto do outro. Você é a pessoa que o outro ama — há uma atração afetiva intensa e natural. Isso pode gerar uma relação muito afetuosa, mas também idealização.",
    funciona: "Atração afetiva natural — o outro te vê com olhos de amor.",
    vigiar: "Idealização; confundir atração com amor verdadeiro.",
    conselho: "O afeto é um dom. Mas o amor precisa de verdade — vejam um ao outro como são.",
  },
  "sextil-Sol-Venus": {
    descricao: "Sua identidade apoia o afeto do outro. Vocês se admiram com naturalidade — o que você é, o outro valoriza.",
    funciona: "Admiração natural — vocês se valorizam sem esforço.",
    vigiar: "Acomodar-se na admiração e não se conhecer de verdade.",
    conselho: "Aproveitem para se conhecerem além da admiração — o amor precisa de verdade.",
  },
  "quadratura-Sol-Venus": {
    descricao: "Sua identidade e o afeto do outro entram em atrito. O que você é nem sempre é o que o outro valoriza — há um descompasso entre ser e ser amado.",
    funciona: "Vocês se ensinam mutuamente — identidade e afeto aprendem a se encontrar.",
    vigiar: "Sentir-se não amado por ser diferente; tentar mudar para agradar.",
    conselho: "A quadratura vira força quando vocês param de tentar se encaixar e começam a se aceitar como são.",
  },
  "trigono-Sol-Venus": {
    descricao: "Sua identidade e o afeto do outro fluem juntos. Há uma admiração natural e um afeto que flui sem esforço.",
    funciona: "Afeto e admiração naturais — vocês se valorizam com o coração.",
    vigiar: "Achar que o amor é óbvio; evitar conflitos necessários.",
    conselho: "Aproveitem para construir algo duradouro — a sintonia é um dom.",
  },
  "oposicao-Sol-Venus": {
    descricao: "Sua identidade e o afeto do outro estão em lados opostos. Vocês se atraem, mas podem se estranhar — o que um é, o outro valoriza de forma diferente.",
    funciona: "Complementaridade — vocês se completam afetivamente.",
    vigiar: "Atração e estranhamento; viver uma relação de opostos sem integração.",
    conselho: "O convite é integrar. Vocês não precisam ser iguais — precisam aprender a se valorizar.",
  },

  // ── Sol A × Marte B ──
  "conjuncao-Sol-Marte": {
    descricao: "Sua identidade desperta o desejo do outro. Há uma atração forte e imediata — o que você é, o outro deseja. Isso pode gerar uma relação intensa, mas também competitiva.",
    funciona: "Atração intensa — vocês se desejam com força.",
    vigiar: "Competição; atrito de egos; confundir desejo com amor.",
    conselho: "A intensidade é um dom. Mas o amor precisa de ternura — não é só sobre desejo.",
  },
  "sextil-Sol-Marte": {
    descricao: "Sua identidade apoia a ação do outro. Vocês se incentivam com naturalidade — o que você é, o outro admira e deseja.",
    funciona: "Incentivo natural — vocês se movem juntos.",
    vigiar: "Acomodar-se na harmonia e não se desafiar.",
    conselho: "Aproveitem a energia para construir algo juntos — o movimento é um dom.",
  },
  "quadratura-Sol-Marte": {
    descricao: "Sua identidade e a ação do outro entram em atrito. O que você é nem sempre é o que o outro quer — há um descompasso entre ser e agir.",
    funciona: "Vocês se ensinam mutuamente — identidade e ação aprendem a se encontrar.",
    vigiar: "Brigas de ego; sentir-se desafiado o tempo todo.",
    conselho: "A quadratura vira força quando vocês param de competir e começam a somar.",
  },
  "trigono-Sol-Marte": {
    descricao: "Sua identidade e a ação do outro fluem juntos. Há uma admiração natural e um incentivo mútuo.",
    funciona: "Admiração e incentivo naturais — vocês se movem juntos.",
    vigiar: "Achar que o movimento é óbvio; evitar conflitos necessários.",
    conselho: "Aproveitem para construir algo duradouro — a energia é um dom.",
  },
  "oposicao-Sol-Marte": {
    descricao: "Sua identidade e a ação do outro estão em lados opostos. Vocês se atraem, mas podem se estranhar — o que um é, o outro desafia.",
    funciona: "Complementaridade — vocês se completam na ação.",
    vigiar: "Atração e desafio; viver uma relação de oposição sem integração.",
    conselho: "O convite é integrar. Vocês não precisam competir — precisam aprender a caminhar juntos.",
  },

  // ── Lua A × Lua B ──
  "conjuncao-Lua-Lua": {
    descricao: "As duas Luas se fundem — vocês sentem de forma parecida e se reconhecem emocionalmente. Isso cria uma conexão afetiva profunda, mas pode gerar fusão emocional difícil de separar.",
    funciona: "Conexão emocional profunda — vocês se sentem sem precisar falar.",
    vigiar: "Fusão emocional; dificuldade em separar o que é seu do que é do outro.",
    conselho: "A conexão é um dom. Mas cada um precisa do seu espaço emocional — sem ele, a relação sufoca.",
  },
  "sextil-Lua-Lua": {
    descricao: "As duas Luas se apoiam com leveza. Vocês se entendem emocionalmente com facilidade — o que um sente, o outro acolhe.",
    funciona: "Acolhimento emocional natural — vocês se entendem com o coração.",
    vigiar: "Evitar emoções difíceis em nome da leveza.",
    conselho: "Aproveitem a leveza para se conhecerem profundamente — a emoção fácil também pode esconder o que precisa ser dito.",
  },
  "quadratura-Lua-Lua": {
    descricao: "As duas Luas entram em atrito. Vocês sentem de forma diferente — o que um precisa, o outro não entende. Há um descompasso emocional que exige negociação constante.",
    funciona: "Vocês se ensinam mutuamente — emoção aprende a se encontrar.",
    vigiar: "Brigas emocionais; sentir-se rejeitado sem motivo real.",
    conselho: "A quadratura vira força quando vocês param de brigar por estar certos e começam a se escutar de verdade.",
  },
  "trigono-Lua-Lua": {
    descricao: "As duas Luas fluem juntas. Há uma compreensão emocional natural — vocês se sentem em casa um no outro.",
    funciona: "Compreensão emocional natural — vocês se conectam com o coração.",
    vigiar: "Achar que a relação é óbvia; evitar conflitos necessários.",
    conselho: "Aproveitem para construir algo duradouro — a sintonia é um dom.",
  },
  "oposicao-Lua-Lua": {
    descricao: "As duas Luas estão em lados opostos. Vocês sentem de forma complementar, mas que se atrai e se estranha ao mesmo tempo.",
    funciona: "Complementaridade emocional — o que falta em um, o outro tem.",
    vigiar: "Atração e estranhamento; viver uma relação de opostos sem integração.",
    conselho: "O convite é integrar. Vocês não precisam sentir igual — precisam aprender a se acolher.",
  },

  // ── Lua A × Vênus B ──
  "conjuncao-Lua-Venus": {
    descricao: "Sua emoção ilumina o afeto do outro. Há uma ternura natural entre vocês — o que você sente, o outro acolhe com amor.",
    funciona: "Ternura natural — vocês se amam com o coração.",
    vigiar: "Idealização; confundir carência com amor.",
    conselho: "A ternura é um dom. Mas o amor precisa de verdade — vejam um ao outro como são.",
  },
  "sextil-Lua-Venus": {
    descricao: "Sua emoção apoia o afeto do outro. Vocês se acolhem com naturalidade — o que um sente, o outro valoriza.",
    funciona: "Acolhimento afetivo natural — vocês se amam com leveza.",
    vigiar: "Acomodar-se na harmonia e não se conhecer de verdade.",
    conselho: "Aproveitem para se conhecerem além do afeto — o amor precisa de verdade.",
  },
  "quadratura-Lua-Venus": {
    descricao: "Sua emoção e o afeto do outro entram em atrito. O que você sente nem sempre é o que o outro valoriza — há um descompasso entre sentir e ser amado.",
    funciona: "Vocês se ensinam mutuamente — emoção e afeto aprendem a se encontrar.",
    vigiar: "Sentir-se não amado por sentir diferente; tentar mudar para agradar.",
    conselho: "A quadratura vira força quando vocês param de tentar se encaixar e começam a se aceitar como são.",
  },
  "trigono-Lua-Venus": {
    descricao: "Sua emoção e o afeto do outro fluem juntos. Há uma ternura natural e um afeto que flui sem esforço.",
    funciona: "Ternura e afeto naturais — vocês se amam com o coração.",
    vigiar: "Achar que o amor é óbvio; evitar conflitos necessários.",
    conselho: "Aproveitem para construir algo duradouro — a sintonia é um dom.",
  },
  "oposicao-Lua-Venus": {
    descricao: "Sua emoção e o afeto do outro estão em lados opostos. Vocês se atraem, mas podem se estranhar — o que um sente, o outro valoriza de forma diferente.",
    funciona: "Complementaridade — vocês se completam afetivamente.",
    vigiar: "Atração e estranhamento; viver uma relação de opostos sem integração.",
    conselho: "O convite é integrar. Vocês não precisam sentir igual — precisam aprender a se valorizar.",
  },

  // ── Lua A × Marte B ──
  "conjuncao-Lua-Marte": {
    descricao: "Sua emoção desperta o desejo do outro. Há uma atração intensa e emocional — o que você sente, o outro deseja.",
    funciona: "Atração emocional intensa — vocês se desejam com o coração.",
    vigiar: "Ciúme; intensidade que sufoca; confundir desejo com amor.",
    conselho: "A intensidade é um dom. Mas o amor precisa de ternura — não é só sobre desejo.",
  },
  "sextil-Lua-Marte": {
    descricao: "Sua emoção apoia a ação do outro. Vocês se incentivam com naturalidade — o que um sente, o outro deseja.",
    funciona: "Incentivo natural — vocês se movem juntos.",
    vigiar: "Acomodar-se na harmonia e não se desafiar.",
    conselho: "Aproveitem a energia para construir algo juntos — o movimento é um dom.",
  },
  "quadratura-Lua-Marte": {
    descricao: "Sua emoção e a ação do outro entram em atrito. O que você sente nem sempre é o que o outro quer — há um descompasso entre sentir e agir.",
    funciona: "Vocês se ensinam mutuamente — emoção e ação aprendem a se encontrar.",
    vigiar: "Brigas emocionais; sentir-se desafiado o tempo todo.",
    conselho: "A quadratura vira força quando vocês param de competir e começam a somar.",
  },
  "trigono-Lua-Marte": {
    descricao: "Sua emoção e a ação do outro fluem juntos. Há um incentivo natural e um desejo que flui sem esforço.",
    funciona: "Incentivo e desejo naturais — vocês se movem juntos.",
    vigiar: "Achar que o movimento é óbvio; evitar conflitos necessários.",
    conselho: "Aproveitem para construir algo duradouro — a energia é um dom.",
  },
  "oposicao-Lua-Marte": {
    descricao: "Sua emoção e a ação do outro estão em lados opostos. Vocês se atraem, mas podem se estranhar — o que um sente, o outro desafia.",
    funciona: "Complementaridade — vocês se completam na ação.",
    vigiar: "Atração e desafio; viver uma relação de oposição sem integração.",
    conselho: "O convite é integrar. Vocês não precisam competir — precisam aprender a caminhar juntos.",
  },

  // ── Vênus A × Vênus B ──
  "conjuncao-Venus-Venus": {
    descricao: "Os dois Vênus se fundem — vocês amam de forma parecida e se reconhecem no afeto. Isso cria uma conexão amorosa profunda, mas pode gerar fusão afetiva difícil de separar.",
    funciona: "Conexão amorosa profunda — vocês se amam sem precisar falar.",
    vigiar: "Fusão afetiva; dificuldade em separar o que é seu do que é do outro.",
    conselho: "A conexão é um dom. Mas cada um precisa do seu espaço afetivo — sem ele, a relação sufoca.",
  },
  "sextil-Venus-Venus": {
    descricao: "Os dois Vênus se apoiam com leveza. Vocês se amam com facilidade — o que um valoriza, o outro acolhe.",
    funciona: "Acolhimento afetivo natural — vocês se amam com leveza.",
    vigiar: "Evitar conversas difíceis em nome da leveza.",
    conselho: "Aproveitem a leveza para se conhecerem profundamente — o afeto fácil também pode esconder o que precisa ser dito.",
  },
  "quadratura-Venus-Venus": {
    descricao: "Os dois Vênus entram em atrito. Vocês amam de forma diferente — o que um valoriza, o outro não entende. Há um descompasso afetivo que exige negociação constante.",
    funciona: "Vocês se ensinam mutuamente — afeto aprende a se encontrar.",
    vigiar: "Brigas afetivas; sentir-se rejeitado sem motivo real.",
    conselho: "A quadratura vira força quando vocês param de brigar por estar certos e começam a se escutar de verdade.",
  },
  "trigono-Venus-Venus": {
    descricao: "Os dois Vênus fluem juntos. Há uma compreensão afetiva natural — vocês se amam com o coração.",
    funciona: "Compreensão afetiva natural — vocês se conectam com o coração.",
    vigiar: "Achar que a relação é óbvia; evitar conflitos necessários.",
    conselho: "Aproveitem para construir algo duradouro — a sintonia é um dom.",
  },
  "oposicao-Venus-Venus": {
    descricao: "Os dois Vênus estão em lados opostos. Vocês amam de forma complementar, mas que se atrai e se estranha ao mesmo tempo.",
    funciona: "Complementaridade afetiva — o que falta em um, o outro tem.",
    vigiar: "Atração e estranhamento; viver uma relação de opostos sem integração.",
    conselho: "O convite é integrar. Vocês não precisam amar igual — precisam aprender a se acolher.",
  },

  // ── Vênus A × Marte B ──
  "conjuncao-Venus-Marte": {
    descricao: "Seu afeto desperta o desejo do outro. Há uma atração forte e imediata — o que você ama, o outro deseja.",
    funciona: "Atração intensa — vocês se desejam com força.",
    vigiar: "Confundir afeto com desejo; intensidade que sufoca.",
    conselho: "A intensidade é um dom. Mas o amor precisa de ternura — não é só sobre desejo.",
  },
  "sextil-Venus-Marte": {
    descricao: "Seu afeto apoia a ação do outro. Vocês se incentivam com naturalidade — o que um valoriza, o outro deseja.",
    funciona: "Incentivo natural — vocês se movem juntos.",
    vigiar: "Acomodar-se na harmonia e não se desafiar.",
    conselho: "Aproveitem a energia para construir algo juntos — o movimento é um dom.",
  },
  "quadratura-Venus-Marte": {
    descricao: "Seu afeto e a ação do outro entram em atrito. O que você valoriza nem sempre é o que o outro deseja — há um descompasso entre amar e desejar.",
    funciona: "Vocês se ensinam mutuamente — afeto e desejo aprendem a se encontrar.",
    vigiar: "Brigas entre afeto e desejo; sentir-se desejado e não amado.",
    conselho: "A quadratura vira força quando vocês param de brigar por estar certos e começam a se escutar de verdade.",
  },
  "trigono-Venus-Marte": {
    descricao: "Seu afeto e a ação do outro fluem juntos. Há um incentivo natural e um desejo que flui sem esforço.",
    funciona: "Incentivo e desejo naturais — vocês se movem juntos.",
    vigiar: "Achar que o movimento é óbvio; evitar conflitos necessários.",
    conselho: "Aproveitem para construir algo duradouro — a energia é um dom.",
  },
  "oposicao-Venus-Marte": {
    descricao: "Seu afeto e a ação do outro estão em lados opostos. Vocês se atraem, mas podem se estranhar — o que um ama, o outro desafia.",
    funciona: "Complementaridade — vocês se completam no desejo.",
    vigiar: "Atração e desafio; viver uma relação de oposição sem integração.",
    conselho: "O convite é integrar. Vocês não precisam competir — precisam aprender a caminhar juntos.",
  },

  // ── Marte A × Marte B ──
  "conjuncao-Marte-Marte": {
    descricao: "Os dois Martes se fundem — vocês desejam de forma parecida e se reconhecem na ação. Isso cria uma atração intensa e uma parceria forte, mas pode gerar competição e atrito.",
    funciona: "Atração intensa — vocês se desejam com força.",
    vigiar: "Competição; atrito de egos; intensidade que sufoca.",
    conselho: "A intensidade é um dom. Mas o amor precisa de ternura — não é só sobre desejo.",
  },
  "sextil-Marte-Marte": {
    descricao: "Os dois Martes se apoiam com leveza. Vocês agem com facilidade um com o outro — o que um deseja, o outro incentiva.",
    funciona: "Incentivo natural — vocês se movem juntos.",
    vigiar: "Acomodar-se na harmonia e não se desafiar.",
    conselho: "Aproveitem a energia para construir algo juntos — o movimento é um dom.",
  },
  "quadratura-Marte-Marte": {
    descricao: "Os dois Martes entram em atrito. Vocês agem de forma diferente — o que um deseja, o outro desafia. Há competição constante.",
    funciona: "Vocês se ensinam mutuamente — ação aprende a se encontrar.",
    vigiar: "Competição; brigas de ego; desafio constante.",
    conselho: "A quadratura vira força quando vocês param de competir e começam a somar.",
  },
  "trigono-Marte-Marte": {
    descricao: "Os dois Martes fluem juntos. Há um incentivo natural e um desejo que flui sem esforço.",
    funciona: "Incentivo e desejo naturais — vocês se movem juntos.",
    vigiar: "Achar que o movimento é óbvio; evitar conflitos necessários.",
    conselho: "Aproveitem para construir algo duradouro — a energia é um dom.",
  },
  "oposicao-Marte-Marte": {
    descricao: "Os dois Martes estão em lados opostos. Vocês desejam de forma complementar, mas que se atrai e se estranha ao mesmo tempo.",
    funciona: "Complementaridade — vocês se completam na ação.",
    vigiar: "Atração e desafio; viver uma relação de oposição sem integração.",
    conselho: "O convite é integrar. Vocês não precisam competir — precisam aprender a caminhar juntos.",
  },

  // ── Sol A × Ascendente B ──
  "conjuncao-Sol-Ascendente": {
    descricao: "Sua identidade ilumina a aparência do outro. Você é a pessoa que o outro quer mostrar ao mundo — há uma admiração imediata.",
    funciona: "Admiração imediata — vocês se veem com olhos de admiração.",
    vigiar: "Idealização; confundir admiração com amor.",
    conselho: "A admiração é um dom. Mas o amor precisa de verdade — vejam um ao outro como são.",
  },
  "sextil-Sol-Ascendente": {
    descricao: "Sua identidade apoia a aparência do outro. Vocês se admiram com naturalidade.",
    funciona: "Admiração natural — vocês se valorizam sem esforço.",
    vigiar: "Acomodar-se na admiração e não se conhecer de verdade.",
    conselho: "Aproveitem para se conhecerem além da admiração — o amor precisa de verdade.",
  },
  "quadratura-Sol-Ascendente": {
    descricao: "Sua identidade e a aparência do outro entram em atrito. O que você é nem sempre é o que o outro quer mostrar.",
    funciona: "Vocês se ensinam mutuamente — identidade e aparência aprendem a se encontrar.",
    vigiar: "Sentir-se não visto por ser diferente; tentar mudar para agradar.",
    conselho: "A quadratura vira força quando vocês param de tentar se encaixar e começam a se aceitar como são.",
  },
  "trigono-Sol-Ascendente": {
    descricao: "Sua identidade e a aparência do outro fluem juntos. Há uma admiração natural e um encanto que flui sem esforço.",
    funciona: "Admiração e encanto naturais — vocês se valorizam com o coração.",
    vigiar: "Achar que a admiração é óbvia; evitar conflitos necessários.",
    conselho: "Aproveitem para construir algo duradouro — a sintonia é um dom.",
  },
  "oposicao-Sol-Ascendente": {
    descricao: "Sua identidade e a aparência do outro estão em lados opostos. Vocês se atraem, mas podem se estranhar — o que um é, o outro quer mostrar de outra forma.",
    funciona: "Complementaridade — vocês se completam na imagem.",
    vigiar: "Atração e estranhamento; viver uma relação de opostos sem integração.",
    conselho: "O convite é integrar. Vocês não precisam ser iguais — precisam aprender a se valorizar.",
  },

  // ── Lua A × Ascendente B ──
  "conjuncao-Lua-Ascendente": {
    descricao: "Sua emoção ilumina a aparência do outro. Há um acolhimento natural — o outro se sente visto e cuidado quando está com você.",
    funciona: "Acolhimento natural — o outro se sente em casa perto de você.",
    vigiar: "Confundir cuidado com amor; idealização.",
    conselho: "O acolhimento é um dom. Mas o amor precisa de verdade — vejam um ao outro como são.",
  },
  "sextil-Lua-Ascendente": {
    descricao: "Sua emoção apoia a aparência do outro. Vocês se acolhem com naturalidade.",
    funciona: "Acolhimento natural — vocês se sentem bem juntos.",
    vigiar: "Acomodar-se na harmonia e não se conhecer de verdade.",
    conselho: "Aproveitem para se conhecerem além do acolhimento — o amor precisa de verdade.",
  },
  "quadratura-Lua-Ascendente": {
    descricao: "Sua emoção e a aparência do outro entram em atrito. O que você sente nem sempre é o que o outro quer mostrar.",
    funciona: "Vocês se ensinam mutuamente — emoção e aparência aprendem a se encontrar.",
    vigiar: "Sentir-se não visto por sentir diferente; tentar mudar para agradar.",
    conselho: "A quadratura vira força quando vocês param de tentar se encaixar e começam a se aceitar como são.",
  },
  "trigono-Lua-Ascendente": {
    descricao: "Sua emoção e a aparência do outro fluem juntos. Há um acolhimento natural e um encanto que flui sem esforço.",
    funciona: "Acolhimento e encanto naturais — vocês se sentem em casa juntos.",
    vigiar: "Achar que o acolhimento é óbvio; evitar conflitos necessários.",
    conselho: "Aproveitem para construir algo duradouro — a sintonia é um dom.",
  },
  "oposicao-Lua-Ascendente": {
    descricao: "Sua emoção e a aparência do outro estão em lados opostos. Vocês se atraem, mas podem se estranhar — o que um sente, o outro quer mostrar de outra forma.",
    funciona: "Complementaridade — vocês se completam na imagem.",
    vigiar: "Atração e estranhamento; viver uma relação de opostos sem integração.",
    conselho: "O convite é integrar. Vocês não precisam sentir igual — precisam aprender a se acolher.",
  },

  // ── Vênus A × Ascendente B ──
  "conjuncao-Venus-Ascendente": {
    descricao: "Seu afeto ilumina a aparência do outro. Há uma admiração afetiva imediata — o outro se sente amado quando está com você.",
    funciona: "Admiração afetiva — o outro se sente amado perto de você.",
    vigiar: "Idealização; confundir admiração com amor.",
    conselho: "A admiração é um dom. Mas o amor precisa de verdade — vejam um ao outro como são.",
  },
  "sextil-Venus-Ascendente": {
    descricao: "Seu afeto apoia a aparência do outro. Vocês se admiram com naturalidade.",
    funciona: "Admiração natural — vocês se valorizam com o coração.",
    vigiar: "Acomodar-se na admiração e não se conhecer de verdade.",
    conselho: "Aproveitem para se conhecerem além da admiração — o amor precisa de verdade.",
  },
  "quadratura-Venus-Ascendente": {
    descricao: "Seu afeto e a aparência do outro entram em atrito. O que você ama nem sempre é o que o outro quer mostrar.",
    funciona: "Vocês se ensinam mutuamente — afeto e aparência aprendem a se encontrar.",
    vigiar: "Sentir-se não amado por ser diferente; tentar mudar para agradar.",
    conselho: "A quadratura vira força quando vocês param de tentar se encaixar e começam a se aceitar como são.",
  },
  "trigono-Venus-Ascendente": {
    descricao: "Seu afeto e a aparência do outro fluem juntos. Há uma admiração natural e um encanto que flui sem esforço.",
    funciona: "Admiração e encanto naturais — vocês se valorizam com o coração.",
    vigiar: "Achar que a admiração é óbvia; evitar conflitos necessários.",
    conselho: "Aproveitem para construir algo duradouro — a sintonia é um dom.",
  },
  "oposicao-Venus-Ascendente": {
    descricao: "Seu afeto e a aparência do outro estão em lados opostos. Vocês se atraem, mas podem se estranhar — o que um ama, o outro quer mostrar de outra forma.",
    funciona: "Complementaridade — vocês se completam na imagem.",
    vigiar: "Atração e estranhamento; viver uma relação de opostos sem integração.",
    conselho: "O convite é integrar. Vocês não precisam amar igual — precisam aprender a se valorizar.",
  },

  // ── Marte A × Ascendente B ──
  "conjuncao-Marte-Ascendente": {
    descricao: "Sua ação ilumina a aparência do outro. Há uma atração forte e imediata — o outro se sente desejado perto de você.",
    funciona: "Atração intensa — vocês se desejam com força.",
    vigiar: "Competição; confundir desejo com amor.",
    conselho: "A intensidade é um dom. Mas o amor precisa de ternura — não é só sobre desejo.",
  },
  "sextil-Marte-Ascendente": {
    descricao: "Sua ação apoia a aparência do outro. Vocês se incentivam com naturalidade.",
    funciona: "Incentivo natural — vocês se movem juntos.",
    vigiar: "Acomodar-se na harmonia e não se desafiar.",
    conselho: "Aproveitem a energia para construir algo juntos — o movimento é um dom.",
  },
  "quadratura-Marte-Ascendente": {
    descricao: "Sua ação e a aparência do outro entram em atrito. O que você quer nem sempre é o que o outro quer mostrar.",
    funciona: "Vocês se ensinam mutuamente — ação e aparência aprendem a se encontrar.",
    vigiar: "Brigas de ego; sentir-se desafiado o tempo todo.",
    conselho: "A quadratura vira força quando vocês param de competir e começam a somar.",
  },
  "trigono-Marte-Ascendente": {
    descricao: "Sua ação e a aparência do outro fluem juntos. Há um incentivo natural e um desejo que flui sem esforço.",
    funciona: "Incentivo e desejo naturais — vocês se movem juntos.",
    vigiar: "Achar que o movimento é óbvio; evitar conflitos necessários.",
    conselho: "Aproveitem para construir algo duradouro — a energia é um dom.",
  },
  "oposicao-Marte-Ascendente": {
    descricao: "Sua ação e a aparência do outro estão em lados opostos. Vocês se atraem, mas podem se estranhar — o que um quer, o outro desafia.",
    funciona: "Complementaridade — vocês se completam na ação.",
    vigiar: "Atração e desafio; viver uma relação de oposição sem integração.",
    conselho: "O convite é integrar. Vocês não precisam competir — precisam aprender a caminhar juntos.",
  },

  // ── Ascendente A × Ascendente B ──
  "conjuncao-Ascendente-Ascendente": {
    descricao: "As duas aparências se fundem — vocês se mostram ao mundo de forma parecida e se reconhecem na imagem. Isso cria uma identificação imediata, mas pode gerar fusão de identidade.",
    funciona: "Identificação imediata — vocês se reconhecem no outro.",
    vigiar: "Fusão de identidade; dificuldade em separar o que é seu do que é do outro.",
    conselho: "A identificação é um dom. Mas cada um precisa do seu espaço — sem ele, a relação sufoca.",
  },
  "sextil-Ascendente-Ascendente": {
    descricao: "As duas aparências se apoiam com leveza. Vocês se entendem na imagem com facilidade.",
    funciona: "Entendimento natural — vocês se mostram bem juntos.",
    vigiar: "Evitar conversas difíceis em nome da leveza.",
    conselho: "Aproveitem para se conhecerem profundamente — a leveza também pode esconder o que precisa ser dito.",
  },
  "quadratura-Ascendente-Ascendente": {
    descricao: "As duas aparências entram em atrito. Vocês se mostram de forma diferente — o que um quer parecer, o outro não entende.",
    funciona: "Vocês se ensinam mutuamente — imagem aprende a se encontrar.",
    vigiar: "Brigas de imagem; sentir-se não visto por ser diferente.",
    conselho: "A quadratura vira força quando vocês param de brigar por estar certos e começam a se aceitar como são.",
  },
  "trigono-Ascendente-Ascendente": {
    descricao: "As duas aparências fluem juntas. Há uma compreensão natural da imagem um do outro.",
    funciona: "Compreensão natural — vocês se mostram bem juntos.",
    vigiar: "Achar que a relação é óbvia; evitar conflitos necessários.",
    conselho: "Aproveitem para construir algo duradouro — a sintonia é um dom.",
  },
  "oposicao-Ascendente-Ascendente": {
    descricao: "As duas aparências estão em lados opostos. Vocês se mostram de forma complementar, mas que se atrai e se estranha ao mesmo tempo.",
    funciona: "Complementaridade — vocês se completam na imagem.",
    vigiar: "Atração e estranhamento; viver uma relação de opostos sem integração.",
    conselho: "O convite é integrar. Vocês não precisam parecer iguais — precisam aprender a se valorizar.",
  },
};

export function obterTextoSinastria(
  tipo: TipoAspecto,
  planetaA: string,
  planetaB: string
): TextoSinastria {
  const chave = `${tipo}-${planetaA}-${planetaB}`;
  return (
    TEXTOS_SINastria[chave] ?? {
      descricao: `${planetaA} e ${planetaB} formam um aspecto de ${tipo} entre os dois mapas. Essa combinação mostra como as energias de vocês se encontram.`,
      funciona: "Vocês têm uma conexão real que pode ser cultivada.",
      vigiar: "Confundir atração com compatibilidade profunda.",
      conselho: "Observem como esse aspecto se manifesta no dia a dia e busquem integrá-lo.",
    }
  );
}
