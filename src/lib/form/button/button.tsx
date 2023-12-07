"use client";

import { isValidElement, cloneElement } from "react";
import { ButtonProps } from "./types-button";
import useButton from "./use-button";
import { Ripple, useRipple } from "@/lib/modules/ripple";
import Spinner from "@/lib/components/spinner";

const Button = ({
  spinner = undefined,
  spinnerPlacement = "start",
  startContent = undefined,
  endContent = undefined,
  children = undefined,
  type = "button",
  ...props
}: ButtonProps): React.ReactElement => {
  const { onClick: onRippleClickHandler, ripples } = useRipple();
  const { styles, isLoading, disableRipple, handleClick } = useButton({
    props,
    onRippleClickHandler
  });

  const currentSpinner = isValidElement(spinner) ?? <Spinner size={props.size} color={props.color} />;

  /* eslint-disable */
  const renderIconContent = (iconContent: any, style: any) => {
    if (isValidElement(iconContent)) {
      const clonedElement = cloneElement(iconContent as any, {
        style
      });

      return clonedElement;
    }

    return null;
  };

  const renderLoading = (position: string, style: any) => {
    if (isLoading && spinnerPlacement === position) {
      const clonedLoading = cloneElement(currentSpinner as any, {
        style
      });

      return clonedLoading;
    }

    return null;
  };
  /* eslint-enable */
  return (
    <button type={type} className={styles} onClick={handleClick}>
      {renderIconContent(startContent, {
        marginRight: "16px"
      })}

      {renderLoading("start", {
        marginRight: "16px"
      })}

      {isValidElement(children) ? children : props.value}
      {renderLoading("end", {
        marginLeft: "16px"
      })}

      {renderIconContent(endContent, {
        marginLeft: "16px"
      })}
      {!disableRipple && <Ripple ripples={ripples} />}
    </button>
  );
};

export default Button;
