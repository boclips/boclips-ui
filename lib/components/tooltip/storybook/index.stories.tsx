import { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '..';
import { Button } from '@components/button';

const meta = {
  title: 'Tooltip',
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Short: Story = {
  args: {
    text: 'Tooltip with less text',
    children: <Button text="Short tooltip text" onClick={() => null} />,
  },
};

export const Long: Story = {
  args: {
    text: "We're no strangers to love. You know the rules and so do I. A full commitment's what I'm thinking of. You wouldn't get this from any other guy.",
    children: <Button text="Long tooltip text" onClick={() => null} />,
  },
};
