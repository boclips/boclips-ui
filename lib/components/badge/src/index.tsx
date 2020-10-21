import React from "react";
import c from "classnames";
import s from "./style.module.less";

export interface Props {
  icon?: React.ReactElement;
  label?: string;
  value?: string;
  theme?: "hq" | "lti" | "custom";
  closeIcon?: React.ReactElement;
}

const Badge = ({ icon, label, value, theme = "lti", closeIcon }: Props) => (
  <span
    className={c(s.badge, {
      [s.hq]: theme === "hq",
      [s.lti]: theme === "lti",
      [s.custom]: theme === "custom",
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
