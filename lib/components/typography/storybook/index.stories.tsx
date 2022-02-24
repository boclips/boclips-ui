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
    <Typography.Title1 as="div">Hello, this is Title1</Typography.Title1>
    <Typography.Title2 as="div">Hello, this is Title2</Typography.Title2>
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
    <Typography.Body weight="medium" size="small" as="div">
      Hello, this is small Body medium
    </Typography.Body>
  </div>
);

export const TypographySystem = Template.bind({});
