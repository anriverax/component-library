import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RippleProps } from "./types-ripple";

/**
 * Clamp a value between a minimum and maximum.
 * @param value - The value to clamp.
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns The clamped value.
 */
const clamp = (value: number, min: number, max: number): number => Math.min(Math.max(value, min), max);

/**
 * Ripple component that displays animated ripples.
 * @param {RippleProps} props - The component props.
 * @returns {JSX.Element} - The rendered Ripple component.
 */
const Ripple = ({
  ripples = [],
  motionProps,
  color = "currentColor",
  style
}: RippleProps): JSX.Element => (
  <span>
    {ripples.map((ripple) => {
      const duration = clamp(0.01 * ripple.size, 0.2, ripple.size > 100 ? 0.75 : 0.5);

      return (
        <AnimatePresence key={ripple.key} mode="popLayout">
          <motion.span
            animate={{ transform: "scale(2)", opacity: 0 }}
            exit={{ opacity: 0 }}
            initial={{ transform: "scale(0)", opacity: 0.35 }}
            style={{
              position: "absolute",
              backgroundColor: color,
              borderRadius: "100%",
              transformOrigin: "center",
              pointerEvents: "none",
              zIndex: 10,
              top: ripple.y,
              left: ripple.x,
              width: `${ripple.size}px`,
              height: `${ripple.size}px`,
              ...style
            }}
            transition={{ duration }}
            {...motionProps}
          />
        </AnimatePresence>
      );
    })}
  </span>
);

export default Ripple;
