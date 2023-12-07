/**
 * Represents a tab item with an identifier, title, and content.
 */
export interface TabItem {
  /**
   * The unique identifier for the tab item.
   */
  id: string;

  /**
   * The title of the tab.
   */
  title: string;

  /**
   * The content associated with the tab.
   */
  content: string;
}

/**
 * Array of tab items representing photos, music, and videos.
 */
export const tabs: TabItem[] = [
  {
    id: "photos",
    title: "Photos",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: "music",
    title: "Music",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: "videos",
    title: "Videos",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];
