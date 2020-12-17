import React from "react";
import Badge from "@boclips-ui/badge";
import AgeRange from "@boclips-ui/age-range";

export interface AgeRangeBadgeProps {
  ageRange: AgeRange;
}

const AgeRangeBadge = ({ ageRange }: AgeRangeBadgeProps) => {
  const getAgeRange = ageRange?.getShortLabel();

  return (
    <>
      {getAgeRange && (
        <div data-qa="age-range-badge">
          <Badge value={`Ages ${getAgeRange}`} />
        </div>
      )}
    </>
  );
};

export default AgeRangeBadge;
