import React, { ChangeEvent } from "react";
import { Typography } from "@boclips-ui/typography";
import s from "./style.module.less";

export interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  checked: boolean;
  label?: React.ReactElement | string;
  dataQa?: string;
}

const BoCheckbox = ({ dataQa, onChange, name, id, checked, label }: Props) => {
  return (
    <label className={s.checkboxWrapper} htmlFor={id}>
      <input
        onChange={onChange}
        type="checkbox"
        className={s.checkbox}
        name={name}
        id={id}
        checked={checked}
        data-qa={dataQa}
      />
      <Typography.Body size="small" weight={checked ? "medium" : undefined}>
        {label || name}
      </Typography.Body>
    </label>
  );
};

export default BoCheckbox;
