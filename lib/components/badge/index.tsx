import React from 'react';
import s from './style.module.less';
import { Typography } from '@components/typography';

export interface BadgeProps {
  icon?: React.ReactElement;
  label?: string;
  value?: string;
  closeIcon?: React.ReactElement;
  customClassName?: string;
}

export const Badge = ({
  icon,
  label,
  value,
  closeIcon,
  customClassName,
}: BadgeProps) => (
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
