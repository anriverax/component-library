import React, { ReactNode, FC } from "react";

/**
 * Props for the Container component.
 */
interface ContainerProps {
  /**
   * The main content of the container.
   */
  children: ReactNode;

  /**
   * The content to be displayed in the sidebar.
   */
  sidebar: ReactNode;
}

/**
 * Container component with a grid layout for main content and sidebar.
 *
 * @param {ContainerProps} props - The properties for the Container component.
 * @returns {React.JSX.Element} - The rendered Container component.
 */
const Container: FC<ContainerProps> = ({ children, sidebar }: ContainerProps): React.JSX.Element => (
  <div className="grid grid-cols-10 gap-4">
    {/* Main Content */}
    <div className="col-span-8 mt-5">{children}</div>

    {/* Sidebar */}
    <div className="col-span-2 pl-1">{sidebar}</div>
  </div>
);

export default Container;
