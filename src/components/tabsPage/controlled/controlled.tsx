import React, { useState } from "react";
import { tabsData } from "../tabContent";
import { Tabs, Tab } from "@/lib/components/tab";
import { TabItem } from "@/lib/components/tab/types-tabs";
import Content from "@/components/layout/content";

/**
 * TabsControlled component for displaying controlled tabs with dynamic content.
 *
 * @returns {JSX.Element} - The rendered TabsControlled component.
 */
const TabsControlled = () => {
  const [selectedKey, setSelectedKey] = useState<string | null>("music");

  return (
    <Content>
      {/* Using Tabs component with controlled tabs and dynamic content */}
      <Tabs selectedKey={selectedKey as string} onSelectionChange={setSelectedKey} items={tabsData}>
        {/* Render each tab with dynamic content */}
        {(item: TabItem) => (
          <Tab key={item.id} title={item.title}>
            {item.content}
          </Tab>
        )}
      </Tabs>
    </Content>
  );
};

export default TabsControlled;
