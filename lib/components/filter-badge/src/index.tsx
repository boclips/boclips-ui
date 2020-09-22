import React from "react";
import c from "classnames";
import s from "./style.module.less";
import CloseIcon from "./resources/close-icon.svg";

export interface Props {
  id: string;
  value: string;
  label: string;
  onClick: (value: string) => any;
  theme?: "backoffice" | "lti" | "custom";
}

const FilterBadge = ({ id, value, label, onClick, theme = "lti" }: Props) => (
  <span
    className={c(s.badge, {
      [s.backoffice]: theme === "backoffice",
      [s.teachers]: theme === "lti",
      [s.custom]: theme === "custom",
    })}
  >
    {label && <div className={s.label}>{label}</div>}
    {value && <div className={s.value}>{value}</div>}
    <div
      role="presentation"
      data-qa={`${id}-remove-button`}
      onClick={() => onClick(id)}
    >
      <CloseIcon />
    </div>
  </span>
);

export default FilterBadge;
