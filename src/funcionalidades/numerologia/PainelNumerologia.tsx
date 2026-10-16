import { useEffect, useState } from "react";
import { useNumerologia } from "./ganchos/useNumerologia";
import { usePerfil } from "../../nucleo/contextos/PerfilContexto";
import { AvisoPreencherPerfil } from "../../compartilhado/componentes/AvisoPreencherPerfil";
import { ResultadoNumero } from "./componentes/ResultadoNumero";
import { MandalaNumeros } from "./componentes/MandalaNumeros";
import { ModalComoFunciona } from "./componentes/ModalComoFunciona";
import { CAMINHO_DE_VIDA } from "./dados/interpretacoes/caminho-de-vida";
import { EXPRESSAO } from "./dados/interpretacoes/expressao";
import { ALMA } from "./dados/interpretacoes/alma";
import { PERSONALIDADE } from "./dados/interpretacoes/personalidade";
import { ANIVERSARIO } from "./dados/interpretacoes/aniversario";
import { MATURIDADE } from "./dados/interpretacoes/maturidade";
import { KARMICO } from "./dados/interpretacoes/karmico";
import { RESUMOS } from "./dados/resumos";
import type { InterpretacaoNumero } from "./dados/interpretacoes/modelo";
import "./PainelNumerologia.scss";

export interface NumeroInfo {
  chave: string;
  numero: number;
  titulo: string;
  contexto: string;
}

function buscarInterpretacao(
  chave: string,
  numero: number
): InterpretacaoNumero | undefined {
  if (chave === "caminhoDeVida") return CAMINHO_DE_VIDA[numero];
  if (chave === "expressao") return EXPRESSAO[numero];
  if (chave === "alma") return ALMA[numero];
  if (chave === "personalidade") return PERSONALIDADE[numero];
  if (chave === "aniversario") return ANIVERSARIO[numero];
  if (chave === "maturidade") return MATURIDADE[numero];
  if (chave === "karmico") return KARMICO[numero];
  return undefined;
}

export function PainelNumerologia() {
  const { perfil, completo } = usePerfil();
  const { resultado, erro, calcular } = useNumerologia();
  const [chaveSelecionada, setChaveSelecionada] = useState<string>("caminhoDeVida");
  const [modalAberto, setModalAberto] = useState(false);

  useEffect(() => {
    if (completo && perfil && !resultado) {
      calcular({
        nomeCompleto: perfil.nome,
        dataNascimento: perfil.dataNascimento,
      });
    }
  }, [completo, perfil, resultado, calcular]);

  if (!completo) {
    return (
      <div className="painel-numerologia">
        <AvisoPreencherPerfil
          titulo="Numerologia"
          descricao="Preciso do seu nome completo e data de nascimento para calcular seus números."
          icone="fa-solid fa-hashtag"
        />
      </div>
    );
  }

  const numeros: NumeroInfo[] = resultado
    ? [
        {
          chave: "caminhoDeVida",
          numero: resultado.caminhoDeVida,
          titulo: "Caminho de Vida",
          contexto: "Seu propósito de vida e missão principal.",
        },
        {
          chave: "expressao",
          numero: resultado.expressao,
          titulo: "Expressão",
          contexto: "Como você se mostra e se comunica com o mundo.",
        },
        {
          chave: "alma",
          numero: resultado.alma,
          titulo: "Alma",
          contexto: "O que seu coração realmente deseja.",
        },
        {
          chave: "personalidade",
          numero: resultado.personalidade,
          titulo: "Personalidade",
          contexto: "Como as pessoas te percebem por fora.",
        },
        {
          chave: "aniversario",
          numero: resultado.aniversario,
          titulo: "Aniversário",
          contexto: "O talento especial que você trouxe ao nascer.",
        },
        {
          chave: "maturidade",
          numero: resultado.maturidade,
          titulo: "Maturidade",
          contexto: "Quem você se torna na segunda metade da vida.",
        },
        {
          chave: "karmico",
          numero: resultado.karmico,
          titulo: "Kármico",
          contexto: "Lições que sua alma escolheu aprender nesta vida.",
        },
      ]
    : [];

  const infoAtiva = numeros.find((n) => n.chave === chaveSelecionada) ?? numeros[0];

  return (
    <div className="painel-numerologia">
      <header className="painel-numerologia__cabecalho">
        <div className="painel-numerologia__titulo-linha">
          <h2 className="painel-numerologia__titulo">Numerologia</h2>
          <button
            type="button"
            className="painel-numerologia__info"
            onClick={() => setModalAberto(true)}
            aria-label="Como funciona"
          >
            <i className="fa-solid fa-circle-info" />
          </button>
        </div>
      </header>

      {erro && (
        <div className="painel-numerologia__erro">
          <i className="fa-solid fa-triangle-exclamation" />
          <span>{erro}</span>
        </div>
      )}

      {resultado && infoAtiva && (
        <>
          <MandalaNumeros
            numeros={numeros}
            chaveAtiva={chaveSelecionada}
            aoSelecionar={setChaveSelecionada}
          />

          <div className="painel-numerologia__abas">
            {numeros.map((info) => {
              const ativo = info.chave === chaveSelecionada;
              return (
                <button
                  key={info.chave}
                  type="button"
                  className={`painel-numerologia__aba ${ativo ? "ativa" : ""}`}
                  onClick={() => setChaveSelecionada(info.chave)}
                >
                  <span className="painel-numerologia__aba-numero">{info.numero}</span>
                  <span className="painel-numerologia__aba-titulo">{info.titulo}</span>
                </button>
              );
            })}
          </div>

          <ResultadoNumero
            numero={infoAtiva.numero}
            titulo={infoAtiva.titulo}
            contexto={infoAtiva.contexto}
            resumo={(RESUMOS as any)[infoAtiva.chave]?.[infoAtiva.numero]}
            interpretacao={buscarInterpretacao(infoAtiva.chave, infoAtiva.numero)}
            destaque={infoAtiva.chave === "caminhoDeVida"}
          />
        </>
      )}

      <ModalComoFunciona aberto={modalAberto} aoFechar={() => setModalAberto(false)} />
    </div>
  );
}
