import { Meta, StoryObj } from '@storybook/react';
import { AgeRange } from '@/types/age-range';
import { AgeRangeBadge as AgeRangeBadgeComponent } from '..';

const meta = {
  title: 'Age Range Badge',
  component: AgeRangeBadgeComponent,
} satisfies Meta<typeof AgeRangeBadgeComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AgeRangeBadge: Story = {
  args: {
    ageRange: new AgeRange(5, 16),
  },
  render: args => (
    <AgeRangeBadgeComponent
      ageRange={
        new AgeRange(args.ageRange.resolveMin(), args.ageRange.resolveMax())
      }
    />
  ),
};
