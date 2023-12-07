import { useCallback, useMemo, useRef } from "react";
import { ModalProps } from "./types-modal";
import { modalVariants } from "./theme/theme-modal";
import { useInteractOutside } from "@/lib/hooks/use-interactOutside";

const useModal = (props: ModalProps) => {
  const modalContentRef = useRef(null);

  const {
    shouldBlockScroll = true,
    hideCloseButton = false,
    isDismissable = true,
    motionProps,
    size,
    radius,
    placement,
    shadow,
    backdrop,
    customClassNames
  } = props;

  const slots = useMemo(
    () =>
      modalVariants({
        size,
        radius,
        placement,
        shadow,
        backdrop
      }),
    [size, radius, placement, shadow, backdrop]
  );

  const getDialogProps = () => ({
    className: slots.base({ class: customClassNames?.base })
  });

  const getBackdropProps = useCallback(
    () => ({
      className: slots.backdrop({ class: customClassNames?.backdrop })
    }),
    [slots, customClassNames]
  );

  const getCloseButtonProps = () => ({
    role: "button",
    tabIndex: 0,
    "aria-label": "Close",
    className: slots.closeButton({ class: customClassNames?.closeButton }),
    onClick: () => props.onClose()
  });

  useInteractOutside(modalContentRef, () => {
    if (isDismissable) props.onClose();
  });

  return {
    slots,
    customClassNames,
    backdrop: !props.backdrop ? "opaque" : props.backdrop,
    shouldBlockScroll,
    hideCloseButton,
    modalContentRef,
    motionProps,
    getBackdropProps,
    getDialogProps,
    getCloseButtonProps
  };
};

export default useModal;

export type UseModalReturn = Pick<ReturnType<typeof useModal>, "slots" | "customClassNames">;
