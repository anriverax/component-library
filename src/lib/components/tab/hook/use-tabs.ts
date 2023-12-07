import { Children, useMemo, useCallback } from "react";
import { tabVariants } from "../theme/theme-tab";
import { UseTabsProps } from "../types-tabs";

const useTabs = (props: UseTabsProps) => {
  const { items, classNames, children, color, variant, size, radius, fullWidth, isDisabled } = props;
  /* eslint-disable */
  const myCollection = useMemo(() => {
    const data: { id: string | number; title: string }[] = [];

    if (!items) {
      Children.toArray(children as React.ReactNode).forEach((child: any) => {
        const getKey = child.key.split(".$");
        data.push({ id: getKey[1], title: child.props.title });
      });
    }
    return data;
  }, [children]);
  /* eslint-enable */
  const slots = useMemo(
    () => tabVariants({ color, variant, size, radius, fullWidth, isDisabled }),
    [color, variant, size, radius, fullWidth, isDisabled]
  );

  const getBaseProps = useCallback(
    () => ({
      "data-slot": "base",
      className: slots.base({ class: [classNames?.base] })
    }),
    [slots, classNames]
  );

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
