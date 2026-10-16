import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  lerPerfil,
  salvarPerfil,
  removerPerfil,
  perfilEstaCompleto,
} from "../servicos/perfil";
import type { Perfil } from "../servicos/perfil";

interface PerfilContextoValor {
  perfil: Perfil | null;
  completo: boolean;
  atualizarPerfil: (p: Perfil) => void;
  limparPerfil: () => void;
  modalAberto: boolean;
  abrirModal: () => void;
  fecharModal: () => void;
}

const PerfilContexto = createContext<PerfilContextoValor | null>(null);

export function PerfilProvedor({ children }: { children: ReactNode }) {
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const [modalAberto, setModalAberto] = useState(false);

  useEffect(() => {
    const salvo = lerPerfil();
    setPerfil(salvo);
    if (!perfilEstaCompleto(salvo)) {
      setModalAberto(true);
    }
  }, []);

  function atualizarPerfil(p: Perfil) {
    salvarPerfil(p);
    setPerfil(p);
    setModalAberto(false);
  }

  function limparPerfil() {
    removerPerfil();
    setPerfil(null);
  }

  function abrirModal() {
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
  }

  return (
    <PerfilContexto.Provider
      value={{
        perfil,
        completo: perfilEstaCompleto(perfil),
        atualizarPerfil,
        limparPerfil,
        modalAberto,
        abrirModal,
        fecharModal,
      }}
    >
      {children}
    </PerfilContexto.Provider>
  );
}

export function usePerfil() {
  const ctx = useContext(PerfilContexto);
  if (!ctx) throw new Error("usePerfil precisa estar dentro de PerfilProvedor");
  return ctx;
}
