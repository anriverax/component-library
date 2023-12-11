import React from "react";
import { tabsData } from "../tabContent";
import { TabItem } from "@/lib/components/tab/types-tabs";
import { Tabs, Tab } from "@/lib/components/tab";
import Content from "@/components/layout/content";

/**
 * TabsDynamic component for displaying dynamic tabs with different content.
 *
 * @returns {JSX.Element} - The rendered TabsDynamic component.
 */
const TabsDynamic = (): JSX.Element => (
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

export default TabsDynamic;
