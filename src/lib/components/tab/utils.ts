import { TabItem } from "./types-tabs";

/**
 * CustomCollection function that creates a custom collection from an array of TabItems.
 * Función CustomCollection que crea una colección personalizada a partir de un array de TabItems.
 * @param object - Array of TabItems.
 * @returns CustomCollectionType - CustomCollection object with utility methods.
 */
export const CustomCollection = (object: TabItem[]) => {
  // Initialize data as an empty object.
  // Inicializa data como un objeto vacío.
  let data: Record<number, string> = {};

  // Populate data object with keys from TabItems.
  // Rellena el objeto data con claves de los TabItems.
  object.forEach((item: TabItem) => {
    const key = item.id as string;
    data = { ...data, [key]: item.id };
  });

  // Return an object with utility methods for the custom collection.
  // Devuelve un objeto con métodos de utilidad para la colección personalizada.
  return {
    /**
     * Get the entire data object.
     * Obtiene el objeto de datos completo.
     * @returns Record<string, string> - Data object.
     */
    getData: () => data,

    /**
     * Get the first key in the collection.
     * Obtiene la primera clave en la colección.
     * @returns string | null - First key or null if empty.
     */
    getFirstKey: () => {
      const keys = Object.keys(data);
      return keys.length > 0 ? keys[0] : null;
    },

    /**
     * Get the key that comes after the current key in the collection.
     * Obtiene la clave que viene después de la clave actual en la colección.
     * @param currentKey - Current key.
     * @returns string | null - Key after the current key or null if last or not found.
     */
    getKeyAfter: (currentKey: string | null) => {
      const keys = Object.keys(data);
      const currentIndex = keys.indexOf(currentKey as string);

      if (currentIndex !== -1 && currentIndex < keys.length - 1) {
        return keys[currentIndex + 1];
      }

      return null; // Return null if currentKey is the last key or not found
    },

    /**
     * Get the last key in the collection.
     * Obtiene la última clave en la colección.
     * @returns string | null - Last key or null if empty.
     */
    getLastKey: () => {
      const keys = Object.keys(data);
      return keys.length > 0 ? keys[keys.length - 1] : null;
    }
  };
};

// Define the type for CustomCollection.
// Define el tipo para CustomCollection.
export type CustomCollectionType = ReturnType<typeof CustomCollection>;
