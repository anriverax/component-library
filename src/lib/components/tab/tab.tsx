import React from "react";
import { TabProps } from "./types-tabs";

/**
 * Tab component that represents a single tab.
 *
 * @param {TabProps} props - The properties for the Tab component.
 * @returns {React.ReactNode} - The rendered Tab component.
 */
const Tab = (props: TabProps): React.ReactNode => <div>{props.children}</div>;

export default Tab;
