import { RefObject, useEffect } from "react";

/**
 * A custom hook to handle interactions outside a specified element.
 * @param ref - Reference to the element for which interactions outside are tracked.
 * @param callback - Callback function to be invoked when an interaction outside the element occurs.
 */
export const useInteractOutside = (ref: RefObject<HTMLElement>, callback: () => void): void => {
  useEffect(() => {
    /**
     * Handles the click outside the specified element.
     * @param event - The click event.
     */
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    // Add the event listener when the component is mounted
    document.addEventListener("click", handleClickOutside);

    // Remove the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, callback]);
};
