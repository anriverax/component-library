import { useCallback, useMemo, useState } from "react";
import { MotionSpanProps, TabHookResult, TabListButtonProps, UseTabProps } from "../types-tabs";
import { dataAttr } from "@/lib/utils/assertion";

/**
 * Hook for managing tab behavior.
 *
 * @param {UseTabProps} props - The properties for the tab.
 * @returns {TabHookResult} - Object containing functions and values for managing tab behavior.
 */
const useTab = (props: UseTabProps): TabHookResult => {
  const [isHovered, setHovered] = useState<boolean>(false);

  const { item, selectedKey, classNames, slots, isDisable } = props;

  /**
   * Handles mouse enter event.
   */
  const handleMouseEnter = useCallback(() => {
    if (item?.id === selectedKey) setHovered(false);
    else setHovered(true);
  }, [item, selectedKey]);

  /**
   * Checks if the item is selected.
   */
  const getSelecteItem = useMemo(() => item?.id === selectedKey, [item, selectedKey]);

  /**
   * Retrieves properties for the tab button.
   *
   * @returns {TabListButtonProps} - Object containing properties for the tab button.
   */
  const getTabListBtn = useCallback(
    (): TabListButtonProps => ({
      className: slots?.tab({ class: classNames?.tab }),
      "data-slot": "tab",
      "data-disable": isDisable,
      "data-hover": dataAttr(isHovered),
      "data-selected": dataAttr(getSelecteItem),
      onMouseEnter: handleMouseEnter,
      onMouseLeave: () => setHovered(false)
    }),
    [slots, classNames, isHovered, getSelecteItem, isDisable, handleMouseEnter]
  );

  /**
   * Retrieves properties for the motion span.
   *
   * @returns {MotionSpanProps} - Object containing properties for the motion span.
   */
  const getMotionSpan = useCallback(
    (): MotionSpanProps => ({
      className: slots?.cursor({ class: classNames?.cursor }),
      "data-slot": "cursor",
      layoutDependency: false,
      layoutId: "cursor",
      transition: {
        type: "spring",
        bounce: 0.15,
        duration: 0.5
      }
    }),
    [slots, classNames]
  );

  return { getSelecteItem, getTabListBtn, getMotionSpan };
};

export { useTab };
