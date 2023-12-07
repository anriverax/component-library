import type { VariantProps } from "tailwind-variants";
import { tv } from "@/lib/utils/tv";

const tabVariants = tv({
  slots: {
    base: "flex",
    tabList: "flex p-1 gap-2 items-center flex-nowrap overflow-hidden bg-default-100",
    tab: "z-0 w-full px-3 py-1 flex group relative justify-center items-center outline-none cursor-pointer transition-opacity data-[disable=true]:pointer-events-none data-[disable=true]:cursor-not-allowed data-[disable=true]:opacity-30",
    tabContent:
      "relative z-10 whitespace-nowrap transition-colors duration-200 ease-in text-default-500 group-data-[selected=true]:text-default-900 group-data-[hover=true]:text-default-900 group-data-[hover=true]:font-semibold group-data-[disable=true]:pointer-events-none group-data-[disable=true]:!opacity-50",
    cursor: "absolute z-0 bg-default-300",
    panel: "py-3 px-1 outline-none h-auto"
  },
  variants: {
    variant: {
      solid: {
        cursor: "inset-0"
      },
      light: {
        tabList: "bg-transparent",
        cursor: "inset-0"
      },
      underlined: {
        tabList: "bg-transparent",
        cursor: "h-[2px] w-[80%] bottom-0 shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]"
      },
      bordered: {
        tabList: "bg-transparent border-2 border-double border-default-200 shadow-sm",
        cursor: "inset-0"
      }
    },
    color: {
      default: {
        cursor: "bg-white"
      },
      primary: {},
      secondary: {},
      info: {},
      success: {},
      warning: {},
      danger: {}
    },
    size: {
      sm: {
        tab: "h-7 text-xs"
      },
      md: {
        tab: "h-8 text-sm"
      },
      lg: {
        tab: "h-9 text-md"
      }
    },
    radius: {
      none: {
        tabList: "rounded-none",
        tab: "rounded-none",
        cursor: "rounded-none"
      },
      sm: {
        tabList: "rounded-sm",
        tab: "rounded-sm",
        cursor: "rounded-sm"
      },
      md: {
        tabList: "rounded-md",
        tab: "rounded-md",
        cursor: "rounded-md"
      },
      lg: {
        tabList: "rounded-lg",
        tab: "rounded-lg",
        cursor: "rounded-lg"
      },
      full: {
        tabList: "rounded-full",
        tab: "rounded-full",
        cursor: "rounded-full"
      }
    },
    fullWidth: {
      true: {
        base: "w-full",
        tabList: "w-full"
      }
    },
    isDisabled: {
      true: {
        tabList: "pointer-events-none opacity-50"
      }
    }
  },
  defaultVariants: {
    color: "default",
    variant: "solid",
    size: "md",
    radius: "md",
    fullWidth: false,
    isDisabled: false
  },
  compoundVariants: [
    /**
     * Variants & Colors
     */
    // solid + bordered + light && color
    {
      variant: ["solid", "bordered", "light"],
      color: "default",
      class: {
        cursor: "shadow-md"
      }
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "primary",
      class: {
        cursor: "bg-primary-500",
        tabContent: "group-data-[selected=true]:text-white"
      }
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "secondary",
      class: {
        cursor: "bg-secondary-500",
        tabContent: "group-data-[selected=true]:text-white"
      }
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "success",
      class: {
        cursor: "bg-success-500",
        tabContent: "group-data-[selected=true]:text-white"
      }
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "warning",
      class: {
        cursor: "bg-warning-500",
        tabContent: "group-data-[selected=true]:text-black"
      }
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "danger",
      class: {
        cursor: "bg-danger-500",
        tabContent: "group-data-[selected=true]:text-white"
      }
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "info",
      class: {
        cursor: "bg-info-500",
        tabContent: "group-data-[selected=true]:text-white"
      }
    },
    // underlined && color
    {
      variant: "underlined",
      color: "default",
      class: {
        cursor: "bg-default-500",
        tabContent: "group-data-[selected=true]:text-defauklt-500"
      }
    },
    {
      variant: "underlined",
      color: "primary",
      class: {
        cursor: "bg-primary-500",
        tabContent: "group-data-[selected=true]:text-primary-500"
      }
    },
    {
      variant: "underlined",
      color: "secondary",
      class: {
        cursor: "bg-secondary-500",
        tabContent: "group-data-[selected=true]:text-secondary-500"
      }
    },
    {
      variant: "underlined",
      color: "info",
      class: {
        cursor: "bg-info-500",
        tabContent: "group-data-[selected=true]:text-info-500"
      }
    },
    {
      variant: "underlined",
      color: "success",
      class: {
        cursor: "bg-success-500",
        tabContent: "group-data-[selected=true]:text-success-500"
      }
    },
    {
      variant: "underlined",
      color: "warning",
      class: {
        cursor: "bg-warning-500",
        tabContent: "group-data-[selected=true]:text-warning-500"
      }
    },
    {
      variant: "underlined",
      color: "danger",
      class: {
        cursor: "bg-danger-500",
        tabContent: "group-data-[selected=true]:text-danger-500"
      }
    }
  ],
  compoundSlots: [
    {
      variant: "underlined",
      slots: ["tab", "tabList", "cursor"],
      class: "rounded-none"
    }
  ]
});

export type TabsVariantProps = VariantProps<typeof tabVariants>;
export type TabsSlots = keyof ReturnType<typeof tabVariants>;
export type TabsReturnType = ReturnType<typeof tabVariants>;

export { tabVariants };
