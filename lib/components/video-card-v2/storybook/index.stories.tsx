import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import AttachmentBadge from "@boclips-ui/attachment-badge";
import ProviderBadge from "@boclips-ui/provider-badge";
import { Props, Components, VideoCardV2 } from "../src";
import Button from "../../button/src";
import BestForBadge from "../../best-for-badge/src";
import { exampleVideo } from "./videoExample";
// @ts-ignore
import s from "./styles.module.less";

export default {
  title: "VideoCardTwo",
  component: VideoCardV2,
} as Meta;

interface StorybookProps {
  theme: "lti" | "publishers" | "hq";
}

const Template: Story<Props & Components & StorybookProps> = ({
  video,
  videoPlayer,
  actions,
  handleOnClick,
  theme,
  border,
  topBadge,
  additionalBadges,
  title,
}: Props & Components & StorybookProps) => (
  <div className={s[theme]}>
    <VideoCardV2
      video={video}
      videoPlayer={videoPlayer}
      actions={actions}
      handleOnClick={handleOnClick}
      border={border}
      topBadge={topBadge}
      additionalBadges={additionalBadges}
      title={title}
    />
  </div>
);

export const LTI = Template.bind({});
export const HQ = Template.bind({});
export const PUBLISHERS = Template.bind({});
export const loading = Template.bind({});

PUBLISHERS.args = {
  // @ts-ignore
  video: exampleVideo,
  videoPlayer: <div />,
  title: <div>This is a title</div>,
  actions: [
    <div style={{ height: "48px" }}>
      <Button onClick={() => null} text="Add to cart" />
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
