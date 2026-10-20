import { useEffect } from "react";
import { ARCANOS } from "../dados/arcanos";
import "./ModalMatriz.scss";

interface Props {
  aberto: boolean;
  aoFechar: () => void;
  dataNascimento: string;
}

const PONTOS = [
  { letra: "A", nome: "Eu (Personalidade)", descricao: "O centro da Matriz. Representa quem você é por dentro, sua essência mais profunda." },
  { letra: "B", nome: "Futuro", descricao: "O que está à sua frente. As tendências do seu caminho, o que você tende a se tornar." },
  { letra: "C", nome: "Céu (Talento)", descricao: "Seu dom divino. O que você trouxe ao nascer, sua conexão com o alto." },
  { letra: "D", nome: "Direita (Mãe)", descricao: "Sua linhagem materna. O que você herdou da sua mãe e das mulheres da família." },
  { letra: "E", nome: "Esquerda (Pai)", descricao: "Sua linhagem paterna. O que você herdou do seu pai e dos homens da família." },
  { letra: "F", nome: "Passado", descricao: "O que você deixou para trás. As lições aprendidas, o que já foi superado." },
  { letra: "G", nome: "Saúde", descricao: "Sua relação com o corpo e a saúde. O que precisa de atenção nessa área." },
  { letra: "H", nome: "Terra (Missão)", descricao: "Sua missão neste mundo. O que você veio realizar, o seu propósito concreto." },
  { letra: "I", nome: "Finanças", descricao: "Sua relação com dinheiro e prosperidade. Os padrões que regem sua abundância." },
  { letra: "J", nome: "Ancestral", descricao: "O que vem dos seus ancestrais. As heranças espirituais e comportamentais." },
  { letra: "K", nome: "Karma", descricao: "Suas lições cármicas. O que você veio resolver nesta vida." },
  { letra: "L", nome: "Dharma", descricao: "Seu caminho de realização. Como você cumpre seu propósito no mundo." },
  { letra: "M", nome: "Propósito", descricao: "A síntese dos seus propósitos. O que orienta sua jornada maior." },
];

const ARCANOS_LISTA = [
  { numero: 1, nome: "O Mago", resumo: "Manifestação, poder pessoal, capacidade de transformar ideia em realidade." },
  { numero: 2, nome: "A Sacerdotisa", resumo: "Intuição, sabedoria oculta, conexão com o sagrado." },
  { numero: 3, nome: "A Imperatriz", resumo: "Criatividade, fertilidade, abundância, poder de nutrir." },
  { numero: 4, nome: "O Imperador", resumo: "Estrutura, autoridade, disciplina, construção sólida." },
  { numero: 5, nome: "O Hierofante", resumo: "Ensinamento, tradição, conexão entre humano e divino." },
  { numero: 6, nome: "Os Enamorados", resumo: "Escolhas do coração, união, relações que transformam." },
  { numero: 7, nome: "O Carro", resumo: "Vitória pela vontade, movimento, determinação." },
  { numero: 8, nome: "A Justiça", resumo: "Equilíbrio, karma, integridade, discernimento." },
  { numero: 9, nome: "O Eremita", resumo: "Introspecção, sabedoria, busca da luz interior." },
  { numero: 10, nome: "A Roda da Fortuna", resumo: "Ciclos, destino, confiança no fluxo, recomeços." },
  { numero: 11, nome: "A Força", resumo: "Coragem serena, domínio dos instintos, força interior." },
  { numero: 12, nome: "O Enforcado", resumo: "Pausa, nova perspectiva, transformação pela rendição." },
  { numero: 13, nome: "A Morte", resumo: "Transformação radical, fim de ciclos, renascimento." },
  { numero: 14, nome: "A Temperança", resumo: "Equilíbrio, cura, harmonização de opostos." },
  { numero: 15, nome: "O Diabo", resumo: "Sombra, instintos, poder oculto, libertação das correntes." },
  { numero: 16, nome: "A Torre", resumo: "Ruptura, colapso, libertação, recomeço radical." },
  { numero: 17, nome: "A Estrela", resumo: "Esperança, inspiração, cura pela fé." },
  { numero: 18, nome: "A Lua", resumo: "Intuição, inconsciente, mistério, travessia interna." },
  { numero: 19, nome: "O Sol", resumo: "Clareza, alegria, vitalidade, brilho pessoal." },
  { numero: 20, nome: "O Julgamento", resumo: "Despertar, renovação, perdão, chamado interior." },
  { numero: 21, nome: "O Mundo", resumo: "Realização, integração, celebração, totalidade." },
  { numero: 22, nome: "O Louco", resumo: "Liberdade, fé, salto no desconhecido, começos." },
];

function reduzir(n: number): number {
  while (n > 22) {
    n = String(n).split("").reduce((soma, d) => soma + Number(d), 0);
  }
  return n;
}

function somaDigitos(texto: string): number {
  return texto.replace(/\D/g, "").split("").reduce((soma, d) => soma + Number(d), 0);
}

export function ModalMatriz({ aberto, aoFechar, dataNascimento }: Props) {
      useEffect(() => {
    if (!aberto) return;

    const scrollY = window.scrollY;
    document.body.style.top = `-${scrollY}px`;
    document.body.classList.add("modal-aberto");

    return () => {
      document.body.classList.remove("modal-aberto");
      
      
    };
  }, [aberto]);

  if (!aberto) return null;

  const [ano, mes, dia] = dataNascimento.split("-");
  const diaStr = dia.padStart(2, "0");
  const mesStr = mes.padStart(2, "0");

  const A = reduzir(somaDigitos(diaStr));
  const B = reduzir(somaDigitos(mesStr));
  const C = reduzir(somaDigitos(ano));
  const D = reduzir(A + B + C);
  const E = reduzir(A + B);
  const F = reduzir(B + C);
  const G = reduzir(C + D);
  const H = reduzir(D + A);
  const I = reduzir(A + D);
  const J = reduzir(B + D);
  const K = reduzir(E + F);
  const L = reduzir(G + H);
  const M = reduzir(K + L);

  const calculos = [
    { letra: "A", formula: `Dia ${diaStr} → ${diaStr.split("").join(" + ")} = ${A}`, arcano: ARCANOS[A]?.nome },
    { letra: "B", formula: `Mês ${mesStr} → ${mesStr.split("").join(" + ")} = ${B}`, arcano: ARCANOS[B]?.nome },
    { letra: "C", formula: `Ano ${ano} → ${ano.split("").join(" + ")} = ${C}`, arcano: ARCANOS[C]?.nome },
    { letra: "D", formula: `A + B + C = ${A} + ${B} + ${C} = ${D}`, arcano: ARCANOS[D]?.nome },
    { letra: "E", formula: `A + B = ${A} + ${B} = ${E}`, arcano: ARCANOS[E]?.nome },
    { letra: "F", formula: `B + C = ${B} + ${C} = ${F}`, arcano: ARCANOS[F]?.nome },
    { letra: "G", formula: `C + D = ${C} + ${D} = ${G}`, arcano: ARCANOS[G]?.nome },
    { letra: "H", formula: `D + A = ${D} + ${A} = ${H}`, arcano: ARCANOS[H]?.nome },
    { letra: "I", formula: `A + D = ${A} + ${D} = ${I}`, arcano: ARCANOS[I]?.nome },
    { letra: "J", formula: `B + D = ${B} + ${D} = ${J}`, arcano: ARCANOS[J]?.nome },
    { letra: "K", formula: `E + F = ${E} + ${F} = ${K}`, arcano: ARCANOS[K]?.nome },
    { letra: "L", formula: `G + H = ${G} + ${H} = ${L}`, arcano: ARCANOS[L]?.nome },
    { letra: "M", formula: `K + L = ${K} + ${L} = ${M}`, arcano: ARCANOS[M]?.nome },
  ];

  return (
    <div className="modal-matriz" onClick={aoFechar}>
      <div className="modal-matriz__caixa" onClick={(e) => e.stopPropagation()}>
        <div className="modal-matriz__fechar-wrapper">
          <button type="button" className="modal-matriz__fechar" onClick={aoFechar} aria-label="Fechar">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        <h2 className="modal-matriz__titulo">A Matriz do Destino</h2>

        <p className="modal-matriz__texto">
          A Matriz do Destino é um sistema russo de autoconhecimento baseado nos <strong>22 Arcanos Maiores do Tarô</strong>.
          Ela combina o tarô tradicional com a numerologia, gerando um mapa energético que revela os padrões
          que regem a sua vida.
        </p>

        <h3 className="modal-matriz__subtitulo">Como funciona</h3>
        <p className="modal-matriz__texto">
          A Matriz é calculada a partir da sua <strong>data de nascimento</strong>. Cada dígito da data é somado
          e o resultado é reduzido até virar um número de <strong>1 a 22</strong> — que corresponde a um dos
          22 arcanos. A partir desses números básicos, são gerados os demais pontos através de somas diagonais.
        </p>

              <h3 className="modal-matriz__subtitulo">Como cada ponto é calculado</h3>
        <p className="modal-matriz__texto">
          Veja como a sua Matriz foi calculada a partir da sua data de nascimento:
        </p>
        <div className="modal-matriz__calculo">
          {calculos.map((c) => (
            <div key={c.letra} className="modal-matriz__calculo-linha">
              <span className="modal-matriz__calculo-letra">{c.letra}</span>
              <span className="modal-matriz__calculo-formula">
                {c.formula} → <strong>{c.arcano}</strong>
              </span>
            </div>
          ))}
        </div>

        <p className="modal-matriz__texto">
          No diagrama, cada ponto mostra a <strong>letra da posição</strong> e o <strong>número do arcano</strong>.
          Clicando em qualquer ponto, você vê a interpretação completa do arcano que caiu ali.
        </p>

        <p className="modal-matriz__texto">
          <strong>Regra da redução:</strong> se a soma passar de 22, somamos os dígitos do resultado até
          chegar num número entre 1 e 22. Exemplo: 26 → 2 + 6 = 8. Isso é necessário porque existem
          apenas 22 arcanos maiores.
        </p>

        <h3 className="modal-matriz__subtitulo">Os 13 pontos da Matriz (letras A a M)</h3>
        <p className="modal-matriz__texto">
          Cada <strong>letra</strong> representa uma posição específica na Matriz — ou seja, uma área da sua vida.
          O número que aparece em cada posição indica qual arcano rege aquela área.
        </p>
        <div className="modal-matriz__lista">
          {PONTOS.map((p) => (
            <div key={p.letra} className="modal-matriz__item">
              <span className="modal-matriz__item-letra">{p.letra}</span>
              <div className="modal-matriz__item-info">
                <strong className="modal-matriz__item-nome">{p.nome}</strong>
                <span className="modal-matriz__item-descricao">{p.descricao}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 className="modal-matriz__subtitulo">Os 22 arcanos (números 1 a 22)</h3>
        <p className="modal-matriz__texto">
          Cada <strong>número</strong> corresponde a um arcano do tarô. O arcano que aparece em cada ponto
          revela a energia que rege aquela área da sua vida.
        </p>
        <div className="modal-matriz__lista">
          {ARCANOS_LISTA.map((a) => (
            <div key={a.numero} className="modal-matriz__item">
              <span className="modal-matriz__item-letra">{a.numero}</span>
              <div className="modal-matriz__item-info">
                <strong className="modal-matriz__item-nome">{a.nome}</strong>
                <span className="modal-matriz__item-descricao">{a.resumo}</span>
              </div>
            </div>
          ))}
        </div>

  
      </div>
      <button type="button" className="modal-matriz__fechar" onClick={aoFechar} aria-label="Fechar">
        <i className="fa-solid fa-xmark" />
      </button>
    </div>
  );
}








