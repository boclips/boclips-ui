import { Meta, StoryObj } from '@storybook/react';
import { UntaggedBadge as UntaggedBadgeBadgeComponent } from '..';

const meta = {
  title: 'Taxonomy Category Badge',
  component: UntaggedBadgeBadgeComponent,
} satisfies Meta<typeof UntaggedBadgeBadgeComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UntaggedBadgeBadge: Story = {
  args: {
    category: { codeValue: 'FMM', description: 'Magical realism' },
  },
};
