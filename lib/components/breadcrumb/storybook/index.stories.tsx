import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '..';

const meta = {
  title: 'Breadcrumb',
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MutltiplePages: Story = {
  args: {
    previousPages: [
      {
        nestingLevel: 0,
        label: 'Source page',
        onClick: () => './source-page',
      },
      {
        nestingLevel: 1,
        label: 'First page',
        onClick: () => console.log('hey'),
      },
      { nestingLevel: 2, label: 'Second page', onClick: () => './second-page' },
    ],
    currentPage: 'Current page',
  },
};

export const TwoPages: Story = {
  args: {
    previousPages: [
      {
        nestingLevel: 0,
        label: 'Source page',
        onClick: () => './source-page',
      },
    ],
    currentPage: 'Current page',
  },
};

export const OnePages: Story = {
  args: {
    currentPage: 'Current page',
  },
};
