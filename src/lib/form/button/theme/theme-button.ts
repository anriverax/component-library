import { compoundVariants } from "./variants";
import { tv, VariantProps } from "@/lib/utils/tv";

/**
 * Represents the configuration for button variants using the `tv` utility.
 */

const buttonVariants = tv({
  base: "relative font-semibold overflow-hidden cursor-pointer outline-none select-none whitespace-nowrap flex items-center justify-center transition-colors duration-500 ease-in",
  variants: {
    variant: {
      solid: "",
      bordered: "border-2 border-solid",
      light: "bg-transparent",
      flat: "",
      shadow: "",
      ghost: "border-2 border-solid"
    },
    color: {
      default: "",
      primary: "",
      secondary: "",
      info: "",
      success: "",
      warning: "",
      danger: ""
    },
    radius: {
      none: "rounded-none",
      default: "rounded",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full"
    },
    size: {
      sm: "px-3 h-8 text-sm",
      md: "px-4 h-10 text-base",
      lg: "px-6 h-12 text-lg"
    },
    fullWidth: {
      true: "w-full"
    },
    isDisabled: {
      true: "opacity-50 cursor-not-allowed"
    },
    isIconOnly: {
      true: "px-0 gap-0"
    }
  },
  defaultVariants: {
    variant: "solid",
    radius: "md",
    size: "md",
    color: "default"
  },
  compoundVariants: compoundVariants
});

/**
 * Represents the button variant properties using the `tv` utility.
 */
export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

/**
 * Type definition for the return type of buttonVariants.
 */
export type ButtonReturnType = ReturnType<typeof buttonVariants>;

export { buttonVariants };
