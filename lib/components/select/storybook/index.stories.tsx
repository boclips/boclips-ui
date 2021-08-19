import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { SelectOption } from "@boclips-ui/select-option";
import SelectFilter, { Props } from "../src";

const sampleOptions: SelectOption[] = [
  { id: "id1", label: "0min - 1min", count: 2 },
  { id: "id2", label: "2min - 5min", count: 1 },
  { id: "id3", label: "10min - 20min", count: 2 },
  { id: "id4", label: "10min - 26min", count: 0 },
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
    title: "Duration",
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
  <div style={{ width: "240px" }}>
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
  </div>
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
