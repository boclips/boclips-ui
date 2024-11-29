import { Meta, StoryObj } from '@storybook/react';
import { Badge as BadgeComponent } from '..';

const meta = {
  title: 'Badge',
  component: BadgeComponent,
} satisfies Meta<typeof BadgeComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Badge: Story = {
  args: {
    label: 'test',
    value: 'hq',
    customClassName: 'customClassName',
  },
  argTypes: {
    icon: {
      control: false,
    },
    closeIcon: {
      control: false,
    },
  },
};
