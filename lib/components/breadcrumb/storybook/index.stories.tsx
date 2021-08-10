import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { BrowserRouter as Router } from "react-router-dom";
import { Breadcrumb, BreadcrumbProps } from "../src/index";

export default {
  title: "Breadcrumb",
  component: Breadcrumb,
} as Meta;

const Template: Story<BreadcrumbProps> = ({
  previousPages,
  currentPage,
}: BreadcrumbProps) => (
  <Router>
    <Breadcrumb previousPages={previousPages} currentPage={currentPage} />
  </Router>
);

export const multiplePages = Template.bind({});
export const twoPages = Template.bind({});
export const onePage = Template.bind({});

multiplePages.args = {
  previousPages: [
    {
      nestingLevel: 0,
      label: "Source page",
      url: "./source-page",
    },
    {
      nestingLevel: 1,
      label: "First page",
      url: "./first-page",
    },
    { nestingLevel: 2, label: "Second page", url: "./second-page" },
  ],
  currentPage: "Current page",
};

twoPages.args = {
  previousPages: [
    {
      nestingLevel: 0,
      label: "Source page",
      url: "./source-page",
    },
  ],
  currentPage: "Current page",
};

onePage.args = {
  currentPage: "Current page",
};
