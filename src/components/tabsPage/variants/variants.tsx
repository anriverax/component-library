import React from "react";
import { Tabs, Tab } from "@/lib/components/tab";
import Content from "@/components/layout/content";

// Define a union type for tab variants
type TabVariant = "solid" | "underlined" | "bordered" | "light";

/**
 * TabsVariants component to demonstrate different variants of the Tabs component.
 *
 * @returns {React.JSX.Element} The TabsVariants component.
 */
const TabsVariants = (): React.JSX.Element => {
  // List of tab variants
  const variantList: TabVariant[] = ["solid", "underlined", "bordered", "light"];

  return (
    <Content>
      {variantList.map((variant) => (
        <Tabs key={variant} variant={variant}>
          <Tab key="photos" title="Photos" />
          <Tab key="music" title="Music" />
          <Tab key="videos" title="Videos" />
        </Tabs>
      ))}
    </Content>
  );
};

export default TabsVariants;
