import React, { FC } from "react";
import { Tabs, Tab } from "@/lib/components/tab";
import Content from "@/components/layout/content";

// Define a union type for tab sizes
type TabSize = "sm" | "md" | "lg";

/**
 * TabsSize component to demonstrate different sizes of the Tabs component.
 *
 * @component
 * @returns {JSX.Element} The TabsSize component.
 *
 * // Usage of TabsSize component:
 * <TabsSize />
 */
const TabsSize: FC = (): JSX.Element => {
  /**
   * List of tab sizes.
   *
   * @type {TabSize[]}
   */
  const sizeList: TabSize[] = ["sm", "md", "lg"];

  /**
   * Renders Tabs component with predefined titles for a specific size.
   *
   * @param {string} size - The size for the Tabs.
   * @returns {JSX.Element} JSX element for Tabs component.
   */
  const renderTabsForSize = (size: string): JSX.Element => (
    <Tabs key={size} size={size as TabSize}>
      {["Photos", "Music", "Videos"].map((tabTitle) => (
        <Tab key={tabTitle.toLowerCase()} title={tabTitle} />
      ))}
    </Tabs>
  );

  /**
   * Renders the entire TabsSize component.
   *
   * @returns {JSX.Element} JSX element for TabsSize component.
   */
  const renderTabsSize = (): JSX.Element => <Content>{sizeList.map(renderTabsForSize)}</Content>;

  return renderTabsSize();
};

export default TabsSize;
