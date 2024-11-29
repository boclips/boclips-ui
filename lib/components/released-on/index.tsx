import { ReactElement } from 'react';
import { Typography } from '@components/typography';

export interface ReleasedOnProps {
  releasedOn: Date;
  locale?: string;
}

export const ReleasedOn = ({ releasedOn, locale }: ReleasedOnProps): ReactElement => {
  const month = releasedOn.toLocaleDateString(locale, { month: 'short' });
  const year = releasedOn.toLocaleDateString(locale, { year: 'numeric' });
  const day = releasedOn.toLocaleDateString(locale, { day: '2-digit' });

  return (
    <Typography.Body as="div" size="small">
      {day} {month} {year}
    </Typography.Body>
  );
};
