import React, { ReactElement } from "react";
import Badge from "@boclips-ui/badge";

interface Subject {
  id: string;
  name: string;
}

export interface SubjectBadgeProps {
  subject: Subject;
  theme?: "lti" | "hq" | "publishers";
}

const SubjectBadge = ({
  subject,
  theme = "lti",
}: SubjectBadgeProps): ReactElement => (
  <div data-qa="subject-badge">
    <Badge value={subject.name} theme={theme} />
  </div>
);

export default SubjectBadge;
