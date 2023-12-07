import { forwardRef } from "react";
import { LinkIcon } from "../icons";
import useLink from "./use-link";
import { LinkProps } from "./types-link";
import { linkAnchorClasses } from "./theme/theme-link";
import { Ripple, useRipple } from "@/lib/modules/ripple";

/**
 * @property
 * ```js
 * * size(sm)
 * * weight(normal)
 * * color(info)
 * * underline(none)
 * * isBlock(false)
 * * isDisabled(false)
 * * isButton(false)
 * * radius(md)
 * * disableRipple(false)
 * * isExternal(false)
 * * showAnchorIcon(false)
 * * anchorIcon
 * ```
 */
const LinkCustom = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { onClick: onRippleClickHandler, ripples } = useRipple();
  const {
    Component,
    disableRipple,
    children,
    showAnchorIcon,
    anchorIcon = <LinkIcon className={linkAnchorClasses} />,
    getLinkProps
  } = useLink({
    props,
    ref,
    onRippleClickHandler
  });

  return (
    <Component {...getLinkProps()}>
      {children}
      {showAnchorIcon && anchorIcon}
      {props.isButton && !disableRipple && <Ripple ripples={ripples} />}
    </Component>
  );
});

LinkCustom.displayName = "LinkCustom";
export default LinkCustom;
