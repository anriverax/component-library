import React from "react";

/**
 * Type definition for the Tabs component props.
 *
 * @interface TabsProps
 */
interface TabsProps {
  attribute: string;
  type: string[];
  default: string;
  description: string;
}

/**
 * Array of tab properties.
 *
 * @type {Array<TabsProps>}
 */
const data: TabsProps[] = [
  {
    attribute: "children*",
    type: ["ReactNode", "((item: T) => ReactElement)"],
    description: "The list of tabs.",
    default: "-"
  },
  {
    attribute: "variant",
    type: ["solid", "bordered", "light", "underlined"],
    description: "The tabs appearance style.",
    default: "solid"
  },
  {
    attribute: "color",
    type: ["default", "primary", "secondary", "success", "warning", "danger"],
    description: "The tabs color theme.",
    default: "default"
  },
  {
    attribute: "size",
    type: ["sm", "md", "lg"],
    description: "The tabs size.",
    default: "md"
  },
  {
    attribute: "radius",
    type: ["none", "sm", "md", "lg", "full"],
    description: "The tabs border radius.",
    default: "md"
  },
  {
    attribute: "fullWidth",
    type: ["boolean"],
    description: "Whether the tabs should take the full width of its parent.",
    default: "false"
  },
  {
    attribute: "items",
    type: ["[{id: string, title: string, content?: string | ReactNode;}]"],
    description: "The list of tabs (dynamic).",
    default: "-"
  },
  {
    attribute: "disabledKeys",
    type: ["new Set<string>"],
    description:
      "The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.",
    default: "-"
  },
  {
    attribute: "selectedKey",
    type: ["key"],
    description: "The key for the currently selected item.",
    default: "-"
  },
  {
    attribute: "isDisabled",
    type: ["boolean"],
    description: "Whether the tab list should be disabled.",
    default: "false"
  },
  {
    attribute: "classNames",
    type: ["Record<'base'｜ 'tabList'｜ 'tab'｜ 'tabContent'｜ 'cursor' ｜ 'panel', string>"],
    description: "Allows setting custom class names for the card slots.",
    default: "-"
  }
];

/**
 * Component displaying tab properties in a table.
 *
 * @component
 * @example
 * // Usage in another component
 * <TabsProps />
 */
const TabsProps = (): JSX.Element => (
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

export default TabsProps;
