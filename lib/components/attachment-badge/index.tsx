import { ReactElement } from 'react';
import { Badge } from '@/components/badge';
import PaperclipSVG from './resources/activity-tag.svg?react';

export const AttachmentBadge = (): ReactElement => (
  <div data-qa="attachment-badge">
    <Badge
      label="Activity"
      icon={<PaperclipSVG style={{ height: '1rem', marginRight: '0.25rem' }} />}
    />
  </div>
);
