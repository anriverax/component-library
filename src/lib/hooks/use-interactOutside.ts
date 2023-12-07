import { useEffect } from "react";

/* eslint-disable */
export const useInteractOutside = (ref: any, callback: any) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    // Agregar el event listener cuando el componente se monta
    document.addEventListener("click", handleClickOutside);

    // Eliminar el event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, callback]);
};
