import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";
import Dropdown, { OptionsProps, Props } from "../src";
// @ts-ignore
import s from "./styles.module.less";

export default {
  title: "Dropdown",
  component: Dropdown,
} as Meta;

const numberOfOptions = [...Array(10).keys()];

const options1: OptionsProps[] = numberOfOptions.map((it) => {
  const id = uuidv4();
  return {
    id: `${id}`,
    name: `checkbox ${it}`,
    label: `checkbox ${it}`,
    value: `${id}`,
  };
});

const Template: Story<Props> = ({
  placeholder,
  onUpdate,
  options,
  whenSelectedLabel,
  showSearch,
}) => (
  <div style={{ display: "flex" }}>
    <div>
      multiple:
      <Dropdown
        placeholder={placeholder}
        onUpdate={onUpdate}
        mode="multiple"
        options={options}
        whenSelectedLabel={whenSelectedLabel}
        showSearch={showSearch}
      />
    </div>
    <div style={{ marginLeft: "32px" }}>
      single:
      <Dropdown
        placeholder={placeholder}
        onUpdate={onUpdate}
        mode="single"
        options={options}
        showSearch={showSearch}
      />
    </div>
  </div>
);

export const DEFAULT = Template.bind({});

DEFAULT.args = {
  placeholder: "Select video types",
  onUpdate: (it: any) => console.log(it),
  options: options1,
  mode: "multiple",
  showSearch: true,
};