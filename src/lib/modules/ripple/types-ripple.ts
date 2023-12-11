import { HTMLMotionProps } from 'framer-motion';

/**
 * Represents the configuration for a ripple.
 * @interface
 */
export interface RippleType {
  /**
   * Unique key for the ripple.
   */
  key: number;

  /**
   * X-coordinate of the ripple.
   */
  x: number;

  /**
   * Y-coordinate of the ripple.
   */
  y: number;

  /**
   * Size of the ripple.
   */
  size: number;
}

export interface UseRippleProps {
  /**
   * The time in milliseconds after which each ripple should be removed.
   * @default 1000
   */
  removeAfter?: number;
}

export interface RippleHookResult {
  /**
   * An array of ripples to be rendered.
   */
  ripples: RippleType[];

  /**
   * Event handler for triggering ripples.
   * @param event - The mouse event that triggered the ripple.
   */
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

/**
 * Props for the Ripple component.
 */
export interface RippleProps {
  /**
   * Array of ripple configurations.
   */
  ripples: RippleType[];

  /**
   * Color of the ripples.
   * @default "currentColor"
   */
  color?: string;

  /**
   * Motion props for the ripples.
   * @default undefined
   */
  motionProps?: HTMLMotionProps<"span">;

  /**
   * Additional styles for the Ripple component.
   * @default undefined
   */
  style?: React.CSSProperties;
}
