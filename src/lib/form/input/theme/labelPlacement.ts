/* eslint-disable */
export const labelPlacement: any = [
  // labelPlacement & size
  {
    labelPlacement: ["inside", "outside", "outside-left"],
    size: "sm",
    class: {
      inputWrapper: "h-12 min-h-12 py-1.5 px-3"
    }
  },
  {
    labelPlacement: ["inside", "outside", "outside-left"],
    size: "md",
    class: {
      inputWrapper: "h-14 min-h-14 py-2"
    }
  },
  {
    labelPlacement: ["inside", "outside", "outside-left"],
    size: "lg",
    class: {
      label: "text-sm",
      inputWrapper: "h-16 min-h-16 py-2.5 gap-0"
    }
  },
  // isLabelPlaceholder & labelPlacement
  {
    isLabelPlaceholder: true,
    labelPlacement: ["inside", "outside", "outside-left"],
    class: {
      label: ["font-normal", "group-data-[filled-within=true]:pointer-events-auto"]
    }
  },
  // isLabelPlaceholder & labelPlacement & inside & size
  {
    isLabelPlaceholder: true,
    labelPlacement: "inside",
    size: "sm",
    class: {
      label:
        "text-sm group-data-[filled-within=true]:text-[13px] group-data-[filled-within=true]:-translate-y-[calc(50%_+_1px)]",
      input: "pt-4"
    }
  },
  {
    isLabelPlaceholder: true,
    labelPlacement: "inside",
    size: "md",
    class: {
      label:
        "text-base group-data-[filled-within=true]:text-[13px] group-data-[filled-within=true]:-translate-y-[calc(50%_+_3px)]",
      input: "pt-4"
    }
  },
  {
    isLabelPlaceholder: true,
    labelPlacement: "inside",
    size: "lg",
    class: {
      label:
        "text-lg group-data-[filled-within=true]:text-sm group-data-[filled-within=true]:-translate-y-[calc(50%_+_3px)]",
      input: "pt-5"
    }
  },
  // isLabelPlaceholder & labelPlacement & outside & size
  {
    isLabelPlaceholder: true,
    labelPlacement: "outside",
    class: {
      base: "group relative justify-end",
      label:
        "pb-0 z-20 opacity-60 top-1/2 -translate-y-1/2 group-data-[filled-within=true]:left-0 group-data-[filled-within=true]:opacity-100"
    }
  },
  {
    isLabelPlaceholder: true,
    labelPlacement: "outside",
    size: "sm",
    class: {
      label:
        "left-2 text-sm group-data-[filled-within=true]:text-[13px] group-data-[filled-within=true]:-translate-y-[calc(50%_+_34px)]"
    }
  },
  {
    isLabelPlaceholder: true,
    labelPlacement: "outside",
    size: "md",
    class: {
      label:
        "left-3 text-base group-data-[filled-within=true]:text-[13px] group-data-[filled-within=true]:-translate-y-[calc(100%_+_26px)]"
    }
  },
  {
    isLabelPlaceholder: true,
    labelPlacement: "outside",
    size: "lg",
    class: {
      label:
        "left-3 text-lg group-data-[filled-within=true]:text-sm group-data-[filled-within=true]:-translate-y-[calc(100%_+_32px)]"
    }
  }, // outside-left & size & hasHelper
  {
    labelPlacement: "outside-left",
    size: "sm",
    class: {
      label: "group-data-[has-helper=true]:pt-2"
    }
  },
  {
    labelPlacement: "outside-left",
    size: "md",
    class: {
      label: "group-data-[has-helper=true]:pt-3"
    }
  },
  {
    labelPlacement: "outside-left",
    size: "lg",
    class: {
      label: "group-data-[has-helper=true]:pt-4"
    }
  }
];
