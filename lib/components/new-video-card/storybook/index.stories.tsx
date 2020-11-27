import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import VideoCard, { Props } from "../src";

export default {
  title: "VideoCard",
  component: VideoCard,
} as Meta;

const Template: Story<Props> = ({
  videoPlayer,
  analytics,
  handleOnClick,
  header,
  body,
}: Props) => (
  <VideoCard
    videoPlayer={
      <div style={{ width: 340, height: 190, backgroundColor: "black" }} />
    }
    header={
      <div>
        <VideoCard.Title>HELLO</VideoCard.Title>
        <VideoCard.Subtile channel="TED-ED" releasedOn={new Date()} />
      </div>
    }
    body={<div>BODY</div>}
    analytics={analytics}
    handleOnClick={handleOnClick}
  />
);

export const VideoCardExample = Template.bind({});

// VideoCardExample.args = {
//   videoPlayer: (

//   ),
//   header: (

//   ),
//   body: ,
// };
