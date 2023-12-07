import { HTMLAttributes, useCallback, useMemo } from "react";
import { dividerVariants, DividerVariantProps } from "./theme/theme-divider";

export type UseDividerProps = HTMLAttributes<HTMLHRElement> & DividerVariantProps;

export function useDivider(props: UseDividerProps) {
  const { className, orientation, ...otherProps } = props;

  const styles = useMemo(
    () =>
      dividerVariants({
        orientation,
        className
      }),
    [orientation, className]
  );

  const getDividerProps = useCallback(
    (props = {}) => ({
      className: styles,
      "data-orientation": orientation,
      role: "separator",
      ...otherProps,
      ...props
    }),
    [styles, orientation, otherProps]
  );

  return { getDividerProps };
}
