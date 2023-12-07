/* eslint-disable */
// flat & color
export const flatColor: any = [
  {
    variant: "flat",
    color: "default",
    class: {
      inputWrapper: "bg-default-100 text-default-500 border-default-300 hover:bg-default-200",
      input:
        "text-default-500 bg-default-100 group-hover/inputWrapper:bg-default-200 placeholder:text-default-300",
      label: "text-default-500"
    }
  },
  {
    variant: "flat",
    color: "primary",
    class: {
      inputWrapper: "bg-primary-100 text-primary-500 border-primary-300 hover:bg-primary-200",
      input:
        "text-primary-500 bg-primary-100 group-hover/inputWrapper:bg-primary-200 placeholder:text-primary-300",
      label: "text-primary-500"
    }
  },
  {
    variant: "flat",
    color: "secondary",
    class: {
      inputWrapper: "bg-secondary-100 text-secondary-500 border-secondary-300 hover:bg-secondary-200",
      input:
        "text-secondary-500 bg-secondary-100 group-hover/inputWrapper:bg-secondary-200 placeholder:text-secondary-300",
      label: "text-secondary-500"
    }
  },
  {
    variant: "flat",
    color: "success",
    class: {
      inputWrapper: "bg-success-100 text-success-500 border-success-300 hover:bg-success-200",
      input:
        "text-success-500 bg-success-100 group-hover/inputWrapper:bg-success-200 placeholder:text-success-300",
      label: "text-success-500"
    }
  },
  {
    variant: "flat",
    color: "warning",
    class: {
      inputWrapper: "bg-warning-100 text-warning-500 border-warning-300 hover:bg-warning-200",
      input:
        "text-warning-500 bg-warning-100 group-hover/inputWrapper:bg-warning-200 placeholder:text-warning-400",
      label: "text-warning-500"
    }
  },
  {
    variant: "flat",
    color: "danger",
    class: {
      inputWrapper: "bg-danger-100 text-danger-500 border-danger-300 hover:bg-danger-200",
      input:
        "text-danger-500 bg-danger-100 group-hover/inputWrapper:bg-danger-200 placeholder:text-danger-300",
      label: "text-danger-500"
    }
  },
  // underlined & color
  {
    variant: "underlined",
    color: "default",
    class: {
      inputWrapper:
        "text-default-500 after:bg-default-500 group-data-[filled-within=true]:border-b-default-200",
      input: "text-default-500 placeholder:text-default-300",
      label: "text-default-500"
    }
  },
  {
    variant: "underlined",
    color: "primary",
    class: {
      inputWrapper:
        "text-primary-500 after:bg-primary-500 group-data-[filled-within=true]:border-b-primary-200",
      input: "text-primary-500 placeholder:text-primary-300",
      label: "text-primary-500"
    }
  },
  {
    variant: "underlined",
    color: "secondary",
    class: {
      inputWrapper:
        "text-secondary-500 after:bg-secondary-500 group-data-[filled-within=true]:border-b-secondary-200",
      input: "text-secondary-500 placeholder:text-secondary-300",
      label: "text-secondary-500"
    }
  },
  {
    variant: "underlined",
    color: "success",
    class: {
      inputWrapper:
        "text-success-500 after:bg-success-500 group-data-[filled-within=true]:border-b-success-200",
      input: "text-success-500 placeholder:text-success-300",
      label: "text-success-500"
    }
  },
  {
    variant: "underlined",
    color: "warning",
    class: {
      inputWrapper:
        "text-warning-500 after:bg-warning-500 group-data-[filled-within=true]:border-b-warning-200",
      input: "text-warning-500 placeholder:text-warning-300",
      label: "text-warning-500"
    }
  },
  {
    variant: "underlined",
    color: "danger",
    class: {
      inputWrapper:
        "text-danger-500 after:bg-danger-500 group-data-[filled-within=true]:border-b-danger-200",
      input: "text-danger-500 placeholder:text-danger-300",
      label: "text-danger-500"
    }
  },
  {
    variant: "underlined",
    class: {
      inputWrapper: "after:transition-all after:duration-700"
    }
  },
  // bordered & color
  {
    variant: "bordered",
    color: "default",
    class: {
      inputWrapper: "text-default-500 border-default-300",
      input: "text-default-500 placeholder:text-default-300",
      label: "text-default-500"
    }
  },
  {
    variant: "bordered",
    color: "primary",
    class: {
      inputWrapper: "text-primary-500 border-primary-300",
      input: "text-primary-500 placeholder:text-primary-300",
      label: "text-primary-500"
    }
  },
  {
    variant: "bordered",
    color: "secondary",
    class: {
      inputWrapper: "text-secondary-500 border-secondary-300",
      input: "text-secondary-500 placeholder:text-secondary-300",
      label: "text-secondary-500"
    }
  },
  {
    variant: "bordered",
    color: "success",
    class: {
      inputWrapper: "text-success-500 border-success-300",
      input: "text-success-500 placeholder:text-success-300",
      label: "text-success-500"
    }
  },
  {
    variant: "bordered",
    color: "warning",
    class: {
      inputWrapper: "text-warning-500 border-warning-300",
      input: "text-warning-500 placeholder:text-warning-300",
      label: "text-warning-500"
    }
  },
  {
    variant: "bordered",
    color: "danger",
    class: {
      inputWrapper: "text-danger-500 border-danger-300",
      input: "text-danger-500 placeholder:text-danger-300",
      label: "text-danger-500"
    }
  },
  // faded & color
  {
    variant: "faded",
    color: "default",
    class: {
      inputWrapper: "focus-within:text-default-500 focus-within:border-primary-300",
      label: "group-data-[focus=true]:text-default-500"
    }
  },
  {
    variant: "faded",
    color: "primary",
    class: {
      inputWrapper: "bg-white focus-within:text-primary-500 focus-within:border-primary-300",
      label: "group-data-[focus=true]:text-primary-500"
    }
  },
  {
    variant: "faded",
    color: "secondary",
    class: {
      inputWrapper: "focus-within:text-secondary-500 focus-within:border-secondary-300",
      label: "group-data-[focus=true]:text-secondary-500"
    }
  },
  {
    variant: "faded",
    color: "success",
    class: {
      inputWrapper: "focus-within:text-success-500 focus-within:border-success-300",
      label: "group-data-[focus=true]:text-success-500"
    }
  },
  {
    variant: "faded",
    color: "warning",
    class: {
      inputWrapper: "focus-within:text-warning-500 focus-within:border-warning-300",
      label: "group-data-[focus=true]:text-warning-500"
    }
  },
  {
    variant: "faded",
    color: "danger",
    class: {
      inputWrapper: "focus-within:text-danger-500 focus-within:border-danger-300",
      label: "group-data-[focus=true]:text-danger-500"
    }
  }
];
