import { tv as tvBase, TV, type VariantProps } from "tailwind-variants";

/**
 * The VariantProps type represents the properties for custom Tailwind CSS variants.
 */
export { VariantProps };

/**
 * The tailwindVariant function is a custom Tailwind CSS variant function.
 *
 * @param options - The options for the variant function.
 * @param config - The configuration options for the variant function.
 * @returns The result of the base Tailwind CSS variant function with extended configuration.
 */
export const tv: TV = (options, config) => tvBase(options, { ...config, twMerge: true });
