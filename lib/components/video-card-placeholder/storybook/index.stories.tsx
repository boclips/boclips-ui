import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import VideoCardPlaceholder from "../src";

export default {
  title: "Video Card Placeholder",
  component: VideoCardPlaceholder,
} as Meta;

const Template: Story = () => <VideoCardPlaceholder />;

export const Default = Template.bind({});
