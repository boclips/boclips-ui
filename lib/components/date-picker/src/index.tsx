import React, { useEffect, useRef } from "react";
import { defineCustomElements } from "@duetds/date-picker/dist/loader";
import { enGB } from "./helpers/localization";
import { dateAdapter } from "./helpers/dateAdapter";
import useListener from "./hooks/useListener";

import "./style.less";

export interface DatePickerProps {
  label: string | React.ReactElement;
  onChange: (date: any) => void;
  id?: string;
  value?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onOpen?: () => void;
  onClose?: () => void;
}

const DatePicker = ({
  onChange,
  label,
  value,
  id = "date",
  ...props
}: DatePickerProps): React.ReactElement => {
  defineCustomElements(window);

  const ref = useRef<any>(null);
  useListener(ref, "duetChange", onChange);

  useEffect(() => {
    if (ref.current) {
      ref.current!.localization = enGB;
      ref.current!.dateAdapter = dateAdapter;
    }
  }, [ref.current]);

  return (
    <label htmlFor={id}>
      {label}
      {/* eslint-disable-next-line react/jsx-props-no-spreading  */ /* prettier-ignore */ /* @ts-ignore */}
      <duet-date-picker {...props} value={value} ref={ref} identifier={id} />
    </label>
  );
};

export default DatePicker;
