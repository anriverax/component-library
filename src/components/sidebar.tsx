import Link from "next/link";

/**
 * Sidebar component displaying a list of components with links.
 * @returns {JSX.Element} The Sidebar component.
 */
const Sidebar: React.FC = (): JSX.Element => (
  <aside>
    <ul className="space-y-2 text-default-500">
      <li className="bold text-black">Components</li>
      <ul className="ml-3 space-y-2">
        {/* Link to the Tabs component */}
        <li>
          <Link href="/tabs">Tabs</Link>
        </li>
      </ul>
    </ul>
  </aside>
);

export default Sidebar;
