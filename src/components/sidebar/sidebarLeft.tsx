"use client";

import Link from "next/link";

/**
 * Sidebar component displaying a list of components with links.
 * @returns {React.JSX.Element} The Sidebar component.
 */

const menuItem: NavigationItem[] = [
  {
    path: "/button",
    title: "Button"
  },
  {
    path: "/tabs",
    title: "Tabs"
  }
];
const SidebarLeft = (): React.JSX.Element => (
  <aside>
    <ul className="space-y-2 text-default-500">
      <li className="bold text-black">Components</li>
      <ul className="ml-3 space-y-2">
        {/* Link to the Tabs component */}
        {menuItem.map((item: NavigationItem, index: number) => (
          <li key={index}>
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </ul>
  </aside>
);

export default SidebarLeft;
