import React, { ChangeEvent } from 'react';
import { Typography } from '@components/typography';
import c from 'classnames';
import s from './style.module.less';

export interface CheckboxProps {
  onChange: (e?: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  checked: boolean;
  label?: React.ReactElement | string;
  dataQa?: string;
  className?: string;
  value?: string;
  largeFont?: boolean;
  count?: number;
}

export const Checkbox = ({
  dataQa,
  onChange,
  name,
  id,
  checked,
  label,
  className,
  largeFont,
  value,
  count,
}: CheckboxProps) => {
  return (
    <label className={c(s.checkboxWrapper, className)} htmlFor={id}>
      <div className={c(s.wrapperContent)}>
        <input
          onChange={onChange}
          type="checkbox"
          className={s.checkbox}
          name={name}
          id={id}
          checked={checked}
          data-qa={dataQa}
          value={value}
        />
        <Typography.Body
          size={largeFont ? undefined : 'small'}
          weight={checked ? 'medium' : undefined}
        >
          {label || name}
        </Typography.Body>
      </div>
      {count !== undefined && count > 0 && (
        <span className={s.wrapperCount} data-qa="item-count">
          {count}
        </span>
      )}
    </label>
  );
};
