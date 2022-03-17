import React, { ReactElement } from "react";
import Badge from "@boclips-ui/badge";

interface EducationLevel {
  code: string;
  label: string;
}

export interface EducationLevelBadgeProps {
  educationLevel: EducationLevel;
}

const EducationLevelBadge = ({
  educationLevel,
}: EducationLevelBadgeProps): ReactElement => (
  <div data-qa={`${educationLevel.code}-education-level-badge`}>
    <Badge value={educationLevel.label} />
  </div>
);

export default EducationLevelBadge;
