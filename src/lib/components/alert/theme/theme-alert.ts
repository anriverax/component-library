import type { VariantProps } from "tailwind-variants";
import { tv } from "@/lib/utils/tv";

const alertVariants = tv({
  slots: {
    base: "flex items-center justify-between p-4 mb-4 rounded-lg",
    closed:
      "ml-auto -mx-1.5 -my-1.5 p-1.5 inline-flex items-center justify-center h-8 w-8 transition-all duration-200 ease-in hover:rounded-lg"
  },
  variants: {
    color: {
      default: {
        base: "bg-default-100 text-default-800 active:bg-default-200",
        closed: "text-default-500 hover:bg-default-200"
      },
      primary: {
        base: "bg-primary-500 text-primary-900 active:bg-primary-600",
        closed: "text-primary-900 hover:bg-primary-600 hover:text-white"
      },
      secondary: {
        base: "bg-secondary-500 text-secondary-100 active:bg-secondary-600",
        closed: "text-secondary-100 hover:bg-secondary-600 hover:text-white"
      },
      info: {
        base: "bg-info-500 text-white active:bg-info-600",
        closed: "text-white hover:bg-info-600 hover:text-white"
      },
      success: {
        base: "bg-success-500 text-success-900 active:bg-success-600",
        closed: "text-success-900 hover:bg-success-600 hover:text-white"
      },
      warning: {
        base: "bg-warning-500 text-warning-900 active:bg-warning-600",
        closed: "text-warning-900 hover:bg-warning-600 hover:text-white"
      },
      danger: {
        base: "bg-danger-500 text-white active:bg-danger-600",
        closed: "text-danger-900 hover:bg-danger-600 hover:text-white"
      }
    },
    border: {
      none: "border-[0px]",
      solid: "border-[1px]"
    }
  },
  defaultVariants: {
    color: "default",
    border: "none"
  }
});

export type AlertVariantProps = VariantProps<typeof alertVariants>;
export type AlertSlots = keyof ReturnType<typeof alertVariants>;
export { alertVariants };
