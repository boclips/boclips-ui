import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
// @ts-ignore
import s from "./style.module.less";

import Badge, { Props } from "../src";

export default {
  title: "Badge",
  component: Badge,
} as Meta;

interface StorybookProps {
  theme: "lti" | "publishers" | "hq";
}

// @ts-ignore
const Template: Story<Props & StorybookProps> = ({
  icon,
  label,
  value,
  customClassName,
  // @ts-ignore
  theme,
}: Props) => (
  <div className={s[theme]}>
    <Badge
      icon={icon}
      label={label}
      value={value}
      customClassName={customClassName}
    />
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
  customClassName: "customClassName",
};

LTI.args = {
  label: "test",
  value: "lti",
  theme: "lti",
  customClassName: "customClassName",
};

PUBLISHERS.args = {
  label: "",
  value: "Elementary science",
  theme: "publishers",
  customClassName: "customClassName",
};

DEFAULT.args = {
  label: "Hello",
  value: "Boclips",
};
