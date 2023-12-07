import { Children, isValidElement, ReactElement } from "react";
import { TabPanelProps } from "./types-tabs";

const TabPanel = ({ slots, classNames, selectedKey, renderChildren }: TabPanelProps) => {
  /* eslint-disable */
  const renderComponent = () => {
    const getTabPanelSelected = Children.toArray(renderChildren).filter((child) => {
      if (isValidElement(child)) {
        return child.key?.toString().includes(selectedKey as string) ?? false;
      }
      return false;
    }) as ReactElement[];
    console.log(getTabPanelSelected[0]);
    return getTabPanelSelected[0]?.props.children;
  };

  /* eslint-enable */

  return (
    <div className={slots.panel?.({ class: classNames?.panel })} data-slot="panel">
      {renderComponent()}
    </div>
  );
};

export default TabPanel;
