import { Children, useMemo, useCallback } from "react";
import { tabVariants } from "../theme/theme-tab";
import { UseTabsProps, TabItem, TabsHookResult } from "../types-tabs";

/**
 * Hook for managing tab behavior.
 *
 * @param {UseTabsProps} props - The properties for the tabs.
 * @returns {TabsHookResult} - Object containing properties and functions for managing tabs.
 */

const useTabs = (props: UseTabsProps): TabsHookResult => {
  const { items, classNames, children, color, variant, size, radius, fullWidth, isDisabled } = props;
  /* eslint-disable */
  const myCollection = useMemo(() => {
    const data: TabItem[] = [];

    if (!items) {
      Children.toArray(children as React.ReactNode).forEach((child: any) => {
        const getKey = child.key.split(".$");
        data.push({ id: getKey[1], title: child.props.title });
      });
    }
    return data;
  }, [children]);

  const slots = useMemo(
    () => tabVariants({ color, variant, size, radius, fullWidth, isDisabled }),
    [color, variant, size, radius, fullWidth, isDisabled]
  );

  /**
   * Retrieves properties for the base slot.
   *
   * @returns {BaseSlotProps} - Object containing properties for the base slot.
   */
  const getBaseProps = useCallback(
    () => ({
      "data-slot": "base",
      className: slots.base({ class: [classNames?.base] })
    }),
    [slots, classNames]
  );

  /**
   * Retrieves properties for the tab list slot.
   *
   * @returns {TabListSlotProps} - Object containing properties for the tab list slot.
   */
  const getTabListProps = useCallback(
    () => ({
      "data-slot": "tabList",
      className: slots.tabList({ class: classNames?.tabList })
    }),
    [classNames, slots]
  );

  return {
    myCollection,
    getBaseProps,
    getTabListProps,
    slots
  };
};

export { useTabs };
