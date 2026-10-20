import { useEffect } from "react";
import "./ModalSignos.scss";

interface Props {
  aberto: boolean;
  aoFechar: () => void;
}

const ELEMENTOS = [
  { nome: "Fogo", signos: "Áries, Leão, Sagitário", descricao: "Energia, ação, entusiasmo, iniciativa. Signos de fogo são movidos por impulso e paixão — precisam de movimento pra viver." },
  { nome: "Terra", signos: "Touro, Virgem, Capricórnio", descricao: "Solidez, constância, prática. Signos de terra são movidos por concretude — precisam construir, sentir, materializar." },
  { nome: "Ar", signos: "Gêmeos, Libra, Aquário", descricao: "Pensamento, comunicação, relação. Signos de ar são movidos por ideias — precisam entender, conectar, trocar." },
  { nome: "Água", signos: "Câncer, Escorpião, Peixes", descricao: "Emoção, intuição, profundidade. Signos de água são movidos por sentimento — precisam sentir, intuir, se dissolver." },
];

const MODALIDADES = [
  { nome: "Cardinal", signos: "Áries, Câncer, Libra, Capricórnio", descricao: "Inicia. São os que começam coisas, abrem caminhos, tomam a frente. Movimento de arranque." },
  { nome: "Fixo", signos: "Touro, Leão, Escorpião, Aquário", descricao: "Sustenta. São os que mantêm o rumo, resistem, aprofundam. Movimento de permanência." },
  { nome: "Mutável", signos: "Gêmeos, Virgem, Sagitário, Peixes", descricao: "Adapta. São os que se ajustam, mudam, se transformam. Movimento de transição." },
];

export function ModalSignos({ aberto, aoFechar }: Props) {
        useEffect(() => {
    if (!aberto) return;
    document.body.classList.add("modal-aberto");
    return () => {
      document.body.classList.remove("modal-aberto");
    };
  }, [aberto]);

  if (!aberto) return null;

  return (
    <div className="modal-signos" onClick={aoFechar}>
      <div className="modal-signos__caixa" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-signos__fechar" onClick={aoFechar} aria-label="Fechar">
          <i className="fa-solid fa-xmark" />
        </button>
        <h2 className="modal-signos__titulo">Os Doze Signos</h2>

        <p className="modal-signos__texto">
          Os signos do zodíaco são doze divisões do céu, cada uma com cerca de 30 graus. Quando alguém diz
          "sou de Áries" ou "sou de Peixes", geralmente está se referindo ao <strong>signo solar</strong> — a posição
          que o Sol ocupava no céu no momento do nascimento. Mas há outras camadas: a Lua, o Ascendente,
          e todos os planetas também têm signos.
        </p>

        <h3 className="modal-signos__subtitulo">O que cada signo tem</h3>
        <p className="modal-signos__texto">
          Cada signo combina um <strong>elemento</strong> (que mostra a natureza básica), uma <strong>modalidade</strong>{" "}
          (que mostra como ele age) e um <strong>planeta regente</strong> (que influencia suas características).
          É a combinação dessas três coisas que forma a personalidade única de cada signo.
        </p>

        <h3 className="modal-signos__subtitulo">Os quatro elementos</h3>
        <div className="modal-signos__lista">
          {ELEMENTOS.map((el) => (
            <div key={el.nome} className="modal-signos__item">
              <h4 className="modal-signos__item-titulo">{el.nome}</h4>
              <span className="modal-signos__item-signos">{el.signos}</span>
              <p className="modal-signos__item-descricao">{el.descricao}</p>
            </div>
          ))}
        </div>

        <h3 className="modal-signos__subtitulo">As três modalidades</h3>
        <div className="modal-signos__lista">
          {MODALIDADES.map((mod) => (
            <div key={mod.nome} className="modal-signos__item">
              <h4 className="modal-signos__item-titulo">{mod.nome}</h4>
              <span className="modal-signos__item-signos">{mod.signos}</span>
              <p className="modal-signos__item-descricao">{mod.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}











