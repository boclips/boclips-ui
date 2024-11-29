import { ReactElement } from 'react';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import s from './styles.module.less';

export interface DurationProps {
  duration?: string;
}

export const Duration = ({ duration }: DurationProps): ReactElement => {
  const durationFormatter = (d: string) =>
    d.replace('PT', '').replace('H', 'h ').replace('M', 'm ').replace('S', 's');

  return (
    <div className={s.duration}>
      <ClockCircleOutlined className={s.clock} />
      <span>{durationFormatter(duration!)}</span>
    </div>
  );
};
