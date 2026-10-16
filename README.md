# 🔮 ORACULVM — Portal Místico Interativo

Um portal místico online que reúne **cinco oráculos** diferentes em uma única experiência. Tudo calculado de verdade, direto no navegador, sem promessas mágicas e sem enrolação.

> 🔗 **Acesse online:** (https://matheusabib.github.io/Consulta-de-Tarot/)

---

## ✨ Recursos

- 🃏 **Tarô** — três tiragens com 22 arcanos maiores: Carta do Dia, Passado/Presente/Futuro e Cruz Celta
- 🌟 **Mapa Astral** — Sol, Lua, Ascendente e os 10 planetas calculados com Swiss Ephemeris
- 🔢 **Numerologia** — 7 números pessoais com interpretações profundas (84 textos únicos)
- 🔺 **Matriz do Destino** — 13 pontos baseados nos 22 arcanos maiores
- ♈ **Signos** — os 12 signos do zodíaco com textos profundos e conteúdo ampliado
- 👤 **Perfil único** — preenche uma vez, todos os oráculos usam automaticamente
- 💾 **Salvo no navegador** — nada vai pra servidor, tudo roda local
- 🎨 **Design com identidade mística** — partículas animadas, gradientes, medalhões de ícones

---

## 🛠 Tecnologias

### Frontend

| Ícone | Nome | Uso |
|---|---|---|
| ![React](https://img.shields.io/badge/-React_18-61DAFB?logo=react&logoColor=black) | **React 18** | Framework principal |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white) | **TypeScript** | Tipagem estática |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white) | **Vite** | Build tool e dev server |
| ![React Router](https://img.shields.io/badge/-React_Router-CA4245?logo=reactrouter&logoColor=white) | **React Router** | Navegação entre painéis |
| ![SCSS](https://img.shields.io/badge/-SCSS-CC6699?logo=sass&logoColor=white) | **SCSS** | Estilização com variáveis |

### Bibliotecas

| Ícone | Nome | Uso |
|---|---|---|
| ![Swiss Ephemeris](https://img.shields.io/badge/-Swiss_Ephemeris-7B68EE?logo=starship&logoColor=white) | **@swisseph/browser** | Cálculos astrológicos precisos (WASM) |
| ![Municípios BR](https://img.shields.io/badge/-Municípios_BR-009C3B?logo=googlemaps&logoColor=white) | **municipios-brasil** | Autocomplete de cidades |
| ![Toastify](https://img.shields.io/badge/-React_Toastify-FF6B6B?logo=react&logoColor=white) | **react-toastify** | Notificações elegantes |
| ![Font Awesome](https://img.shields.io/badge/-Font_Awesome-528DD7?logo=fontawesome&logoColor=white) | **Font Awesome 6** | Ícones gerais |
| ![Google Fonts](https://img.shields.io/badge/-Google_Fonts-4285F4?logo=googlefonts&logoColor=white) | **Google Fonts** | Cinzel + Cormorant Garamond |

### Design

| Ícone | Nome | Uso |
|---|---|---|
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white) | **CSS3** | Animações, grids, gradientes |
| ![Zodiacfonts](https://img.shields.io/badge/-Zodiacfonts-9969FF?logo=sass&logoColor=white) | **zodiacfonts** | SVGs astrológicos |
| ![SVG](https://img.shields.io/badge/-SVG-FFB13B?logo=svg&logoColor=white) | **SVG inline** | Ícones customizados dos planetas |

---

🌟 Destaques técnicos

### Astrologia real

O mapa astral não é simulado. Usa **Swiss Ephemeris** em WebAssembly pra calcular posições planetárias com precisão de ±0.0001°, incluindo casas, ascendente e meio do céu.

### Numerologia pitagórica

Cálculos reais baseados na tabela pitagórica — Caminho de Vida, Expressão, Alma, Personalidade, Aniversário, Maturidade e Kármico.

### Matriz do Destino

Sistema russo baseado nos 22 arcanos maiores, com 13 pontos calculados a partir da data de nascimento.

### Tarô completo

22 arcanos maiores com 3 tipos de tiragem, animação de leque e leituras salvas por 24h.

### Textos autorais

Todas as interpretações (84 textos de numerologia, 72 de astrologia, 12 de signos, 22 de matriz) foram escritas especificamente pro projeto — concretas, diretas e sem clichê místico vazio.

---

## 💾 Privacidade

- **Nada vai pra servidor** — tudo roda no seu navegador
- **Dados salvos** no `localStorage` da sua máquina
- **Sem cookies** de rastreamento, sem analytics
- **Sem cadastro** — o perfil é 100% local
