import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Button, { Props } from "../src";
// @ts-ignore
import SearchIcon from "../resources/search-icon.svg";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<Props> = ({
  onClick,
  theme,
  iconOnly,
  type,
  height,
  width,
  disabled,
  icon,
}: Props) => (
  <div style={{ height: "55px" }}>
    <Button
      onClick={onClick}
      theme={theme}
      iconOnly={iconOnly}
      type={type}
      height={height}
      width={width}
      disabled={disabled}
      icon={icon}
    />
  </div>
);

export const LTI = Template.bind({});
export const PUBLISHERS = Template.bind({});

LTI.args = {
  theme: "lti",
  onClick: () => null,
  iconOnly: false,
  type: "primary",
  height: undefined,
  width: undefined,
  disabled: false,
  icon: undefined,
};

PUBLISHERS.args = {
  theme: "publishers",
  onClick: () => null,
  iconOnly: false,
  type: "primary",
  height: undefined,
  width: undefined,
  disabled: false,
  icon: <SearchIcon />,
};
