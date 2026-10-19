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
  { titulo: "Caminho de Vida", descricao: "Vem da sua data de nascimento. Mostra sua missão de vida — o caminho que você veio trilhar e o propósito que orienta sua jornada.", exemplo: "Caminho de Vida 8 = sua missão é construir, liderar, realizar coisas concretas." },
  { titulo: "Expressão", descricao: "Vem do seu nome completo. Mostra como você se expressa e age no mundo — seu jeito natural de se comunicar, de agir, de existir.", exemplo: "Expressão 8 = você se comunica com autoridade e lidera pelo exemplo." },
  { titulo: "Alma", descricao: "Vem das vogais do nome. Mostra o que seu coração realmente deseja — a motivação profunda por trás das suas escolhas.", exemplo: "Alma 8 = seu desejo mais profundo é o poder, a realização, deixar marca." },
  { titulo: "Personalidade", descricao: "Vem das consoantes do nome. Mostra como as pessoas te veem por fora — a imagem que você projeta sem perceber.", exemplo: "Personalidade 8 = as pessoas te veem como alguém forte, autoritário, poderoso." },
  { titulo: "Aniversário", descricao: "Vem só do dia do nascimento. Mostra o talento especial que você trouxe ao nascer — um dom que te acompanha desde cedo.", exemplo: "Aniversário 8 = seu dom é materializar poder, transformar intenção em conquista." },
  { titulo: "Maturidade", descricao: "Vem da soma do Caminho de Vida com a Expressão. Mostra quem você tende a se tornar na segunda metade da vida, geralmente após os 35 anos.", exemplo: "Maturidade 8 = você tende a se tornar mais poderoso, mais estratégico, mais realizado." },
  { titulo: "Kármico", descricao: "Vem dos números que faltam no seu nome. Mostra uma lição que sua alma escolheu aprender nesta vida — uma área que precisa ser desenvolvida.", exemplo: "Kármico 1 = você veio aprender autonomia, a confiar em si mesmo sem apoio." },
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
        <div className="modal-como-funciona__fechar-wrapper">
          <button type="button" className="modal-como-funciona__fechar" onClick={aoFechar} aria-label="Fechar">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        <h2 className="modal-como-funciona__titulo">Como a numerologia funciona</h2>
        <p className="modal-como-funciona__texto">
          A numerologia atribui um valor de 1 a 9 para cada letra do alfabeto,
          seguindo a <strong>tabela pitagórica</strong>. Somamos os valores das
          letras do seu nome e os dígitos da sua data de nascimento. O resultado
          é reduzido até virar um único dígito — exceto <strong>11, 22 e 33</strong>,
          que são números mestres.
        </p>

        <section className="modal-como-funciona__secao">
          <h3 className="modal-como-funciona__subtitulo">Tabela pitagórica</h3>
          <div className="modal-como-funciona__tabela">
            {TABELA.map((linha, i) => (
              <div key={i} className="modal-como-funciona__linha">
                {linha.map((celula, j) => (
                  <span key={j} className="modal-como-funciona__celula">{celula}</span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="modal-como-funciona__secao">
          <h3 className="modal-como-funciona__subtitulo">O que cada número significa</h3>
          <p className="modal-como-funciona__texto">
            Cada número tem uma vibração específica que define o significado das
            interpretações em qualquer área.
          </p>
          <div className="modal-como-funciona__numeros">
            {NUMEROS.map((item) => (
              <div key={item.numero} className="modal-como-funciona__numero-card">
                <span className="modal-como-funciona__numero-destaque">{item.numero}</span>
                <div className="modal-como-funciona__numero-info">
                  <strong>{item.vibracao}</strong>
                  <span>{item.significado}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="modal-como-funciona__secao">
          <h3 className="modal-como-funciona__subtitulo">O que cada área analisa</h3>
          <p className="modal-como-funciona__texto">
            O mesmo número significa coisas diferentes dependendo de onde aparece.
          </p>
          <div className="modal-como-funciona__areas">
            {AREAS.map((area) => (
              <div key={area.titulo} className="modal-como-funciona__area">
                <h4>{area.titulo}</h4>
                <p>{area.descricao}</p>
                <p className="modal-como-funciona__area-exemplo">{area.exemplo}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="modal-como-funciona__secao">
          <h3 className="modal-como-funciona__subtitulo">Exemplo prático</h3>
          <p className="modal-como-funciona__texto">Nascimento em <strong>20/09/2004</strong>:</p>
          <div className="modal-como-funciona__exemplo">
            2 + 0 + 0 + 9 + 2 + 0 + 0 + 4 = 17 → 1 + 7 = <strong>8</strong>
          </div>
          <p className="modal-como-funciona__texto">
            O Caminho de Vida é <strong>8</strong> — missão de construir, liderar,
            realizar coisas concretas que durem.
          </p>
        </section>

        <section className="modal-como-funciona__secao">
          <h3 className="modal-como-funciona__subtitulo">Ciclos Pessoais (Ano, Mês e Dia)</h3>
          <p className="modal-como-funciona__texto">
            Além dos números fixos, a numerologia calcula <strong>ciclos que mudam
            com o tempo</strong>. Eles mostram o "clima" de cada período:
          </p>
          <ul className="modal-como-funciona__lista">
            <li><strong>Ano Pessoal</strong> — o tema macro do ano (1 a 9). Um ciclo completo dura 9 anos.</li>
            <li><strong>Mês Pessoal</strong> — o tom do mês dentro desse ano.</li>
            <li><strong>Dia Pessoal</strong> — a energia específica do dia.</li>
          </ul>
          <p className="modal-como-funciona__texto">
            Diferente dos números fixos, os ciclos <strong>nunca usam números
            mestres</strong>. São sempre reduzidos a 1 dígito.
          </p>

          <h4 className="modal-como-funciona__subtitulo-menor">Como a conta é feita</h4>
          <div className="modal-como-funciona__exemplo">
            Ano Pessoal = red(dia_nasc + mês_nasc + dia_hoje + mês_hoje + ano_hoje)<br />
            Mês Pessoal = red(Ano Pessoal + mês_hoje)<br />
            Dia Pessoal = red(Mês Pessoal + dia_hoje)
          </div>
          <p className="modal-como-funciona__texto">
            <code>red()</code> = reduzir somando os algarismos até sobrar 1 dígito.
            Ex.: 14 → 1 + 4 = <strong>5</strong>.
          </p>

          <h4 className="modal-como-funciona__subtitulo-menor">Exemplo prático dos ciclos</h4>
          <p className="modal-como-funciona__texto">
            Nascido em <strong>20/09/2004</strong>, consultando em <strong>19/10/2026</strong>:
          </p>
          <div className="modal-como-funciona__exemplo">
            20 → 2 · 9 → 9 · 19 → 1 · 10 → 1 · 2026 → 1<br />
            Ano Pessoal = red(2 + 9 + 1 + 1 + 1) = red(14) = <strong>5</strong><br />
            Mês Pessoal = red(5 + 1) = <strong>6</strong><br />
            Dia Pessoal = red(6 + 1) = <strong>7</strong>
          </div>
          <p className="modal-como-funciona__texto">
            <strong>Ano 5</strong> é o tema do ano: liberdade, mudança, movimento.
            O <strong>Mês 6</strong> pede cuidado com casa e afetos. O{" "}
            <strong>Dia 7</strong> é de silêncio e introspecção.
          </p>
        </section>
      </div>
      <button type="button" className="modal-como-funciona__fechar" onClick={aoFechar} aria-label="Fechar">
        <i className="fa-solid fa-xmark" />
      </button>
    </div>
  );
}



