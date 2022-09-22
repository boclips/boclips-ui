import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import DatePicker, { DatePickerProps } from "../src/index";

export default {
  title: "Date picker",
  component: DatePicker,
} as Meta;

const Template: Story<DatePickerProps> = () => (
  <>
    <DatePicker onChange={(date: any) => console.log(date)} />
  </>
);

export const Sample = Template.bind({});

Sample.args = {
  id: "input-id",
  onChange: () => console.log("onChange"),
  onFocus: () => console.log("onFocus"),
  onBlur: () => console.log("onBlur"),
};
