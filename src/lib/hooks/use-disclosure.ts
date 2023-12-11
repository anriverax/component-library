import { useState } from "react";

/**
 * Represents the result of the useDisclosure hook.
 */
interface DisclosureHookResult {
  /**
   * A boolean indicating whether the disclosure is currently open.
   */
  isOpen: boolean;

  /**
   * Function to open the disclosure.
   */
  onOpen: () => void;

  /**
   * Function to close the disclosure.
   */
  onClose: () => void;
}

/**
 * A custom hook for handling disclosure state.
 * @returns The result of the useDisclosure hook.
 */
export const useDisclosure = (): DisclosureHookResult => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  /**
   * Opens the disclosure if it is not already open.
   */
  const onOpen = (): void => {
    if (!isOpen) setIsOpen(true);
  };

  /**
   * Closes the disclosure if it is currently open.
   */
  const onClose = (): void => {
    if (isOpen) setIsOpen(false);
  };

  return {
    isOpen,
    onOpen,
    onClose
  };
};
