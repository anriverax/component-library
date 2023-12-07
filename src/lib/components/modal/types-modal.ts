import { ReactNode, HTMLAttributes } from "react";
import type { HTMLMotionProps } from "framer-motion";
import { ModalSlots, modalVariantProps } from "./theme/theme-modal";
import { SlotsToClasses } from "@/lib/utils/types";

export interface ModalProps extends HTMLAttributes<HTMLDivElement>, modalVariantProps {
  isDismissable?: boolean;
  motionProps?: HTMLMotionProps<"section">;
  /**
   * @default false
   */
  hideCloseButton?: boolean;
  /**
   * @default undefined
   */
  closeButton?: ReactNode;
  /**
   * @default true
   */
  shouldBlockScroll?: boolean;

  /**
   *  Callback fired when the modal is closed.
   */
  onClose: () => void;
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   * @default undefined
   *
   * ```ts
   * <Modal classNames={{
   *    wrapper: "wrapper-classes", // main modal wrapper
   *    backdrop: "backdrop-classes",
   *    base:"base-classes", // modal content wrapper
   *    header: "header-classes", // modal header
   *    body: "body-classes", // modal body
   *    footer: "footer-classes", // modal footer
   *    closeButton: "close-button-classes", // modal close button
   * }} />
   * ```
   */
  customClassNames?: SlotsToClasses<ModalSlots>;
}
