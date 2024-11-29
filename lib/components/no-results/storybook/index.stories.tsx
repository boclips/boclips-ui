import { Meta, StoryObj } from '@storybook/react';
import { NoResults as NoResultsComponent } from '..';

const meta = {
  title: 'No Results',
  component: NoResultsComponent,
} satisfies Meta<typeof NoResultsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoResults: Story = {
  args: {
    searchQuery: 'bad search query',
    filtersApplied: false,
  },
};
