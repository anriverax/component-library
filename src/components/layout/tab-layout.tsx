"use client";

import Wrapper from "./wrapper";
import { TabItem } from "@/lib/components/tab/types-tabs";
import { Tab, Tabs } from "@/lib/components/tab";

interface TabLayoutItems {
  title: string;
  component: TabItem[];
}
interface TabLayoutProps {
  items: TabLayoutItems[];
}

const TabLayout = ({ items }: TabLayoutProps) => {
  /**
   * Renders an individual tab based on the provided item.
   * @param {TabItem} item - The tab item to be rendered.
   * @returns {React.JSX.Element} The rendered Tab component.
   */
  const renderTab = (item: TabItem): React.JSX.Element => (
    <Tab key={item.id} title={item.title}>
      <section>
        <div>{item.content}</div>
      </section>
    </Tab>
  );

  return (
    <div className="scroll-container">
      {/* Iterate over tabsCollection to render each collection */}
      {items.map((collection: TabLayoutItems, index) => (
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

export default TabLayout;
