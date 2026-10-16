export const CHAVE_LIMITE_TAROT = "tarot-online:limite-tarot";
export const CHAVE_ABA_ATIVA = "tarot-online:aba-ativa";

export function lerArmazenamento<T>(chave: string): T | null {
  try {
    const bruto = localStorage.getItem(chave);
    if (!bruto) return null;
    return JSON.parse(bruto) as T;
  } catch {
    return null;
  }
}

export function salvarArmazenamento<T>(chave: string, valor: T): void {
  try {
    localStorage.setItem(chave, JSON.stringify(valor));
  } catch {
    // silencioso
  }
}

export function removerArmazenamento(chave: string): void {
  try {
    localStorage.removeItem(chave);
  } catch {
    // silencioso
  }
}
