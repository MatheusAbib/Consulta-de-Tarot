import { Icon } from "@iconify/react";
import { usePerfil } from "../../../nucleo/contextos/PerfilContexto";
import { calcularFaseLua } from "../../calendario-lunar/servicos/lunar";
import { IconeFaseLua } from "../../calendario-lunar/componentes/IconeFaseLua";
import { calcularCiclos } from "../../numerologia/servicos/ciclos";
import { DIA_PESSOAL } from "../../numerologia/dados/interpretacoes/ciclos";
import type { AbaId } from "../../../compartilhado/componentes/AbasInline";
import "./PainelInicio.scss";

interface Props {
  onMudar: (id: AbaId) => void;
}

interface CartaoInfo {
  titulo: string;
  texto: string;
  cor: string;
  aba: AbaId;
  svg: React.ReactNode;
}

const CARTOES: CartaoInfo[] = [
  {
    titulo: "Tarô",
    texto: "Três tiragens: carta do dia, passado/presente/futuro e cruz celta.",
    cor: "roxo",
    aba: "tarot",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="3" width="12" height="18" rx="2" />
        <rect x="5" y="5" width="12" height="18" rx="2" />
        <path d="M9 12h2M13 12h2M9 16h2M13 16h2" />
      </svg>
    ),
  },
  {
    titulo: "Mapa Astral",
    texto: "Sol, Lua, Ascendente, planetas, aspectos e sinastria.",
    cor: "azul",
    aba: "astrologia",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    ),
  },
  {
    titulo: "Numerologia",
    texto: "Sete números pessoais, ciclos e compatibilidade.",
    cor: "rosa",
    aba: "numerologia",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" x2="16" y1="6" y2="6" />
        <line x1="16" x2="16" y1="14" y2="18" />
        <path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01" />
      </svg>
    ),
  },
  {
    titulo: "Matriz do Destino",
    texto: "Treze pontos baseados nos 22 arcanos maiores.",
    cor: "laranja",
    aba: "matriz-destino",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        <circle cx="12" cy="4" r="1" />
        <circle cx="12" cy="20" r="1" />
        <circle cx="4" cy="12" r="1" />
        <circle cx="20" cy="12" r="1" />
        <circle cx="6" cy="6" r="1" />
        <circle cx="18" cy="6" r="1" />
        <circle cx="6" cy="18" r="1" />
        <circle cx="18" cy="18" r="1" />
      </svg>
    ),
  },
  {
    titulo: "Signos",
    texto: "Os 12 signos com essência, amor, carreira e desafios.",
    cor: "verde",
    aba: "signos",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18" />
        <path d="M3 12h18" />
      </svg>
    ),
  },
  {
    titulo: "Biblioteca",
    texto: "Cristais, ervas, incensos, velas, chakras, elementos e banhos.",
    cor: "azul",
    aba: "biblioteca",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5V5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2Z" />
        <path d="M8 7h8M8 11h8M8 15h5" />
      </svg>
    ),
  },
];

export function PainelInicio({ onMudar }: Props) {
  const { perfil } = usePerfil();
  const hoje = new Date();

  const luaHoje = calcularFaseLua(hoje);
  const ciclos = perfil?.dataNascimento
    ? calcularCiclos(perfil.dataNascimento, hoje)
    : null;
  const numeroDia = ciclos
    ? DIA_PESSOAL[ciclos.diaPessoal]
    : null;

  const nome = perfil?.nome;

  return (
    <div className="painel-inicio">
      <header className="painel-inicio__boas-vindas">
        <h1 className="painel-inicio__saudacao">
          {nome ? `Olá, ${nome}.` : "Bem-vindo ao ORACULVM."}
        </h1>
        <p className="painel-inicio__convite">
          {nome
            ? "O que vamos explorar hoje?"
            : "Escolha um oráculo para começar sua jornada."}
        </p>
      </header>

      <section className="painel-inicio__destaques">
        <button
          type="button"
          className="painel-inicio__destaque"
          onClick={() => onMudar("calendario-lunar")}
        >
          <div className="painel-inicio__destaque-topo">
            <span className="painel-inicio__destaque-rotulo">
              <Icon icon="mdi:moon-waning-crescent" width={14} /> Lua de Hoje
            </span>
            <span className="painel-inicio__destaque-ver">Ver →</span>
          </div>
          <div className="painel-inicio__destaque-conteudo">
            <div className="painel-inicio__destaque-icone">
              <IconeFaseLua fase={luaHoje.fase} tamanho={56} />
            </div>
            <div>
              <h3 className="painel-inicio__destaque-titulo">
                {luaHoje.nomeFase}
              </h3>
              <p className="painel-inicio__destaque-texto">
                {luaHoje.descricao}
              </p>
            </div>
          </div>
          <div className="painel-inicio__destaque-metricas">
            <span>{luaHoje.iluminacao}% iluminada</span>
            <span>{luaHoje.idadeDias} dias de idade</span>
          </div>
        </button>

        <button
          type="button"
          className="painel-inicio__destaque"
          onClick={() => onMudar("numerologia")}
        >
          <div className="painel-inicio__destaque-topo">
            <span className="painel-inicio__destaque-rotulo">
              <Icon icon="mdi:numeric" width={14} /> Número de Hoje
            </span>
            <span className="painel-inicio__destaque-ver">Ver →</span>
          </div>
          {numeroDia ? (
            <>
              <div className="painel-inicio__destaque-conteudo">
                <div className="painel-inicio__destaque-numero">
                  {ciclos?.diaPessoal}
                </div>
                <div>
                  <h3 className="painel-inicio__destaque-titulo">
                    {numeroDia.titulo}
                  </h3>
                  <p className="painel-inicio__destaque-texto">
                    {numeroDia.significado}
                  </p>
                </div>
              </div>
              <div className="painel-inicio__destaque-metricas">
                <span>Ciclo do dia</span>
              </div>
            </>
          ) : (
            <p className="painel-inicio__destaque-vazio">
              Complete seu perfil para ver o número do dia.
            </p>
          )}
        </button>
      </section>

      <section className="painel-inicio__oraculos">
        <h2 className="painel-inicio__secao-titulo">Seus oráculos</h2>
        <div className="painel-inicio__grade">
          {CARTOES.map((cartao) => (
            <button
              key={cartao.titulo}
              type="button"
              className={`painel-inicio__cartao painel-inicio__cartao--${cartao.cor}`}
              onClick={() => onMudar(cartao.aba)}
            >
              <div className="painel-inicio__cartao-topo">
                <span className="painel-inicio__cartao-ver">Ver</span>
                <span className="painel-inicio__cartao-seta">→</span>
              </div>
              <div className="painel-inicio__cartao-icone">{cartao.svg}</div>
              <div className="painel-inicio__cartao-conteudo">
                <h3 className="painel-inicio__cartao-titulo">{cartao.titulo}</h3>
                <p className="painel-inicio__cartao-texto">{cartao.texto}</p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}


