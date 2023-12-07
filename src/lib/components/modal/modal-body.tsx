import { HTMLAttributes, ReactNode } from "react";
import { useModalContext } from "./modal-context";

export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const ModalBody = (props: ModalBodyProps) => {
  const { children, className, ...otherProps } = props;

  const { slots, customClassNames } = useModalContext();

  return (
    <div className={slots.body({ class: [customClassNames?.body, className] })} {...otherProps}>
      {children}
    </div>
  );
};

export default ModalBody;
