import type { VariantProps } from "tailwind-variants";
import { button } from "./button";
import { tv } from "@/lib/utils/tv";

const linkVariants = tv({
  base: "relative flex items-center outline-none tap-highlight-transparent cursor-pointer w-max",
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold"
    },
    color: {
      default: "text-default-500",
      primary: "text-primary-500",
      secondary: "text-secondary-500",
      info: "text-info-500",
      success: "text-success-500",
      warning: "text-warning-500",
      danger: "text-danger-500"
    },
    underline: {
      none: "no-underline",
      hover: "hover:underline hover:underline-offset-4",
      always: "underline underline-offset-4",
      active: "active:underline active:underline-offset-4",
      focus: "focus:underline focus:underline-offset-4"
    },
    isBlock: {
      true: "px-2 py-1 hover:after:opacity-100 after:content-[''] after:inset-0 after:opacity-0 after:w-full after:h-full after:rounded-xl after:transition-background after:absolute",
      false: "hover:opacity-80 active:opacity-25 transition-opacity"
    },
    isDisabled: {
      true: "opacity-25 cursor-default pointer-events-none"
    },
    isButton: {
      true: "relative overflow-hidden cursor-pointer outline-none select-none whitespace-nowrap flex items-center justify-center transition-colors duration-500 ease-in"
    },
    radius: {
      none: "rounded-none",
      default: "rounded",
      sm: "rounded-sm",
      md: "rounded-md",
      full: "rounded-full"
    }
  },
  defaultVariants: {
    color: "info",
    size: "sm",
    weight: "normal",
    isBlock: false,
    underline: "none",
    isDisabled: false,
    isButton: false,
    radius: "md"
  },
  /* eslint-disable */
  compoundVariants: [
    {
      isBlock: true,
      color: "default",
      class: "hover:bg-white hover:after:bg-default-500/10"
    },
    {
      isBlock: true,
      color: "primary",
      class: "hover:!bg-white hover:after:bg-primary-500/20 hover:text-primary-500"
    },
    {
      isBlock: true,
      color: "secondary",
      class: "hover:!bg-white hover:after:bg-secondary-500/20 hover:text-secondary-500"
    },
    {
      isBlock: true,
      color: "info",
      class: "hover:!bg-white hover:after:bg-info-500/20 hover:text-info-500"
    },
    {
      isBlock: true,
      color: "success",
      class: "hover:!bg-white hover:after:bg-success-500/20 hover:text-success-500"
    },
    {
      isBlock: true,
      color: "warning",
      class: "hover:!bg-white hover:after:bg-warning-500/20 hover:text-warning-500"
    },
    {
      isBlock: true,
      color: "danger",
      class: "hover:!bg-white hover:after:bg-danger-500/20 hover:text-danger-500"
    },
    {
      underline: ["hover", "always", "active", "focus"],
      class: "underline-offset-4"
    },
    ...button
  ]
});

export const linkAnchorClasses = "flex mx-1 text-current self-center";

export type LinkVariantProps = VariantProps<typeof linkVariants>;
export type LinkSlots = keyof ReturnType<typeof linkVariants>;

export { linkVariants };
