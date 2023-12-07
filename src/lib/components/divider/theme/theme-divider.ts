import type { VariantProps } from "tailwind-variants";
import { tv } from "@/lib/utils/tv";

const dividerVariants = tv({
  base: "shrink-0 bg-[hsl(0 0% 7%/0.15, 1)]",
  variants: {
    orientation: {
      horizontal: "w-full h-1",
      vertical: "h-full w-1"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
});

export type DividerVariantProps = VariantProps<typeof dividerVariants>;

export { dividerVariants };
