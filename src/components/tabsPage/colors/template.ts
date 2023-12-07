export const codeTabsColors = `import React from "react";
import { Tabs, Tab } from "@/lib/components/tab";

export const App = () => {
    const colorList: ("primary" | "secondary" | "info" | "success" | "warning" | "danger")[] = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "danger"
  ];

  return (
    <div>
      {colorList.map((color) => (
        <Tabs key={color} color={color}>
          <Tab key="photos" title="Photos" />
          <Tab key="music" title="Music" />
          <Tab key="videos" title="Videos" />
        </Tabs>
      ))}
    </div>
  );
}`;
