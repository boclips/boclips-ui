import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Typography } from "../src";

export default {
  title: "Typography",
} as Meta;

const Template: Story = () => (
  <div>
    <Typography.H1 id="hello">Hello, this is a H1</Typography.H1>
    <Typography.H2>Hello, this is a H2</Typography.H2>
    <Typography.H3>Hello, this is a H3</Typography.H3>
    <Typography.H4>Hello, this is a H4</Typography.H4>
    <Typography.H5>Hello, this is a H5</Typography.H5>
    <Typography.H6>Hello, this is a H6</Typography.H6>
    <div>
      <Typography.Title1>Hello, this is Title1</Typography.Title1>
    </div>
    <div>
      <Typography.Title2>Hello, this is Title2</Typography.Title2>
    </div>
    <div>
      <Typography.Body id="hello">Hello, this is a Body</Typography.Body>
    </div>
    <div>
      <Typography.Body weight="medium">
        Hello, this is Body medium
      </Typography.Body>
    </div>
    <div>
      <Typography.Body size="small">Hello, this is small Body</Typography.Body>
    </div>
    <div>
      <Typography.Body weight="medium" size="small">
        Hello, this is small Body medium
      </Typography.Body>
    </div>
  </div>
);

export const TypographySystem = Template.bind({});
