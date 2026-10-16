import { Routes, Route } from "react-router-dom";
import { PaginaInicio } from "./funcionalidades/inicio/PaginaInicio";

export function Rotas() {
  return (
    <Routes>
      <Route path="*" element={<PaginaInicio />} />
    </Routes>
  );
}
