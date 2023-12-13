"use client";

/**
 * @file TabsPage.tsx
 * @desc This file contains the TabsPage component which renders a collection of tabs.
 */

// Import React and required components
import React from "react";
import { tabsCollection } from "@/components/tabsPage/tabs-collection";
import TabLayout from "@/components/layout/tab-layout";

/**
 * Functional component representing the TabsPage.
 * Renders a scrollable container with tabs based on the provided collections.
 * @returns {React.JSX.Element} The rendered TabsPage component.
 */
const TabsPage = (): React.JSX.Element => <TabLayout items={tabsCollection} />;

// Export the TabsPage component as the default export
export default TabsPage;
