import React, { PropsWithChildren } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Tooltip, { Props } from "../src/index";
import Button from "../../button";

export default {
  title: "Tooltip",
  component: Tooltip,
} as Meta;

const Template: Story<PropsWithChildren<Props>> = ({
  text,
  children,
  align,
  side,
  offset,
}: Props) => (
  <div
    style={{ display: "flex", width: "100%", justifyContent: "space-between" }}
  >
    <div style={{ width: 100, marginTop: 100 }}>
      <Tooltip align={align} text={text} side={side} offset={offset}>
        {children}
      </Tooltip>
    </div>
  </div>
);

export const lessText = Template.bind({});
export const moreText = Template.bind({});

lessText.args = {
  text: "You’ll be able to log in",
  children: <Button text="Tooltip with less text" onClick={() => null} />,
  align: "center",
};

moreText.args = {
  text: "You’ll be able to log in using your login credentials. You’ll be able to log in using your login credentials",
  children: <button type="button">Tooltip with more text</button>,
  align: "center",
};
