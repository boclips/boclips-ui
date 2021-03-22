import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import ReleaseDateFilter, { ReleaseDateFilterProps } from "../src";
import s from "./style.module.less";

export default {
  title: "Release Date Filter",
  component: ReleaseDateFilter,
} as Meta;

const Template: Story<ReleaseDateFilterProps> = ({
  releaseDate,
  onChange,
}: ReleaseDateFilterProps) => (
  <div className={s.myDatePicker}>
    <ReleaseDateFilter onChange={onChange} releaseDate={releaseDate} />
  </div>
);

export const DEFAULT = Template.bind({});
export const PLACEHOLDER = Template.bind({});
export const INVALID_DATE = Template.bind({});

DEFAULT.args = {
  releaseDate: "04-22-2010",
  onChange: (value, dateString) => console.log(`${value} ${dateString}`),
};

PLACEHOLDER.args = {
  onChange: (value, dateString) => console.log(`${value} ${dateString}`),
};

INVALID_DATE.args = {
  releaseDate: "04-22fafa-2010",
  onChange: (value, dateString) => console.log(`${value} ${dateString}`),
};
