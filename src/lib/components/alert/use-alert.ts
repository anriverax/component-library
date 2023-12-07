import { useCallback, useMemo } from "react";
import { AlertSlots, AlertVariantProps, alertVariants } from "./theme/theme-alert";
import { SlotsToClasses } from "@/lib/utils/types";

export interface UseAlertProps extends AlertVariantProps {
  classNames?: SlotsToClasses<AlertSlots>;
  onClose: () => void;
}

const useAlert = (props: UseAlertProps) => {
  const { classNames, color, border, ...otherProps } = props;

  const slots = useMemo(
    () =>
      alertVariants({
        color,
        border
      }),
    [color, border]
  );
  const getAlertVariant = useCallback(
    () => ({
      className: slots.base({ class: classNames?.base }),
      role: "alert",
      ...otherProps
    }),
    [slots, otherProps, classNames]
  );

  const getBtnVariant = useCallback(
    () => ({
      className: slots.closed({ class: classNames?.closed }),
      onClick: () => otherProps.onClose(),
      ...otherProps
    }),
    [slots, otherProps, classNames]
  );

  return { getAlertVariant, getBtnVariant };
};

export { useAlert };
