import { Ref, RefObject, useImperativeHandle, useRef } from "react";

/**
 * A hook for managing a DOM reference with optional imperatives.
 *
 * @template T - The type of the DOM element, defaults to HTMLElement.
 * @param {RefObject<T | null> | Ref<T | null>} ref - The ref object or callback function.
 * @returns {React.MutableRefObject<T | null>} - A mutable ref object that holds the DOM reference.
 */
export function useDOMRef<T extends HTMLElement = HTMLElement>(
  ref?: RefObject<T | null> | Ref<T | null>
): React.MutableRefObject<T | null> {
  const domRef = useRef<T | null>(null);

  useImperativeHandle(ref, () => domRef.current);

  return domRef;
}
