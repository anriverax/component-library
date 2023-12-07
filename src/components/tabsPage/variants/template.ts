export const codeTabsVariants = `import React from "react";
import { Tabs, Tab } from "@/lib/components/tab";

export const App = () => {
  const variantList: ("solid" | "underlined" | "bordered" | "light")[] = [
    "solid",
    "underlined",
    "bordered",
    "light"
  ];

  return (
    <div>
      {variantList.map((variant) => (
        <Tabs key={variant} variant={variant}>
          <Tab key="photos" title="Photos" />
          <Tab key="music" title="Music" />
          <Tab key="videos" title="Videos" />
        </Tabs>
      ))}
    </div>
  );
}`;
