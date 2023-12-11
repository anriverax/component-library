import { useCallback, useEffect, useState } from "react";
import { RippleHookResult, RippleType, UseRippleProps } from "./types-ripple";

/**
 * A custom hook for handling ripples.
 * @param removeAfter - The time in milliseconds after which each ripple should be removed.
 * @returns An object containing the array of ripples and an event handler to trigger ripples.
 */
export const useRipple = ({ removeAfter = 1000 }: UseRippleProps = {}): RippleHookResult => {
  const [ripples, setRipples] = useState<RippleType[]>([]);

  useEffect(() => {
    const timeoutIds = ripples.map((_, i) =>
      setTimeout(() => {
        setRipples((prevState) => prevState.filter((_, index) => index !== i));
      }, removeAfter)
    );

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [ripples, removeAfter]);

  /**
   * Event handler for triggering ripples.
   * @param event - The mouse event that triggered the ripple.
   */
  const onClick = useCallback((event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const trigger = event.currentTarget;

    const size = Math.max(trigger.clientWidth, trigger.clientHeight);
    const rect = trigger.getBoundingClientRect();

    setRipples((prevRipples) => [
      ...prevRipples,
      {
        key: new Date().getTime(),
        size,
        x: event.clientX - rect.x - size / 2,
        y: event.clientY - rect.y - size / 2
      }
    ]);
  }, []);

  return { ripples, onClick };
};
