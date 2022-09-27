import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Player } from "boclips-player-react";
import * as dayjs from "dayjs";
import { Components, Props, VideoCard } from "../src";
import { exampleVideo } from "./videoExample";
// @ts-ignore
import s from "./styles.module.less";
import { TaxonomyCategoryBadgeFactory } from "../../taxonomy-category-badge";

const dur = require("dayjs/plugin/duration");

dayjs.extend(dur);

export default {
  title: "Video Card",
  component: VideoCard,
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
  title,
  duration,
  additionalBadges,
}: Props & Components & StorybookProps) => (
  <div
    className={s[theme]}
    style={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
    }}
  >
    <div style={{ width: "1092px" }}>
      <h5>desktop size video card on bwa</h5>

      <VideoCard
        video={video}
        duration={duration}
        videoPlayer={videoPlayer}
        actions={actions}
        handleOnClick={handleOnClick}
        title={title}
        additionalBadges={additionalBadges}
        topBadge={<div>$600</div>}
      />
    </div>

    <div style={{ width: "915px" }}>
      <h5>desktop size video card on bwa</h5>

      <VideoCard
        video={video}
        duration={duration}
        videoPlayer={videoPlayer}
        actions={actions}
        handleOnClick={handleOnClick}
        title={title}
        additionalBadges={additionalBadges}
        topBadge={<div>$600</div>}
      />
    </div>
  </div>
);

export const DEFAULT = Template.bind({});

const ActionButtons = () => {
  const onClick = () => null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <button type="button" onClick={onClick}>
        I am ugly and I know it
      </button>
    </div>
  );
};

const duration = dayjs.duration(exampleVideo.playback.duration).format("mm:ss");

DEFAULT.args = {
  // @ts-ignore
  video: exampleVideo,
  duration,
  title: <div className={s.truncate}>{exampleVideo.title}</div>,
  videoPlayer: <Player videoUri={exampleVideo.links.self.href} />,
  theme: "lti",
  actions: <ActionButtons />,
  additionalBadges: TaxonomyCategoryBadgeFactory.fromTaxonomy(
    exampleVideo.taxonomy
  ),
  topBadge: <div>$600</div>,
};
