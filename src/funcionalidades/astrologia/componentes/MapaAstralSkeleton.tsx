import "./MapaAstralSkeleton.scss";

export function MapaAstralSkeleton() {
  return (
    <div className="mapa-astral-skeleton">
      <div className="mapa-astral-skeleton__circulo">
        <div className="mapa-astral-skeleton__anel mapa-astral-skeleton__anel--externo" />
        <div className="mapa-astral-skeleton__anel mapa-astral-skeleton__anel--interno" />
        <div className="mapa-astral-skeleton__anel mapa-astral-skeleton__anel--casas" />
      </div>
      <p className="mapa-astral-skeleton__texto">Calculando seu mapa astral...</p>
    </div>
  );
}
