import { useEffect, useRef } from 'react';
import { defineCustomElements } from '@duetds/date-picker/dist/loader';
import { enGB } from './helpers/localization';
import { dateAdapter } from './helpers/dateAdapter';
import useListener from './hooks/useListener';

import './style.module.less';

export interface DatePickerProps {
  label?: string | React.ReactElement;
  onChange: (date: unknown) => void;
  id?: string;
  value?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onOpen?: () => void;
  onClose?: () => void;
}

export const DatePicker = ({
  onChange,
  label,
  value,
  id = 'date',
  ...props
}: DatePickerProps): React.ReactElement => {
  defineCustomElements(window);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  useListener(ref, 'duetChange', onChange);

  useEffect(() => {
    if (ref.current) {
      ref.current!.localization = enGB;
      ref.current!.dateAdapter = dateAdapter;
    }
  }, []);

  return (
    <label htmlFor={id}>
      {label}
      {/* @ts-expect-error TODO Fix this */}
      <duet-date-picker {...props} value={value} ref={ref} identifier={id} />
    </label>
  );
};
