import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import Checkbox, { Props } from "../src";

export default {
  title: "Checkbox",
  component: Checkbox,
} as Meta;

const Template: Story<Props> = ({
  onChange,
  name,
  id,
  label,
  dataQa,
}: Props) => (
  <>
    <Checkbox
      onChange={onChange}
      name={name}
      id={id}
      checked={false}
      label={label}
      dataQa={dataQa}
    />
    <Checkbox
      onChange={onChange}
      name={name}
      id={id}
      checked
      label={label}
      dataQa={dataQa}
    />
  </>
);

export const Sample = Template.bind({});

Sample.args = {
  onChange: () => console.log("checked"),
  name: "checkbox",
  id: "checkbox",
  label: "checkbox",
  dataQa: "checkbox",
};
