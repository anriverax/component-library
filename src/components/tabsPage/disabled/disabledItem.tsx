import React, { FC } from "react";
import { tabsData } from "../tabContent";
import { TabItem } from "@/lib/components/tab/types-tabs";
import { Tabs, Tab } from "@/lib/components/tab";
import Content from "@/components/layout/content";

/**
 * TabsDisabledItem component to display tabs with a disabled state for specific items.
 *
 * @returns {JSX.Element} - The rendered TabsDisabledItem component.
 */
const TabsDisabledItem: FC = () => (
  <Content>
    {/* Using Tabs component with disabledKeys prop to set specific disabled items */}
    <Tabs disabledKeys={new Set(["music"])} items={tabsData}>
      {(item: TabItem) => (
        <Tab key={item.id} title={item.title}>
          {item.content}
        </Tab>
      )}
    </Tabs>
  </Content>
);

export default TabsDisabledItem;
