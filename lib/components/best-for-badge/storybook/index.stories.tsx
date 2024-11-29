import { Meta, StoryObj } from '@storybook/react';
import { BestForBadge as BestForBadgeComponent } from '..';

const meta = {
  title: 'Best For Badge',
  component: BestForBadgeComponent,
} satisfies Meta<typeof BestForBadgeComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BestForBadge: Story = {
  args: {
    bestFor: 'Explainer',
  },
};
