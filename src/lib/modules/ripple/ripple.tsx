import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { RippleType } from "./types-ripple";

/* eslint-disable */
export interface RippleProps {
  ripples: RippleType[];
  /**
   * @default undefined
   */
  color?: string;
  /**
   * @default undefined
   */
  motionProps?: HTMLMotionProps<"span">;
  /**
   * @default undefined
   */
  style?: React.CSSProperties;
}

/* eslint-enable */

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const Ripple = ({ ripples = [], motionProps, color = "currentColor", style }: RippleProps) => (
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
