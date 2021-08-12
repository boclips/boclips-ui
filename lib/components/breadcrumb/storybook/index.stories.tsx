import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Breadcrumb, BreadcrumbProps } from "../src/index";

export default {
  title: "Breadcrumb",
  component: Breadcrumb,
} as Meta;

const Template: Story<BreadcrumbProps> = ({
  previousPages,
  currentPage,
}: BreadcrumbProps) => (
  <Breadcrumb previousPages={previousPages} currentPage={currentPage} />
);

export const multiplePages = Template.bind({});
export const twoPages = Template.bind({});
export const onePage = Template.bind({});

multiplePages.args = {
  previousPages: [
    {
      nestingLevel: 0,
      label: "Source page",
      onClick: () => "./source-page",
    },
    {
      nestingLevel: 1,
      label: "First page",
      onClick: () => console.log("hey"),
    },
    { nestingLevel: 2, label: "Second page", onClick: () => "./second-page" },
  ],
  currentPage: "Current page",
};

twoPages.args = {
  previousPages: [
    {
      nestingLevel: 0,
      label: "Source page",
      onClick: () => "./source-page",
    },
  ],
  currentPage: "Current page",
};

onePage.args = {
  currentPage: "Current page",
};
