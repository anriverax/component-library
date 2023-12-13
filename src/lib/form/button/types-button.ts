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
  extends Pick<
      ButtonHTMLAttributes<HTMLButtonElement>,
      "type" | "disabled" | "name" | "onClick" | "className" | "value"
    >,
    ButtonVariantProps,
    ButtonPropsOptional {}

/**
 * Represents a button variant with its properties.
 */
export interface ButtonVariant {
  variant: "solid" | "light" | "shadow" | "flat" | "bordered" | "ghost";
  color: "default" | "primary" | "secondary" | "info" | "success" | "warning" | "danger";
  class: string;
}

/**
 * Represents a button with icon properties.
 */
export interface IconButton {
  isIconOnly: boolean;
  size: "sm" | "md" | "lg";
  class: string;
}

export type CompoundVariant = (ButtonVariant | IconButton)[];

/**
 * Represents color variants for buttons.
 */
export interface ButtonColors {
  solid: Record<string, string>;
  bordered: Record<string, string>;
  light: Record<string, string>;
  flat: Record<string, string>;
  shadow: Record<string, string>;
  ghost: Record<string, string>;
}
