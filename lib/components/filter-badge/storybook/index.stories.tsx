import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import FilterBadge, { Props } from "../src";
import s from "./style.module.less";

export default {
  title: "Filter Badge",
  component: FilterBadge,
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["lti", "hq", "custom"],
      },
    },
    onClick: { action: "clicked" },
  },
} as Meta;

interface StoryBookProps extends Props {
  theme?: "lti" | "hq" | "publishers";
}

const Template: Story<StoryBookProps> = ({
  theme,
  id,
  value,
  label,
  onClick,
}: StoryBookProps) => (
  <div className={s[theme]}>
    <FilterBadge id={id} onClick={onClick} value={value} label={label} />
  </div>
);

export const Sample = Template.bind({});

Sample.args = {
  id: "subject-id",
  label: "Subject:",
  value: "History",
  theme: "lti",
};
