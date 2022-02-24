/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import c from "classnames";

// @ts-ignore
import s from "./styles.module.less";

export interface Props<T>
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  as?: T;
}

export const Title1 = <T extends React.ElementType = "span">({
  children,
  as,
  className,
  ...rest
}: React.PropsWithChildren<Props<T>>): React.ReactElement => {
  const Component = as || "span";

  return (
    <Component className={c(s.base, s.title1, className)} {...rest}>
      {children}
    </Component>
  );
};

export const Title2 = <T extends React.ElementType = "span">({
  children,
  as,
  className,
  ...rest
}: React.PropsWithChildren<Props<T>>): React.ReactElement => {
  const Component = as || "span";

  return (
    <Component className={c(s.base, s.title2, className)} {...rest}>
      {children}
    </Component>
  );
};
