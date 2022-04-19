import React, { ChangeEvent } from "react";
import { Typography } from "@boclips-ui/typography";
import c from "classnames";
import s from "./style.module.less";

export interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  checked: boolean;
  label?: React.ReactElement | string;
  dataQa?: string;
  className?: string;
  value?: string;
  largeFont?: boolean;
}

const BoCheckbox = ({
  dataQa,
  onChange,
  name,
  id,
  checked,
  label,
  className,
  largeFont,
  value,
}: Props) => {
  return (
    <label className={c(s.checkboxWrapper, className)} htmlFor={id}>
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
        size={largeFont ? undefined : "small"}
        weight={checked ? "medium" : undefined}
      >
        {label || name}
      </Typography.Body>
    </label>
  );
};

export default BoCheckbox;
