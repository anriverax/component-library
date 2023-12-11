import Link from "next/link";
import React from "react";

/**
 * Represents a navigation item with a path and title.
 */
interface NavigationItem {
  path: string;
  title: string;
}

/**
 * Props for the SideBarTabs component.
 */
interface SideBarTabsProps {
  /**
   * List of navigation items.
   */
  items: NavigationItem[];
}

/**
 * Generate a navigation link based on the provided href and label.
 *
 * @param {string} href - The link href.
 * @param {string} label - The link label.
 * @returns {JSX.Element} The generated navigation link.
 */
const generateNavLink = (href: string, label: string): JSX.Element => (
  <li key={label}>
    <Link href={href}>{label}</Link>
  </li>
);

/**
 * Sidebar component containing navigation links for the page.
 *
 * @param {SideBarTabsProps} props - The props for the SideBarTabs component.
 * @returns {JSX.Element} The SideBarTabs component.
 */
const SideBarTabs = ({ items }: SideBarTabsProps): JSX.Element => (
  <aside className="fixed">
    <p className="font-bold text-black">On this page</p>
    <br />
    <ul className="space-y-2 text-default-500">
      <li>Usage</li>
      <ul className="ml-3 space-y-2">{items.map((item) => generateNavLink(item.path, item.title))}</ul>
    </ul>
  </aside>
);

// Default navigation items
const defaultItems: NavigationItem[] = [
  { path: "/tabs", title: "Default" },
  { path: "/tabs#dynamic", title: "Dynamic" },
  { path: "/tabs#disabled", title: "Disabled" },
  { path: "/tabs#disabled_item", title: "Disabled Item" },
  { path: "/tabs#sizes", title: "Sizes" },
  { path: "/tabs#radius", title: "Radius" },
  { path: "/tabs#colors", title: "Colors" },
  { path: "/tabs#variants", title: "Variants" },
  { path: "/tabs#with_icons", title: "With Icons" },
  { path: "/tabs#controlled", title: "Controlled" },
  { path: "/tabs#custom_styles", title: "Custom Styles" },
  { path: "/tabs#api", title: "Api" }
];

// Default export with sample items
const DefaultSideBarTabs = (): JSX.Element => <SideBarTabs items={defaultItems} />;

export default DefaultSideBarTabs;
