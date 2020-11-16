import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { VideoCardsPlaceholder } from "../src";

export default {
  title: "Video Card Placeholder",
  component: VideoCardsPlaceholder,
} as Meta;

const Template: Story = () => <VideoCardsPlaceholder />;

export const Default = Template.bind({});
