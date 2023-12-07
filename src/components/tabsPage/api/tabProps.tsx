import React from "react";

/**
 * Type definition for a tab property.
 *
 * @interface TabProperty
 */
interface TabProperty {
  attribute: string;
  type: Array<string | React.ReactNode>;
  description: string;
  default: string;
}

/**
 * Array of tab properties.
 *
 * @type {Array<TabProperty>}
 */
const data: TabProperty[] = [
  {
    attribute: "children",
    type: ["ReactNode"],
    description: "The content of the tab.",
    default: "-"
  },
  {
    attribute: "title",
    type: ["ReactNode", "string"],
    description: "The title of the tab.",
    default: "-"
  }
];

/**
 * Component displaying tab properties in a table.
 *
 * @component
 *
 * // Usage in another component
 * <TabProps />
 */
const TabProps: React.FC = () => (
  <table className="border-collapse border-spacing-0 w-full">
    <thead className="text-left [&>tr>th:first-child]:rounded-l-lg [&>tr>th:last-child]:rounded-r-lg [&>tr>th]:pl-2 text-sm h-12 align-middle bg-default-100">
      <tr>
        <th className="w-1/5">Attribute</th>
        <th className="w-[30%]">Type</th>
        <th className="w-[30%]">Description</th>
        <th className="w-1/5">Default</th>
      </tr>
    </thead>
    <tbody className="text-left text-sm [&>tr>td]:pl-2">
      {data.map((item, index) => (
        <tr className="text-sm" key={index}>
          <td className="pb-4">{item.attribute}</td>
          <td className="pb-4 text-primary-500">{item.type.join(" | ")}</td>
          <td className="pb-4">{item.description}</td>
          <td className="pb-4 text-primary-500">{item.default}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TabProps;
