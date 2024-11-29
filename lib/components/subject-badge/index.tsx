import { ReactElement } from 'react';
import { Badge } from '@components/badge';

interface Subject {
  id: string;
  name: string;
}

export interface SubjectBadgeProps {
  subject: Subject;
}

export const SubjectBadge = ({ subject }: SubjectBadgeProps): ReactElement => (
  <div data-qa="subject-badge">
    <Badge value={subject.name} />
  </div>
);
