import React from "react";
import { TabProps, TabsEvents, TabsProps } from "./api";
import { TabsControlled, codeTabsControlled } from "./controlled";
import CodeViewer from "@/components/codeViewer";
import { TabsNormal, codeTabsNormal } from "@/components/tabsPage/normal";

import { TabItem } from "@/lib/components/tab/types-tabs";
import { TabsDinamic, codeTabsDinamic } from "@/components/tabsPage/dinamic";

import {
  TabsDisabled,
  TabsDisabledItem,
  codeTabsDisabled,
  codeTabsDisabledItem
} from "@/components/tabsPage/disabled";
import { TabsSize, codeTabsSize } from "@/components/tabsPage/size";
import TabsRadius from "@/components/tabsPage/radius/radius";
import { codeTabsRadius } from "@/components/tabsPage/radius/template";
import TabsColors from "@/components/tabsPage/colors/colors";
import { codeTabsColors } from "@/components/tabsPage/colors";
import { TabsVariants, codeTabsVariants } from "@/components/tabsPage/variants";
import { TabsWithIcon, codeTabsWithIcon } from "@/components/tabsPage/withIcon";
import { TabsCustomStyle, codeTabsCustomStyle } from "@/components/tabsPage/customStyles";

/**
 * Tab collections for different examples.
 */

const tabsNormal: TabItem[] = [
  {
    id: "preview-normal",
    title: "Preview",
    content: <TabsNormal />
  },
  {
    id: "code-normal",
    title: "Code",
    content: <CodeViewer code={codeTabsNormal} />
  }
];

const tabsDinamic: TabItem[] = [
  {
    id: "preview-dinamic",
    title: "Preview",
    content: <TabsDinamic />
  },
  {
    id: "code-dinamic",
    title: "Code",
    content: <CodeViewer code={codeTabsDinamic} />
  }
];

const tabsDisabled: TabItem[] = [
  {
    id: "preview-disabled",
    title: "Preview",
    content: <TabsDisabled />
  },
  {
    id: "code-disabled",
    title: "Code",
    content: <CodeViewer code={codeTabsDisabled} />
  }
];

const tabsDisabledItem: TabItem[] = [
  {
    id: "preview-disabled2",
    title: "Preview",
    content: <TabsDisabledItem />
  },
  {
    id: "code-disabled2",
    title: "Code",
    content: <CodeViewer code={codeTabsDisabledItem} />
  }
];

const tabsSize: TabItem[] = [
  {
    id: "preview-size",
    title: "Preview",
    content: <TabsSize />
  },
  {
    id: "code-size",
    title: "Code",
    content: <CodeViewer code={codeTabsSize} />
  }
];

const tabsRadius: TabItem[] = [
  {
    id: "preview-radius",
    title: "Preview",
    content: <TabsRadius />
  },
  {
    id: "code-radius",
    title: "Code",
    content: <CodeViewer code={codeTabsRadius} />
  }
];

const tabsColors: TabItem[] = [
  {
    id: "preview-color",
    title: "Preview",
    content: <TabsColors />
  },
  {
    id: "code-color",
    title: "Code",
    content: <CodeViewer code={codeTabsColors} />
  }
];

const tabsVariants: TabItem[] = [
  {
    id: "preview-variant",
    title: "Preview",
    content: <TabsVariants />
  },
  {
    id: "code-variant",
    title: "Code",
    content: <CodeViewer code={codeTabsVariants} />
  }
];

const tabsWithIcons: TabItem[] = [
  {
    id: "preview-withIcon",
    title: "Preview",
    content: <TabsWithIcon />
  },
  {
    id: "code-withIcon",
    title: "Code",
    content: <CodeViewer code={codeTabsWithIcon} />
  }
];

const tabsControlled: TabItem[] = [
  {
    id: "preview-controlled",
    title: "Preview",
    content: <TabsControlled />
  },
  {
    id: "code-controlled",
    title: "Code",
    content: <CodeViewer code={codeTabsControlled} />
  }
];

const tabsCustomStyle: TabItem[] = [
  {
    id: "preview-custom",
    title: "Preview",
    content: <TabsCustomStyle />
  },
  {
    id: "code-custom",
    title: "Code",
    content: <CodeViewer code={codeTabsCustomStyle} />
  }
];

/**
 * API tabs collection.
 */

const apiTabs: TabItem[] = [
  {
    id: "tabs-props",
    title: "Tabs Props",
    content: <TabsProps />
  },
  {
    id: "tabs-event",
    title: "Tabs Events",
    content: <TabsEvents />
  },
  {
    id: "tab-props",
    title: "Tab Props",
    content: <TabProps />
  }
];

/**
 * Collection of all tabs with their respective titles.
 */

export const tabsCollection = [
  { title: "Default", component: tabsNormal },
  { title: "Dynamic", component: tabsDinamic },
  { title: "Disabled", component: tabsDisabled },
  { title: "Disabled Item", component: tabsDisabledItem },
  { title: "Sizes", component: tabsSize },
  { title: "Radius", component: tabsRadius },
  { title: "Colors", component: tabsColors },
  { title: "Variants", component: tabsVariants },
  { title: "With Icons", component: tabsWithIcons },
  { title: "Controlled", component: tabsControlled },
  { title: "Custom Styles", component: tabsCustomStyle },
  { title: "Api", component: apiTabs }
];
