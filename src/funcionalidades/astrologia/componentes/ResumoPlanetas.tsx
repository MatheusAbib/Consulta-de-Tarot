import { grauParaSigno } from "../servicos/astrologia";
import type { ResultadoMapaAstral } from "../servicos/astrologia";
import { IconePlaneta } from "./IconePlaneta";
import { IconeSigno } from "./IconeSigno";
import "./ResumoPlanetas.scss";

interface Props {
  resultado: ResultadoMapaAstral;
}

export function ResumoPlanetas({ resultado }: Props) {
  const signoAscendente = grauParaSigno(resultado.ascendente);
  const grauAscendente = Math.floor(resultado.ascendente % 30);
  const signoMeioDoCeu = grauParaSigno(resultado.meioDoCeu);
  const grauMeioDoCeu = Math.floor(resultado.meioDoCeu % 30);

  return (
    <div className="resumo-planetas">
      <h3 className="resumo-planetas__titulo">Posições Planetárias</h3>

      <div className="resumo-planetas__destaques">
        <div className="resumo-planetas__destaque cartao-vidro">
          <span className="resumo-planetas__destaque-rotulo">Ascendente</span>
          <div className="resumo-planetas__destaque-valor">
            <IconeSigno signo={signoAscendente} tamanho={48} />
            <span>{signoAscendente}</span>
          </div>
          <span className="resumo-planetas__destaque-grau">{grauAscendente}°</span>
        </div>

        <div className="resumo-planetas__destaque cartao-vidro">
          <span className="resumo-planetas__destaque-rotulo">Meio do Céu</span>
          <div className="resumo-planetas__destaque-valor">
            <IconeSigno signo={signoMeioDoCeu} tamanho={48} />
            <span>{signoMeioDoCeu}</span>
          </div>
          <span className="resumo-planetas__destaque-grau">{grauMeioDoCeu}°</span>
        </div>
      </div>

      <div className="resumo-planetas__lista">
        {resultado.planetas.map((planeta, i) => (
          <div key={i} className="resumo-planetas__item">
            <div className="resumo-planetas__item-planeta">
              <IconePlaneta planeta={planeta.nome} tamanho={44} />
              <span>{planeta.nome}</span>
            </div>

            <div className="resumo-planetas__item-posicao">
              <span className="resumo-planetas__item-grau">
                {Math.floor(planeta.grau)}°
              </span>
              <IconeSigno signo={planeta.signo} tamanho={32} />
              <span className="resumo-planetas__item-signo">{planeta.signo}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
