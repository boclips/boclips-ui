import React from "react";
import c from "classnames";

// @ts-ignore
import s from "./styles.module.less";

export interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  type?: "inline-blue" | "inline-gray";
  className?: string;
}

export const Link = ({
  type,
  children,
  className,
}: React.PropsWithChildren<Props>): React.ReactElement => {
  return (
    <span
      className={c(
        s.link,
        {
          [s.inlineGray]: type === "inline-gray",
          [s.inlineBlue]: type === "inline-blue",
        },
        className
      )}
    >
      {children}
    </span>
  );
};
