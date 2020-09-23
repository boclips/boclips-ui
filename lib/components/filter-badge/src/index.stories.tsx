import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import FilterBadge, { Props } from "./index";

export default {
  title: "Filter Badge",
  component: FilterBadge,
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["lti", "backoffice", "custom"],
      },
    },
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<Props> = ({
  theme,
  id,
  value,
  label,
  onClick,
}: Props) => (
  <FilterBadge
    theme={theme}
    id={id}
    onClick={onClick}
    value={value}
    label={label}
  />
);

export const Sample = Template.bind({});

Sample.args = {
  id: "subject-id",
  label: "Subject:",
  value: "History",
  theme: "backoffice",
};
