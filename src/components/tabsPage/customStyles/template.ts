export const codeTabsCustomStyle = `import React from "react";
import { Tabs, Tab } from "@/lib/components/tab";
import { GalleryIcon, MusicIcon, VideoIcon } from "@/lib/components/icons";

export const App = () => (
  <Tabs
    color="primary"
    variant="underlined"
    classNames={{
      tabList: "gap-6 w-full relative rounded-none p-0 border-b",
      cursor: "w-full bg-[#22d3ee]",
      tab: "max-w-fit px-0 h-12",
      tabContent: "group-data-[selected=true]:text-[#06b6d4]"
    }}
  >
    <Tab
      key="photos"
      title={
        <div className="flex items-center space-x-2">
          <GalleryIcon />
          <span>Photos</span>
        </div>
      }
    />
    <Tab
      key="music"
      title={
        <div className="flex items-center space-x-2">
          <MusicIcon />
          <span>Music</span>
        </div>
      }
    />
    <Tab
      key="videos"
      title={
        <div className="flex items-center space-x-2">
          <VideoIcon />
          <span>Videos</span>
        </div>
      }
    />
  </Tabs>
)`;
