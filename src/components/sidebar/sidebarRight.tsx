"use client";
import Link from "next/link";
import React from "react";

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
 * @returns {React.JSX.Element} The generated navigation link.
 */
const generateNavLink = (href: string, label: string): React.JSX.Element => (
  <li key={label}>
    <Link href={href}>{label}</Link>
  </li>
);

/**
 * Sidebar component containing navigation links for the page.
 *
 * @param {SideBarTabsProps} props - The props for the SideBarTabs component.
 * @returns {React.JSX.Element} The SideBarTabs component.
 */
const SideBarTabs = ({ items }: SideBarTabsProps): React.JSX.Element => (
  <aside className="fixed">
    <p className="font-bold text-black">On this page</p>
    <br />
    <ul className="space-y-2 text-default-500">
      <li>Usage</li>
      <ul className="ml-3 space-y-2">{items.map((item) => generateNavLink(item.path, item.title))}</ul>
    </ul>
  </aside>
);

// Default export with sample items
const SidebarRight = ({ items }: { items: NavigationItem[] }): React.JSX.Element => (
  <SideBarTabs items={items} />
);

export default SidebarRight;
