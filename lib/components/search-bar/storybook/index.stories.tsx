import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
// @ts-ignore
import SearchIcon from "../src/resources/search-icon.svg";
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
  buttonIcon,
}: Props) => (
  <SearchBar
    onSearch={onSearch}
    placeholder={placeholder}
    theme={theme}
    autocomplete={autocomplete}
    onlySearchIconInButton={onlySearchIconInButton}
    size={size}
    buttonIcon={buttonIcon}
  />
);

export const LTI = Template.bind({});
export const PUBLISHERS = Template.bind({});

PUBLISHERS.args = {
  onSearch: () => console.log("search triggered <- it's from storybook"),
  placeholder: "Search...",
  theme: "publishers",
  autocomplete: false,
  onlySearchIconInButton: false,
  size: "big",
  buttonIcon: <SearchIcon />,
};

LTI.args = {
  onSearch: () => console.log("search triggered <- it's from storybook"),
  placeholder: "Search...",
  theme: "lti",
  autocomplete: true,
  onlySearchIconInButton: false,
  size: "big",
  buttonIcon: undefined,
};
