import React, { ReactElement } from "react";
import Badge from "@boclips-ui/badge";

interface Subject {
  id: string;
  name: string;
}

export interface SubjectBadgeProps {
  subject: Subject;
  theme?: "hq" | "lti" | "custom";
}

const SubjectBadge = ({
  subject,
  theme = "lti",
}: SubjectBadgeProps): ReactElement => (
  <div data-qa="subject-badge">
    <Badge value={subject.name} label="Subject:" theme={theme} />
  </div>
);

export default SubjectBadge;
