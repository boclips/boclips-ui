import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Duration, { DurationProps } from "../src";

export default {
  title: "Duration",
  component: Duration,
} as Meta;

const Template: Story<DurationProps> = ({ duration }: DurationProps) => (
  <Duration duration={duration} />
);

export const Sample = Template.bind({});

Sample.args = {
  duration: "PT2M32S",
};
