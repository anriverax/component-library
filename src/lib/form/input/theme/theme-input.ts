import type { VariantProps } from "tailwind-variants";
import { labelPlacement } from "./labelPlacement";
import { flatColor } from "./variants";
import { radius } from "./radius-invalid";
import { tv } from "@/lib/utils/tv";

const inputVariants = tv({
  slots: {
    base: "group flex flex-col mb-4",
    label:
      "block text-[13px] will-change-auto origin-top-left font-semibold group-hover/inputWrapper:font-bold group-data-[focus]:font-bold transition-all duration-200 ease-in",
    mainWrapper: "h-full",
    inputWrapper:
      "group/inputWrapper relative w-full inline-flex flex-row items-center shadow-sm px-3 gap-3 transition-background duration-200 ease-in",
    innerWrapper: "inline-flex h-full items-center w-full gap-1.5 box-border",
    input: "w-full h-full font-normal outline-none transition-background duration-200 ease-in",
    clearButton:
      "p-2 -m-2 z-10 hidden absolute right-[7px] flex item-center justify-end appearance-none outline-none select-none opacity-0 cursor-pointer active:opacity-70 rounded-full transition-all duration-300 ease-in",
    helperWrapper: "flex relative flex-col gap-1.5 pt-1 px-1",
    description: "text-third-600 italic text-[13px]",
    errorMessage: "text-danger-500 text-[13px] transition-all duration-200 ease-in"
  },
  variants: {
    variant: {
      flat: {
        inputWrapper: "border border-solid border-third-500 hover:bg-third-200"
      },
      underlined: {
        inputWrapper:
          "!pl-1 !pr-3 pb-0 gap-0 relative box-border border-b-2 border-third-400 !shadow-[none] !rounded-none hover:border-third-500 after:content-[''] after:w-0 after:origin-center after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-[2px] after:h-[2px] focus-within:after:w-full"
      },
      bordered: {
        inputWrapper: "border border-solid"
      },
      faded: {
        inputWrapper: "border border-solid border-default-300",
        input: "text-default-500 placeholder:text-default-300",
        label: "text-default-500"
      }
    },
    color: {
      default: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {}
    },
    size: {
      sm: {
        label: "text-sm",
        inputWrapper: "h-8 px-2 rounded-sm",
        input: "text-sm",
        clearButton: "text-lg"
      },
      md: {
        label: "text-base",
        inputWrapper: "h-10 rounded-md",
        input: "text-base",
        clearButton: "text-xl"
      },
      lg: {
        label: "text-lg",
        inputWrapper: "h-12 rounded-lg",
        input: "text-lg",
        clearButton: "text-2xl"
      }
    },
    radius: {
      none: {
        inputWrapper: "rounded-none"
      },
      sm: {
        inputWrapper: "rounded-lg"
      },
      md: {
        inputWrapper: "rounded-xl"
      },
      lg: {
        inputWrapper: "rounded-2xl"
      },
      full: {
        inputWrapper: "rounded-full !px-5"
      }
    },
    labelPlacement: {
      outside: {
        base: "data-[has-helper=true]:pb-4",
        label: "pb-1.5",
        mainWrapper: "flex flex-col",
        description: "absolute left-1",
        errorMessage: "absolute left-1"
      },
      "outside-left": {
        base: "flex-row items-center flex-nowrap data-[has-helper=true]:pb-4",
        mainWrapper: "flex flex-col",
        innerWrapper: "group-hover/inputWrapper:bg-danger-500",
        label: "text-sm pr-2",
        description: "absolute left-1",
        errorMessage: "absolute left-1"
      },
      inside: {
        label: "cursor-text group-data-[start-content=true]:ml-6",
        inputWrapper: "flex-col items-start justify-center gap-0"
      }
    },
    fullWidth: {
      true: {
        base: "w-full"
      }
    },
    isLabelPlaceholder: {
      true: {
        label: "absolute z-10 pointer-events-none"
      }
    },
    isClearable: {
      true: {
        input: "peer pr-6",
        clearButton: "peer-data-[filled=true]:opacity-70 peer-data-[filled=true]:block"
      }
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none",
        inputWrapper: "pointer-events-none",
        label: "pointer-events-none"
      }
    },
    isInvalid: {
      true: {
        inputWrapper:
          "!border-danger-500 !text-danger-500 !bg-white hover:!bg-white focus-within:!bg-white",
        label: "!text-danger-500",
        input:
          "placeholder:text-danger-300 text-danger-600 !bg-white group-hover/inputWrapper:bg-white focus:bg-white"
      }
    },
    isRequired: {
      true: {
        label: "after:content-['*'] after:text-danger-500 after:ml-0.5"
      }
    },
    isMultiline: {
      true: {
        inputWrapper: "!h-auto",
        input: "resize-none py-2"
      }
    }
  },
  defaultVariants: {
    variant: "flat",
    color: "default",
    size: "sm",
    fullWidth: true,
    labelPlacement: "inside",
    isDisabled: false
  },
  /* eslint-disable */
  compoundVariants: [...labelPlacement, ...flatColor, ...radius]
});

export type InputVariantProps = VariantProps<typeof inputVariants>;
export type InputSlots = keyof ReturnType<typeof inputVariants>;

export { inputVariants };
