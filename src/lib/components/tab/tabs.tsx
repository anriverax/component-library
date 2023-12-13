import { ReactNode, useId } from "react";
import { LayoutGroup } from "framer-motion";
import { useTabs } from "./hook/use-tabs";
import { useTabSelected } from "./hook/use-tabSelected";
import TabContent from "./tabContent";
import { TabItem, UseTabsProps, ControllerSelectedKeyProps } from "./types-tabs";
import TabPanel from "./tabPanel";

/**
 * Props for the Tabs component.
 */
type TabsProps = UseTabsProps & ControllerSelectedKeyProps;

/**
 * A component for managing and rendering tabs.
 * @param props - The Tabs component props.
 * @returns The Tabs component.
 */
const Tabs = (props: TabsProps): React.JSX.Element => {
  const { selectedKey, onSelectionChange, ...otherProps } = props;

  const { getBaseProps, getTabListProps, slots, myCollection } = useTabs(otherProps);

  const { items, children, disabledKeys } = props;

  const { handleClick, currentSelectedKey, renderChildren } = useTabSelected({
    selectedKey,
    onSelectionChange,
    items: !items ? myCollection : items,
    disabledKeys,
    children,
    isFunction: !!items
  });

  const layoutId = useId();

  const tabsWithItems = items?.map((item: TabItem) => (
    <TabContent
      key={item.id}
      item={item}
      slots={slots}
      selectedKey={currentSelectedKey as string}
      handleClick={handleClick}
      isDisable={disabledKeys ? disabledKeys.has(item.id as string) : undefined}
    />
  ));

  /* eslint-disable */
  const tabsWithOutItems = myCollection.map((item: any) => (
    <TabContent
      key={item.id}
      item={item}
      slots={slots}
      selectedKey={currentSelectedKey as string}
      handleClick={handleClick}
      isDisable={disabledKeys?.has(item.id as string)}
    />
  ));
  /* eslint-enable */

  return (
    <>
      <div {...getBaseProps()}>
        <div {...getTabListProps()}>
          <LayoutGroup id={layoutId}>{items ? tabsWithItems : tabsWithOutItems}</LayoutGroup>
        </div>
      </div>
      {currentSelectedKey ? (
        <TabPanel
          slots={slots}
          selectedKey={currentSelectedKey}
          items={items}
          renderChildren={renderChildren as ReactNode}
        />
      ) : null}
    </>
  );
};

export default Tabs;
