import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { carregarMunicipios } from "municipios-brasil";
import type { ApiMunicipios, Municipio } from "municipios-brasil";
import type { DadosNascimento } from "../servicos/astrologia";
import "./FormularioNascimento.scss";

interface Props {
  aoEnviar: (dados: DadosNascimento) => void;
  carregando: boolean;
  titulo?: string;
  subtitulo?: string;
  rotuloBotao?: string;
}

export function FormularioNascimento({
  aoEnviar,
  carregando,
  titulo = "Seus Dados de Nascimento",
  subtitulo = "Preencha para calcular seu mapa astral completo.",
  rotuloBotao = "Calcular Mapa Astral",
}: Props) {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [buscaCidade, setBuscaCidade] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState<Municipio | null>(null);
  const [api, setApi] = useState<ApiMunicipios | null>(null);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    carregarMunicipios().then(setApi).catch(() => setApi(null));
  }, []);

  const sugestoes: Municipio[] =
    api && buscaCidade.length >= 2 && !cidadeSelecionada
      ? api.buscar(buscaCidade, { limite: 8 })
      : [];

  function selecionarCidade(cidade: Municipio) {
    setCidadeSelecionada(cidade);
    setBuscaCidade(`${cidade.nome} - ${cidade.uf}`);
    setAberto(false);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!cidadeSelecionada) return;

    aoEnviar({
      nome,
      data,
      hora,
      cidadeNome: cidadeSelecionada.nome,
      cidadeUf: cidadeSelecionada.uf,
    });
  }

  return (
    <form className="formulario-nascimento cartao-vidro" onSubmit={handleSubmit}>
      <h2 className="formulario-nascimento__titulo">
        <i className="fa-solid fa-star" /> {titulo}
      </h2>
      <p className="formulario-nascimento__subtitulo">
        {subtitulo}
      </p>

      <div className="formulario-nascimento__campo">
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome"
          required
        />
      </div>

      <div className="formulario-nascimento__linha">
        <div className="formulario-nascimento__campo">
          <label htmlFor="data">Data de nascimento</label>
          <input
            id="data"
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
        </div>

        <div className="formulario-nascimento__campo">
          <label htmlFor="hora">Hora de nascimento</label>
          <input
            id="hora"
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="formulario-nascimento__campo formulario-nascimento__cidade">
        <label htmlFor="cidade">Cidade de nascimento</label>
        <input
          id="cidade"
          type="text"
          value={buscaCidade}
          onChange={(e) => {
            setBuscaCidade(e.target.value);
            setCidadeSelecionada(null);
            setAberto(true);
          }}
          onFocus={() => setAberto(true)}
          onBlur={() => setTimeout(() => setAberto(false), 200)}
          placeholder="Digite o nome da cidade"
          autoComplete="off"
          required
        />

        {aberto && sugestoes.length > 0 && (
          <ul className="formulario-nascimento__sugestoes">
            {sugestoes.map((cidade) => (
              <li key={cidade.codigoIbge}>
                <button
                  type="button"
                  onMouseDown={() => selecionarCidade(cidade)}
                >
                  <i className="fa-solid fa-location-dot" />
                  <span>{cidade.nome}</span>
                  <span className="formulario-nascimento__uf">{cidade.uf}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        type="submit"
        className="botao-mistico formulario-nascimento__enviar"
        disabled={carregando || !cidadeSelecionada}
      >
        {carregando ? (
          <>
            <i className="fa-solid fa-spinner fa-spin" /> Calculando...
          </>
        ) : (
          <>
            <i className="fa-solid fa-wand-sparkles" /> {rotuloBotao}
          </>
        )}
      </button>
    </form>
  );
}




