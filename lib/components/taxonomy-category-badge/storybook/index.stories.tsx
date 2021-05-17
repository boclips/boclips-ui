import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import { TaxonomyCategoryBadge, TaxonomyCategoryBadgeProps, UntaggedBadge, } from "../src";

export default {
  title: "Taxonomy Category Badge",
  component: TaxonomyCategoryBadge || UntaggedBadge,
} as Meta;

interface Props extends TaxonomyCategoryBadgeProps {
  showUntagged: boolean;
}

const Template: Story<Props> = ({ category, showUntagged }: Props) => {
  return showUntagged ? (
    <UntaggedBadge />
  ) : (
    <TaxonomyCategoryBadge category={category} />
  );
};

export const DEFAULT = Template.bind({});

DEFAULT.args = {
  showUntagged: false,
  category: { codeValue: "FMM", description: "Magical realism" },
};
