import { Meta, StoryObj } from '@storybook/react';
import { AttachmentBadge as AttachmentBadgeComponent } from '..';

const meta = {
  title: 'Attachment Badge',
  component: AttachmentBadgeComponent,
} satisfies Meta<typeof AttachmentBadgeComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
export const AttachmentBadge: Story = {};
