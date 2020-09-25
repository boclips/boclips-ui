import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import ReleasedOn, { ReleasedOnProps } from "../src";

export default {
  title: "ReleasedOn",
  component: ReleasedOn,
} as Meta;

const Template: Story<ReleasedOnProps> = ({
  createdBy,
  releasedOn,
  theme,
}: ReleasedOnProps) => (
  <ReleasedOn createdBy={createdBy} releasedOn={releasedOn} theme={theme} />
);

export const LTI = Template.bind({});

LTI.args = {
  releasedOn: new Date("2020-09-23"),
  createdBy: "John Doe",
  theme: "lti",
};
