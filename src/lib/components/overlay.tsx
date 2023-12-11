import { ReactNode } from "react";
import { createPortal } from "react-dom";

/**
 * Props for the Overlay component.
 */
interface OverlayProps {
  /**
   * The content to be rendered within the overlay.
   */
  children: ReactNode;
}

/**
 * A component for rendering content in a portal outside the main DOM hierarchy.
 * @param props - The Overlay component props.
 * @returns A React portal containing the provided children, attached to the document body.
 */
export const Overlay = (props: OverlayProps) => createPortal(props.children, document.body);
