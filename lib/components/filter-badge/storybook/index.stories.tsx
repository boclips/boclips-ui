import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import FilterBadge, { Props } from "../src";

export default {
  title: "Filter Badge",
  component: FilterBadge,
  argTypes: {
    onClose: { action: "clicked" },
  },
} as Meta;

const Template: Story<Props> = ({
  sourceFilter,
  value,
  label,
  onClose,
}: Props) => (
  <FilterBadge
    sourceFilter={sourceFilter}
    onClose={onClose}
    value={value}
    label={label}
  />
);

export const Sample = Template.bind({});

Sample.args = {
  value: "abc123",
  label: "Trigonometry",
  sourceFilter: "subject",
  onClose: (sourceFilter, value) =>
    console.log(`closed ${sourceFilter} type with value ${value}`),
};
