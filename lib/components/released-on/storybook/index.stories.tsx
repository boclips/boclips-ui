import { Meta, StoryObj } from '@storybook/react';

import { ReleasedOn as ReleasedOnComponent } from '..';

const meta = {
  title: 'ReleasedOn',
  component: ReleasedOnComponent,
} satisfies Meta<typeof ReleasedOnComponent>;

export default meta;

type Story = StoryObj<typeof meta>;
export const ReleasedOn: Story = {
  args: {
    releasedOn: new Date('2020-09-23'),
  },
};
