/**
 * Returns a data attribute based on the provided condition.
 *
 * @param {boolean} condition - The condition to determine the data attribute.
 * @returns {boolean | undefined} - If the condition is true, returns true; otherwise, returns undefined.
 */
export const dataAttr = (condition: boolean): boolean | undefined => (condition ? true : undefined);
