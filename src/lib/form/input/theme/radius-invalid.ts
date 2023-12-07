/* eslint-disable */
export const radius: any = [
  // radius-full & size
  {
    radius: "full",
    size: "sm",
    class: {
      inputWrapper: "px-4"
    }
  },
  {
    radius: "full",
    size: ["md", "lg"],
    class: {
      inputWrapper: "px-5"
    }
  },
  // isInvalid & variant
  {
    isInvalid: true,
    variant: "flat",
    class: {
      inputWrapper: "border-2"
    }
  },
  {
    isInvalid: true,
    variant: "underlined",
    class: {
      inputWrapper: "border-b-2 after:bg-danger-500"
    }
  }
];
