import { Ref, useCallback, useMemo } from "react";
import { LinkProps } from "./types-link";
import { linkVariants } from "./theme/theme-link";
import { useDOMRef } from "@/lib/utils/dom";

interface UseLinkProps {
  ref: Ref<HTMLAnchorElement>;
  props: LinkProps;
  onRippleClickHandler: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const useLink = ({ props, ref, onRippleClickHandler }: UseLinkProps) => {
  const domRef = useDOMRef(ref);

  const {
    as,
    children,
    anchorIcon,
    isExternal = false,
    showAnchorIcon = false,
    className,
    href,
    size,
    color,
    underline,
    isBlock,
    isButton,
    weight,
    radius,
    isDisabled,
    disableRipple = false,
    ...otherProps
  } = props;

  const Component = as || "a";

  if (isExternal) {
    otherProps.rel = otherProps.rel ?? "noopener noreferrer";
    otherProps.target = otherProps.target ?? "_blank";
  }

  const classNames = useMemo(
    () =>
      linkVariants({
        size,
        color,
        underline,
        isBlock,
        isDisabled,
        isButton,
        weight,
        radius,
        className
      }),
    [size, color, weight, radius, underline, isBlock, isButton, isDisabled, className]
  );

  const getLinkProps = useCallback(
    () => ({
      ref: domRef,
      className: classNames,
      href,
      onMouseEnter: (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isButton && !disableRipple) onRippleClickHandler(e);
      },
      ...otherProps
    }),
    [domRef, disableRipple, href, classNames, otherProps, isButton, onRippleClickHandler]
  );

  return {
    Component,
    disableRipple,
    children,
    anchorIcon,
    showAnchorIcon,
    getLinkProps
  };
};

export default useLink;
