import React, { ChangeEvent, useState } from "react";
import { Typography } from "@boclips-ui/typography";
import c from "classnames";
import s from "./style.module.less";

export interface Props {
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
  count,
}: Props) => {
  const [isChecked, setChecked] = useState(checked);

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setChecked((prevChecked) => !prevChecked);
      onChange(undefined);
    }
  };

  return (
    <label className={c(s.checkboxWrapper, className)} htmlFor={id}>
      <div className={c(s.wrapperContent)}>
        <input
          onChange={onChange}
          type="checkbox"
          className={s.checkbox}
          name={name}
          id={id}
          checked={isChecked}
          data-qa={dataQa}
          value={value}
          onKeyDown={(event) => onKeyDown(event)}
        />
        <Typography.Body
          size={largeFont ? undefined : "small"}
          weight={isChecked ? "medium" : undefined}
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

export default BoCheckbox;
