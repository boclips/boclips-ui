import { Meta, StoryObj } from '@storybook/react';
import { EducationLevelBadge as EducationLevelBadgeComponent } from '..';

const meta = {
  title: 'Education Level Badge',
  component: EducationLevelBadgeComponent,
} satisfies Meta<typeof EducationLevelBadgeComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EducationLevelBadge: Story = {
  args: {
    educationLevel: { code: '4CA', label: 'Pre-school' },
  },
};
