import React from "react";
import { tabsData } from "../tabContent";
import { Tabs, Tab } from "@/lib/components/tab";
import Content from "@/components/layout/content";
import { TabItem } from "@/lib/components/tab/types-tabs";

/**
 * TabsNormal component for displaying tabs with different content.
 *
 * @returns {JSX.Element} The TabsNormal component.
 */
const TabsNormal = (): JSX.Element => (
  <Content>
    <Tabs items={tabsData}>
      {(item: TabItem) => (
        <Tab key={item.id} title={item.title}>
          {item.content}
        </Tab>
      )}
    </Tabs>
  </Content>
);

export default TabsNormal;
