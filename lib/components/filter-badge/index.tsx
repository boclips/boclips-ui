import { Typography } from '@components/typography';
import CloseIcon from './resources/close-icon.svg?react';
import s from './style.module.less';

export interface FilterBadgeProps {
  value: string;
  sourceFilter: string;
  label: string;
  onClose: (sourceFilter: string, value: string) => void;
}

export const FilterBadge = ({
  value,
  sourceFilter,
  label,
  onClose,
}: FilterBadgeProps) => {
  return (
    <Typography.Body className={s.filterBadge}>
      {label}
      <button
        type="button"
        data-qa={`remove-filter-${value}`}
        onClick={() => onClose(sourceFilter, value)}
        aria-label={`remove ${label} filter`}
      >
        <CloseIcon />
      </button>
    </Typography.Body>
  );
};
