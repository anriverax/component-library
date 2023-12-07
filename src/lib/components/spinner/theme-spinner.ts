import { tv, VariantProps } from "@/lib/utils/tv";

const spinnerVariants = tv({
  slots: {
    base: "relative inline-flex flex-col gap-2 items-center justify-center",
    wrapper: "relative flex",
    circle1:
      "absolute w-full h-full rounded-full animate-spin border-solid border-t-transparent border-l-transparent border-r-transparent",
    circle2:
      "absolute w-full h-full rounded-full opacity-75 animate-spin border-solid border-t-transparent border-l-transparent border-r-transparent"
  },
  variants: {
    size: {
      sm: { wrapper: "w-4 h-4", circle1: "border", circle2: "border" },
      md: { wrapper: "w-7 h-7", circle1: "border-2", circle2: "border-2" },
      lg: { wrapper: "w-10 h-10", circle1: "border-4", circle2: "border-4" }
    },
    color: {
      default: {
        circle1: "border-b-default-100",
        circle2: "border-b-default-100"
      },
      primary: {
        circle1: "border-b-primary-500",
        circle2: "border-b-primary-500"
      },
      secondary: {
        circle1: "border-b-secondary-700",
        circle2: "border-b-secondary-700"
      },
      info: { circle1: "border-b-info-500", circle2: "border-b-info-500" },
      success: {
        circle1: "border-b-success-500",
        circle2: "border-b-success-500"
      },
      warning: {
        circle1: "border-b-warning-500",
        circle2: "border-b-warning-500"
      },
      danger: {
        circle1: "border-b-danger-500",
        circle2: "border-b-danger-500"
      }
    }
  },
  defaultVariants: {
    size: "md",
    color: "primary"
  }
});

export type SpinnerVariantsProps = VariantProps<typeof spinnerVariants>;
export type SpinnerSlots = keyof ReturnType<typeof spinnerVariants>;

export { spinnerVariants };
