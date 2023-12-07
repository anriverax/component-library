import { HTMLAttributes, ReactNode } from "react";
import { useModalContext } from "./modal-context";

interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const ModalHeader = (props: ModalHeaderProps) => {
  const { children, className, ...otherProps } = props;

  const { slots, customClassNames } = useModalContext();

  return (
    <header className={slots.header({ class: [customClassNames?.header, className] })} {...otherProps}>
      {children}
    </header>
  );
};

export default ModalHeader;
