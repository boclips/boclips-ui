import React from "react";
import Badge from "@boclips-ui/badge";
import AgeRange from "@boclips-ui/age-range";

export interface AgeRangeBadgeProps {
  ageRange: AgeRange;
  theme: "lti" | "backoffice" | "custom";
}

const AgeRangeBadge = ({ ageRange, theme = "lti" }: AgeRangeBadgeProps) => {
  const getAgeRange = ageRange?.getShortLabel();

  return (
    <>
      {getAgeRange && (
        <div data-qa="age-range-badge">
          <Badge value={getAgeRange} label="Ages:" theme={theme} />
        </div>
      )}
    </>
  );
};

export default AgeRangeBadge;
