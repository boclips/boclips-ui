import { Meta, StoryObj } from '@storybook/react';
import { SubjectBadge as SubjectBadgeComponent } from '..';

const meta = {
  title: 'Subject Badge',
  component: SubjectBadgeComponent,
} satisfies Meta<typeof SubjectBadgeComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SubjectBadge: Story = {
  args: {
    subject: { id: 'hello', name: 'Technology and computing' },
  },
};
