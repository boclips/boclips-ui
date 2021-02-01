import React from "react";
import c from "classnames";
import s from "./style.module.less";

export interface Props {
  onClick: () => void;
  iconOnly?: boolean;
  icon?: React.ReactElement;
  type?: "outline";
  height?: string;
  width?: string;
  disabled?: boolean;
  text: string;
}

const Button = ({
  onClick,
  iconOnly,
  type,
  disabled = false,
  height,
  width,
  icon,
  text,
}: Props) => (
  <button
    onClick={onClick}
    style={{ height, width }}
    disabled={disabled}
    className={c(s.button, {
      [s.outline]: type === "outline",
      [s.iconOnly]: iconOnly,
    })}
    type="button"
  >
    {icon && <div className={s.icon}>{icon}</div>}
    {!iconOnly && (
      <span className={c(s.copy, { [s.copyWithIcon]: icon })}>{text}</span>
    )}
  </button>
);

export default Button;
