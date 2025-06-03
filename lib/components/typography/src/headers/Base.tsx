import React, { useMemo } from "react";
import { useMediaBreakPoint } from "@boclips-ui/use-media-breakpoints";
import c from "classnames";
import { findSizeFromCurrentDevice } from "./utils/sizeResolver";

// @ts-ignore
import s from "./style.module.less";

import {
  AsProps,
  VariableHeaderSize,
  HeaderSizeWithWeight,
  HTMLHeadingProps,
  isHeaderSizeWithWeight,
  HeaderSize,
} from "./types";

/**
 * This allows us to set weight only when the size prop is set to xs
 */
export type HeaderProps = (HeaderSizeWithWeight | Partial<VariableHeaderSize>) &
  HTMLHeadingProps;

type InternalProps = (HeaderSizeWithWeight | VariableHeaderSize) &
  HTMLHeadingProps &
  AsProps;

export const Base = ({
  children,
  size,
  as,
  className,
  ...rest
}: React.PropsWithChildren<InternalProps>): React.ReactElement => {
  const Component = as;
  const currentBreakpoint = useMediaBreakPoint();

  const resolvedSize = useMemo(
    () =>
      typeof size === "string"
        ? size
        : findSizeFromCurrentDevice(size, currentBreakpoint),
    [size, currentBreakpoint]
  );

  return (
    <Component
      className={c(
        s[resolveNestedSize(resolvedSize)],
        s[resolveNestedWeight(rest, resolvedSize)],
        s.header,
        className
      )}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </Component>
  );
};

const resolveNestedSize = (
  size: HeaderSize | HeaderSizeWithWeight | undefined
) => (isHeaderSizeWithWeight(size) ? size.size : size);

const resolveNestedWeight = (
  props: any,
  size: HeaderSize | HeaderSizeWithWeight | undefined
) => {
  if ("weight" in props) {
    return props.weight;
  }

  return isHeaderSizeWithWeight(size) ? size.weight : "medium";
};
