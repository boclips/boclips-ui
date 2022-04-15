import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Typography } from "@boclips-ui/typography";
import Dropdown, { OptionsProps, Props } from "../src";

// @ts-ignore
import s from "./styles.module.less";

export default {
  title: "Dropdown",
  component: Dropdown,
} as Meta;

const options1: OptionsProps[] = [
  {
    id: "1",
    name: "checkbox-1",
    label: <Typography.Body>checkbox 1</Typography.Body>,
    value: "value-1",
  },
  {
    id: "2",
    name: "checkbox-2",
    label: <Typography.Body>checkbox 2</Typography.Body>,
    value: "value-2",
  },
  {
    id: "3",
    name: "checkbox-3",
    label: <Typography.Body>checkbox 3</Typography.Body>,
    value: "value-3",
  },
];

const Template: Story<Props> = ({ placeholder, onUpdate, mode, options }) => (
  <Dropdown
    placeholder={placeholder}
    onUpdate={onUpdate}
    mode={mode}
    options={options}
  />
);

export const DEFAULT = Template.bind({});

DEFAULT.args = {
  placeholder: "include video types",
  onUpdate: (it) => console.log(it),
  options: options1,
  mode: "multiple",
};
