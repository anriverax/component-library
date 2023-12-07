"use client";

/**
 * @file TabsPage.tsx
 * @desc This file contains the TabsPage component which renders a collection of tabs.
 */

// Import React and required components
import React from "react";
import { Tabs, Tab } from "@/lib/components/tab";
import { TabItem } from "@/lib/components/tab/types-tabs";
import Wrapper from "@/components/layout/wrapper";
import { tabsCollection } from "@/components/tabsPage/types-tabs";

/**
 * Functional component representing the TabsPage.
 * Renders a scrollable container with tabs based on the provided collections.
 * @returns {JSX.Element} The rendered TabsPage component.
 */
const TabsPage: React.FC = (): JSX.Element => {
  /**
   * Renders an individual tab based on the provided item.
   * @param {TabItem} item - The tab item to be rendered.
   * @returns {JSX.Element} The rendered Tab component.
   */
  const renderTab = (item: TabItem): JSX.Element => (
    <Tab key={item.id} title={item.title}>
      <section>
        <div>{item.content}</div>
      </section>
    </Tab>
  );

  return (
    <div className="scroll-container">
      {/* Iterate over tabsCollection to render each collection */}
      {tabsCollection.map((collection, index) => (
        <Wrapper key={index} title={collection.title}>
          {/* Render Tabs component with the specified variant and renderTab function */}
          <Tabs items={collection.component} variant="underlined">
            {(item: TabItem) => renderTab(item)}
          </Tabs>
        </Wrapper>
      ))}
    </div>
  );
};

// Export the TabsPage component as the default export
export default TabsPage;
