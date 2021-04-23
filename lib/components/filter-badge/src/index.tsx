import React from "react";
import Badge from "@boclips-ui/badge";
import s from "./style.module.less";
import CloseIcon from "./resources/close-icon.svg";

export interface Props {
  id: string;
  value: string;
  label?: string;
  closeIcon?: React.ReactElement;
  onClick: (value: string) => any;
}

const FilterBadge = ({ id, value, label, onClick, closeIcon }: Props) => {
  const closeAction = (
    <div
      className={s.closeIcon}
      role="presentation"
      data-qa={`${id}-remove-button`}
      onClick={() => onClick(id)}
    >
      {closeIcon || <CloseIcon />}
    </div>
  );

  return <Badge value={value} label={label} closeIcon={closeAction} />;
};

export default FilterBadge;
