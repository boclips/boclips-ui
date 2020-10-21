import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import BestForBadge, { BestForBadgeProps } from "../src";

export default {
  title: "Best For Badge",
  component: BestForBadge,
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["lti", "hq", "custom"],
      },
    },
  },
} as Meta;

const Template: Story<BestForBadgeProps> = ({
  bestFor,
  theme,
}: BestForBadgeProps) => <BestForBadge theme={theme} bestFor={bestFor} />;

export const Sample = Template.bind({});

Sample.args = {
  bestFor: "Explainer",
  theme: "hq",
};
