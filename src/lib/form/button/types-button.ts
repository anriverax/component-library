import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonVariantProps } from "./theme/theme-button";

interface ButtonPropsOptional {
  /**
   * @default false
   */
  disableRipple?: boolean;
  /**
   * @default undefined
   */
  startContent?: ReactNode;
  /**
   * @default undefined
   */
  endContent?: ReactNode;
  /**
   * @default undefined
   */
  spinner?: ReactNode;
  /**
   * @default "start"
   */
  spinnerPlacement?: "start" | "end";
  /**
   * @default false
   */
  isLoading?: boolean;
  /**
   * @default undefined
   */
  children?: ReactNode;
}

/* eslint-enable */
export interface ButtonProps
  extends Required<Pick<ButtonHTMLAttributes<HTMLButtonElement>, "value">>,
    Pick<
      ButtonHTMLAttributes<HTMLButtonElement>,
      "type" | "disabled" | "name" | "onClick" | "className"
    >,
    ButtonVariantProps,
    ButtonPropsOptional {}
