import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import ReleaseDateFilter, { ReleaseDateFilterProps } from "../src";

export default {
  title: "Release Date Filter",
  component: ReleaseDateFilter,
} as Meta;

const Template: Story<ReleaseDateFilterProps> = ({
  releaseDate,
  onChange,
}: ReleaseDateFilterProps) => (
  <ReleaseDateFilter onChange={onChange} releaseDate={releaseDate} />
);

export const DEFAULT = Template.bind({});

DEFAULT.args = {
  releaseDate: "04-22-2010",
  onChange: (value, dateString) => console.log(`${value} ${dateString}`),
};
