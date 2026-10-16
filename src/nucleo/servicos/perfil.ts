export interface Perfil {
  nome: string;
  dataNascimento: string;
  horaNascimento: string;
  cidadeNome: string;
  cidadeUf: string;
  cidadeLatitude: number;
  cidadeLongitude: number;
  cidadeFuso: number;
  criadoEm: string;
}

const CHAVE_PERFIL = "tarot-online:perfil";

export function lerPerfil(): Perfil | null {
  try {
    const bruto = localStorage.getItem(CHAVE_PERFIL);
    if (!bruto) return null;
    return JSON.parse(bruto) as Perfil;
  } catch {
    return null;
  }
}

export function salvarPerfil(perfil: Perfil): void {
  try {
    localStorage.setItem(CHAVE_PERFIL, JSON.stringify(perfil));
  } catch {
    // silencioso
  }
}

export function removerPerfil(): void {
  try {
    localStorage.removeItem(CHAVE_PERFIL);
  } catch {
    // silencioso
  }
}

export function perfilEstaCompleto(perfil: Perfil | null): boolean {
  if (!perfil) return false;
  return Boolean(
    perfil.nome?.trim() &&
      perfil.dataNascimento &&
      perfil.horaNascimento &&
      perfil.cidadeNome
  );
}
