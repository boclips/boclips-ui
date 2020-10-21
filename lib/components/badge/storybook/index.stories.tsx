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
export const BACKOFFICE = Template.bind({});

BACKOFFICE.args = {
  label: "test",
  value: "hq",
  theme: "hq",
};

LTI.args = {
  label: "test",
  value: "lti",
  theme: "lti",
};
