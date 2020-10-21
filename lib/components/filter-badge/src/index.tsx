import React from "react";
import Badge from "@boclips-ui/badge";
import s from "./style.module.less";
import CloseIcon from "./resources/close-icon.svg";

export interface Props {
  id: string;
  value: string;
  label: string;
  onClick: (value: string) => any;
  theme?: "hq" | "lti" | "custom";
}

const FilterBadge = ({ id, value, label, onClick, theme = "lti" }: Props) => {
  const closeAction = (
    <div
      className={s.closeIcon}
      role="presentation"
      data-qa={`${id}-remove-button`}
      onClick={() => onClick(id)}
    >
      <CloseIcon />
    </div>
  );

  return (
    <Badge value={value} label={label} theme={theme} closeIcon={closeAction} />
  );
};

export default FilterBadge;
