// @ts-nocheck
import React, { useEffect, useRef } from "react";
import { enGB } from "./helpers/localization";
import { dateAdapter } from "./helpers/dateAdapter";
import useLoadScripts from "./hooks/useLoadScript";
import useListener from "./hooks/useListener";

import "./styles.less";

interface Props {
  label: string;
  onChange: (date: any) => void;
  value?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onOpen?: () => void;
  onClose?: () => void;
}

const DateSelect = ({
  onChange,
  label,
  value,
  ...props
}: Props): React.ReactElement => {
  const ref = useRef(null);

  useListener(ref, "duetChange", onChange);

  useLoadScripts();

  useEffect(() => {
    if (ref.current) {
      ref.current!.localization = enGB;
      ref.current!.dateAdapter = dateAdapter;
    }
  }, [ref.current]);

  return (
    <div className="datePicker">
      <label htmlFor="date" className="pb-4">
        {label}
      </label>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <duet-date-picker ref={ref} identifier="date" {...props} />
    </div>
  );
};

export default DateSelect;
