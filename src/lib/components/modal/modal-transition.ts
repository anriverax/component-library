import { TRANSITION_EASINGS } from "@/lib/utils/transitions";

export const scaleInOut = {
  enter: {
    scale: 1,
    y: 1,
    opacity: 1,
    transition: {
      scale: {
        duration: 0.4,
        ease: TRANSITION_EASINGS.ease
      },
      opacity: {
        duration: 0.4,
        ease: TRANSITION_EASINGS.ease
      },
      y: {
        type: "spring",
        bounce: 0,
        duration: 0.6
      }
    }
  },
  exit: {
    scale: 0,
    y: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: TRANSITION_EASINGS.ease
    }
  }
};
