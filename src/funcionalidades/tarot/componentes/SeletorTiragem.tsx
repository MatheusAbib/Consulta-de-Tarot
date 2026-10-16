import { useEffect, useState } from "react";
import type { TipoTiragem, Tiragem } from "../../../nucleo/modelos/carta";
import "./SeletorTiragem.scss";

interface Props {
  tiragens: Tiragem[];
  aoEscolher: (tipo: TipoTiragem) => void;
  aoVisualizar: (tipo: TipoTiragem) => void;
  jaUsouHoje: (tipo: TipoTiragem) => boolean;
  dataUso: (tipo: TipoTiragem) => string | null;
}

function formatarTempo(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const horas = Math.floor(total / 3600);
  const minutos = Math.floor((total % 3600) / 60);
  const segundos = total % 60;
  return `${String(horas).padStart(2, "0")}h ${String(minutos).padStart(2, "0")}m ${String(segundos).padStart(2, "0")}s`;
}

export function SeletorTiragem({
  tiragens,
  aoEscolher,
  aoVisualizar,
  jaUsouHoje,
  dataUso,
}: Props) {
  const [, setTick] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTick((t) => t + 1);
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  const agora = Date.now();
  const VINTE_E_QUATRO = 24 * 60 * 60 * 1000;

  return (
    <div className="seletor-tiragem">
      <h2 className="seletor-tiragem__titulo">Escolha sua tiragem</h2>
      <p className="seletor-tiragem__subtitulo">
        Cada tiragem pode ser feita uma vez por dia.
      </p>

      <div className="seletor-tiragem__grade">
        {tiragens.map((tiragem) => {
          const bloqueada = jaUsouHoje(tiragem.id);
          const data = dataUso(tiragem.id);
          const tempoRestante = data
            ? new Date(data).getTime() + VINTE_E_QUATRO - agora
            : 0;

          return (
            <div
              key={tiragem.id}
              className={`seletor-tiragem__cartao cartao-vidro ${bloqueada ? "bloqueada" : ""}`}
            >
              <div className="seletor-tiragem__icone">
                <i className={tiragem.icone} />
              </div>
              <h3 className="seletor-tiragem__nome">{tiragem.nome}</h3>
              <p className="seletor-tiragem__descricao">{tiragem.descricao}</p>
              <span className="seletor-tiragem__quantidade">
                {tiragem.quantidadeCartas}{" "}
                {tiragem.quantidadeCartas === 1 ? "carta" : "cartas"}
              </span>

              {bloqueada ? (
                <>
                  <div className="seletor-tiragem__contador">
                    <span>Nova leitura em</span>
                    <strong>{formatarTempo(tempoRestante)}</strong>
                  </div>
                  <button
                    type="button"
                    className="seletor-tiragem__acao seletor-tiragem__acao--salva"
                    onClick={() => aoVisualizar(tiragem.id)}
                  >
                    <i className="fa-solid fa-eye" /> Ver leitura salva
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  className="seletor-tiragem__acao"
                  onClick={() => aoEscolher(tiragem.id)}
                >
                  <i className="fa-solid fa-wand-sparkles" /> Tirar cartas
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}