import React from "react";
import { Tabs, Tab } from "@/lib/components/tab";
import Content from "@/components/layout/content";

// Define the possible radius values
type RadiusType = "none" | "sm" | "md" | "lg" | "full";

const TabsRadius = (): React.JSX.Element => {
  // List of available radius values
  const radiusList: RadiusType[] = ["none", "sm", "md", "lg", "full"];

  /**
   * Render Tabs component with a specified radius.
   *
   * @param {RadiusType} radius - The radius value for the tabs.
   * @returns {React.JSX.Element} - The rendered Tabs component.
   */
  const renderTabs = (radius: RadiusType): React.JSX.Element => (
    <Tabs key={radius} radius={radius}>
      <Tab key="photos" title="Photos" />
      <Tab key="music" title="Music" />
      <Tab key="videos" title="Videos" />
    </Tabs>
  );

  return <Content>{radiusList.map(renderTabs)}</Content>;
};

export default TabsRadius;
