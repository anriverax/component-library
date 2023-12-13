import React from "react";
import { Tabs, Tab } from "@/lib/components/tab";
import { GalleryIcon, MusicIcon, VideoIcon } from "@/lib/components/icons";
import Content from "@/components/layout/content";

/**
 * TabsWithIcon component demonstrating the usage of Tabs with icons.
 *
 * @returns {React.JSX.Element} The TabsWithIcon component.
 */
const TabsWithIcon = (): React.JSX.Element => (
  <Content>
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
  </Content>
);

export default TabsWithIcon;
