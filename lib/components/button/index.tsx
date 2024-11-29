import React from 'react';
import c from 'classnames';
import s from './style.module.less';
import { Typography } from '@components/typography';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  onClick: () => void;
  iconOnly?: boolean;
  icon?: React.ReactElement;
  type?: 'outline' | 'label';
  height?: string;
  width?: string;
  disabled?: boolean;
  text?: string;
  dataQa?: string;
  suffix?: React.ReactElement;
  className?: string;
}

const ButtonComponent = React.forwardRef(
  (
    {
      onClick,
      iconOnly,
      type,
      disabled = false,
      height,
      width,
      icon,
      text,
      dataQa,
      suffix,
      className,
      ...rest
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => (
    <button
      data-qa={dataQa}
      onClick={onClick}
      style={{ height, width }}
      disabled={disabled}
      ref={ref}
      className={c(s.button, className, {
        [s.outline]: type === 'outline',
        [s.label]: type === 'label',
        [s.iconOnly]: iconOnly,
      })}
      type="button"
      {...rest}
    >
      {icon && <div className={s.icon}>{icon}</div>}
      {!iconOnly && (
        <Typography.Body
          weight="medium"
          className={c(s.copy, {
            [s.copyWithPrefixIcon]: icon,
            [s.copyWithSuffixIcon]: suffix,
          })}
        >
          {text}
        </Typography.Body>
      )}
      {suffix && (
        <Typography.Body weight="medium" className={c(s.buttonText)}>
          {suffix}
        </Typography.Body>
      )}
    </button>
  )
);

ButtonComponent.displayName = 'Button';

export const Button = ButtonComponent;
