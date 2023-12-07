import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InputProps } from "./types-input";
import useInput from "./use-input";
import { CloseFilledIcon } from "@/lib/components/icons";
import { TRANSITION_VARIANTS } from "@/lib/utils/transitions";

/**
 * @property
 *
 * ```js
 * variant(flat)
 * color(default)
 * size(sm)
 * radius
 * labelPlacement(inside)
 * fullWidth(true)
 * isLabelPlaceholder
 * isClearable
 * isDisabled(false)
 * isInvalid
 * isRequired
 * isMultiline
 * label
 * description
 * errorMessage
 * isReadOnly
 * shouldLabelBeOutside
 * startContent
 * endContent
 * customClassNames({base, label, mainWrapper, inputWrapper, innerWrapper, input, clearButton, helperWrapper, description, errorMessage})
 * ```
 */
const Input = (props: InputProps<HTMLInputElement>) => {
  const { description, errorMessage, isClearable, endContent, startContent } = props;

  const {
    getBaseVariant,
    labelPlacement,
    shouldLabelBeOutside,
    hasPlaceholder,
    getMainWrapperVariant,
    getLabelVariant,
    getClearButtonVariant,
    getInputWrapperVariant,
    getHelperWrapperVariant,
    getDescriptionVariant,
    getErrorMessageVariant,
    getInputVariant,
    getInnerWrapperVariant
  } = useInput<HTMLInputElement>({
    props
  });

  const hasHelper = !!description || !!errorMessage;

  const labelContent = useMemo(() => {
    if (props.label) return <label {...getLabelVariant()}>{props.label}</label>;
  }, [props.label, getLabelVariant]);

  const end = useMemo(() => {
    if (isClearable) {
      return <span {...getClearButtonVariant()}>{endContent || <CloseFilledIcon />}</span>;
    }

    return endContent;
  }, [isClearable, endContent, getClearButtonVariant]);

  const innerWrapper = useMemo(() => {
    if (startContent || end) {
      return (
        <div {...getInnerWrapperVariant()}>
          {startContent}
          <input {...getInputVariant()} />
          {end}
        </div>
      );
    }

    return <input {...getInputVariant()} />;
  }, [startContent, end, getInputVariant, getInnerWrapperVariant]);

  const helperWrapper = useMemo(() => {
    if (!hasHelper) return null;

    return (
      <div {...getHelperWrapperVariant()}>
        {errorMessage ? (
          <AnimatePresence>
            <motion.div
              animate="enter"
              exit="exit"
              initial="exit"
              variants={TRANSITION_VARIANTS.collapse}
              {...getErrorMessageVariant()}
            >
              {errorMessage}
            </motion.div>
          </AnimatePresence>
        ) : description ? (
          <div {...getDescriptionVariant()}>{description}</div>
        ) : null}
      </div>
    );
  }, [
    description,
    errorMessage,
    hasHelper,
    getHelperWrapperVariant,
    getDescriptionVariant,
    getErrorMessageVariant
  ]);

  const mainWrapper = useMemo(() => {
    if (shouldLabelBeOutside) {
      return (
        <div {...getMainWrapperVariant()}>
          <div {...getInputWrapperVariant()}>
            {labelPlacement === "outside" && !hasPlaceholder ? labelContent : null}
            {innerWrapper}
          </div>
          {helperWrapper}
        </div>
      );
    }

    return (
      <>
        <div {...getInputWrapperVariant()}>
          {labelContent}
          {innerWrapper}
        </div>
        {helperWrapper}
      </>
    );
  }, [
    labelPlacement,
    helperWrapper,
    labelContent,
    shouldLabelBeOutside,
    hasPlaceholder,
    innerWrapper,
    getMainWrapperVariant,
    getInputWrapperVariant
  ]);

  return (
    <div {...getBaseVariant()}>
      {shouldLabelBeOutside && (props.labelPlacement === "outside-left" || hasPlaceholder)
        ? labelContent
        : null}
      {mainWrapper}
    </div>
  );
};

Input.displayName = "Input";
export default Input;
