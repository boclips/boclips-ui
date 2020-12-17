import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import AgeRange from "@boclips-ui/age-range";
import s from "./style.module.less";

import AgeRangeBadge, { AgeRangeBadgeProps } from "../src";

export default {
  title: "Age Range Badge",
  component: AgeRangeBadge,
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["lti", "hq", "custom"],
      },
    },
  },
} as Meta;

interface Props extends AgeRangeBadgeProps {
  min: number;
  max: number;
  theme?: "lti" | "hq" | "publishers";
}

const Template: Story<Props> = ({ min, max, theme }: Props) => (
  <div className={s[theme]}>
    <AgeRangeBadge ageRange={new AgeRange(min, max)} />
  </div>
);

export const LTI = Template.bind({});
export const BACKOFFICE = Template.bind({});

LTI.args = {
  min: 5,
  max: 16,
  theme: "lti",
};

BACKOFFICE.args = {
  min: 5,
  max: 16,
  theme: "hq",
};
