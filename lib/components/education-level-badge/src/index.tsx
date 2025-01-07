import React, { ReactElement } from "react";
import Badge from "@boclips-ui/badge";
import { EducationLevel } from "boclips-api-client/dist/sub-clients/videos/model/EducationLevel";

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
