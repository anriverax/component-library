import { useCallback, useEffect, useMemo, useState } from "react";
import { CustomCollection } from "../utils";
import { UseTabSelectedProps } from "../types-tabs";

const useTabSelected = (props: UseTabSelectedProps) => {
  const [customSelectedKey, setCustomSelectedKey] = useState<string | null>(null);
  const { items, disabledKeys, children, isFunction, onSelectionChange } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const findDefaultSelectedKey = useCallback(() => {
    if (items) {
      const myCollection = CustomCollection(items);
      let getKey: string | null = myCollection.getFirstKey();

      // loop over tabs until we find one that isn't disabled and select that
      while (disabledKeys?.has(getKey as string) && getKey !== myCollection.getLastKey()) {
        getKey = myCollection.getKeyAfter(getKey);
      }

      // if this check is true, then every item is disabled, it makes more sense to default to the first key than the last
      if (disabledKeys?.has(getKey as string) && getKey === myCollection.getLastKey())
        getKey = myCollection.getFirstKey();

      if (!onSelectionChange) setCustomSelectedKey(getKey);
      else onSelectionChange(getKey);
    }
  }, [items, disabledKeys, onSelectionChange]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClick = useCallback(
    (key: string | number) => {
      if (!onSelectionChange) setCustomSelectedKey(key as string);
      else onSelectionChange(key as string);
    },
    [onSelectionChange]
  );

  /* eslint-disable */
  const renderChildren = useMemo(() => {
    if (isFunction) {
      const getChildren = items?.map(children as any);
      return getChildren;
    }
    return children as React.ReactNode;
  }, [items, children]);
  /* eslint-enable */
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
