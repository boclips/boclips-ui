import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import DateSelect from "../src";
import s from "./style.module.less";

export default {
  title: "Release Date Filter",
  component: DateSelect,
} as Meta;

const Template: Story = () => (
  <div className={s.myDatePicker}>
    <DateSelect />
  </div>
);

export const DEFAULT = Template.bind({});
