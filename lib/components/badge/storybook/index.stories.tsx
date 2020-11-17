import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Badge, { Props } from "../src";

export default {
  title: "Badge",
  component: Badge,
} as Meta;

const Template: Story<Props> = ({ icon, label, value, theme }: Props) => (
  <Badge icon={icon} label={label} value={value} theme={theme} />
);

export const LTI = Template.bind({});
export const HQ = Template.bind({});
export const PUBLISHERS = Template.bind({});

HQ.args = {
  label: "test",
  value: "hq",
  theme: "hq",
};

LTI.args = {
  label: "test",
  value: "lti",
  theme: "lti",
};

PUBLISHERS.args = {
  label: "",
  value: "Elementary science",
  theme: "publishers",
};
