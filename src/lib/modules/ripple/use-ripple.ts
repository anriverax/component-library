import { useCallback, useEffect, useState } from "react";
import { RippleType } from "./types-ripple";

interface UseRippleProps {
  /**
   * @default 1000
   */
  removeAfter?: number;
}

export const useRipple = ({ removeAfter = 1000 }: UseRippleProps = {}) => {
  const [ripples, setRipples] = useState<RippleType[]>([]);

  useEffect(() => {
    const timeoutIds = ripples.map(
      (_, i) =>
        setTimeout(() => {
          setRipples((prevState) => prevState.filter((_, index) => index !== i));
        }, removeAfter) // remove after 1s
    );

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [ripples, removeAfter]);

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
