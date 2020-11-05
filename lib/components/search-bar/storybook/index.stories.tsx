import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import SearchBar, { Props } from "../src";

export default {
  title: "SearchBar",
  component: SearchBar,
} as Meta;

const Template: Story<Props> = ({
  onSearch,
  placeholder,
  theme,
  autocomplete,
  onlySearchIconInButton,
  size,
}: Props) => (
  <SearchBar
    onSearch={onSearch}
    placeholder={placeholder}
    theme={theme}
    autocomplete={autocomplete}
    onlySearchIconInButton={onlySearchIconInButton}
    size={size}
  />
);

export const LTI = Template.bind({});

LTI.args = {
  onSearch: () => console.log("search"),
  placeholder: "Search...",
  theme: "publishers",
  autocomplete: false,
  onlySearchIconInButton: true,
  size: "big",
};
