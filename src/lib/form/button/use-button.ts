import { useMemo, useCallback } from "react";
import { ButtonProps } from "./types-button";
import { buttonVariants } from "./theme/theme-button";

interface UseButtonProps {
  props: ButtonProps;
  onRippleClickHandler: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const useButton = ({ props, onRippleClickHandler }: UseButtonProps) => {
  const {
    className,
    variant,
    size,
    color,
    fullWidth,
    radius,
    isDisabled,
    isIconOnly,
    onClick,
    isLoading = false,
    disableRipple = false
  } = props;

  const styles = useMemo(
    () =>
      buttonVariants({
        variant,
        size,
        color,
        fullWidth,
        radius,
        isDisabled: isDisabled || isLoading,
        isIconOnly,
        className
      }),
    [size, color, variant, radius, fullWidth, isLoading, isDisabled, isIconOnly, className]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disableRipple || isDisabled) return;
      onRippleClickHandler(e);

      if (onClick) onClick(e);
    },
    [disableRipple, isDisabled, onRippleClickHandler, onClick]
  );

  return { styles, isLoading, disableRipple, handleClick };
};

export default useButton;
