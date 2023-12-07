import type { VariantProps } from "tailwind-variants";
import { tv } from "@/lib/utils/tv";

const modalVariants = tv({
  slots: {
    wrapper: "flex w-screen h-[100dvh] fixed inset-0 z-50 overflow-x-auto justify-center",
    base: "flex flex-col relative bg-white z-50 w-full box-border outline-none mx-1 my-1 max-h-[calc(100%_-_7.5rem)]",
    backdrop: "z-50",
    header: "flex py-4 px-6 text-lg font-semibold",
    body: "flex flex-1 flex-col gap-3 px-6 py-2 overflow-y-auto",
    footer: "flex flex-row gap-2 px-6 py-4 justify-end",
    closeButton:
      "absolute appearance-none outline-none select-none top-1 right-1 p-2 rounded-full hover:bg-default-100 active:bg-default-200 tap-highlight-transparent"
  },
  variants: {
    size: {
      xs: {
        base: "max-w-xs"
      },
      sm: {
        base: "max-w-sm"
      },
      md: {
        base: "max-w-md"
      },
      lg: {
        base: "max-w-lg"
      },
      xl: {
        base: "max-w-xl"
      },
      "2xl": {
        base: "max-w-2xl"
      },
      "3xl": {
        base: "max-w-3xl"
      },
      "4xl": {
        base: "max-w-4xl"
      },
      "5xl": {
        base: "max-w-5xl"
      },
      full: {
        base: "my-0 mx-0 sm:mx-0 sm:my-0 max-w-full h-[100dvh] !rounded-none"
      }
    },
    radius: {
      none: { base: "rounded-none" },
      sm: { base: "rounded-sm" },
      md: { base: "rounded-md" },
      lg: { base: "rounded-lg" }
    },
    placement: {
      auto: {
        wrapper: "items-end sm:items-center"
      },
      center: {
        wrapper: "items-center sm:items-center"
      },
      top: {
        wrapper: "items-start sm:items-start"
      },
      "top-center": {
        wrapper: "items-start sm:items-center"
      },
      bottom: {
        wrapper: "items-end sm:items-end"
      },
      "bottom-center": {
        wrapper: "items-end sm:items-center"
      }
    },
    shadow: {
      sm: {
        base: "shadow-small"
      },
      md: {
        base: "shadow-medium"
      },
      lg: {
        base: "shadow-large"
      }
    },
    backdrop: {
      transparent: {
        backdrop: "hidden"
      },
      opaque: {
        backdrop: "bg-black/50 backdrop-opacity-0"
      },
      blur: {
        backdrop: "backdrop-blur-md backdrop-saturate-150 bg-black/30"
      }
    }
  },
  defaultVariants: {
    size: "md",
    radius: "lg",
    shadow: "sm",
    placement: "auto",
    backdrop: "opaque"
  },
  compoundVariants: [
    {
      backdrop: ["opaque", "blur"],
      class: {
        backdrop: "w-screen h-screen fixed inset-0"
      }
    }
  ]
});

export type modalVariantProps = VariantProps<typeof modalVariants>;
export type ModalSlots = keyof ReturnType<typeof modalVariants>;

export { modalVariants };
