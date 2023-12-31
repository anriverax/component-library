import React, { ReactNode } from "react";

/**
 * Props for the Content component.
 */
interface ContentProps {
  /**
   * The content to be displayed within the component.
   */
  children: ReactNode;
}

/**
 * Content component displaying children within a bordered and rounded container.
 *
 * @param {ContentProps} props - The props for the Content component.
 * @returns {React.JSX.Element} The Content component.
 */
const Content = ({ children }: ContentProps): React.JSX.Element => (
  <div className="p-5 border border-default-100 rounded-md flex flex-wrap gap-2">{children}</div>
);

export default Content;
