import { Meta, StoryObj } from '@storybook/react';
import { Select as SelectComponent } from '..';
import { SelectOption } from '..';

const sampleOptions: SelectOption[] = [
  { id: 'id1', label: '0min - 1min', count: 2 },
  { id: 'id2', label: '2min - 5min', count: 1 },
  { id: 'id3', label: '10min - 20min', count: 2 },
  { id: 'id4', label: '10min - 26min', count: 0 },
];

const meta = {
  title: 'Select',
  component: SelectComponent,
  argTypes: {
    options: { control: { type: 'object' } },
    title: { control: { type: 'text' } },
    searchPlaceholder: { control: { type: 'text' } },
    allowSearch: { control: { type: 'boolean' } },
    showFacets: { control: { type: 'boolean' } },
    onApply: { action: 'onApply' },
  },
  args: {
    options: sampleOptions,
    title: 'Duration',
    allowSearch: true,
    searchPlaceholder: 'Search...',
    showFacets: true,
  },
  decorators: [
    Story => (
      <div style={{ width: '32rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SelectComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onApply: (selected: string[]) => {
      console.log('Selected options:', selected);
    },
  },
};

export const WithoutFacets: Story = {
  args: {
    onApply: (selected: string[]) => {
      console.log('Selected options:', selected);
    },
    showFacets: false,
  },
};

export const WithoutSearch: Story = {
  args: {
    onApply: (selected: string[]) => {
      console.log('Selected options:', selected);
    },
    allowSearch: false,
  },
};
