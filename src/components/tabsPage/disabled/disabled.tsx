import React from "react";
import { tabsData } from "../tabContent";
import { TabItem } from "@/lib/components/tab/types-tabs";
import { Tabs, Tab } from "@/lib/components/tab";
import Content from "@/components/layout/content";

/**
 * TabsDisabled component to display disabled tabs.
 *
 * @returns {JSX.Element} - The rendered TabsDisabled component.
 */
const TabsDisabled = (): JSX.Element => (
  <Content>
    {/* Using Tabs component with isDisabled prop */}
    <Tabs isDisabled items={tabsData}>
      {(item: TabItem) => (
        <Tab key={item.id} title={item.title}>
          {item.content}
        </Tab>
      )}
    </Tabs>
  </Content>
);

export default TabsDisabled;
