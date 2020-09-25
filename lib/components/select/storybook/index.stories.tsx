import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { SelectOption } from "@bit/boclips.boclips-ui.types.select-option/index";
import SelectFilter, { Props } from "../src";

const sampleOptions: SelectOption[] = [
  { id: "id1", label: "option 1", count: 2 },
  { id: "id2", label: "option 2", count: 1 },
  { id: "id3", label: "option 3", count: 2 },
];

export default {
  title: "Select",
  component: SelectFilter,
  argTypes: {
    options: { control: { type: "object" } },
    title: { control: { type: "text" } },
    searchPlaceholder: { control: { type: "text" } },
    allowSearch: { control: { type: "boolean" } },
    showFacets: { control: { type: "boolean" } },
    onApply: { action: "onApply" },
  },
  args: {
    options: sampleOptions,
    title: "Filter by",
    allowSearch: true,
    searchPlaceholder: "Search...",
    showFacets: true,
  },
} as Meta;

const Template: Story<Props> = ({
  options,
  title,
  onApply,
  allowSearch,
  searchPlaceholder,
  touched,
  showFacets,
  updatedSelected,
}: Props) => (
  <SelectFilter
    options={options}
    title={title}
    onApply={onApply}
    updatedSelected={updatedSelected}
    searchPlaceholder={searchPlaceholder}
    showFacets={showFacets}
    allowSearch={allowSearch}
    touched={touched}
  />
);

export const Sample = Template.bind({});
export const WithoutFacets = Template.bind({});
WithoutFacets.args = {
  showFacets: false,
};
export const WithoutSearch = Template.bind({});
WithoutSearch.args = {
  allowSearch: false,
};
