import { Meta, StoryObj } from '@storybook/react';
import { Button } from '..';
import SearchIcon from '../resources/search-icon.svg?react';

const meta = {
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    type: 'outline',
    onClick: () => null,
    iconOnly: false,
    height: undefined,
    width: undefined,
    disabled: false,
    icon: undefined,
    text: 'Search',
  },
};

export const Solid: Story = {
  args: {
    onClick: () => null,
    iconOnly: false,
    height: undefined,
    width: undefined,
    disabled: false,
    icon: <SearchIcon />,
    text: 'Search',
  },
};

export const IconOnly: Story = {
  args: {
    onClick: () => null,
    iconOnly: true,
    height: undefined,
    width: undefined,
    disabled: false,
    icon: (
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
        <path
          d="M7 9V15M11 9V15M1 5H17M16 5L15.133 17.142C15.0971 17.6466 14.8713 18.1188 14.5011 18.4636C14.1309 18.8083 13.6439 19 13.138 19H4.862C4.35614 19 3.86907 18.8083 3.49889 18.4636C3.1287 18.1188 2.90292 17.6466 2.867 17.142L2 5H16ZM12 5V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1H7C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V5H12Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: 'Remove',
  },
};

export const IconOnlyOutline: Story = {
  args: {
    onClick: () => null,
    iconOnly: true,
    type: 'outline',
    height: undefined,
    width: undefined,
    disabled: false,
    icon: (
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
        <path
          d="M7 9V15M11 9V15M1 5H17M16 5L15.133 17.142C15.0971 17.6466 14.8713 18.1188 14.5011 18.4636C14.1309 18.8083 13.6439 19 13.138 19H4.862C4.35614 19 3.86907 18.8083 3.49889 18.4636C3.1287 18.1188 2.90292 17.6466 2.867 17.142L2 5H16ZM12 5V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1H7C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V5H12Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: 'Remove',
  },
};
