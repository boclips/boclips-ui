import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import AttachmentBadge from "../src";

export default {
  title: "Attachment Badge",
  component: AttachmentBadge,
} as Meta;

const Template: Story = () => <AttachmentBadge />;

export const Sample = Template.bind({});
