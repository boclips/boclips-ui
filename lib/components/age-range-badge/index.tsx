import { Badge } from '@/components/badge';
import { AgeRange } from '@/types/age-range';

export interface AgeRangeBadgeProps {
  ageRange: AgeRange;
}

export const AgeRangeBadge = ({ ageRange }: AgeRangeBadgeProps) => {
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
