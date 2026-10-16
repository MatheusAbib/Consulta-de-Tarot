import aries from "zodiacfonts/icons/signs/aries.svg?raw";
import taurus from "zodiacfonts/icons/signs/taurus.svg?raw";
import gemini from "zodiacfonts/icons/signs/gemini.svg?raw";
import cancer from "zodiacfonts/icons/signs/cancer.svg?raw";
import leo from "zodiacfonts/icons/signs/leo.svg?raw";
import virgo from "zodiacfonts/icons/signs/virgo.svg?raw";
import libra from "zodiacfonts/icons/signs/libra.svg?raw";
import scorpio from "zodiacfonts/icons/signs/scorpio.svg?raw";
import sagittarius from "zodiacfonts/icons/signs/sagittarius.svg?raw";
import capricorn from "zodiacfonts/icons/signs/capricorn.svg?raw";
import aquarius from "zodiacfonts/icons/signs/aquarius.svg?raw";
import pisces from "zodiacfonts/icons/signs/pisces.svg?raw";

import sun from "zodiacfonts/icons/main-planets/sun.svg?raw";
import moon from "zodiacfonts/icons/main-planets/moon.svg?raw";
import mercury from "zodiacfonts/icons/main-planets/mercury.svg?raw";
import venus from "zodiacfonts/icons/main-planets/venus.svg?raw";
import mars from "zodiacfonts/icons/main-planets/mars.svg?raw";
import jupiter from "zodiacfonts/icons/main-planets/jupiter.svg?raw";
import saturn from "zodiacfonts/icons/main-planets/saturn.svg?raw";
import uranus from "zodiacfonts/icons/main-planets/uranus.svg?raw";
import neptune from "zodiacfonts/icons/main-planets/neptune.svg?raw";
import pluto from "zodiacfonts/icons/main-planets/pluto.svg?raw";

const ICONES_SIGNOS: Record<string, string> = {
  "Áries": aries,
  "Touro": taurus,
  "Gêmeos": gemini,
  "Câncer": cancer,
  "Leão": leo,
  "Virgem": virgo,
  "Libra": libra,
  "Escorpião": scorpio,
  "Sagitário": sagittarius,
  "Capricórnio": capricorn,
  "Aquário": aquarius,
  "Peixes": pisces,
};

const ICONES_PLANETAS: Record<string, string> = {
  Sol: sun,
  Lua: moon,
  Mercúrio: mercury,
  Vênus: venus,
  Marte: mars,
  Júpiter: jupiter,
  Saturno: saturn,
  Urano: uranus,
  Netuno: neptune,
  Plutão: pluto,
};

interface Props {
  signo?: string;
  planeta?: string;
  tamanho?: number;
  className?: string;
}

export function IconeAstro({ signo, planeta, tamanho = 24, className = "" }: Props) {
  let svgRaw: string | undefined;

  if (planeta) {
    svgRaw = ICONES_PLANETAS[planeta];
  } else if (signo) {
    svgRaw = ICONES_SIGNOS[signo];
  }

  if (!svgRaw) return null;

  const svgProcessado = svgRaw
    .replace(/<svg([^>]*)>/, `<svg$1 width="${tamanho}" height="${tamanho}" fill="currentColor">`)
    .replace(/fill="[^"]*"/g, "fill=\"currentColor\"");

  return (
    <span
      className={`icone-astro ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: svgProcessado }}
    />
  );
}


