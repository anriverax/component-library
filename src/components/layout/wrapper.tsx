import React, { ReactNode } from "react";

/**
 * Props for the Wrapper component.
 */
interface WrapperProps {
  /**
   * The content to be wrapped.
   */
  children: ReactNode;

  /**
   * Optional title to be displayed above the wrapped content.
   */
  title?: string;
}

/**
 * Wrapper component that can include an optional title.
 *
 * @component
 * @param {WrapperProps} props - The props for the Wrapper component.
 * @returns {JSX.Element} The Wrapper component.
 */
const Wrapper = ({ children, title = undefined }: WrapperProps): JSX.Element => (
  <div className="mb-7 pt-4" id={title?.replaceAll(" ", "_").toLowerCase()}>
    {/* Render title if provided */}
    {title ? <h2 className="font-bold text-2xl mb-3">{title}</h2> : null}
    {/* Render children content */}
    {children}
  </div>
);

export default Wrapper;
