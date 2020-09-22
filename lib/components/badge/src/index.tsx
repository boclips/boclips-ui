import React from "react";
import c from "classnames";
import s from "./style.module.less";

export interface Props {
  icon?: React.ReactElement;
  label?: string;
  value?: string;
  theme?: "backoffice" | "lti" | "custom";
}

const Badge = ({ icon, label, value, theme = "lti" }: Props) => (
  <span
    className={c(s.badge, {
      [s.backoffice]: theme === "backoffice",
      [s.teachers]: theme === "lti",
      [s.custom]: theme === "custom",
    })}
  >
    {icon}
    {label && <div className={s.label}>{label}</div>}
    {value && <div className={s.value}>{value}</div>}
    <span />
  </span>
);

export default Badge;
