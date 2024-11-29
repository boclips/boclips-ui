import { Meta, StoryObj } from '@storybook/react';
import { FilterBadge as FilterBadgeComponent } from '..';

const meta = {
  title: 'Filter Badge',
  component: FilterBadgeComponent,
} satisfies Meta<typeof FilterBadgeComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilterBadge: Story = {
  args: {
    value: 'abc123',
    label: 'Trigonometry',
    sourceFilter: 'subject',
    onClose: (sourceFilter: string, value: string) =>
      console.log(`closed ${sourceFilter} type with value ${value}`),
  },
};
