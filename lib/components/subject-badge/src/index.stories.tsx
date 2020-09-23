import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import SubjectBadge, { SubjectBadgeProps } from "./index";

export default {
  title: "Badge",
  component: SubjectBadge,
} as Meta;

const Template: Story<SubjectBadgeProps> = ({
  subject,
  theme,
}: SubjectBadgeProps) => <SubjectBadge subject={subject} theme={theme} />;

export const BACKOFFICE = Template.bind({});
export const LTI = Template.bind({});
export const CUSTOM = Template.bind({});

BACKOFFICE.args = {
  subject: { id: "hello", name: "yes" },
  theme: "backoffice",
};

LTI.args = {
  subject: { id: "hello", name: "yes" },
  theme: "lti",
};

CUSTOM.args = {
  subject: { id: "hello", name: "yes" },
  theme: "custom",
};
