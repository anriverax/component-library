import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { InfoIcon } from "../icons";
import { UseAlertProps, useAlert } from "./use-alert";
import { TRANSITION_VARIANTS } from "@/lib/utils/transitions";

interface AlertProps extends UseAlertProps {
  children: React.ReactNode;

  isOpen: boolean;
}
const Alert = (props: AlertProps) => {
  const { isOpen, children, ...otherProps } = props;
  const { getAlertVariant, getBtnVariant } = useAlert(otherProps);

  const alertContent = useMemo(() => {
    if (isOpen) {
      return (
        <motion.div
          animate="enter"
          exit="exit"
          initial="initial"
          variants={TRANSITION_VARIANTS.scaleSpringOpacity}
        >
          <div {...getAlertVariant()}>
            <div className="flex items-center">
              <InfoIcon />
              <div className="ml-3 text-sm font-medium">{children}</div>
            </div>
            <button type="button" {...getBtnVariant()}>
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      );
    }

    return null;
  }, [isOpen, children, getAlertVariant, getBtnVariant]);
  return <AnimatePresence>{alertContent}</AnimatePresence>;
};

export default Alert;
