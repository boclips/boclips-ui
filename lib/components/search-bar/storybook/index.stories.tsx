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
}: Props) => (
  <SearchBar
    onSearch={onSearch}
    placeholder={placeholder}
    theme={theme}
    autocomplete={autocomplete}
  />
);

export const LTI = Template.bind({});

LTI.args = {
  onSearch: () => console.log("search"),
  placeholder: "Search...",
  theme: "lti",
  autocomplete: true,
};
