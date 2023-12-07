import { useCallback, useMemo, useState } from "react";
import { UseTabProps } from "../types-tabs";
import { dataAttr } from "@/lib/utils/assertion";

/**
 * Hook for managing tab behavior.
 *
 * @param props - The properties for the tab.
 * @returns Object containing functions and values for managing tab behavior.
 */
const useTab = (props: UseTabProps) => {
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
   * @returns Object containing properties for the tab button.
   */
  const getTabListBtn = useCallback(
    (): Record<string, unknown> => ({
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

  const getMotionSpan = useCallback(
    (): Record<string, unknown> => ({
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
