import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Tooltip, { Props } from "../src/index";
import s from "./style.module.less";

export default {
  title: "Tooltip",
  component: Tooltip,
} as Meta;

const Template: Story<Props> = ({ text, children }: Props) => (
  <div style={{ width: 100, marginTop: 100 }}>
    <Tooltip text={text}>
      <div className={s.hoverText}>{children}</div>
    </Tooltip>
  </div>
);

export const lessText = Template.bind({});
export const moreText = Template.bind({});

lessText.args = {
  text: "I am the tooltip content",
  children: <div>Tooltip with less text</div>,
};
moreText.args = {
  text:
    "I am the tooltip content, I am the tooltip content, I am the tooltip content, I am the tooltip content",
  children: <div>Tooltip with more text</div>,
};
