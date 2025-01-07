import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import BestForBadge, { BestForBadgeProps } from "../src";
import s from "./style.module.less";

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

interface Props extends BestForBadgeProps {
  theme?: "lti" | "hq" | "publishers";
}

const Template: Story<Props> = ({ bestFor, theme }: Props) => (
  <div className={s[theme]}>
    <BestForBadge bestFor={bestFor} />
  </div>
);

export const Sample = Template.bind({});

Sample.args = {
  bestFor: "Explainer",
  theme: "hq",
};
