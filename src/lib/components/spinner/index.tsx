import { useMemo } from "react";
import { spinnerVariants, SpinnerSlots, SpinnerVariantsProps } from "./theme-spinner";
import { SlotsToClasses } from "@/lib/utils/types";

/* eslint-disable */
interface SpinnerProps extends SpinnerVariantsProps {
  classNames?: SlotsToClasses<SpinnerSlots>;
}

/* eslint-enable */
const Spinner = ({ ...props }: SpinnerProps) => {
  const { size, color, classNames } = props;
  const slots = useMemo(() => spinnerVariants({ size, color }), [size, color]);

  return (
    <div
      className={slots.base({
        class: classNames?.base
      })}
    >
      <div className={slots.wrapper({ class: classNames?.wrapper })}>
        <i className={slots.circle1({ class: classNames?.circle1 })} />
        <i className={slots.circle2({ class: classNames?.circle2 })} />
      </div>
    </div>
  );
};

export default Spinner;
