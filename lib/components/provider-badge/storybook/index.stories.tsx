import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import ProviderBadge from "../src";

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

const Template: Story = () => <ProviderBadge />;

export const Youtube = Template.bind({});
