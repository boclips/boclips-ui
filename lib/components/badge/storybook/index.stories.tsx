import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import s from "./style.module.less";

import Badge, { Props } from "../src";

export default {
  title: "Badge",
  component: Badge,
} as Meta;

const Template: Story<Props> = ({ icon, label, value, theme }: Props) => (
  <div className={s[theme]}>
    <Badge icon={icon} label={label} value={value} />
  </div>
);

export const LTI = Template.bind({});
export const HQ = Template.bind({});
export const PUBLISHERS = Template.bind({});
export const DEFAULT = Template.bind({});

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

DEFAULT.args = {
  label: "Hello",
  value: "Boclips",
};
