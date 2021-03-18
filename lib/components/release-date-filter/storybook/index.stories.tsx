import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import ReleaseDateFilter, { ReleaseDateFilterProps } from "../src";

export default {
  title: "Release Date Filter",
  component: ReleaseDateFilter,
} as Meta;

const Template: Story<ReleaseDateFilterProps> = ({
  releaseDate,
  onClick,
}: ReleaseDateFilterProps) => (
  <ReleaseDateFilter onClick={onClick} releaseDate={releaseDate} />
);

export const DEFAULT = Template.bind({});

DEFAULT.args = {
  releaseDate: "2014-06-24",
  onClick: (value, dateString) => console.log(`${value} ${dateString}`),
};
