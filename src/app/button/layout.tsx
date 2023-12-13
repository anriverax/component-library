import React, { ReactNode } from "react";
import Container from "@/components/layout/container";
import SidebarRight from "@/components/sidebar/sidebarRight";
import { defaultBtnElements } from "@/components/buttonPage/buttons-collection";

/**
 * Props for the RootLayout component.
 */
interface RootLayoutProps {
  /**
   * The main content to be rendered within the RootLayout.
   */
  children: ReactNode;
}

/**
 * Root layout component with a main content area and a sidebar.
 *
 * @param {RootLayoutProps} props - The props for the RootLayout component.
 * @returns {React.JSX.Element} The RootLayout component.
 */
const RootLayout = ({ children }: RootLayoutProps): React.JSX.Element => (
  <Container sidebar={<SidebarRight items={defaultBtnElements} />}>{children}</Container>
);

export default RootLayout;
