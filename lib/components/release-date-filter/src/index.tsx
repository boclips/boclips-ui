import React from "react";
import dayjs, { Dayjs } from "dayjs";
import DatePicker from "./datePicker";
import s from "./styles.module.less";
import CalendarSVG from "./resources/calendar.svg";

export interface ReleaseDateFilterProps {
  releaseDate?: string;
  onClick?: (value: Dayjs | null, dateString: string) => void;
}

const dateFormat = "DD-MM-YYYY";

const ReleaseDateFilter = ({
  releaseDate,
  onClick,
}: ReleaseDateFilterProps) => {
  const formattedDate = dayjs(releaseDate);

  return (
    <div role="button" className={s.datePicker}>
      <DatePicker
        suffixIcon={<CalendarSVG />}
        format={dateFormat}
        placeholder="DD-MM-YYYY"
        showToday={false}
        defaultValue={formattedDate.isValid() ? formattedDate : undefined}
        dropdownClassName={s.datePickerDropdown}
        onChange={onClick}
      />
    </div>
  );
};

export default ReleaseDateFilter;
