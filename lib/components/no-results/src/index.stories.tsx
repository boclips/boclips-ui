import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import NoResults from "./index";

export default {
  title: "No Results",
  component: NoResults,
} as Meta;

interface Props {
  searchQuery: string;
}

const Template: Story<Props> = ({ searchQuery }: Props) => (
  <NoResults searchQuery={searchQuery} />
);

export const Sample = Template.bind({});

Sample.args = {
  searchQuery: "bad search query",
};
