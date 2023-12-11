/**
 * A collection of color variants for different styles.
 */
export interface ColorVariants {
  default: string;
  primary: string;
  secondary: string;
  info: string;
  success: string;
  warning: string;
  danger: string;
}

/**
 * Object containing CSS classes for various color variants.
 */
export const colorVariants: ColorVariants = {
  default: "bg-default-100 text-default-800 active:bg-default-100",
  primary: "text-white bg-primary-500",
  secondary: "bg-secondary-700 text-white active:bg-secondary-800 hover:bg-secondary-800",
  info: "bg-info-500 text-white active:bg-info-400 hover:bg-info-400",
  success: "bg-success-500 text-success-100 active:bg-success-400 hover:bg-success-400",
  warning: "bg-warning-500 text-warning-900 active:bg-warning-400 hover:bg-warning-400",
  danger: "bg-danger-500 text-danger-100 active:bg-danger-400 hover:bg-danger-400"
};
