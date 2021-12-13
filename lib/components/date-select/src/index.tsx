import React from "react";
import dayjs, { Dayjs } from "dayjs";
import DatePicker from "./datePicker";
import s from "./styles.module.less";
import CalendarSVG from "./resources/calendar.svg";

export interface DateSelectProps {
  date?: string;
  onChange: (date: string) => void;
}

const dateFormat = "MM-DD-YYYY";

const DateSelect = ({ date, onChange }: DateSelectProps) => {
  const formattedDate = date ? dayjs(date) : undefined;
  const pickerOnChange = (_value: Dayjs | null, dateString: string) => {
    onChange(dateString);
  };

  return (
    <div role="button" className={s.datePicker}>
      <DatePicker
        suffixIcon={<CalendarSVG />}
        format={dateFormat}
        placeholder={dateFormat}
        showToday={false}
        value={formattedDate?.isValid() ? formattedDate : undefined}
        dropdownClassName={s.datePickerDropdown}
        onChange={pickerOnChange}
        clearIcon={undefined}
      />
    </div>
  );
};

export default DateSelect;
