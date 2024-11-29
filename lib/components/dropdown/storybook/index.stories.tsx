import { Meta, StoryObj } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';
import { Dropdown as DropdownComponent, OptionsProps } from '..';

const meta = {
  title: 'Dropdown',
  component: DropdownComponent,
} satisfies Meta<typeof DropdownComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const options1: OptionsProps[] = [...Array(33).keys()].map(it => {
  const id = uuidv4();
  return {
    id: `${id}`,
    name: `checkbox ${it}`,
    label: `checkbox ${it}`,
    value: `${id}`,
    count: it,
  };
});

export const SingleSelect: Story = {
  args: {
    placeholder: 'Select video type',
    onUpdate: it => console.log(`onUpdate:${it}`),
    onSearch: it => console.log(`onSearch:${it}`),
    options: options1,
    mode: 'single',
    showSearch: true,
    showLabel: true,
    labelText: 'awesome label',
    errorMessagePlacement: 'top',
    errorMessage: 'error message',
  },
};

export const MultiSelect: Story = {
  args: {
    placeholder: 'Select video types',
    onUpdate: it => console.log(`onUpdate:${it}`),
    onSearch: it => console.log(`onSearch:${it}`),
    options: options1,
    mode: 'multiple',
    showSearch: true,
    showLabel: true,
    labelText: 'awesome label',
    errorMessagePlacement: 'top',
    errorMessage: 'error message',
  },
};
