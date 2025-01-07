import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import NoResults from "../src";

export default {
  title: "No Results",
  component: NoResults,
  argTypes: {
    filtersApplied: { control: { type: "boolean" }, defaultValue: false },
    searchQuery: {
      control: { type: "string" },
      defaultValue: "bad search query",
    },
  },
} as Meta;

interface Props {
  searchQuery: string;
  filtersApplied?: boolean;
}

const Template: Story<Props> = ({ searchQuery, filtersApplied }: Props) => (
  <NoResults searchQuery={searchQuery} filtersApplied={filtersApplied} />
);

export const WithoutFilters = Template.bind({});
export const WithFiltersApplied = Template.bind({});

WithFiltersApplied.args = {
  filtersApplied: true,
};
