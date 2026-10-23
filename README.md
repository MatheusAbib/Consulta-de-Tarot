# 🔮 ORACULVM — Painel Mistico

Um portal místico online que reúne **oito experiências** diferentes em uma única plataforma. Tudo calculado de verdade, direto no navegador, sem promessas mágicas e sem enrolação.

> 🔗 **Acesse online:** (https://matheusabib.github.io/ORACULUM-painel-mistico/)

---

## ✨ Recursos

### 🃏 Tarô
Três tiragens com 22 arcanos maiores: Carta do Dia, Passado/Presente/Futuro e Cruz Celta. Animação de leque, escolha manual e leituras salvas por 24h.

### 🌟 Mapa Astral
Sol, Lua, Ascendente e os 10 planetas calculados com **Swiss Ephemeris** (WASM) — precisão de ±0.0001°. Inclui:
- **Posições planetárias** com grau e signo
- **Interpretações** por planeta (Sol, Lua, Ascendente, Mercúrio, Vênus, Marte)
- **Aspectos planetários** — 225 textos únicos (conjunção, sextil, quadratura, trígono, oposição), com linhas coloridas no mapa e filtro por tipo
- **Sinastria amorosa** — compara dois mapas e mostra como as energias de vocês se encontram

### 🔢 Numerologia
Sete números pessoais com interpretações profundas (84 textos únicos): Caminho de Vida, Expressão, Alma, Personalidade, Aniversário, Maturidade e Kármico. Inclui:
- **Ciclos Pessoais** — ano, mês e dia pessoal com textos completos (27 textos: o que significa, o que esperar, o que fazer, o que evitar)
- **Compatibilidade numerológica** — compara dois Caminhos de Vida com base em 81 pares e textos específicos

### 🔺 Matriz do Destino
Sistema baseado nos 22 arcanos maiores, com 13 pontos calculados a partir da data de nascimento.

### ♈ Signos
Os 12 signos do zodíaco com textos profundos e conteúdo ampliado.

### 🌙 Calendário Lunar
As 8 fases da lua com textos completos — o que significa, o que esperar, o que fazer e o que evitar. Navegação por mês, destaque para hoje e seleção de qualquer dia.

### 📚 Biblioteca
Conhecimento esotérico organizado em **7 categorias** (~148 fichas):
- **Cristais** (~50) — cor, elemento, chakra, propriedades e uso
- **Ervas** (~50) — nome científico, elemento, planeta, propriedades e uso
- **Incensos e Resinas** (12) — origem, elemento, planeta, propriedades e uso
- **Velas e Cores** (12) — cor, elemento, propriedades e uso
- **Chakras** (7) — cor, elemento, propriedades e uso
- **Elementos** (5) — cor, direção, propriedades e uso
- **Banhos e Defumações** (12) — objetivo, ingredientes, modo de usar e contraindicações

Cada categoria tem busca e paginação (12 por página no desktop, 6 no mobile).

### 👤 Perfil único
Preenche uma vez, todos os oráculos usam automaticamente.

### 💾 Salvo no navegador
Nada vai pra servidor, tudo roda local.

### 🎨 Design com identidade mística
Partículas animadas, gradientes, medalhões de ícones, tipografia clássica (Cinzel + Cormorant Garamond).

---

## 🛠 Tecnologias

### Frontend

| Ícone | Nome | Uso |
|---|---|---|
| ![React](https://img.shields.io/badge/-React_19-61DAFB?logo=react&logoColor=black) | **React 19** | Framework principal |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white) | **TypeScript 6** | Tipagem estática |
| ![Vite](https://img.shields.io/badge/-Vite_8-646CFF?logo=vite&logoColor=white) | **Vite 8** | Build tool e dev server |
| ![React Router](https://img.shields.io/badge/-React_Router-CA4245?logo=reactrouter&logoColor=white) | **React Router 7** | Navegação entre painéis |
| ![SCSS](https://img.shields.io/badge/-SCSS-CC6699?logo=sass&logoColor=white) | **SCSS** | Estilização com variáveis |

### Bibliotecas

| Ícone | Nome | Uso |
|---|---|---|
| ![Swiss Ephemeris](https://img.shields.io/badge/-Swiss_Ephemeris-7B68EE?logo=starship&logoColor=white) | **@swisseph/browser** | Cálculos astrológicos precisos (WASM) |
| ![Suncalc](https://img.shields.io/badge/-Suncalc-F7B32B?logo=sun&logoColor=white) | **suncalc** | Cálculos de fase lunar |
| ![Municípios BR](https://img.shields.io/badge/-Municípios_BR-009C3B?logo=googlemaps&logoColor=white) | **municipios-brasil** | Autocomplete de cidades |
| ![Iconify](https://img.shields.io/badge/-Iconify-1769AA?logo=iconify&logoColor=white) | **@iconify/react** | Ícones vetoriais |
| ![Toastify](https://img.shields.io/badge/-React_Toastify-FF6B6B?logo=react&logoColor=white) | **react-toastify** | Notificações elegantes |
| ![Zustand](https://img.shields.io/badge/-Zustand-2C2C2C?logo=react&logoColor=white) | **zustand** | Estado global |
| ![Font Awesome](https://img.shields.io/badge/-Font_Awesome-528DD7?logo=fontawesome&logoColor=white) | **Font Awesome 6** | Ícones gerais |
| ![Google Fonts](https://img.shields.io/badge/-Google_Fonts-4285F4?logo=googlefonts&logoColor=white) | **Google Fonts** | Cinzel + Cormorant Garamond |

### Design

| Ícone | Nome | Uso |
|---|---|---|
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white) | **CSS3** | Animações, grids, gradientes |
| ![SVG](https://img.shields.io/badge/-SVG-FFB13B?logo=svg&logoColor=white) | **SVG inline** | Ícones customizados dos planetas |

---

## 🌟 Destaques técnicos

### Astrologia real
O mapa astral não é simulado. Usa **Swiss Ephemeris** em WebAssembly pra calcular posições planetárias com precisão de ±0.0001°, incluindo casas, ascendente e meio do céu.

### Aspectos planetários completos
225 textos únicos cobrindo todas as combinações entre os 10 planetas nos 5 aspectos principais (conjunção, sextil, quadratura, trígono, oposição). Cada aspecto tem descrição, o que funciona, o que vigiar e conselho.

### Sinastria amorosa
Compara dois mapas astrais e mostra os aspectos cruzados entre Sol, Lua, Vênus, Marte e Ascendente — com resumo, pontos fortes, pontos de atenção e conselho.

### Numerologia pitagórica
Cálculos reais baseados na tabela pitagórica — Caminho de Vida, Expressão, Alma, Personalidade, Aniversário, Maturidade e Kármico. Ciclos pessoais calculados a partir da data atual, com redução teosófica pura (sem números mestres).

### Calendário lunar real
Fases calculadas com **suncalc** a partir de efemérides reais. Cada fase tem texto completo: o que significa, o que esperar, o que fazer e o que evitar.

### Matriz do Destino
Sistema russo baseado nos 22 arcanos maiores, com 13 pontos calculados a partir da data de nascimento.

### Tarô completo
22 arcanos maiores com 3 tipos de tiragem, animação de leque e leituras salvas por 24h.

### Textos autorais
Todas as interpretações foram escritas especificamente pro projeto — concretas, diretas e sem clichê místico vazio. São mais de **400 textos únicos** (numerologia, astrologia, aspectos, sinastria, ciclos, signos, matriz, fases lunares, biblioteca).

---

## 💾 Privacidade

- **Nada vai pra servidor** — tudo roda no seu navegador
- **Dados salvos** no `localStorage` da sua máquina
- **Sem cookies** de rastreamento, sem analytics
- **Sem cadastro** — o perfil é 100% local
