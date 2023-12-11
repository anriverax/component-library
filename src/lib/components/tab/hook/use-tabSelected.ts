import {
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
  ReactNode
} from "react";
import { CustomCollection } from "../utils";
import { TabItem, UseTabSelectedProps } from "../types-tabs";

/**
 * Hook for managing tab selection behavior.
 *
 * @param {UseTabSelectedProps} props - The properties for the tab selection.
 * @returns {object} - Object containing functions and values for managing tab selection.
 */
const useTabSelected = (props: UseTabSelectedProps) => {
  const [customSelectedKey, setCustomSelectedKey] = useState<string | null>(null);
  const { items, disabledKeys, children, isFunction, onSelectionChange } = props;

  /**
   * Finds the default selected key based on item collection and disabled keys.
   */
  const findDefaultSelectedKey = useCallback(() => {
    if (items) {
      const myCollection = CustomCollection(items);
      let getKey: string | null = myCollection.getFirstKey();

      // loop over tabs until we find one that isn't disabled and select that
      while (disabledKeys?.has(getKey as string) && getKey !== myCollection.getLastKey()) {
        getKey = myCollection.getKeyAfter(getKey);
      }

      // if this check is true, then every item is disabled, it makes more sense to default to the first key than the last
      if (disabledKeys?.has(getKey as string) && getKey === myCollection.getLastKey()) {
        getKey = myCollection.getFirstKey();
      }

      if (!onSelectionChange) setCustomSelectedKey(getKey);
      else onSelectionChange(getKey);
    }
  }, [items, disabledKeys, onSelectionChange]);

  /**
   * Handles click event on a tab.
   *
   * @param {string | number} key - The key of the clicked tab.
   */
  const handleClick = useCallback(
    (key: string | number) => {
      if (!onSelectionChange) setCustomSelectedKey(key as string);
      else onSelectionChange(key as string);
    },
    [onSelectionChange]
  );

  /**
   * Memoized rendering of children based on the function flag.
   */
  const renderChildren = useMemo(() => {
    if (isFunction) {
      const getChildren = items?.map((item: TabItem) => {
        if (typeof children === "function") {
          return (children as (item: TabItem) => ReactNode)(item);
        } else if (isValidElement(children)) {
          return cloneElement(children, { item: item } as React.Attributes & { item: TabItem });
        }
        return null;
      });
      return getChildren;
    }
    return children as ReactNode;
  }, [items, children, isFunction]);

  /**
   * useEffect to find the default selected key when the component mounts.
   */
  useEffect(() => {
    if (!props.selectedKey) findDefaultSelectedKey();
  }, [findDefaultSelectedKey, props.selectedKey]);

  return {
    handleClick,
    currentSelectedKey: !props.selectedKey ? customSelectedKey : props.selectedKey,
    renderChildren
  };
};

export { useTabSelected };
