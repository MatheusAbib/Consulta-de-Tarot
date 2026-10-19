import { Icon } from "@iconify/react";
import "./IconeNaipe.scss";
import type { Naipe } from "../../../nucleo/modelos/carta";

interface Props {
  naipe: Naipe;
  tamanho?: number;
}

const ICONES: Record<Naipe, string> = {
  Espadas: "game-icons:spades",
  Copas: "game-icons:hearts",
  Ouros: "game-icons:diamonds",
  Paus: "game-icons:clubs",
};

export function IconeNaipe({ naipe, tamanho = 32 }: Props) {
  const classe = `icone-naipe icone-naipe--${naipe.toLowerCase()}`;
  return (
    <span className={classe} style={{ width: tamanho, height: tamanho }}>
      <Icon icon={ICONES[naipe]} width={tamanho} height={tamanho} aria-label={naipe} />
    </span>
  );
}
