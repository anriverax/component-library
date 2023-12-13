import React from "react";
import { Tabs, Tab } from "@/lib/components/tab";
import Content from "@/components/layout/content";

// Define a union type for tab colors
type TabColor = "primary" | "secondary" | "info" | "success" | "warning" | "danger";

/**
 * Component to render Tabs with different colors.
 *
 * @component
 *
 * // Usage in another component
 * <TabsColors />
 */
const TabsColors = () => {
  /**
   * List of available tab colors.
   *
   * @type {TabColor[]}
   */
  const colorList: TabColor[] = ["primary", "secondary", "info", "success", "warning", "danger"];

  /**
   * Renders Tabs component with predefined titles for a specific color.
   *
   * @param {string} color - The color for the Tabs.
   * @returns {React.JSX.Element} JSX element for Tabs component.
   */
  const renderTabsForColor = (color: string): React.JSX.Element => (
    <Tabs key={color} color={color as TabColor}>
      {["Photos", "Music", "Videos"].map((tabTitle) => (
        <Tab key={tabTitle.toLowerCase()} title={tabTitle} />
      ))}
    </Tabs>
  );

  /**
   * Renders the entire TabsColor component.
   *
   * @returns {React.JSX.Element} JSX element for TabsColor component.
   */
  const renderTabsColor = (): React.JSX.Element => (
    <Content>{colorList.map(renderTabsForColor)}</Content>
  );

  return renderTabsColor();
};

export default TabsColors;
