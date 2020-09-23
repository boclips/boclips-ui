import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import ProviderBadge, { Props } from "./index";

export default {
  title: "Provider Badge",
  component: ProviderBadge,
  argTypes: {
    isLicensed: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta;

const Template: Story<Props> = ({ isLicensed }: Props) => (
  <ProviderBadge isLicensed={isLicensed} />
);

export const Youtube = Template.bind({});
Youtube.args = {
  isLicensed: false,
};

export const Licensed = Template.bind({});
Licensed.args = {
  isLicensed: true,
};
