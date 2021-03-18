import React from "react";
import dayjs, { Dayjs } from "dayjs";
import DatePicker from "./datePicker";
import s from "./styles.module.less";
import CalendarSVG from "./resources/calendar.svg";

export interface ReleaseDateFilterProps {
  releaseDate?: string;
  onChange?: (value: Dayjs | null, dateString: string) => void;
}

const dateFormat = "MM-DD-YYYY";

const ReleaseDateFilter = ({
  releaseDate,
  onChange,
}: ReleaseDateFilterProps) => {
  const formattedDate = releaseDate ? dayjs(releaseDate) : undefined;

  return (
    <div role="button" className={s.datePicker}>
      <DatePicker
        suffixIcon={<CalendarSVG />}
        format={dateFormat}
        placeholder="MM-DD-YYYY"
        showToday={false}
        defaultValue={formattedDate?.isValid() ? formattedDate : undefined}
        dropdownClassName={s.datePickerDropdown}
        onChange={onChange}
      />
    </div>
  );
};

export default ReleaseDateFilter;
