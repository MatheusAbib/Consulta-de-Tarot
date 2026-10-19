import { useState } from "react";
import { ListaBiblioteca } from "./componentes/ListaBiblioteca";
import type { FichaItem } from "./componentes/FichaBiblioteca";
import { CRISTAIS } from "./dados/cristais";
import { ERVAS } from "./dados/ervas";
import { VELAS } from "./dados/velas";
import { CHAKRAS } from "./dados/chakras";
import { ELEMENTOS } from "./dados/elementos";
import { BANHOS } from "./dados/banhos";
import { INCENSOS } from "./dados/incensos";
import "./PainelBiblioteca.scss";

type Secao =
  | "cristais"
  | "ervas"
  | "incensos"
  | "velas"
  | "chakras"
  | "elementos"
  | "banhos";

interface AbaInfo {
  id: Secao;
  rotulo: string;
  titulo: string;
  subtitulo: string;
  fichas: FichaItem[];
}

export function PainelBiblioteca() {
  const [secao, setSecao] = useState<Secao>("cristais");

  const fichasCristais: FichaItem[] = CRISTAIS.map((c) => ({
    nome: c.nome,
    icone: c.icone,
    descricao: c.descricao,
    propriedades: c.propriedades,
    uso: c.uso,
    cuidados: c.cuidados,
    meta: [
      { rotulo: "Cor", valor: c.cor },
      { rotulo: "Elemento", valor: c.elemento },
      { rotulo: "Chakra", valor: c.chakra },
    ],
  }));

  const fichasErvas: FichaItem[] = ERVAS.map((e) => ({
    nome: e.nome,
    icone: e.icone,
    extra: e.nomeCientifico,
    descricao: e.descricao,
    propriedades: e.propriedades,
    uso: e.uso,
    cuidados: e.cuidados,
    meta: [
      { rotulo: "Elemento", valor: e.elemento },
      { rotulo: "Planeta", valor: e.planeta },
    ],
  }));

  const fichasIncensos: FichaItem[] = INCENSOS.map((i) => ({
    nome: i.nome,
    icone: i.icone,
    extra: i.origem,
    descricao: i.descricao,
    propriedades: i.propriedades,
    uso: i.uso,
    cuidados: i.cuidados,
    meta: [
      { rotulo: "Elemento", valor: i.elemento },
      { rotulo: "Planeta", valor: i.planeta },
    ],
  }));

  const fichasVelas: FichaItem[] = VELAS.map((v) => ({
    nome: v.nome,
    icone: v.icone,
    extra: v.cor,
    descricao: v.descricao,
    propriedades: v.propriedades,
    uso: v.uso,
    cuidados: v.cuidados,
    meta: [
      { rotulo: "Cor", valor: v.cor },
      { rotulo: "Elemento", valor: v.elemento },
    ],
  }));

  const fichasChakras: FichaItem[] = CHAKRAS.map((c) => ({
    nome: c.nome,
    icone: c.icone,
    extra: c.numero,
    descricao: c.descricao,
    propriedades: c.propriedades,
    uso: c.uso,
    cuidados: c.cuidados,
    meta: [
      { rotulo: "Cor", valor: c.cor },
      { rotulo: "Elemento", valor: c.elemento },
    ],
  }));

  const fichasElementos: FichaItem[] = ELEMENTOS.map((e) => ({
    nome: e.nome,
    icone: e.icone,
    extra: e.direcao,
    descricao: e.descricao,
    propriedades: e.propriedades,
    uso: e.uso,
    cuidados: e.cuidados,
    meta: [
      { rotulo: "Cor", valor: e.cor },
      { rotulo: "Direção", valor: e.direcao },
    ],
  }));

  const fichasBanhos: FichaItem[] = BANHOS.map((b) => ({
    nome: b.nome,
    icone: b.icone,
    extra: b.objetivo,
    descricao: b.descricao,
    propriedades: b.propriedades,
    uso: b.uso,
    cuidados: b.cuidados,
    meta: [{ rotulo: "Objetivo", valor: b.objetivo }],
  }));

  const abas: AbaInfo[] = [
    {
      id: "cristais",
      rotulo: "Cristais",
      titulo: "Cristais",
      subtitulo: "Pedras e minerais com suas propriedades energéticas.",
      fichas: fichasCristais,
    },
    {
      id: "ervas",
      rotulo: "Ervas",
      titulo: "Ervas",
      subtitulo: "Plantas e ervas com usos ritualísticos e medicinais.",
      fichas: fichasErvas,
    },
    {
      id: "incensos",
      rotulo: "Incensos",
      titulo: "Incensos e Resinas",
      subtitulo: "Resinas e madeiras para defumação e limpeza energética.",
      fichas: fichasIncensos,
    },
    {
      id: "velas",
      rotulo: "Velas",
      titulo: "Velas e Cores",
      subtitulo: "Significado de cada cor de vela e como usar em rituais.",
      fichas: fichasVelas,
    },
    {
      id: "chakras",
      rotulo: "Chakras",
      titulo: "Chakras",
      subtitulo: "Os 7 centros de energia e como trabalhá-los.",
      fichas: fichasChakras,
    },
    {
      id: "elementos",
      rotulo: "Elementos",
      titulo: "Elementos",
      subtitulo: "Terra, Água, Fogo, Ar e Éter — suas forças e aplicações.",
      fichas: fichasElementos,
    },
    {
      id: "banhos",
      rotulo: "Banhos",
      titulo: "Banhos e Defumações",
      subtitulo: "Receitas tradicionais de banhos energéticos por objetivo.",
      fichas: fichasBanhos,
    },
  ];

  const abaAtiva = abas.find((a) => a.id === secao) ?? abas[0];

  return (
    <section className="painel-biblioteca">
      <header className="painel-biblioteca__cabecalho">
        <h1 className="painel-biblioteca__titulo">Biblioteca</h1>
        <p className="painel-biblioteca__subtitulo">
          Conhecimento esotérico sobre cristais, ervas, incensos, velas, chakras,
          elementos e banhos — propriedades, usos e correspondências.
        </p>
      </header>

      <div className="painel-biblioteca__seletor">
        {abas.map((aba) => (
          <button
            key={aba.id}
            type="button"
            className={`painel-biblioteca__opcao ${secao === aba.id ? "ativa" : ""}`}
            onClick={() => setSecao(aba.id)}
          >
            {aba.rotulo}
          </button>
        ))}
      </div>

      <ListaBiblioteca
        key={abaAtiva.id}
        titulo={abaAtiva.titulo}
        subtitulo={abaAtiva.subtitulo}
        itens={abaAtiva.fichas}
      />
    </section>
  );
}
