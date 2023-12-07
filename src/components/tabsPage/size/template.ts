export const codeTabsSize = `import React from "react";
import { Tabs, Tab } from "@/lib/components/tab";

export const App = () => {
  const sizes: ("sm" | "md" | "lg")[] = ["sm", "md", "lg"];

  return (
    <div>
      {sizes.map((size: 'sm' | 'md' | 'lg') => (
        <Tabs key={size} size={size}>
          <Tab key="photos" title="Photos" />
          <Tab key="music" title="Music" />
          <Tab key="videos" title="Videos" />
        </Tabs>
      ))}
    </div>
  );
}`;
