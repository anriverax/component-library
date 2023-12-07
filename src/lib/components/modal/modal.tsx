import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { RemoveScroll } from "react-remove-scroll";
import { CloseIcon } from "../icons";
import { Overlay } from "../overlay";
import { ModalProps } from "./types-modal";
import useModal, { UseModalReturn } from "./use-modal";
import ModalContext from "./modal-context";
import { scaleInOut } from "./modal-transition";
import { TRANSITION_VARIANTS } from "@/lib/utils/transitions";

interface Props extends ModalProps {
  /**
   * The content of the modal. Usually the Modal
   */
  children: React.ReactNode;

  isOpen: boolean;
}

const Modal = (props: Props) => {
  const {
    slots,
    customClassNames,
    backdrop,
    shouldBlockScroll,
    hideCloseButton,
    modalContentRef,
    motionProps,
    getBackdropProps,
    getDialogProps,
    getCloseButtonProps
  } = useModal(props);

  const contextValue: UseModalReturn = {
    slots,
    customClassNames
  };

  const content = (
    <section {...getDialogProps()} ref={modalContentRef} data-info="modal dialog">
      <button {...getCloseButtonProps()}>{!hideCloseButton ? <CloseIcon /> : null}</button>
      {props.children}
    </section>
  );

  const backdropContent = useMemo(() => {
    if (props.isOpen) {
      if (backdrop === "transparent") return null;

      return (
        <motion.div
          animate="enter"
          exit="exit"
          initial="exit"
          variants={TRANSITION_VARIANTS.fade}
          {...getBackdropProps()}
        />
      );
    }
    return null;
  }, [backdrop, getBackdropProps, props.isOpen]);

  return (
    <ModalContext.Provider value={contextValue}>
      <AnimatePresence>
        {props.isOpen ? (
          <Overlay>
            <div tabIndex={-1} data-info="modal - content">
              {backdropContent}
              <RemoveScroll
                forwardProps
                enabled={shouldBlockScroll && props.isOpen}
                removeScrollBar={false}
              >
                <motion.div
                  animate="enter"
                  className={slots.wrapper({
                    class: customClassNames?.wrapper
                  })}
                  exit="exit"
                  initial="exit"
                  variants={scaleInOut}
                  {...motionProps}
                >
                  {content}
                </motion.div>
              </RemoveScroll>
            </div>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </ModalContext.Provider>
  );
};

export default Modal;
