import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface OverlayProps {
  children: ReactNode;
}
export const Overlay = (props: OverlayProps) => createPortal(props.children, document.body);
