import React from "react";
import { TabItem } from "@/lib/components/tab/types-tabs";

/**
 * Component for individual tab content.
 *
 * @param {string} text - The content text.
 * @returns {React.JSX.Element} - The rendered tab content.
 */
const TabContent = ({ text }: { text: string }) => (
  <section>
    <div>{text}</div>
  </section>
);

/**
 * Data for individual tabs.
 */
export const tabsData: TabItem[] = [
  {
    id: "photos",
    title: "Photos",
    content: (
      <TabContent
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat."
      />
    )
  },
  {
    id: "music",
    title: "Music",
    content: (
      <TabContent
        text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur."
      />
    )
  },
  {
    id: "videos",
    title: "Videos",
    content: (
      <TabContent
        text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
      />
    )
  }
];
