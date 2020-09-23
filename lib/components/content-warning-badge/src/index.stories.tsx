import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ContentWarning } from "@bit/boclips.boclips-ui.types.video/index";
import ContentWarningBadge from "./index";

export default {
  title: "Content warning badge",
  component: ContentWarningBadge,
} as Meta;

interface Props {
  contentWarnings: ContentWarning[] | undefined;
}

const Template: Story<Props> = ({ contentWarnings }: Props) => (
  <ContentWarningBadge contentWarnings={contentWarnings} />
);

export const NoWarnings = Template.bind({});
export const OneWarning = Template.bind({});
export const TwoWarnings = Template.bind({});

NoWarnings.args = {
  contentWarnings: undefined,
};

OneWarning.args = {
  contentWarnings: [{ id: "321", label: "Lots and lots and lots of swearing" }],
};

TwoWarnings.args = {
  contentWarnings: [
    { id: "123", label: "Lots and lots and lots of swearing" },
    { id: "456", label: "Even more swearing, far too much" },
  ],
};
