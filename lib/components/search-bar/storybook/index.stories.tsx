import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import SearchBar, { Props } from "../src";
// @ts-ignore
import s from "./style.module.less";

export default {
  title: "SearchBar",
  component: SearchBar,
} as Meta;

const Template: Story<Props> = ({
  onSearch,
  placeholder,
  iconOnlyButton,
}: Props) => (
  <span className={s.wrap}>
    <SearchBar
      onSearch={onSearch}
      placeholder={placeholder}
      iconOnlyButton={iconOnlyButton}
      suggestions={["dogs", "cats", "mice"]}
    />
  </span>
);

export const DEFAULT = Template.bind({});

DEFAULT.args = {
  onSearch: (query, _, suggestionUsed) =>
    console.log(
      `search triggered: ${query}, ${suggestionUsed}<- it's from storybook`
    ),
  placeholder: "Search...",
  iconOnlyButton: true,
};
