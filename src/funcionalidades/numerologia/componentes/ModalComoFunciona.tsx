import { useEffect } from "react";
import "./ModalComoFunciona.scss";

interface Props {
  aberto: boolean;
  aoFechar: () => void;
}

const TABELA = [
  ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ["J", "K", "L", "M", "N", "O", "P", "Q", "R"],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ["S", "T", "U", "V", "W", "X", "Y", "Z", ""],
  [1, 2, 3, 4, 5, 6, 7, 8, ""],
];

const NUMEROS = [
  { numero: 1, vibracao: "Pioneirismo", significado: "Liderança, iniciativa, individualidade" },
  { numero: 2, vibracao: "Cooperação", significado: "Sensibilidade, parceria, diplomacia" },
  { numero: 3, vibracao: "Criatividade", significado: "Expressão, comunicação, alegria" },
  { numero: 4, vibracao: "Estrutura", significado: "Disciplina, trabalho, solidez" },
  { numero: 5, vibracao: "Liberdade", significado: "Mudança, aventura, versatilidade" },
  { numero: 6, vibracao: "Amor", significado: "Família, cuidado, responsabilidade" },
  { numero: 7, vibracao: "Sabedoria", significado: "Espiritualidade, introspecção, análise" },
  { numero: 8, vibracao: "Poder", significado: "Autoridade, realização, material" },
  { numero: 9, vibracao: "Compaixão", significado: "Humanitarismo, fim de ciclos, serviço" },
  { numero: 11, vibracao: "Mestre intuitivo", significado: "Intuição, inspiração, revelação" },
  { numero: 22, vibracao: "Mestre construtor", significado: "Grandes obras, sonho + execução" },
  { numero: 33, vibracao: "Mestre curador", significado: "Amor universal, cura, compaixão" },
];

const AREAS = [
  {
    titulo: "Caminho de Vida",
    descricao:
      "Vem da sua data de nascimento. Mostra sua missão de vida — o caminho que você veio trilhar e o propósito que orienta sua jornada.",
    exemplo: "Caminho de Vida 8 = sua missão é construir, liderar, realizar coisas concretas.",
  },
  {
    titulo: "Expressão",
    descricao:
      "Vem do seu nome completo. Mostra como você se expressa e age no mundo — seu jeito natural de se comunicar, de agir, de existir.",
    exemplo: "Expressão 8 = você se comunica com autoridade e lidera pelo exemplo.",
  },
  {
    titulo: "Alma",
    descricao:
      "Vem das vogais do nome. Mostra o que seu coração realmente deseja — a motivação profunda por trás das suas escolhas.",
    exemplo: "Alma 8 = seu desejo mais profundo é o poder, a realização, deixar marca.",
  },
  {
    titulo: "Personalidade",
    descricao:
      "Vem das consoantes do nome. Mostra como as pessoas te veem por fora — a imagem que você projeta sem perceber.",
    exemplo: "Personalidade 8 = as pessoas te veem como alguém forte, autoritário, poderoso.",
  },
  {
    titulo: "Aniversário",
    descricao:
      "Vem só do dia do nascimento. Mostra o talento especial que você trouxe ao nascer — um dom que te acompanha desde cedo.",
    exemplo: "Aniversário 8 = seu dom é materializar poder, transformar intenção em conquista.",
  },
  {
    titulo: "Maturidade",
    descricao:
      "Vem da soma do Caminho de Vida com a Expressão. Mostra quem você tende a se tornar na segunda metade da vida, geralmente após os 35 anos.",
    exemplo: "Maturidade 8 = você tende a se tornar mais poderoso, mais estratégico, mais realizado.",
  },
  {
    titulo: "Kármico",
    descricao:
      "Vem dos números que faltam no seu nome. Mostra uma lição que sua alma escolheu aprender nesta vida — uma área que precisa ser desenvolvida.",
    exemplo: "Kármico 1 = você veio aprender autonomia, a confiar em si mesmo sem apoio.",
  },
];

export function ModalComoFunciona({ aberto, aoFechar }: Props) {
  useEffect(() => {
    function aoTeclar(e: KeyboardEvent) {
      if (e.key === "Escape") aoFechar();
    }
    if (aberto) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", aoTeclar);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", aoTeclar);
    };
  }, [aberto, aoFechar]);

  if (!aberto) return null;

  return (
    <div className="modal-como-funciona" onClick={aoFechar}>
      <div className="modal-como-funciona__caixa" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-como-funciona__fechar"
          onClick={aoFechar}
          aria-label="Fechar"
        >
          <i className="fa-solid fa-xmark" />
        </button>

        <h2 className="modal-como-funciona__titulo">Como a numerologia funciona</h2>

        <p className="modal-como-funciona__texto">
          A numerologia atribui um valor de 1 a 9 para cada letra do alfabeto,
          seguindo uma tabela conhecida como <strong>tabela pitagórica</strong>.
          A partir dela, somamos os valores das letras do seu nome e os dígitos
          da sua data de nascimento. O resultado é reduzido até virar um único
          dígito — exceto 11, 22 e 33, que são considerados números mestres.
        </p>

        <h3 className="modal-como-funciona__subtitulo">Tabela pitagórica</h3>
        <div className="modal-como-funciona__tabela">
          {TABELA.map((linha, i) => (
            <div key={i} className="modal-como-funciona__linha">
              {linha.map((celula, j) => (
                <span key={j} className="modal-como-funciona__celula">
                  {celula}
                </span>
              ))}
            </div>
          ))}
        </div>

        <h3 className="modal-como-funciona__subtitulo">O que cada número significa</h3>
        <p className="modal-como-funciona__texto">
          Cada número tem uma vibração específica. É o que determina o
          significado das interpretações — em qualquer área.
        </p>
        <div className="modal-como-funciona__tabela-numeros">
          {NUMEROS.map((item) => (
            <div key={item.numero} className="modal-como-funciona__linha-numero">
              <span className="modal-como-funciona__numero-destaque">{item.numero}</span>
              <div className="modal-como-funciona__numero-info">
                <strong className="modal-como-funciona__numero-vibracao">{item.vibracao}</strong>
                <span className="modal-como-funciona__numero-significado">
                  {item.significado}
                </span>
              </div>
            </div>
          ))}
        </div>

        <h3 className="modal-como-funciona__subtitulo">O que cada área analisa</h3>
        <p className="modal-como-funciona__texto">
          O mesmo número significa coisas diferentes dependendo de onde ele
          aparece. É isso que faz cada área ser única — mesmo quando o número é o mesmo.
        </p>
        <div className="modal-como-funciona__areas">
          {AREAS.map((area) => (
            <div key={area.titulo} className="modal-como-funciona__area">
              <h4 className="modal-como-funciona__area-titulo">{area.titulo}</h4>
              <p className="modal-como-funciona__area-descricao">{area.descricao}</p>
              <p className="modal-como-funciona__area-exemplo">{area.exemplo}</p>
            </div>
          ))}
        </div>

        <h3 className="modal-como-funciona__subtitulo">Exemplo prático</h3>
        <p className="modal-como-funciona__texto">
          Nascimento em <strong>20/09/2004</strong>:
        </p>
        <p className="modal-como-funciona__exemplo">
          2 + 0 + 0 + 9 + 2 + 0 + 0 + 4 = 17 → 1 + 7 = <strong>8</strong>
        </p>
        <p className="modal-como-funciona__texto">
          Portanto, o Caminho de Vida é <strong>8</strong>. Isso significa que a
          missão de vida dessa pessoa é construir, liderar, realizar coisas
          concretas que durem.
        </p>
      </div>
    </div>
  );
}
