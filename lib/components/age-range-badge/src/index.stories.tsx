import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import AgeRange from "@bit/boclips.boclips-ui.types.age-range";
import AgeRangeBadge, { AgeRangeBadgeProps } from "./index";

export default {
  title: "Age Range Badge",
  component: AgeRangeBadge,
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["lti", "backoffice", "custom"],
      },
    },
  },
} as Meta;

interface Props extends AgeRangeBadgeProps {
  min: number;
  max: number;
}

const Template: Story<Props> = ({ min, max, theme }: Props) => (
  <AgeRangeBadge ageRange={new AgeRange(min, max)} theme={theme} />
);

export const Sample = Template.bind({});
export const BACKOFFICE = Template.bind({});

Sample.args = {
  min: 5,
  max: 16,
  theme: "lti",
};

BACKOFFICE.args = {
  min: 5,
  max: 16,
  theme: "backoffice",
};
