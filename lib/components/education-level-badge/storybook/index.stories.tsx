import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import EducationLevelBadge, { EducationLevelBadgeProps } from "../src";
import s from "./style.module.less";

export default {
  title: "Education Level Badge",
  component: EducationLevelBadge,
} as Meta;

interface Props extends EducationLevelBadgeProps {
  theme?: "lti" | "hq" | "publishers";
}

const Template: Story<Props> = ({ educationLevel, theme }: Props) => (
  <div className={s[theme]}>
    <EducationLevelBadge educationLevel={educationLevel} />
  </div>
);

export const BACKOFFICE = Template.bind({});
export const LTI = Template.bind({});
export const CUSTOM = Template.bind({});

BACKOFFICE.args = {
  educationLevel: { code: "4CA", label: "Pre-school" },
  theme: "hq",
};

LTI.args = {
  educationLevel: { code: "4CA", label: "Pre-school" },
  theme: "lti",
};

CUSTOM.args = {
  educationLevel: { code: "4CA", label: "Pre-school" },
  theme: "custom",
};
