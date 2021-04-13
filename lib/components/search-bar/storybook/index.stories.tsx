import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
// @ts-ignore
import SearchBar, { Props } from "../src";

export default {
  title: "SearchBar",
  component: SearchBar,
} as Meta;

const Template: Story<Props> = ({
  onSearch,
  placeholder,
  autocomplete,
  iconOnlyButton,
}: Props) => (
  <SearchBar
    onSearch={onSearch}
    placeholder={placeholder}
    autocomplete={autocomplete}
    iconOnlyButton={iconOnlyButton}
  />
);

export const DEFAULT = Template.bind({});

DEFAULT.args = {
  onSearch: () => console.log("search triggered <- it's from storybook"),
  placeholder: "Search...",
  autocomplete: true,
  iconOnlyButton: false,
};
