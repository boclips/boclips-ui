import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SearchBar, { Props } from './index';

export default {
  title: 'SearchBar',
  component: SearchBar,
} as Meta;

const styles = {
  display: 'flex',
  justifyContent: 'center',
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<Props> = (args) => (
  <div style={styles}>
    <SearchBar {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  onSearch: () => console.log('search'),
  placeholder: 'Search...',
  theme: 'lti',
};
