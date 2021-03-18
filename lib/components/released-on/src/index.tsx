import React, { ReactElement } from "react";

export interface ReleasedOnProps {
  releasedOn: Date;
  locale?: string;
}

const ReleasedOn = ({ releasedOn, locale }: ReleasedOnProps): ReactElement => {
  const month = releasedOn.toLocaleDateString(locale, { month: "short" });
  const year = releasedOn.toLocaleDateString(locale, { year: "numeric" });
  const day = releasedOn.toLocaleDateString(locale, { day: "2-digit" });

  return (
    <>
      {day} {month} {year}
    </>
  );
};

export default ReleasedOn;
