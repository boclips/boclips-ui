import React, { ReactElement } from "react";
import { Typography } from "@boclips-ui/typography";

export interface ReleasedOnProps {
  releasedOn: Date;
  locale?: string;
}

const ReleasedOn = ({ releasedOn, locale }: ReleasedOnProps): ReactElement => {
  const month = releasedOn.toLocaleDateString(locale, { month: "short" });
  const year = releasedOn.toLocaleDateString(locale, { year: "numeric" });
  const day = releasedOn.toLocaleDateString(locale, { day: "2-digit" });

  return (
    <Typography.Body as="div">
      {day} {month} {year}
    </Typography.Body>
  );
};

export default ReleasedOn;
