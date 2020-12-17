import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import SubjectBadge, { SubjectBadgeProps } from "../src";
import s from "./style.module.less";

export default {
  title: "Subject Badge",
  component: SubjectBadge,
} as Meta;

interface Props extends SubjectBadgeProps {
  theme?: "lti" | "hq" | "publishers";
}

const Template: Story<Props> = ({ subject, theme }: Props) => (
  <div className={s[theme]}>
    <SubjectBadge subject={subject} />
  </div>
);

export const BACKOFFICE = Template.bind({});
export const LTI = Template.bind({});
export const CUSTOM = Template.bind({});

BACKOFFICE.args = {
  subject: { id: "hello", name: "Technology and computing" },
  theme: "hq",
};

LTI.args = {
  subject: { id: "hello", name: "Technology and computing" },
  theme: "lti",
};

CUSTOM.args = {
  subject: { id: "hello", name: "Technology and computing" },
  theme: "custom",
};
