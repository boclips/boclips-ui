import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import AttachmentBadge, { AttachmentBadgeProps } from "../src";

export default {
  title: "Attachment Badge",
  component: AttachmentBadge,
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["lti", "hq", "custom"],
      },
    },
  },
} as Meta;

const Template: Story<AttachmentBadgeProps> = ({
  theme,
}: AttachmentBadgeProps) => <AttachmentBadge theme={theme} />;

export const Sample = Template.bind({});

Sample.args = {
  theme: "hq",
};