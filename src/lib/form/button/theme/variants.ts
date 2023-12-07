import { colors } from "./colors";

/* eslint-disable */
const solid: any = [
  {
    variant: "solid",
    color: "default",
    class: colors.solid.default
  },
  {
    variant: "solid",
    color: "primary",
    class: colors.solid.primary
  },
  {
    variant: "solid",
    color: "secondary",
    class: colors.solid.secondary
  },
  {
    variant: "solid",
    color: "info",
    class: colors.solid.info
  },
  {
    variant: "solid",
    color: "success",
    class: colors.solid.success
  },
  {
    variant: "solid",
    color: "warning",
    class: colors.solid.warning
  },
  {
    variant: "solid",
    color: "danger",
    class: colors.solid.danger
  }
];

const bordered = [
  {
    variant: "bordered",
    color: "default",
    class: colors.bordered.default
  },
  {
    variant: "bordered",
    color: "primary",
    class: colors.bordered.primary
  },
  {
    variant: "bordered",
    color: "secondary",
    class: colors.bordered.secondary
  },
  {
    variant: "bordered",
    color: "info",
    class: colors.bordered.info
  },
  {
    variant: "bordered",
    color: "success",
    class: colors.bordered.success
  },
  {
    variant: "bordered",
    color: "warning",
    class: colors.bordered.warning
  },
  {
    variant: "bordered",
    color: "danger",
    class: colors.bordered.danger
  }
];

const light = [
  {
    variant: "light",
    color: "default",
    class: colors.light.default
  },
  {
    variant: "light",
    color: "primary",
    class: colors.light.primary
  },
  {
    variant: "light",
    color: "secondary",
    class: colors.light.secondary
  },
  {
    variant: "light",
    color: "info",
    class: colors.light.info
  },
  {
    variant: "light",
    color: "success",
    class: colors.light.success
  },
  {
    variant: "light",
    color: "warning",
    class: colors.light.warning
  },
  {
    variant: "light",
    color: "danger",
    class: colors.light.danger
  }
];

const flat = [
  {
    variant: "flat",
    color: "default",
    class: colors.flat.default
  },
  {
    variant: "flat",
    color: "primary",
    class: colors.flat.primary
  },
  {
    variant: "flat",
    color: "secondary",
    class: colors.flat.secondary
  },
  {
    variant: "flat",
    color: "info",
    class: colors.flat.info
  },
  {
    variant: "flat",
    color: "success",
    class: colors.flat.success
  },
  {
    variant: "flat",
    color: "warning",
    class: colors.flat.warning
  },
  {
    variant: "flat",
    color: "danger",
    class: colors.flat.danger
  }
];

const shadow = [
  {
    variant: "shadow",
    color: "default",
    class: colors.shadow.default
  },
  {
    variant: "shadow",
    color: "primary",
    class: colors.shadow.primary
  },
  {
    variant: "shadow",
    color: "secondary",
    class: colors.shadow.secondary
  },
  {
    variant: "shadow",
    color: "info",
    class: colors.shadow.info
  },
  {
    variant: "shadow",
    color: "success",
    class: colors.shadow.success
  },
  {
    variant: "shadow",
    color: "warning",
    class: colors.shadow.warning
  },
  {
    variant: "shadow",
    color: "danger",
    class: colors.shadow.danger
  }
];

const ghost = [
  {
    variant: "ghost",
    color: "default",
    class: colors.ghost.default
  },
  {
    variant: "ghost",
    color: "primary",
    class: colors.ghost.primary
  },
  {
    variant: "ghost",
    color: "secondary",
    class: colors.ghost.secondary
  },
  {
    variant: "ghost",
    color: "info",
    class: colors.ghost.info
  },
  {
    variant: "ghost",
    color: "success",
    class: colors.ghost.success
  },
  {
    variant: "ghost",
    color: "warning",
    class: colors.ghost.warning
  },
  {
    variant: "ghost",
    color: "danger",
    class: colors.ghost.danger
  }
];

const icon = [
  {
    isIconOnly: true,
    size: "sm",
    class: "min-w-8 w-8 h-8"
  },
  {
    isIconOnly: true,
    size: "md",
    class: "min-w-10 w-10 h-10"
  },
  {
    isIconOnly: true,
    size: "lg",
    class: "min-w-12 w-12 h-12"
  }
];
// eslint-disable-nextLine @typescript-eslint/no-unsafe-assignment
export const compoundVariants: any = [
  ...solid,
  ...bordered,
  ...light,
  ...flat,
  ...shadow,
  ...ghost,
  ...icon
];
