export const codeTabsRadius = `import React from "react";
import { Tabs, Tab } from "@/lib/components/tab";

export const App = () => {
  const radiusList: ("none" | "sm" | "md" | "lg" | "full")[] = ["none", "sm", "md", "lg", "full"];

  return (
    <div>
      {radiusList.map((radius) => (
        <Tabs key={radius} radius={radius}>
          <Tab key="photos" title="Photos" />
          <Tab key="music" title="Music" />
          <Tab key="videos" title="Videos" />
        </Tabs>
      ))}
    </div>
  );
}`;
