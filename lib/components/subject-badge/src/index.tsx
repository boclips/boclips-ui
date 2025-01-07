import React, { ReactElement } from "react";
import Badge from "@boclips-ui/badge";

interface Subject {
  id: string;
  name: string;
}

export interface SubjectBadgeProps {
  subject: Subject;
}

const SubjectBadge = ({ subject }: SubjectBadgeProps): ReactElement => (
  <div data-qa="subject-badge">
    <Badge value={subject.name} />
  </div>
);

export default SubjectBadge;
