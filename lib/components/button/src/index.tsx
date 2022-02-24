import React from "react";
import c from "classnames";
import s from "./style.module.less";

export interface Props extends React.HTMLProps<HTMLButtonElement> {
  onClick: () => void;
  iconOnly?: boolean;
  icon?: React.ReactElement;
  type?: "outline" | "label";
  height?: string;
  width?: string;
  disabled?: boolean;
  text?: string;
  dataQa?: string;
  suffix?: React.ReactElement;
  ariaLabel?: string;
}

const Button = React.forwardRef(
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
      ariaLabel,
      ...rest
    }: Props,
    ref: React.Ref<HTMLButtonElement>
  ) => (
    <button
      aria-label={ariaLabel}
      data-qa={dataQa}
      onClick={onClick}
      style={{ height, width }}
      disabled={disabled}
      ref={ref}
      className={c(s.button, {
        [s.outline]: type === "outline",
        [s.label]: type === "label",
        [s.iconOnly]: iconOnly,
      })}
      type="button"
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...rest}
    >
      {icon && <div className={s.icon}>{icon}</div>}
      {!iconOnly && (
        <span className={c(s.copy, { [s.copyWithIcon]: icon })}>{text}</span>
      )}
      {suffix && suffix}
    </button>
  )
);

export default Button;
