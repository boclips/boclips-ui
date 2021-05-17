import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { TaxonomyCategory } from "boclips-api-client/dist/sub-clients/videos/model/Taxonomies";
import s from "./style.module.less";

import TaxonomyCategoryBadge, { TaxonomyCategoryBadgeProps } from "../src";

export default {
  title: "Taxonomy Category Badge",
  component: TaxonomyCategoryBadge,
} as Meta;

interface Props extends TaxonomyCategoryBadgeProps {
  category: TaxonomyCategory;
  theme?: "lti" | "hq" | "publishers";
}

const Template: Story<Props> = ({ category, theme }: Props) => (
  <div className={s[theme]}>
    <TaxonomyCategoryBadge category={category} />
  </div>
);

export const DEFAULT = Template.bind({});

DEFAULT.args = {
  theme: "hq",
  category: {
    codeValue: "AB",
    description: "Art, Building",
  },
};
