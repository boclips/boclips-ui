/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import c from "classnames";

// @ts-ignore
import s from "./styles.module.less";

export interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  fontSize?: "14" | "16";
  weight?: "medium";
}

export const Body: React.FC<Props> = ({
  fontSize = "16",
  weight,
  children,
  className,
  ...rest
}: React.PropsWithChildren<Props>) => {
  return (
    <span
      className={c(
        s.body,
        s.base,
        {
          [s.small]: fontSize === "14",
          [s.medium]: weight === "medium",
        },
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
};
