import { ReactNode, Key, SetStateAction, Dispatch } from "react";
import { TabsReturnType, TabsSlots, TabsVariantProps } from "./theme/theme-tab";
import { SlotsToClasses } from "@/lib/utils/types";

/**
 * Represents an item in a tab.
 */
export type TabItem = {
  id: number | string;
  title: string;
  content?: string | ReactNode;
};

/**
 * Represents the props used by the `useTabs` hook.
 */
export interface UseTabsProps extends TabsVariantProps {
  classNames?: SlotsToClasses<TabsSlots>;
  children: ((item: TabItem) => ReactNode) | ReactNode;
  items?: TabItem[];
  disabledKeys?: Set<Key>;
}

export interface ControllerSelectedKeyProps {
  selectedKey?: string;
  onSelectionChange?: Dispatch<SetStateAction<string | null>>;
}

/**
 * Represents the props used by the `useTabSelected` hook.
 */
export interface UseTabSelectedProps
  extends Pick<UseTabsProps, "items" | "disabledKeys" | "children">,
    ControllerSelectedKeyProps {
  isFunction: boolean;
}

/**
 * Represents the props used by the `Tab` component.
 */
export interface TabProps {
  title: string | ReactNode;
  children?: ReactNode;
}

/**
 * Represents the props used by the `TabContent` component.
 */
export interface TabContentProps
  extends Omit<UseTabsProps, "items" | "children">,
    Pick<ControllerSelectedKeyProps, "selectedKey"> {
  slots: TabsReturnType;
  item: TabItem;

  handleClick: (key: string | number) => void;
  isDisable: boolean | undefined;
}

/**
 * Represents the props used by the `useTab` hook.
 */
export type UseTabProps = Pick<UseTabsProps, "classNames"> &
  Pick<TabContentProps, "slots" | "item" | "isDisable"> &
  Pick<ControllerSelectedKeyProps, "selectedKey">;

/**
 * Represents the props used by the `TabPanel` component.
 */
export interface TabPanelProps
  extends Pick<UseTabsProps, "classNames" | "items">,
    Pick<TabContentProps, "slots">,
    Pick<ControllerSelectedKeyProps, "selectedKey"> {
  renderChildren: ReactNode;
}
