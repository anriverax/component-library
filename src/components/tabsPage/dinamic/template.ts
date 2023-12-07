export const codeTabsDinamic = `import React from "react";
import { Tabs, Tab } from "@/lib/components/tab";

export const App = () => {
  let tabs = [
    {
      id: "photos",
      title: "Photos",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "music",
      title: "Music",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: "videos",
      title: "Videos",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  return (
    <Tabs items={tabs}>
      {(item) => (
        <Tab key={item.id} title={item.title}>
          <section>
            <div>
              {item.content}
            </div>
          </section>
        </Tab>
      )}
    </Tabs>
  );
}`;
