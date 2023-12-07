import React, { ReactNode } from "react";
import DefaultSideBarTabs from "@/components/tabsPage/sideBarTabs";

interface RootLayoutProps {
  children: ReactNode;
}

/**
 * Root layout component with a main content area and a sidebar.
 *
 * @param {RootLayoutProps} props - The props for the RootLayout component.
 * @returns {JSX.Element} The RootLayout component.
 */
const RootLayout: React.FC<RootLayoutProps> = ({ children }: RootLayoutProps): JSX.Element => (
  <div className="grid grid-cols-10 gap-4">
    {/* Main Content */}
    <div className="col-span-8 mt-5">{children}</div>

    {/* Sidebar */}
    <div className="col-span-2 pl-1">
      <DefaultSideBarTabs />
    </div>
  </div>
);

export default RootLayout;
