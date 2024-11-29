import { Meta, StoryObj } from '@storybook/react';
import { Checkbox as CheckboxComponent } from '..';

const meta = {
  title: 'Checkbox',
  component: CheckboxComponent,
} satisfies Meta<typeof CheckboxComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
  args: {
    onChange: () => console.log('checked'),
    name: 'checkbox',
    id: 'checkbox',
    label: 'checkbox',
    dataQa: 'checkbox',
    checked: false,
  },
};
