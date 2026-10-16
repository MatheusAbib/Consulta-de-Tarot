import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./BotaoMistico.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variante?: "primario" | "secundario";
}

export function BotaoMistico({ children, variante = "primario", className = "", ...rest }: Props) {
  return (
    <button className={`botao-mistico ${variante} ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
}


