import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
// @ts-ignore
import Button from "@boclips-ui/button";
import { Player } from "boclips-player-react";
import * as dayjs from "dayjs";
import { VideoCardV3, Props, Components } from "../src";
import { exampleVideo } from "./videoExample";
// @ts-ignore
import PlusIcon from "../resources/plus.svg";

// @ts-ignore
import s from "./styles.module.less";

const dur = require("dayjs/plugin/duration");

dayjs.extend(dur);

export default {
  title: "VideoCardThree",
  component: VideoCardV3,
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
  price,
}: Props & Components & StorybookProps) => (
  <div className={s[theme]}>
    <VideoCardV3
      video={video}
      duration={duration}
      videoPlayer={videoPlayer}
      actions={actions}
      handleOnClick={handleOnClick}
      title={title}
      price={price}
    />
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
      <Button
        onClick={onClick}
        iconOnly
        icon={<PlusIcon />}
        width="44px"
        height="40px"
      />
    </div>
  );
};

const duration = dayjs.duration(exampleVideo.playback.duration).format("mm:ss");

DEFAULT.args = {
  // @ts-ignore
  video: exampleVideo,
  duration,
  title: exampleVideo.title,
  videoPlayer: <Player videoUri={exampleVideo.links.self.href} />,
  theme: "lti",
  price: "$600",
  actions: <ActionButtons />,
};
