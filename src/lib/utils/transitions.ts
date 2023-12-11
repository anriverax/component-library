import { Target, TargetAndTransition, Transition } from "framer-motion";

/**
 * A partial record representing motion states (enter and exit).
 * @template P - Additional properties for motion states.
 */
type WithMotionState<P> = Partial<Record<"enter" | "exit", P>>;

/**
 * Configuration for motion transition.
 */
export type TransitionConfig = WithMotionState<Transition>;

/**
 * Configuration for motion transition end.
 */
export type TransitionEndConfig = WithMotionState<Target>;

/**
 * Properties related to motion transitions.
 */
export type TransitionProperties = {
  /**
   * Custom `transition` definition for `enter` and `exit`.
   */
  transition?: TransitionConfig;
  /**
   * Custom `transitionEnd` definition for `enter` and `exit`.
   */
  transitionEnd?: TransitionEndConfig;
};

/**
 * A function that resolves the target and transition based on provided properties.
 * @template P - Additional properties for the resolver.
 */
type TargetResolver<P = Record<string, never>> = (
  props: P & TransitionProperties
) => TargetAndTransition;

/**
 * A variant that can be either a target and transition or a resolver function.
 * @template P - Additional properties for the variant.
 */
type Variant<P = Record<string, never>> = TargetAndTransition | TargetResolver<P>;

/**
 * A record of variants, each having enter and exit states.
 * @template P - Additional properties for the variants.
 */
export type Variants<P = Record<string, never>> = Record<
  string,
  {
    enter: Variant<P>;
    exit: Variant<P>;
    initial?: Variant<P>;
  }
>;

/**
 * A constant object representing various transition easings.
 */
export const TRANSITION_EASINGS = {
  ease: [0.36, 0.66, 0.4, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  spring: [0.155, 1.105, 0.295, 1.12],
  springOut: [0.57, -0.15, 0.62, 0.07],
  softSpring: [0.16, 1.11, 0.3, 1.02]
} as const;

/**
 * Default transition properties for enter and exit states.
 */
export const TRANSITION_DEFAULTS = {
  enter: {
    duration: 0.2,
    ease: TRANSITION_EASINGS.easeOut
  },
  exit: {
    duration: 0.1,
    ease: TRANSITION_EASINGS.easeIn
  }
} as const;

/**
 * A set of predefined transition variants.
 */
export const TRANSITION_VARIANTS: Variants = {
  scaleSpring: {
    enter: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    },
    exit: {
      transform: "scale(0.6)",
      opacity: 0,
      transition: {
        type: "easeOut",
        duration: 0.2
      }
    }
  },
  scaleSpringOpacity: {
    initial: {
      opacity: 0,
      transform: "scale(0.6)"
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      transform: "scale(0.3)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.4
      }
    }
  },
  scale: {
    enter: { scale: 1 },
    exit: { scale: 0.95 }
  },
  scaleFadeIn: {
    enter: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: TRANSITION_EASINGS.easeIn
      }
    },
    exit: {
      transform: "scale(0.95)",
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: TRANSITION_EASINGS.easeOut
      }
    }
  },
  scaleInOut: {
    enter: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: TRANSITION_EASINGS.ease
      }
    },
    exit: {
      transform: "scale(1.03)",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: TRANSITION_EASINGS.ease
      }
    }
  },
  fade: {
    enter: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: TRANSITION_EASINGS.ease
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: TRANSITION_EASINGS.ease
      }
    }
  },
  collapse: {
    enter: {
      opacity: 1,
      height: "auto",
      transition: {
        height: {
          type: "spring",
          duration: 0.1
        },
        opacity: {
          easings: "ease",
          duration: 0.4
        }
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        easings: "ease",
        duration: 0.3
      }
    }
  }
};
