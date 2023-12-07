export const codeTabsWithIcon = `import React from "react";
import { Tabs, Tab } from "@/lib/components/tab";
import { GalleryIcon, MusicIcon, VideoIcon } from "@/lib/components/icons";

export const App = () => (
  <Tabs color="primary" variant="bordered">
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
