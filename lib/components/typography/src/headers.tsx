/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import c from "classnames";

// @ts-ignore
import s from "./styles.module.less";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const H1: React.FC<HeaderProps> = ({
  children,
  className,
  ...rest
}: React.PropsWithChildren<HeaderProps>) => {
  return (
    <h1 className={c(s.base, className)} {...rest}>
      {children}
    </h1>
  );
};

export const H2: React.FC<HeaderProps> = ({
  children,
  className,
  ...rest
}: React.PropsWithChildren<HeaderProps>) => {
  return (
    <h2 className={c(s.base, className)} {...rest}>
      {children}
    </h2>
  );
};

export const H3: React.FC<HeaderProps> = ({
  children,
  className,
  ...rest
}: React.PropsWithChildren<HeaderProps>) => {
  return (
    <h3 className={c(s.base, className)} {...rest}>
      {children}
    </h3>
  );
};

export const H4: React.FC<HeaderProps> = ({
  children,
  className,
  ...rest
}: React.PropsWithChildren<HeaderProps>) => {
  return (
    <h4 className={c(s.base, className)} {...rest}>
      {children}
    </h4>
  );
};

export const H5: React.FC<HeaderProps> = ({
  children,
  className,
  ...rest
}: React.PropsWithChildren<HeaderProps>) => {
  return (
    <h5 className={c(s.base, className)} {...rest}>
      {children}
    </h5>
  );
};

export const H6: React.FC<HeaderProps> = ({
  children,
  className,
  ...rest
}: React.PropsWithChildren<HeaderProps>) => {
  return (
    <h6 className={c(s.base, className)} {...rest}>
      {children}
    </h6>
  );
};
