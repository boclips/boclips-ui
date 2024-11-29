import { Meta, StoryObj } from '@storybook/react';
import { TaxonomyCategoryBadge as TaxonomyCategoryBadgeComponent } from '..';

const meta = {
  title: 'Taxonomy Category Badge',
  component: TaxonomyCategoryBadgeComponent,
} satisfies Meta<typeof TaxonomyCategoryBadgeComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TaxonomyCategoryBadge: Story = {
  args: {
    category: { codeValue: 'FMM', description: 'Magical realism' },
  },
};
