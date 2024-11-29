import { Meta, StoryObj } from '@storybook/react';
import { DatePicker as DatePickerComponent } from '..';

const meta = {
  title: 'Date Picker',
  component: DatePickerComponent,
} satisfies Meta<typeof DatePickerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DatePicker: Story = {
  args: {
    id: 'input-id',
    onChange: () => console.log('onChange'),
    onFocus: () => console.log('onFocus'),
    onBlur: () => console.log('onBlur'),
  },
};
