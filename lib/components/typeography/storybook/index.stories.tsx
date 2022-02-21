import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Typeography } from "../src";

export default {
  title: "Typeography",
} as Meta;

const Template: Story = () => (
  <div>
    <Typeography.H1>Hello, this is a H1</Typeography.H1>
    <Typeography.H2>Hello, this is a H2</Typeography.H2>
    <Typeography.H3>Hello, this is a H3</Typeography.H3>
    <Typeography.H4>Hello, this is a H4</Typeography.H4>
    <Typeography.H5>Hello, this is a H5</Typeography.H5>
    <Typeography.H6>Hello, this is a H6</Typeography.H6>
    <div>
      <Typeography.Body>Hello, this is a Body 16</Typeography.Body>
    </div>
    <div>
      <Typeography.Body weight="medium">
        Hello, this is Body 16 medium
      </Typeography.Body>
    </div>
    <div>
      <Typeography.Body fontSize="14">
        Hello, this is a Body 14
      </Typeography.Body>
    </div>
    <div>
      <Typeography.Body weight="medium" fontSize="14">
        Hello, this is Body 14 medium
      </Typeography.Body>
    </div>
  </div>
);

export const Typeographies = Template.bind({});
