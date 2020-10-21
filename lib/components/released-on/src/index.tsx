import React, { ReactElement } from "react";
import c from "classnames";
import s from "./style.module.less";

export interface ReleasedOnProps {
  releasedOn: Date;
  createdBy: string;
  theme?: string;
}
const ReleasedOn = ({
  releasedOn,
  createdBy,
  theme = "lti",
}: ReleasedOnProps): ReactElement => {
  const date = new Date(releasedOn);
  const month = date.toLocaleDateString("en-Gb", { month: "short" });
  const year = date.toLocaleDateString("en-Gb", { year: "numeric" });
  const day = date.toLocaleDateString("en-Gb", { day: "2-digit" });
  return (
    <div
      className={c(s.releasedOn, {
        [s.lti]: theme === "lti",
        [s.hq]: theme === "hq",
        [s.custom]: theme === "custom",
      })}
    >
      <span className={s.releasedOnDate}>
        Released on {month} {day}, {year}
      </span>
      <span className={s.releasedOnBy}> by {createdBy} </span>
    </div>
  );
};

export default ReleasedOn;
