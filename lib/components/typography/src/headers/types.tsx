import { Breakpoint } from "@boclips-ui/media-breakpoints";

export type HeaderSize = "xs" | "sm" | "md" | "lg" | "xl";

export type DeviceAwareHeaderSize = {
  [name in Breakpoint]?: HeaderSize | HeaderSizeWithWeight;
};

export interface HeaderSizeWithWeight {
  size: "xs";
  weight: "regular" | "medium";
}

export interface VariableHeaderSize {
  size: HeaderSize | DeviceAwareHeaderSize;
}

export interface AsProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export type HTMLHeadingProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function isHeaderSizeWithWeight(
  size: HeaderSizeWithWeight | HeaderSize | undefined
): size is HeaderSizeWithWeight {
  if (!size) {
    return false;
  }

  if (typeof size === "string") {
    return false;
  }

  if (size.size && size.weight) {
    return true;
  }

  return false;
}
