import { AnchorHTMLAttributes } from "react";
import { LinkVariantProps } from "./theme/theme-link";
import { As } from "@/lib/utils/types";

interface LinkPropsOptional {
  /**
   * @default false
   */
  disableRipple?: boolean;
  /**
   * Whether the link is external.
   * @default false
   */
  isExternal?: boolean;
  /**
   * Whether to show the icon when the link is external.
   * @default false
   */
  showAnchorIcon?: boolean;
  /**
   * The icon to display right after the link.
   * @default <LinkIcon />
   */
  anchorIcon?: React.ReactNode;
}

export interface LinkProps
  extends Required<Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "href">>,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "color" | "href">,
    LinkVariantProps,
    LinkPropsOptional {
  as: As;
}
