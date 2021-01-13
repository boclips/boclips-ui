import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import s from "./styles.module.less";

import ReleasedOn, { ReleasedOnProps } from "../src";

export default {
  title: "ReleasedOn",
  component: ReleasedOn,
} as Meta;

interface StorybookProps {
  theme: string;
}

const Template: Story<ReleasedOnProps & StorybookProps> = ({
  createdBy,
  releasedOn,
  theme,
}: ReleasedOnProps & StorybookProps) => (
  <div className={s[theme]}>
    <ReleasedOn createdBy={createdBy} releasedOn={releasedOn} />
  </div>
);

export const LTI = Template.bind({});
export const HQ = Template.bind({});

LTI.args = {
  releasedOn: new Date("2020-09-23"),
  createdBy: "John Doe",
  theme: "lti",
};

HQ.args = {
  releasedOn: new Date("2020-09-23"),
  createdBy: "John Doe",
  theme: "hq",
};
