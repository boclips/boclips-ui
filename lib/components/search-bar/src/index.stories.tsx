import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import SearchBar, { Props } from "./index";

export default {
  title: "SearchBar",
  component: SearchBar,
} as Meta;

const Template: Story<Props> = ({ onSearch, placeholder, theme }: Props) => (
  <SearchBar onSearch={onSearch} placeholder={placeholder} theme={theme} />
);

export const LTI = Template.bind({});

LTI.args = {
  onSearch: () => console.log("search"),
  placeholder: "Search...",
  theme: "lti",
};
