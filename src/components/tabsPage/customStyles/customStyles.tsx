import React, { ReactNode } from "react";
import { Tabs, Tab } from "@/lib/components/tab";
import { GalleryIcon, MusicIcon, VideoIcon } from "@/lib/components/icons";
import Content from "@/components/layout/content";

/**
 * CustomTabContent component to render the content of each custom tab.
 * @param {string} title - The title of the tab.
 * @returns {JSX.Element} - The rendered CustomTabContent component.
 */
const CustomTabContent = ({ title, icon }: { title: string; icon: ReactNode }): JSX.Element => (
  <div className="flex items-center space-x-2">
    {icon}
    <span>{title}</span>
  </div>
);

/**
 * TabsCustomStyle component for displaying tabs with custom styling.
 *
 * @returns {JSX.Element} - The rendered TabsCustomStyle component.
 */
const TabsCustomStyle = (): JSX.Element => (
  <Content>
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
      {/* Render each tab with custom content and styling */}
      {[
        { key: "photos", title: "Photos", icon: <GalleryIcon /> },
        { key: "music", title: "Music", icon: <MusicIcon /> },
        { key: "videos", title: "Videos", icon: <VideoIcon /> }
      ].map((tab) => (
        <Tab key={tab.key} title={<CustomTabContent title={tab.title} icon={tab.icon} />} />
      ))}
    </Tabs>
  </Content>
);

export default TabsCustomStyle;
