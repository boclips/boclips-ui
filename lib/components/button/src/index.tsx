import React from "react";
import c from "classnames";
import { Typography } from "@boclips-ui/typography";
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
      ...rest
    }: Props,
    ref: React.Ref<HTMLButtonElement>
  ) => (
    <button
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
        <Typography.Body
          weight="medium"
          className={c(s.copy, s.buttonText, { [s.copyWithIcon]: icon })}
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

export default Button;
