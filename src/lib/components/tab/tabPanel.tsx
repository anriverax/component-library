import { Children, isValidElement, ReactNode } from "react";
import { TabPanelProps } from "./types-tabs";

/**
 * TabPanelProps type is used to define the properties for the TabPanel component.
 */
interface RenderComponentProps {
  /**
   * React children to render.
   */
  renderChildren: ReactNode;
  /**
   * The key of the selected tab.
   */
  selectedKey?: string | number;
}

/**
 * Renders the content of the selected tab.
 *
 * @param {RenderComponentProps} props - The properties for the RenderComponent function.
 * @returns {ReactNode} - The rendered content of the selected tab.
 */
const RenderComponent = ({ renderChildren, selectedKey }: RenderComponentProps): ReactNode => {
  /**
   * Filters and returns an array of valid React elements whose keys match the selected key.
   *
   * @param {ReactNode} child - The child element to check.
   * @returns {React.ReactElement[]} - An array of valid React elements.
   */
  const getTabPanelSelected = (child: ReactNode): React.ReactElement[] =>
    Children.toArray(child).filter((c) => {
      if (isValidElement(c)) {
        return c.key?.toString().includes(selectedKey as string) ?? false;
      }
      return false;
    }) as React.ReactElement[];

  const tabPanelSelected = getTabPanelSelected(renderChildren);
  const firstTabPanelSelected = tabPanelSelected.find(isValidElement);

  if (firstTabPanelSelected && isValidElement(firstTabPanelSelected)) {
    const { children } = firstTabPanelSelected.props as { children: React.ReactNode };

    if (children) return children;
  }

  // Handle the case where no matching element is found or props.children is undefined
  return null;
};

/**
 * TabPanel component that renders the content of the selected tab.
 *
 * @param {TabPanelProps} props - The properties for the TabPanel component.
 * @returns {ReactNode} - The rendered TabPanel component.
 */
const TabPanel = ({
  slots,
  classNames,
  selectedKey,
  renderChildren
}: TabPanelProps): React.ReactNode => (
  <div className={slots.panel?.({ class: classNames?.panel })} data-slot="panel">
    {RenderComponent({ renderChildren, selectedKey })}
  </div>
);
export default TabPanel;
