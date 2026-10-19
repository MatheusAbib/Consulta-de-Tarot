import "./Rodape.scss";

export function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape__conteudo">
        <div className="rodape__coluna">
          <h3>ORACULVM</h3>
          <p>
            Um portal para autoconhecimento, intuição e conexão.<br></br>
            Explore o tarô, a astrologia, a numerologia, a matriz do destino, os signos, a lua e a biblioteca esotérica.
          </p>
        </div>
      </div>

      <div className="rodape__base">
        <p>&copy; {new Date().getFullYear()} ORACULVM. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

