import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import ProviderBadge from "@boclips-ui/provider-badge";
// @ts-ignore
import Button from "@boclips-ui/button";
import { Player } from "boclips-player-react";
import VideoCardV3, { Props, Components } from "../src";
import { exampleVideo } from "./videoExample";
// @ts-ignore
import SearchIcon from "../resources/search-icon.svg";
import PlusIcon from "../resources/plus.svg";

// @ts-ignore
import s from "./styles.module.less";

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
  border,
  topBadge,
  additionalBadges,
  title,
  price,
}: Props & Components & StorybookProps) => (
  <div className={s[theme]}>
    <VideoCardV3
      video={video}
      videoPlayer={videoPlayer}
      actions={actions}
      handleOnClick={handleOnClick}
      border={border}
      topBadge={topBadge}
      additionalBadges={additionalBadges}
      title={title}
      price={price}
    />
  </div>
);

export const LTI = Template.bind({});
// export const HQ = Template.bind({});
// export const PUBLISHERS = Template.bind({});
// export const loading = Template.bind({});

const ActionButtons = () => {
  const onClick = () => null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: ".25rem",
      }}
    >
      <div>
        <Button
          type="outline"
          onClick={onClick}
          iconOnly
          icon={<SearchIcon />}
          width="44px"
          height="40px"
        />
        <Button
          type="outline"
          onClick={onClick}
          iconOnly
          icon={<SearchIcon />}
          width="44px"
          height="40px"
        />
        <Button
          type="outline"
          onClick={onClick}
          iconOnly
          icon={<SearchIcon />}
          width="44px"
          height="40px"
        />
      </div>
      <div>
        <Button
          onClick={onClick}
          iconOnly
          icon={<PlusIcon />}
          width="44px"
          height="40px"
        />
      </div>
    </div>
  );
};

LTI.args = {
  // @ts-ignore
  video: exampleVideo,
  title: exampleVideo.title,
  videoPlayer: <Player videoUri={exampleVideo._links.self.href} />,
  theme: "lti",
  price: "$600",
  actions: [<ActionButtons />],
  topBadge: (
    <div>
      <ProviderBadge
        isLicensed={exampleVideo?.playback?.type === "STREAM"}
        key="provider-badge"
      />
    </div>
  ),
};
