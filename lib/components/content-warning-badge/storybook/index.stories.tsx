import { Meta, StoryObj } from '@storybook/react';
import { ContentWarningBadge } from '..';

const meta = {
  title: 'Content warning badge',
  component: ContentWarningBadge,
} satisfies Meta<typeof ContentWarningBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoWarnings: Story = {
  args: {
    contentWarnings: undefined,
  },
};
export const OneWarning = {
  args: {
    contentWarnings: [
      { id: '321', label: 'Lots and lots and lots of swearing' },
    ],
  },
};
export const TwoWarnings = {
  args: {
    contentWarnings: [
      { id: '123', label: 'Lots and lots and lots of swearing' },
      { id: '456', label: 'Even more swearing, far too much' },
    ],
  },
};
