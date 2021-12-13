import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import DateSelect, { DateSelectProps } from "../src";
import s from "./style.module.less";

export default {
  title: "Release Date Filter",
  component: DateSelect,
} as Meta;

const Template: Story<DateSelectProps> = ({
  date,
  onChange,
}: DateSelectProps) => (
  <div className={s.myDatePicker}>
    <DateSelect onChange={onChange} date={date} />
  </div>
);

export const DEFAULT = Template.bind({});
export const PLACEHOLDER = Template.bind({});
export const INVALID_DATE = Template.bind({});

DEFAULT.args = {
  date: "04-22-2010",
  onChange: (value, dateString) => console.log(`${value} ${dateString}`),
};

PLACEHOLDER.args = {
  onChange: (value, dateString) => console.log(`${value} ${dateString}`),
};

INVALID_DATE.args = {
  date: "04-22fafa-2010",
  onChange: (value, dateString) => console.log(`${value} ${dateString}`),
};
