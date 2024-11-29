import { Meta, StoryObj } from '@storybook/react';
import { Duration as DurationComponent } from '..';

const meta = {
  title: 'Duration',
  component: DurationComponent,
} satisfies Meta<typeof DurationComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Duration: Story = {
  args: {
    duration: 'PT2M32S',
  },
};
