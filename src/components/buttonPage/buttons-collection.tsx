import CodeViewer from "../codeViewer";
import {
  BtnDefault,
  BtnDisabled,
  BtnZise,
  BtnRadius,
  BtnColors,
  BtnVariant,
  BtnLoading,
  BtnWithIcon,
  BtnOnlyIcon,
  BtnCustomStyle
} from "./btns";
import {
  codeBtnZise,
  codeBtnDisabled,
  codeBtnDefault,
  codeBtnRadius,
  codeBtnColors,
  codeBtnVariants,
  codeBtnLoading,
  codeBtnWithIcon,
  codeBtnCustom,
  codeBtnOnlyIcon
} from "./btnTemplates";
import { TabItem } from "@/lib/components/tab/types-tabs";

const btnDefault: TabItem[] = [
  {
    id: "preview-normal",
    title: "Preview",
    content: <BtnDefault />
  },
  {
    id: "code-normal",
    title: "Code",
    content: <CodeViewer code={codeBtnDefault} />
  }
];

const btnDisabled: TabItem[] = [
  {
    id: "preview-disabled",
    title: "Preview",
    content: <BtnDisabled />
  },
  {
    id: "code-disabled",
    title: "Code",
    content: <CodeViewer code={codeBtnDisabled} />
  }
];

const btnZise: TabItem[] = [
  {
    id: "preview-zise",
    title: "Preview",
    content: <BtnZise />
  },
  {
    id: "code-zise",
    title: "Code",
    content: <CodeViewer code={codeBtnZise} />
  }
];

const btnRadius: TabItem[] = [
  {
    id: "preview-radius",
    title: "Preview",
    content: <BtnRadius />
  },
  {
    id: "code-radius",
    title: "Code",
    content: <CodeViewer code={codeBtnRadius} />
  }
];

const btnColors: TabItem[] = [
  {
    id: "preview-color",
    title: "Preview",
    content: <BtnColors />
  },
  {
    id: "code-color",
    title: "Code",
    content: <CodeViewer code={codeBtnColors} />
  }
];

const btnVariants: TabItem[] = [
  {
    id: "preview-variant",
    title: "Preview",
    content: <BtnVariant />
  },
  {
    id: "code-variant",
    title: "Code",
    content: <CodeViewer code={codeBtnVariants} />
  }
];

const btnLoading: TabItem[] = [
  {
    id: "preview-loading",
    title: "Preview",
    content: <BtnLoading />
  },
  {
    id: "code-loading",
    title: "Code",
    content: <CodeViewer code={codeBtnLoading} />
  }
];

const btnWithIcon: TabItem[] = [
  {
    id: "preview-with-icon",
    title: "Preview",
    content: <BtnWithIcon />
  },
  {
    id: "code-with-icon",
    title: "Code",
    content: <CodeViewer code={codeBtnWithIcon} />
  }
];

const btnOnlyIcon: TabItem[] = [
  {
    id: "preview-only-icon",
    title: "Preview",
    content: <BtnOnlyIcon />
  },
  {
    id: "code-only-icon",
    title: "Code",
    content: <CodeViewer code={codeBtnOnlyIcon} />
  }
];

const btnCustomStyle: TabItem[] = [
  {
    id: "preview-custom",
    title: "Preview",
    content: <BtnCustomStyle />
  },
  {
    id: "code-custom",
    title: "Code",
    content: <CodeViewer code={codeBtnCustom} />
  }
];

export const buttonsCollection = [
  { title: "Default", component: btnDefault },
  { title: "Disabled", component: btnDisabled },
  { title: "Zises", component: btnZise },
  { title: "Radius", component: btnRadius },
  { title: "Colors", component: btnColors },
  { title: "Variants", component: btnVariants },
  { title: "Loading", component: btnLoading },
  { title: "With Icons", component: btnWithIcon },
  { title: "Icon Only", component: btnOnlyIcon },
  { title: "Custom Styles", component: btnCustomStyle }
];

// Default navigation items
export const defaultBtnElements: NavigationItem[] = [
  { path: "/button", title: "Default" },
  { path: "/button#disabled", title: "Disabled" },
  { path: "/button#sizes", title: "Zises" },
  { path: "/button#radius", title: "Radius" },
  { path: "/button#colors", title: "Colors" },
  { path: "/button#variants", title: "Variants" },
  { path: "/button#loading", title: "Loading" },
  { path: "/button#with-icons", title: "With Icons" },
  { path: "/button#icon-only", title: "Icon Only" },
  { path: "/button#custom-styles", title: "Custom Styles" }
];
