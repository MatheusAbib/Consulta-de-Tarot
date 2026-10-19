import { useCallback, useEffect, useState } from "react";
import type {
  Carta,
  Leitura,
  LeituraSalva,
  TipoTiragem,
  Tiragem,
} from "../../../nucleo/modelos/carta";
import { CARTAS_TAROT } from "../../../nucleo/dados/cartas-tarot";
import { TIRAGENS } from "../../../nucleo/dados/tiragens";
import {
  lerArmazenamento,
  salvarArmazenamento,
  CHAVE_LIMITE_TAROT,
} from "../../../nucleo/servicos/armazenamento";

interface RegistroLimite {
  [tipo: string]: LeituraSalva;
}

const VINTE_E_QUATRO_HORAS = 24 * 60 * 60 * 1000;

function embaralhar<T>(lista: T[]): T[] {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function limparExpirados(registro: RegistroLimite): RegistroLimite {
  const agora = Date.now();
  const validos: RegistroLimite = {};
  for (const [tipo, leitura] of Object.entries(registro)) {
    if (agora - new Date(leitura.data).getTime() < VINTE_E_QUATRO_HORAS) {
      validos[tipo] = leitura;
    }
  }
  return validos;
}

export function useTarot() {
  const [tiragemAtiva, setTiragemAtiva] = useState<Tiragem | null>(null);
  const [cartasDisponiveis, setCartasDisponiveis] = useState<Carta[]>([]);
  const [leitura, setLeitura] = useState<Leitura>([]);
  const [pergunta, setPergunta] = useState<string>("");
  const [leiturasSalvas, setLeiturasSalvas] = useState<RegistroLimite>({});
  const [mostrandoCampoPergunta, setMostrandoCampoPergunta] = useState(false);
  const [tiragemPendente, setTiragemPendente] = useState<Tiragem | null>(null);

  useEffect(() => {
    const salvas = lerArmazenamento<RegistroLimite>(CHAVE_LIMITE_TAROT) ?? {};
    const validas = limparExpirados(salvas);
    setLeiturasSalvas(validas);
    if (Object.keys(validas).length !== Object.keys(salvas).length) {
      salvarArmazenamento(CHAVE_LIMITE_TAROT, validas);
    }
  }, []);

  const jaUsouHoje = useCallback(
    (tipo: TipoTiragem) => Boolean(leiturasSalvas[tipo]),
    [leiturasSalvas]
  );

  const leituraSalvaDe = useCallback(
    (tipo: TipoTiragem) => leiturasSalvas[tipo] ?? null,
    [leiturasSalvas]
  );

  const escolherTiragem = useCallback(
    (tipo: TipoTiragem) => {
      const tiragem = TIRAGENS.find((t) => t.id === tipo);
      if (!tiragem) return false;
      if (leiturasSalvas[tipo]) return false;

      setTiragemPendente(tiragem);
      setMostrandoCampoPergunta(true);
      setPergunta("");
      return true;
    },
    [leiturasSalvas]
  );

  const confirmarPergunta = useCallback(
    (textoPergunta: string) => {
      if (!tiragemPendente) return;

      const quantidade =
        tiragemPendente.id === "uma-carta" || tiragemPendente.id === "tres-cartas"
          ? 18
          : tiragemPendente.quantidadeCartas;
      const embaralhadas = embaralhar(CARTAS_TAROT).slice(0, quantidade);

      setPergunta(textoPergunta.trim());
      setTiragemAtiva(tiragemPendente);
      setCartasDisponiveis(embaralhadas);
      setLeitura(Array(tiragemPendente.quantidadeCartas).fill(null));
      setMostrandoCampoPergunta(false);
      setTiragemPendente(null);
    },
    [tiragemPendente]
  );

  const cancelarPergunta = useCallback(() => {
    setTiragemPendente(null);
    setMostrandoCampoPergunta(false);
    setPergunta("");
  }, []);

  const revelarCartaNaPosicao = useCallback(
    (carta: Carta, posicao: number) => {
      setLeitura((atual) => {
        if (posicao < 0 || posicao >= atual.length) return atual;
        if (atual[posicao]) return atual;
        const copia = [...atual];
        copia[posicao] = carta;
        return copia;
      });
    },
    []
  );

  const escolherProximaCarta = useCallback((carta: Carta) => {
    setLeitura((atual) => {
      const vazia = atual.findIndex((c) => c === null);
      if (vazia === -1) return atual;
      const copia = [...atual];
      copia[vazia] = carta;
      return copia;
    });
  }, []);

  const finalizar = useCallback(() => {
    if (!tiragemAtiva) return;
    setLeiturasSalvas((atual) => {
      if (atual[tiragemAtiva.id]) return atual;
      const cartasFinal = leitura.filter((c): c is Carta => c !== null);
      const salva: LeituraSalva = {
        tipo: tiragemAtiva.id,
        data: new Date().toISOString(),
        cartas: cartasFinal,
        pergunta: pergunta || undefined,
      };
      const novo = { ...atual, [tiragemAtiva.id]: salva };
      salvarArmazenamento(CHAVE_LIMITE_TAROT, novo);
      return novo;
    });
  }, [tiragemAtiva, leitura, pergunta]);

  const visualizarSalva = useCallback(
    (tipo: TipoTiragem) => {
      const salva = leiturasSalvas[tipo];
      if (!salva) return false;
      const tiragem = TIRAGENS.find((t) => t.id === tipo);
      if (!tiragem) return false;

      const leituraCompleta: Leitura = Array(tiragem.quantidadeCartas).fill(null);
      salva.cartas.forEach((carta, indice) => {
        if (indice < leituraCompleta.length) leituraCompleta[indice] = carta;
      });

      setTiragemAtiva(tiragem);
      setCartasDisponiveis(salva.cartas);
      setLeitura(leituraCompleta);
      setPergunta(salva.pergunta ?? "");
      return true;
    },
    [leiturasSalvas]
  );

  const reiniciar = useCallback(() => {
    setTiragemAtiva(null);
    setCartasDisponiveis([]);
    setLeitura([]);
    setPergunta("");
    setTiragemPendente(null);
    setMostrandoCampoPergunta(false);
  }, []);

  const leituraCompleta =
    tiragemAtiva !== null &&
    leitura.length === tiragemAtiva.quantidadeCartas &&
    leitura.every((c) => c !== null);
  const dataUso = useCallback(
    (tipo: TipoTiragem) => leiturasSalvas[tipo]?.data ?? null,
    [leiturasSalvas]
  );


  return {
    tiragens: TIRAGENS,
    tiragemAtiva,
    cartasDisponiveis,
    leitura,
    pergunta,
    leituraCompleta,
    jaUsouHoje,
    leituraSalvaDe,
    dataUso,
    mostrandoCampoPergunta,
    tiragemPendente,
    escolherTiragem,
    confirmarPergunta,
    cancelarPergunta,
    escolherProximaCarta,
    revelarCartaNaPosicao,
    visualizarSalva,
    finalizar,
    reiniciar,
  };
}


