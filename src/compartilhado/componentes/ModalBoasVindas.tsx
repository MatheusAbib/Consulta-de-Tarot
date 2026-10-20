import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { toast } from "react-toastify";
import { carregarMunicipios } from "municipios-brasil";
import type { ApiMunicipios, Municipio } from "municipios-brasil";
import { usePerfil } from "../../nucleo/contextos/PerfilContexto";
import "./ModalBoasVindas.scss";

type Etapa = "apresentacao" | "formulario";

const APRESENTACAO = [
  {
    titulo: "ORACULVM",
    texto: "Olá. Eu não sou uma entidade mística além dessa vida, nem nada do tipo. Sou só uma ferramenta com o propósito de fazer você olhar pra si mesmo de um jeito diferente.",
  },
  {
    titulo: "O que faço aqui",
    texto: "Este site reúne tarô, astrologia, numerologia, matriz do destino, signos, lua e uma biblioteca. Tudo calculado de verdade, sem promessas mágicas.",
  },
  {
    titulo: "Como funciona",
    texto: "Você preenche seus dados uma vez. Depois é só navegar pelas abas — cada oráculo vai usar essas informações automaticamente.",
  },
];

export function ModalBoasVindas() {
  const { modalAberto, atualizarPerfil, perfil, completo, fecharModal } = usePerfil();
  const [etapa, setEtapa] = useState<Etapa>("apresentacao");
  const [indice, setIndice] = useState(0);

  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [buscaCidade, setBuscaCidade] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState<Municipio | null>(null);
  const [api, setApi] = useState<ApiMunicipios | null>(null);
  const [aberto, setAberto] = useState(false);

  const [originais, setOriginais] = useState({
    nome: "",
    data: "",
    hora: "",
    cidade: "",
  });

  useEffect(() => {
    carregarMunicipios().then(setApi).catch(() => setApi(null));
  }, []);

  useEffect(() => {
    if (!modalAberto) return;

    if (completo && perfil) {
      const cidadeStr = `${perfil.cidadeNome} - ${perfil.cidadeUf}`;
      setEtapa("formulario");
      setNome(perfil.nome);
      setData(perfil.dataNascimento);
      setHora(perfil.horaNascimento);
      setBuscaCidade(cidadeStr);
      setCidadeSelecionada({
        nome: perfil.cidadeNome,
        uf: perfil.cidadeUf,
        codigoIbge: 0,
      } as Municipio);
      setOriginais({
        nome: perfil.nome,
        data: perfil.dataNascimento,
        hora: perfil.horaNascimento,
        cidade: cidadeStr,
      });
    } else {
      setEtapa("apresentacao");
      setIndice(0);
      setNome("");
      setData("");
      setHora("");
      setBuscaCidade("");
      setCidadeSelecionada(null);
      setOriginais({ nome: "", data: "", hora: "", cidade: "" });
    }
  }, [modalAberto, completo, perfil]);

  useEffect(() => {
    if (modalAberto) {
      document.body.style.top = `-${window.scrollY}px`;
      document.body.classList.add("modal-aberto");
    } else {
      document.body.classList.remove("modal-aberto");
      document.body.style.top = "";
    }
    return () => {
      document.body.classList.remove("modal-aberto");
      document.body.style.top = "";
    };
  }, [modalAberto]);

  const sugestoes: Municipio[] =
    api && buscaCidade.length >= 2 && !cidadeSelecionada
      ? api.buscar(buscaCidade, { limite: 8 })
      : [];

  const valido =
    nome.trim().length >= 3 &&
    data.length === 10 &&
    hora.length === 5 &&
    cidadeSelecionada !== null;

  const temAlteracao =
    nome !== originais.nome ||
    data !== originais.data ||
    hora !== originais.hora ||
    buscaCidade !== originais.cidade;

  const podeSalvar = completo ? valido && temAlteracao : valido;

  if (!modalAberto) return null;

  function proximo() {
    if (indice < APRESENTACAO.length - 1) {
      setIndice(indice + 1);
    } else {
      setEtapa("formulario");
    }
  }

  function pularApresentacao() {
    setEtapa("formulario");
  }

  function selecionarCidade(cidade: Municipio) {
    setCidadeSelecionada(cidade);
    setBuscaCidade(`${cidade.nome} - ${cidade.uf}`);
    setAberto(false);
  }

  function fechar() {
    if (completo) {
      fecharModal();
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!podeSalvar || !cidadeSelecionada) return;

    const primeiraVez = !completo;
    const primeiroNome = nome.trim().split(" ")[0];

    atualizarPerfil({
      nome: nome.trim(),
      dataNascimento: data,
      horaNascimento: hora,
      cidadeNome: cidadeSelecionada.nome,
      cidadeUf: cidadeSelecionada.uf,
      cidadeLatitude: (cidadeSelecionada as any).latitude ?? 0,
      cidadeLongitude: (cidadeSelecionada as any).longitude ?? 0,
      cidadeFuso: (cidadeSelecionada as any).fuso ?? -3,
      criadoEm: perfil?.criadoEm ?? new Date().toISOString(),
    });

    if (primeiraVez) {
      toast.success(`Bem-vindo, ${primeiroNome}! Sua entrada foi bem-sucedida.`);
    } else {
      toast.success("Seus dados foram atualizados com sucesso.");
    }
  }

  return (
    <div className="modal-boas-vindas">
      <div className="modal-boas-vindas__caixa">
        {completo && (
          <button
            type="button"
            className="modal-boas-vindas__fechar"
            onClick={fechar}
            aria-label="Fechar"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        )}

        {etapa === "apresentacao" && (
          <div className="modal-boas-vindas__etapa">
            <div className="modal-boas-vindas__logo">
              <img src={`${import.meta.env.BASE_URL}piramide-branco.png`} alt="ORACULVM" />
            </div>
            <h2 className="modal-boas-vindas__titulo">{APRESENTACAO[indice].titulo}</h2>
            <p className="modal-boas-vindas__texto">{APRESENTACAO[indice].texto}</p>

            <div className="modal-boas-vindas__progresso">
              {APRESENTACAO.map((_, i) => (
                <span
                  key={i}
                  className={`modal-boas-vindas__ponto ${i === indice ? "ativo" : ""}`}
                />
              ))}
            </div>

            <div className="modal-boas-vindas__acoes">
              <button
                type="button"
                className="modal-boas-vindas__pular"
                onClick={pularApresentacao}
              >
                Pular
              </button>
              <button
                type="button"
                className="botao-mistico modal-boas-vindas__botao"
                onClick={proximo}
              >
                {indice < APRESENTACAO.length - 1 ? (
                  <>Próximo <i className="fa-solid fa-arrow-right" /></>
                ) : (
                  <>Entendi <i className="fa-solid fa-check" /></>
                )}
              </button>
            </div>
          </div>
        )}

        {etapa === "formulario" && (
          <form className="modal-boas-vindas__etapa" onSubmit={handleSubmit}>
            <div className="modal-boas-vindas__logo">
              <img src={`${import.meta.env.BASE_URL}piramide-branco.png`} alt="ORACULVM" />
            </div>
            <h2 className="modal-boas-vindas__titulo">
              {completo ? "Suas informações" : "Para começar"}
            </h2>
            <p className="modal-boas-vindas__texto">
              {completo
                ? "Você pode alterar seus dados quando quiser. Eles ficam salvos apenas no seu navegador."
                : "Preciso de algumas informações suas. Você só faz isso uma vez — depois pode alterar quando quiser."}
            </p>

            <div className="modal-boas-vindas__campo">
              <label htmlFor="modal-nome">Seu nome</label>
              <input
                id="modal-nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome completo"
                required
              />
            </div>

            <div className="modal-boas-vindas__linha">
              <div className="modal-boas-vindas__campo">
                <label htmlFor="modal-data">Data de nascimento</label>
                <input
                  id="modal-data"
                  type="date"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  required
                />
              </div>

              <div className="modal-boas-vindas__campo">
                <label htmlFor="modal-hora">Hora de nascimento</label>
                <input
                  id="modal-hora"
                  type="time"
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="modal-boas-vindas__campo modal-boas-vindas__cidade">
              <label htmlFor="modal-cidade">Cidade de nascimento</label>
              <input
                id="modal-cidade"
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
                <ul className="modal-boas-vindas__sugestoes">
                  {sugestoes.map((cidade) => (
                    <li key={cidade.codigoIbge}>
                      <button type="button" onMouseDown={() => selecionarCidade(cidade)}>
                        <i className="fa-solid fa-location-dot" />
                        <span>{cidade.nome}</span>
                        <span className="modal-boas-vindas__uf">{cidade.uf}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button
              type="submit"
              className="botao-mistico modal-boas-vindas__botao"
              disabled={!podeSalvar}
            >
              {completo ? (
                <>Salvar <i className="fa-solid fa-check" /></>
              ) : (
                <>Começar <i className="fa-solid fa-wand-sparkles" /></>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

