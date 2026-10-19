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
    <section className="resumo-planetas">
      <header className="resumo-planetas__cabecalho">
        <h3 className="resumo-planetas__titulo">Posições Planetárias</h3>
        <p className="resumo-planetas__subtitulo">
          Onde cada ponto do seu mapa estava no céu no momento do seu nascimento.
        </p>
      </header>

      <div className="resumo-planetas__destaques">
        <div className="resumo-planetas__destaque">
          <div className="resumo-planetas__destaque-info">
            <span className="resumo-planetas__destaque-rotulo">Ascendente</span>
            <span className="resumo-planetas__destaque-signo">{signoAscendente}</span>
            <span className="resumo-planetas__destaque-grau">{grauAscendente}°</span>
          </div>
          <div className="resumo-planetas__destaque-icone">
            <IconeSigno signo={signoAscendente} tamanho={56} />
          </div>
        </div>

        <div className="resumo-planetas__destaque">
          <div className="resumo-planetas__destaque-info">
            <span className="resumo-planetas__destaque-rotulo">Meio do Céu</span>
            <span className="resumo-planetas__destaque-signo">{signoMeioDoCeu}</span>
            <span className="resumo-planetas__destaque-grau">{grauMeioDoCeu}°</span>
          </div>
          <div className="resumo-planetas__destaque-icone">
            <IconeSigno signo={signoMeioDoCeu} tamanho={56} />
          </div>
        </div>
      </div>

      <div className="resumo-planetas__grade">
        {resultado.planetas.map((planeta, i) => (
          <div key={i} className="resumo-planetas__card">
            <div className="resumo-planetas__card-icone">
              <IconePlaneta planeta={planeta.nome} tamanho={36} />
            </div>
            <div className="resumo-planetas__card-info">
              <span className="resumo-planetas__card-nome">{planeta.nome}</span>
              <div className="resumo-planetas__card-posicao">
                <span className="resumo-planetas__card-grau">
                  {Math.floor(planeta.grau)}°
                </span>
                <IconeSigno signo={planeta.signo} tamanho={20} />
                <span className="resumo-planetas__card-signo">{planeta.signo}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
