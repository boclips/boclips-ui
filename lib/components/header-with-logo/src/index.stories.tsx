import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import HeaderWithLogo, { Props } from "./index";

export default {
  title: "Header With Logo",
  component: HeaderWithLogo,
} as Meta;

const Template: Story<Props> = ({ children }: Props) => (
  <HeaderWithLogo>{children}</HeaderWithLogo>
);

export const Sample = Template.bind({});

Sample.args = {
  children: <div>title</div>,
};
