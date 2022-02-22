import React from "react";
import c from "classnames";

// @ts-ignore
import s from "./styles.module.less";
import { BaseProps } from ".";

export interface Props extends BaseProps {
  fontSize?: "14" | "16";
  weight?: "medium";
}

export const Body: React.FC<Props> = ({
  fontSize = "16",
  weight,
  children,
  className,
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
    >
      {children}
    </span>
  );
};
