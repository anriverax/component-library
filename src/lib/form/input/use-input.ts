import { useMemo, useCallback, useState, LegacyRef, useRef } from "react";
import { inputVariants } from "./theme/theme-input";
import { InputProps } from "./types-input";
import { dataAttr } from "@/lib/utils/assertion";
import { useDOMRef } from "@/lib/utils/dom";

interface UseInputProps<T> {
  props: InputProps<T>;
}

function useInput<T extends HTMLInputElement | HTMLTextAreaElement = HTMLInputElement>({
  props
}: UseInputProps<T>) {
  const ref = useRef<T>(null);
  const [isFocus, setFocus] = useState({ in: false, withIn: false });
  const domRef = useDOMRef<T>(ref);

  const {
    value,
    name,
    placeholder,
    onBlur,
    onChange,
    startContent,
    variant,
    color,
    size,
    radius,
    fullWidth,
    isClearable,
    isDisabled,
    isInvalid,
    isRequired,
    isMultiline,
    customClassNames
  } = props;

  const isFilled = !!value;
  const isFilledWithin = isFilled || isFocus.withIn;

  const hasHelper = !!props.description || !!props.errorMessage;

  const labelPlacement = useMemo(() => {
    if ((!props.labelPlacement || props.labelPlacement === "inside") && !props.label) {
      return "outside";
    }

    return props.labelPlacement ?? "inside";
  }, [props.labelPlacement, props.label]);

  const shouldLabelBeOutside = labelPlacement === "outside" || labelPlacement === "outside-left";
  const shouldLabelBeInside = labelPlacement === "inside";
  const hasPlaceholder = !!placeholder;

  const isLabelPlaceholder = !props.placeholder && labelPlacement !== "outside-left" && !isMultiline;

  const slots = useMemo(
    () =>
      inputVariants({
        variant,
        color,
        size,
        radius,
        labelPlacement,
        fullWidth,
        isLabelPlaceholder,
        isClearable,
        isDisabled,
        isInvalid,
        isRequired,
        isMultiline
      }),
    [
      variant,
      color,
      size,
      radius,
      labelPlacement,
      fullWidth,
      isLabelPlaceholder,
      isClearable,
      isDisabled,
      isInvalid,
      isRequired,
      isMultiline
    ]
  );

  /**
   * Variants
   */
  const getBaseVariant = useCallback(
    () => ({
      className: slots.base({ class: customClassNames?.base }),
      "data-filled-within": dataAttr(isFilledWithin),
      "data-focus": dataAttr(isFocus.in),
      "data-has-helper": dataAttr(hasHelper),
      "data-name": "input-container",
      "data-invalid": dataAttr(!!isInvalid),
      "data-start-content": dataAttr(!!startContent),
      onClick: () => {
        setFocus({ in: true, withIn: true });
        domRef.current?.focus();
      },
      onBlur: () => setFocus({ in: false, withIn: false })
    }),
    [domRef, isInvalid, startContent, slots, customClassNames?.base, isFilledWithin, hasHelper, isFocus]
  );

  const getLabelVariant = useCallback(
    () => ({
      className: slots.label({ class: customClassNames?.label }),
      htmlFor: name,
      "data-name": "label"
    }),
    [slots, customClassNames?.label, name]
  );

  const getMainWrapperVariant = useCallback(
    () => ({
      className: slots.mainWrapper({ class: customClassNames?.mainWrapper }),
      "data-name": "main-wrapper"
    }),
    [slots, customClassNames?.mainWrapper]
  );

  const getClearButtonVariant = useCallback(
    () => ({
      role: "button",
      tabIndex: 0,
      "data-name": "clear-button",
      className: slots.clearButton({
        class: customClassNames?.clearButton
      }),
      onClick: () => {
        if (domRef.current) {
          domRef.current.value = "";
          domRef.current.focus();
          /* eslint-disable */
          const event: any = {
            target: {
              value: "",
              name
            } as any
          };

          onChange && onChange(event);
          /* eslint-enable */
          setFocus({ in: false, withIn: false });
        }
      }
    }),
    [domRef, name, slots, customClassNames?.clearButton, onChange]
  );

  const getInputWrapperVariant = useCallback(
    () => ({
      className: slots.inputWrapper({
        class: [customClassNames?.inputWrapper, value ? "" : ""]
      }),
      "data-name": "input-wrapper",
      style: {
        cursor: "text"
      }
    }),
    [slots, customClassNames?.inputWrapper, value]
  );

  const getInnerWrapperVariant = useCallback(
    () => ({
      className: slots.innerWrapper({
        class: customClassNames?.innerWrapper
      }),
      "data-name": "inner-wrapper",
      onClick: (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
          domRef.current?.focus();
        }
      }
    }),
    [domRef, slots, customClassNames?.innerWrapper]
  );

  const getInputVariant = useCallback(
    () => ({
      ref: domRef as unknown as LegacyRef<T> | undefined,
      className: slots.input({ class: customClassNames?.input }),
      placeholder: props.placeholder,
      value: value,
      readOnly: props.isReadOnly,
      type: props.type,
      "data-filled": dataAttr(isFilled),
      "data-name": "input",
      name,
      id: name,
      required: isRequired || false,
      onChange: (e: React.ChangeEvent<T>) => {
        if (onChange) onChange(e);
      },
      onBlur: (e: React.FocusEvent<T>) => {
        if (onBlur) onBlur(e);
      }
    }),
    [
      domRef,
      isFilled,
      name,
      slots,
      value,
      customClassNames?.input,
      isRequired,
      props.type,
      onBlur,
      onChange,
      props.isReadOnly,
      props.placeholder
    ]
  );

  const getHelperWrapperVariant = useCallback(
    () => ({
      className: slots.helperWrapper({
        class: customClassNames?.helperWrapper
      }),
      "data-name": "helper-wrapper"
    }),
    [slots, customClassNames?.helperWrapper]
  );

  const getErrorMessageVariant = useCallback(
    () => ({
      className: slots.errorMessage({ class: customClassNames?.errorMessage }),
      "data-name": "error-message"
    }),
    [slots, customClassNames?.errorMessage]
  );

  const getDescriptionVariant = useCallback(
    () => ({
      className: slots.description({ class: customClassNames?.description }),
      "data-name": "description"
    }),
    [slots, customClassNames?.description]
  );

  return {
    getBaseVariant,
    getMainWrapperVariant,
    getLabelVariant,
    getClearButtonVariant,
    getInputWrapperVariant,
    getHelperWrapperVariant,
    getDescriptionVariant,
    getErrorMessageVariant,
    getInputVariant,
    getInnerWrapperVariant,
    labelPlacement,
    shouldLabelBeOutside,
    shouldLabelBeInside,
    hasPlaceholder
  };
}

export default useInput;
