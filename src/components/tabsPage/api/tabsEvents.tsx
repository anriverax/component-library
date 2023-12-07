import React from "react";

/**
 * Type definition for a tab event.
 *
 * @interface TabEvent
 */
interface TabEvent {
  attribute: string;
  type: string[];
  description: string;
}

/**
 * Array of tab events.
 *
 * @type {Array<TabEvent>}
 */
const data: TabEvent[] = [
  {
    attribute: "onSelectionChange",
    type: ["Dispatch<SetStateAction<string | null>>"],
    description: "Handler that is called when the selection changes."
  }
];

/**
 * Component displaying tab events in a table.
 *
 * @component
 * <TabsEvents />
 */
const TabsEvents: React.FC = () => (
  <table className="border-collapse border-spacing-0 w-full">
    <thead className="text-left [&>tr>th:first-child]:rounded-l-lg [&>tr>th:last-child]:rounded-r-lg [&>tr>th]:pl-2 text-sm h-12 align-middle bg-default-100">
      <tr>
        <th className="w-1/3">Attribute</th>
        <th className="w-1/3">Type</th>
        <th className="w-1/3">Description</th>
      </tr>
    </thead>
    <tbody className="text-left text-sm [&>tr>td]:pl-2">
      {data.map((item, index) => (
        <tr className="text-sm" key={index}>
          <td className="pb-4">{item.attribute}</td>
          <td className="pb-4 text-primary-500">{item.type}</td>
          <td className="pb-4">{item.description}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TabsEvents;
