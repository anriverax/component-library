import React from "react";
import { Tab } from "@/lib/components/tab";
import { TabItem } from "@/lib/components/tab/types-tabs";

/**
 * Props for the DynamicTabsContent component.
 */
interface DynamicTabsContentProps {
  /**
   * The TabItem representing a tab.
   */
  item: TabItem;
}

/**
 * DynamicTabsContent component for displaying dynamic content in tabs.
 *
 * @param {DynamicTabsContentProps} props - The props for the DynamicTabsContent component.
 * @returns {React.JSX.Element} The content for the tab.
 */
const DynamicTabsContent = ({ item }: DynamicTabsContentProps): React.JSX.Element => (
  <section>
    <div>{item.content}</div>
  </section>
);

/**
 * Props for the TabRenderer component.
 */
interface TabRendererProps {
  /**
   * The TabItem representing a tab.
   */
  item: TabItem;
}

/**
 * Renders the content for each tab using DynamicTabsContent.
 *
 * @param {TabRendererProps} props - The props for the TabRenderer component.
 * @returns {React.JSX.Element} The content for the tab.
 */
export const TabRenderer = ({ item }: TabRendererProps): React.JSX.Element => (
  <Tab key={item.id} title={item.title}>
    <DynamicTabsContent item={item} />
  </Tab>
);
