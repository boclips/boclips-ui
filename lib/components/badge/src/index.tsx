import React from "react";
import { Typography } from "@boclips-ui/typography";
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
    {label && (
      <Typography.Body className={s.label} as="div" size="small">
        {label}
      </Typography.Body>
    )}
    {value && (
      <Typography.Body className={s.value} as="div" size="small">
        {value}
      </Typography.Body>
    )}
    {closeIcon}
  </span>
);

export default Badge;
