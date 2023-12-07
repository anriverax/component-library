import { createContext, useContext } from "react";

import { UseModalReturn } from "./use-modal";

// Crea el contexto
const ModalContext = createContext<UseModalReturn | undefined>(undefined);

// Hook personalizado para acceder al contexto
export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useMyContext debe utilizarse dentro de un proveedor MyContext");

  return context;
};

export default ModalContext;
