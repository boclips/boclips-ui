import React from 'react';
import c from 'classnames';
import { findSizeFromCurrentDevice } from './utils/sizeResolver';

import s from './style.module.less';

import {
  AsProps,
  VariableHeaderSize,
  HeaderSizeWithWeight,
  HTMLHeadingProps,
  isHeaderSizeWithWeight,
  HeaderSize,
} from './types';
import { useMediaBreakPoint } from '@hooks/useMediaBreakpoints';

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

  const resolvedSize = React.useMemo(
    () =>
      typeof size === 'string'
        ? size
        : findSizeFromCurrentDevice(size, currentBreakpoint),
    [size, currentBreakpoint]
  );

  const resolvedNestedSize = React.useMemo(
    () => resolveNestedSize(resolvedSize),
    [resolvedSize]
  );

  const resolvedNestedWeight = React.useMemo(
    //@ts-expect-error Trying to Omit<> on React.PropsWithChildren<InternalProps> makes it lose the types of the remaining properties
    () => resolveNestedWeight(rest, resolvedSize),
    [rest, resolvedSize]
  );

  return (
    <Component
      className={c(
        resolvedNestedSize && s[resolvedNestedSize],
        resolvedNestedWeight && s[resolvedNestedWeight],
        s.header,
        className
      )}
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
  props: React.PropsWithChildren<InternalProps>,

  size: HeaderSize | HeaderSizeWithWeight | undefined
) => {
  if ('weight' in props) {
    return props.weight;
  }

  return isHeaderSizeWithWeight(size) ? size.weight : 'medium';
};
