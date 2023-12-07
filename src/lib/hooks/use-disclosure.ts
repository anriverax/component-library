import { useState } from "react";

export const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = () => {
    if (!isOpen) setIsOpen(true);
  };

  const onClose = () => {
    if (isOpen) setIsOpen(false);
  };

  return {
    isOpen,
    onOpen,
    onClose
  };
};
