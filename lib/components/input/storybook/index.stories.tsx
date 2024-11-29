import { Meta, StoryObj } from '@storybook/react';

import { Input } from '..';
import SearchIcon from './search-icon.svg?react';

const meta = {
  title: 'Input text',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    id: 'input-id',
    onChange: () => console.log('onChange'),
    onFocus: () => console.log('onFocus'),
    onBlur: () => console.log('onBlur'),
    isError: false,
    errorMessage: 'error message',
    icon: <SearchIcon />,
    allowClear: true,
    showLabelText: true,
    placeholder: 'this is a placeholder',
    defaultValue: undefined,
    height: '48px',
    constraints: { required: true, minLength: 2, maxLength: 100 },
    labelText: 'search:',
    errorMessagePlacement: 'top',
    inputType: 'text',
  },
};

export const TextArea: Story = {
  args: {
    id: 'input-id',
    onChange: () => console.log('onChange'),
    onFocus: () => console.log('onFocus'),
    onBlur: () => console.log('onBlur'),
    isError: false,
    errorMessage: 'error message',
    icon: undefined,
    allowClear: true,
    showLabelText: true,
    placeholder: 'this is a placeholder',
    defaultValue: undefined,
    height: '48px',
    constraints: { required: true, minLength: 2, maxLength: 100 },
    labelText: 'Text Area:',
    errorMessagePlacement: 'top',
    inputType: 'textarea',
  },
};

export const Password: Story = {
  args: {
    id: 'input-id',
    onChange: () => console.log('onChange'),
    onFocus: () => console.log('onFocus'),
    onBlur: () => console.log('onBlur'),
    isError: false,
    errorMessage: 'error message',
    icon: undefined,
    allowClear: true,
    showLabelText: true,
    placeholder: 'this is a placeholder',
    defaultValue: undefined,
    height: '48px',
    constraints: { required: true, minLength: 2, maxLength: 100 },
    labelText: 'Password:',
    errorMessagePlacement: 'top',
    inputType: 'password',
  },
};
