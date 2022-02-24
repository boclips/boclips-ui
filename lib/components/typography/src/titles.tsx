/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import c from "classnames";

// @ts-ignore
import s from "./styles.module.less";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export const Title1: React.FC<Props> = ({
  children,
  ...rest
}: React.PropsWithChildren<Props>) => {
  return (
    <span className={c(s.base, s.title1)} {...rest}>
      {children}
    </span>
  );
};

export const Title2: React.FC<Props> = ({
  children,
  ...rest
}: React.PropsWithChildren<Props>) => {
  return (
    <span className={c(s.base, s.title2)} {...rest}>
      {children}
    </span>
  );
};
