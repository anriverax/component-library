import { ClassValue } from "tailwind-variants";

/**
 * The SlotsToClasses type transforms a list of slots into a list of {slot: classes}.
 * @template S - The type representing the slot names.
 */
export type SlotsToClasses<S extends string> = {
  [key in S]?: ClassValue;
};

/**
 * The As type represents a React component type.
 * @template Props - The type representing the props of the React component.
 */
export type As<Props = never> = React.ElementType<Props>;
