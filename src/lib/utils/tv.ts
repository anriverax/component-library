import { tv as tvBase, TV, type VariantProps } from "tailwind-variants";

export { VariantProps };
export const tv: TV = (options, config) => tvBase(options, { ...config, twMerge: true });
