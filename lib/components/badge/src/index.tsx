import React from "react";
import c from "classnames";
import s from "./style.module.less";

export interface Props {
  icon?: React.ReactElement;
  label?: string;
  value?: string;
  closeIcon?: React.ReactElement;
}

const Badge = ({ icon, label, value, closeIcon }: Props) => (
  <span
    className={c(s.badge, {
      withCloseIcon: !!closeIcon,
    })}
  >
    {icon}
    {label && <div className={s.label}>{label}</div>}
    {value && <div className={s.value}>{value}</div>}
    {closeIcon}
    <span />
  </span>
);

export default Badge;
