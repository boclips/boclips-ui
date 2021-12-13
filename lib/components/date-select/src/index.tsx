import React from "react";
import dayjs, { Dayjs } from "dayjs";
import DatePicker from "./datePicker";
import s from "./styles.module.less";
import CalendarSVG from "./resources/calendar.svg";

export interface DateSelectProps {
  date?: string;
  onChange: (date: string) => void;
}

const placeholderDateFormat = "MM-DD-YYYY";
const apiDateFormat = "YYYY-MM-DD";

const DateSelect = ({ date, onChange }: DateSelectProps) => {
  const formattedInputDate = date ? dayjs(date) : undefined;

  const pickerOnChange = (_value: Dayjs | null, dateString: string) => {
    const apiDate = dayjs(dateString).format(apiDateFormat);
    onChange(apiDate);
  };

  return (
    <div role="button" className={s.datePicker}>
      <DatePicker
        suffixIcon={<CalendarSVG />}
        format={placeholderDateFormat}
        placeholder={placeholderDateFormat}
        showToday={false}
        value={formattedInputDate?.isValid() ? formattedInputDate : undefined}
        dropdownClassName={s.datePickerDropdown}
        onChange={pickerOnChange}
        clearIcon={undefined}
      />
    </div>
  );
};

export default DateSelect;
