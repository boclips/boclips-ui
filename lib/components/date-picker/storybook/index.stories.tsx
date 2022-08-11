import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Typography } from "@boclips-ui/typography";
import DatePicker, { DatePickerProps } from "../src/index";

export default {
  title: "Date picker",
  component: DatePicker,
} as Meta;

const Template: Story<DatePickerProps> = () => (
  <>
    <DatePicker
      label={<Typography.Body size="small">From:</Typography.Body>}
      onChange={(date: any) => console.log(date)}
    />
  </>
);

export const Sample = Template.bind({});

Sample.args = {
  id: "input-id",
  onChange: () => console.log("onChange"),
  onFocus: () => console.log("onFocus"),
  onBlur: () => console.log("onBlur"),
};
