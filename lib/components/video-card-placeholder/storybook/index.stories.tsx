import { Meta, StoryObj } from '@storybook/react';
import { VideoCardPlaceholder as VideoCardPlaceholderComponent } from '..';

const meta = {
  title: 'Video Card Placeholder',
  component: VideoCardPlaceholderComponent,
} satisfies Meta<typeof VideoCardPlaceholderComponent>;

export default meta;

type Story = StoryObj<typeof meta>;
export const VideoCardPlaceholder: Story = {};
