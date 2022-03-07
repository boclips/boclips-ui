/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import c from "classnames";

// @ts-ignore
import s from "../styles.module.less";

export interface Props<T extends React.ElementType>
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  size?: "small";
  weight?: "medium";
  as?: T;
}

export const Body = <T extends React.ElementType = "span">({
  size,
  weight,
  children,
  className,
  as,
  ...rest
}: React.PropsWithChildren<Props<T>>): React.ReactElement => {
  const Component = as || "span";

  return (
    <Component
      className={c(
        s.body,
        s.base,
        {
          [s.small]: size === "small",
          [s.medium]: weight === "medium",
        },
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
