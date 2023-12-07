import { InputHTMLAttributes, ReactNode } from "react";
import { InputVariantProps, InputSlots } from "./theme/theme-input";
import { SlotsToClasses } from "@/lib/utils/types";

interface InputPropsOptional {
  /**
   * @default undefined
   */
  label?: string;
  /**
   * @default undefined
   */
  description?: string;
  /**
   * @default undefined
   */
  errorMessage?: string;
  /**
   * @default undefined
   */
  isReadOnly?: boolean;
  /**
   * @default undefined
   */
  shouldLabelBeOutside?: boolean;
  /**
   * @default undefined
   */
  startContent?: ReactNode;
  /**
   * @default undefined
   */
  endContent?: ReactNode;
  /**
   * @default undefined
   */
  customClassNames?: SlotsToClasses<InputSlots>;
}

export interface InputProps<T>
  extends Required<Pick<InputHTMLAttributes<T>, "type" | "name" | "value" | "onChange">>,
    Pick<InputHTMLAttributes<T>, "onBlur" | "onFocus" | "className" | "placeholder">,
    InputVariantProps,
    InputPropsOptional {}
