// @ts-nocheck
import React, { useEffect, useRef } from "react";
import { defineCustomElements } from "@duetds/date-picker/dist/loader";
import { enGB } from "./helpers/localization";
import { dateAdapter } from "./helpers/dateAdapter";
import useListener from "./hooks/useListener";

import "./style.less";

interface Props {
  label: string | React.ReactElement;
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
  defineCustomElements(window);

  const ref = useRef(null);
  useListener(ref, "duetChange", onChange);

  useEffect(() => {
    if (ref.current) {
      ref.current!.localization = enGB;
      ref.current!.dateAdapter = dateAdapter;
    }
  }, [ref.current]);

  return (
    <div>
      <label htmlFor="date" className="pb-4">
        {label}
      </label>
      {/* eslint-disable-next-line react/jsx-props-no-spreading  */ /* prettier-ignore */}
      <duet-date-picker {...props}
        value={value}
        ref={ref}
        identifier="date"
      />
    </div>
  );
};

export default DateSelect;
