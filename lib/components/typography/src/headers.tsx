import React from "react";
import c from "classnames";
import { BaseProps } from ".";

// @ts-ignore
import s from "./styles.module.less";

export const H1: React.FC<BaseProps> = ({
  children,
  className,
}: React.PropsWithChildren<BaseProps>) => {
  return <h1 className={c(s.base, className)}>{children}</h1>;
};

export const H2: React.FC<BaseProps> = ({
  children,
  className,
}: React.PropsWithChildren<BaseProps>) => {
  return <h2 className={c(s.base, className)}>{children}</h2>;
};

export const H3: React.FC<BaseProps> = ({
  children,
  className,
}: React.PropsWithChildren<BaseProps>) => {
  return <h3 className={c(s.base, className)}>{children}</h3>;
};

export const H4: React.FC<BaseProps> = ({
  children,
  className,
}: React.PropsWithChildren<BaseProps>) => {
  return <h4 className={c(s.base, className)}>{children}</h4>;
};

export const H5: React.FC<BaseProps> = ({
  children,
  className,
}: React.PropsWithChildren<BaseProps>) => {
  return <h5 className={c(s.base, className)}>{children}</h5>;
};

export const H6: React.FC<BaseProps> = ({
  children,
  className,
}: React.PropsWithChildren<BaseProps>) => {
  return <h6 className={c(s.base, className)}>{children}</h6>;
};
