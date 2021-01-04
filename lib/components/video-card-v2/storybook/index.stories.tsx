import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import AttachmentBadge from "@boclips-ui/attachment-badge";
import ContentWarningBadge from "@boclips-ui/content-warning-badge";
import ProviderBadge from "@boclips-ui/provider-badge";
import { Props, Components, VideoCardV2 } from "../src";
import Button from "../../button/src";
import BestForBadge from "../../best-for-badge/src";
import { exampleVideo } from "./videoExample";

export default {
  title: "VideoCardTwo",
  component: VideoCardV2,
} as Meta;

const Template: Story<Props & Components> = ({
  video,
  videoPlayer,
  actions,
  handleOnClick,
  theme,
  border,
  topBadge,
  additionalBadges,
}: Props & Components) => (
  <VideoCardV2
    video={video}
    videoPlayer={videoPlayer}
    actions={actions}
    handleOnClick={handleOnClick}
    theme={theme}
    border={border}
    topBadge={topBadge}
    additionalBadges={additionalBadges}
  />
);

export const LTI = Template.bind({});
export const HQ = Template.bind({});
export const PUBLISHERS = Template.bind({});
export const loading = Template.bind({});

PUBLISHERS.args = {
  // @ts-ignore
  video: exampleVideo,
  videoPlayer: <div />,
  actions: [
    <div style={{ height: "48px" }}>
      <Button
        onClick={() => null}
        theme="publishers"
        type="primary"
        text="Add to cart"
      />
    </div>,
  ],
  theme: "publishers",
  border: "bottom",
  topBadge: (
    <span key="price" style={{ fontWeight: "bold", fontSize: "20px" }}>
      $600
    </span>
  ),
};

LTI.args = {
  // @ts-ignore
  video: exampleVideo,
  videoPlayer: <div />,
  theme: "lti",
  topBadge: (
    <div>
      <ContentWarningBadge
        contentWarnings={exampleVideo?.contentWarnings}
        key="warning-badge"
      />
      <ProviderBadge
        isLicensed={exampleVideo?.playback?.type === "STREAM"}
        key="provider-badge"
      />
    </div>
  ),
};

const getHqAdditionalBadges = () => {
  const badges = [];
  exampleVideo.bestFor.forEach((tag) =>
    badges.push(<BestForBadge bestFor={tag.label} key={tag.id} />)
  );
  badges.push(<AttachmentBadge key="attachment-badge" />);
  return badges;
};

HQ.args = {
  // @ts-ignore
  video: exampleVideo,
  videoPlayer: <div />,
  theme: "hq",
  border: "none",
  additionalBadges: getHqAdditionalBadges(),
};

loading.args = {
  video: null,
};
