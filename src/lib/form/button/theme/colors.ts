import { ButtonColors } from "../types-button";
import { colorVariants } from "@/lib/utils/colorsVariants";

/**
 * Represents different color styles for buttons.
 */
export const colors: ButtonColors = {
  /**
   * Solid color variants.
   */
  solid: {
    ...colorVariants
  },
  /**
   * Bordered color variants.
   */
  bordered: {
    default: "text-default-300 border-default-300",
    primary: "text-primary-500 border-primary-500",
    secondary: "text-secondary-700 border-secondary-700",
    info: "text-info-500 border-info-500",
    success: "text-success-500 border-success-500",
    warning: "text-warning-500 border-warning-500",
    danger: "text-danger-500 border-danger-500"
  },
  /**
   * Light color variants.
   */
  light: {
    default: "text-default-800 active:bg-default-100 hover:bg-default-100",
    primary: "text-primary-500 active:bg-primary-600 hover:bg-primary-600 hover:text-white",
    secondary: "text-secondary-700 active:bg-secondary-800 hover:bg-secondary-800 hover:text-white",
    info: "text-info-500 active:bg-info-600 hover:bg-info-600 hover:text-white",
    success: "text-success-900 active:bg-success-400 hover:bg-success-400",
    warning: "text-warning-900 active:bg-warning-400 hover:bg-warning-400",
    danger: "text-danger-900 active:bg-danger-400 hover:bg-danger-400"
  },
  /**
   * Flat color variants.
   */
  flat: {
    default: "bg-default-100/40 text-default-800/40",
    primary: "bg-primary-500/20 text-black/40",
    secondary: "bg-secondary-700/20 text-black/40",
    info: "bg-info-500/20 text-black/40",
    success: "bg-success-500/20 text-black/40",
    warning: "bg-warning-500/20 text-black/40",
    danger: "bg-danger-500/20 text-black/40"
  },
  /**
   * Shadowed color variants.
   */
  shadow: {
    default: "shadow-lg shadow-default-200/50 bg-default-100 text-default-800 active:bg-default-100",
    primary:
      "shadow-lg shadow-primary-500/40 bg-primary-500 text-white active:bg-primary-600 hover:bg-primary-600 hover:shadow-primary-600/40",
    secondary:
      "shadow-lg shadow-secondary-700/40 bg-secondary-700 text-white active:bg-secondary-800 hover:bg-secondary-800 hover:shadow-secondary-800/40",
    info: "shadow-lg shadow-info-500/40 bg-info-500 text-white active:bg-info-600 hover:bg-info-600 hover:shadow-info-600/40",
    success:
      "shadow-lg shadow-success-500/40 bg-success-500 text-success-100 active:bg-success-400 hover:bg-success-400 hover:shadow-success-400/40",
    warning:
      "shadow-lg shadow-warning-500/40 bg-warning-500 text-warning-900 active:bg-warning-400 hover:bg-warning-400 hover:shadow-warning-400/40",
    danger:
      "shadow-lg shadow-danger-500/40 bg-danger-500 text-danger-100 active:bg-danger-400 hover:bg-danger-400 hover:shadow-danger-400/40"
  },
  /**
   * Ghost color variants.
   */
  ghost: {
    default:
      "text-default-300 border-default-300 active:bg-default-100 active:text-default-800 active:border-default-100 hover:bg-default-100 hover:text-default-800 hover:border-default-100",
    primary:
      "text-primary-500 border-primary-500 active:bg-primary-500 active:text-white hover:bg-primary-500 hover:text-white",
    secondary:
      "text-secondary-700 border-secondary-700 active:bg-secondary-700 active:text-white hover:bg-secondary-700 hover:text-white",
    info: "text-info-500 border-info-500 active:bg-info-500 active:text-white hover:bg-info-500 hover:text-white",
    success:
      "text-success-500 border-success-500 active:bg-success-500 active:text-success-100 hover:bg-success-500 hover:text-success-100",
    warning:
      "text-warning-500 border-warning-500 active:bg-warning-500 active:text-warning-900 hover:bg-warning-500 hover:text-warning-900",
    danger:
      "text-danger-500 border-danger-500 active:bg-danger-500 active:text-danger-100 hover:bg-danger-500 hover:text-danger-100"
  }
};
