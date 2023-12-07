import { ReactNode, HTMLAttributes } from "react";
import { useModalContext } from "./modal-context";

interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const ModalFooter = (props: ModalFooterProps) => {
  const { children, className, ...otherProps } = props;

  const { slots, customClassNames } = useModalContext();

  return (
    <footer className={slots.footer({ class: [customClassNames?.footer, className] })} {...otherProps}>
      {children}
    </footer>
  );
};

export default ModalFooter;
