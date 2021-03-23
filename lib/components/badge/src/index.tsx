import React from "react";
import s from "./style.module.less";

export interface Props {
  icon?: React.ReactElement;
  label?: string;
  value?: string;
  closeIcon?: React.ReactElement;
  customClassName?: string;
}

const Badge = ({ icon, label, value, closeIcon, customClassName }: Props) => (
  <span className={`${s.badge} ${customClassName}`}>
    {icon}
    {label && <div className={s.label}>{label}</div>}
    {value && <div className={s.value}>{value}</div>}
    {closeIcon}
  </span>
);

export default Badge;
