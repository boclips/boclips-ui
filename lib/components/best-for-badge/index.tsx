import { Badge } from '@/components/badge';

export interface BestForBadgeProps {
  bestFor: string;
}

export const BestForBadge = ({ bestFor }: BestForBadgeProps) => (
  <div data-qa="best-for-badge">
    <Badge value={bestFor} label="Best for:" />
  </div>
);
