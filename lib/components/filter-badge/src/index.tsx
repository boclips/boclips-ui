import React from "react";
import { Typography } from "@boclips-ui/typography";
import CloseIcon from "./resources/close-icon.svg";
import s from "./style.module.less";

export interface Props {
  value: string;
  sourceFilter: string;
  label: string;
  onClose: (sourceFilter: string, value: string) => void;
}

const FilterBadge = ({ value, sourceFilter, label, onClose }: Props) => {
  return (
    <Typography.Body className={s.filterBadge}>
      {label}
      <button
        type="button"
        data-qa={`remove-filter-${value}`}
        onKeyPress={(_) => onClose(sourceFilter, value)}
        onClick={() => onClose(sourceFilter, value)}
        aria-label={`remove ${label} filter`}
      >
        <CloseIcon />
      </button>
    </Typography.Body>
  );
};

export default FilterBadge;
