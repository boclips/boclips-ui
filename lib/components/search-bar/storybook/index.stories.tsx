import { Meta, StoryObj } from '@storybook/react';
import { SearchBar as SearchBarComponent } from '..';
import CloseIcon from '../resources/close-icon.svg?react';

const meta = {
  title: 'SearchBar',
  component: SearchBarComponent,
} satisfies Meta<typeof SearchBarComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SearchBar: Story = {
  args: {
    onSearch: (query, _, suggestionUsed) =>
      console.log(
        `search triggered: ${query}, ${suggestionUsed}<- it's from storybook`
      ),
    placeholder: 'Search...',
    iconOnlyButton: false,
  },
};

export const IconOnlyButton: Story = {
  args: {
    onSearch: (query, _, suggestionUsed) =>
      console.log(
        `search triggered: ${query}, ${suggestionUsed}<- it's from storybook`
      ),
    placeholder: 'Search...',
    iconOnlyButton: true,
  },
};

export const CustomIconButton: Story = {
  args: {
    onSearch: (query, _, suggestionUsed) =>
      console.log(
        `search triggered: ${query}, ${suggestionUsed}<- it's from storybook`
      ),
    placeholder: 'Search...',
    customButtonIcon: <CloseIcon />,
    iconOnlyButton: true,
  },
};
