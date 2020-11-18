import React from "react";
import c from "classnames";
import s from "./style.module.less";

export interface Props {
  onClick: () => void;
  theme: "lti" | "hq" | "publishers";
  iconOnly?: boolean;
  icon?: React.ReactElement;
  type: "primary" | "secondary";
  height?: string;
  width?: string;
  disabled?: boolean;
}

const Button = ({
  onClick,
  theme,
  iconOnly,
  type = "primary",
  disabled = false,
  height,
  width,
  icon,
}: Props) => (
  <button
    onClick={onClick}
    style={{ height, width }}
    disabled={disabled}
    className={c(s.button, {
      [s.primary]: type === "primary",
      [s.secondary]: type === "secondary",
      [s.publishers]: theme === "publishers",
      [s.lti]: theme === "lti",
      [s.hq]: theme === "hq",
      [s.iconOnly]: iconOnly,
    })}
    type="button"
  >
    {icon}
    {!iconOnly && <span className={s.copy}>Search</span>}
  </button>
);

export default Button;
