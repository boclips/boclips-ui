import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { VideoCard, Props, Components } from "../src";
import AgeRange from "../../../types/age-range/src";

export default {
  title: "VideoCard",
  component: VideoCard,
} as Meta;

const Template: Story<Props & Components> = ({
  video,
  authenticated,
  analytics,
  rating,
  videoPlayer,
  videoActionButtons,
  loading,
  handleOnClick,
  hideBadges,
  theme,
  editMode,
  setEditValues,
  hideAgeRange,
  hideSubjects,
  hideBestFor,
  hideAttachments,
  border,
}: Props & Components) => (
  <VideoCard
    video={video}
    authenticated={authenticated}
    analytics={analytics}
    rating={rating}
    videoPlayer={videoPlayer}
    videoActionButtons={videoActionButtons}
    loading={loading}
    handleOnClick={handleOnClick}
    hideBadges={hideBadges}
    theme={theme}
    editMode={editMode}
    setEditValues={setEditValues}
    hideAgeRange={hideAgeRange}
    hideSubjects={hideSubjects}
    hideBestFor={hideBestFor}
    hideAttachments={hideAttachments}
    border={border}
  />
);

const video = {
  id: "5d5c235c3eba390e95c1fa09",
  title: "Knots on a Counting Rope read by Bonnie Bartlett & William Daniels",
  description:
    "Knots on a Counting Rope is written by Bill Martin Jr. and John Archambault, illustrated by Ted Rand and read by Bonnie Bartlett and William Daniels.\n\nThe counting rope is a metaphor for the passage of time and for a boy's emerging confidence facing his greatest challenges: blindness and the approaching death of his beloved grandfather.\n\nView the activity guide here: http://bit.ly/KnotsonaCountingRope\n\nWatch all of our videos at http://www.storylineonline.net/.",
  releasedOn: "2012-05-21",
  playback: {
    type: "YOUTUBE",
    id: "FgwmxMEiJ2U",
    duration: "PT10M49S",
    _links: {
      createPlaybackEvent: {
        href: "https://api.staging-boclips.com/v1/events/playback",
        templated: false,
      },
      createPlayerInteractedWithEvent: {
        href: "https://api.staging-boclips.com/v1/events/player-interaction",
        templated: false,
      },
      thumbnail: {
        href: "https://i.ytimg.com/vi/FgwmxMEiJ2U/hqdefault.jpg",
        templated: false,
      },
    },
    downloadUrl: null,
  },
  subjects: [
    { id: "5cb499c9fd5beb428189455d", name: "Fine Art" },
    { id: "5cb499c9fd5beb428189454c", name: "2Arabic" },
    { id: "5cb499c9fd5beb428189454f", name: "Design" },
  ],
  badges: ["youtube"],
  legalRestrictions: "",
  ageRange: new AgeRange(5, 8),
  rating: null,
  yourRating: null,
  createdBy: "StorylineOnline",
  promoted: null,
  language: null,
  attachments: [],
  _links: {
    self: {
      href:
        "https://api.staging-boclips.com/v1/videos/5d5c235c3eba390e95c1fa09",
      templated: false,
    },
    logInteraction: {
      href:
        "https://api.staging-boclips.com/v1/videos/5d5c235c3eba390e95c1fa09/events?logVideoInteraction=true&type={type}",
      templated: true,
    },
    rate: {
      href:
        "https://api.staging-boclips.com/v1/videos/5d5c235c3eba390e95c1fa09?rating={rating}",
      templated: true,
    },
    tag: {
      href:
        "https://api.staging-boclips.com/v1/videos/5d5c235c3eba390e95c1fa09/tags",
      templated: false,
    },
  },
};

export const LTI = Template.bind({});
export const HQ = Template.bind({});

export const PUBLISHERS = Template.bind({});

PUBLISHERS.args = {
  // @ts-ignore
  video,
  videoPlayer: <div />,
  rating: undefined,
  videoActionButtons: [],
  theme: "publishers",
  hideBorder: true,
  border: "bottom",
};

LTI.args = {
  // @ts-ignore
  video,
  videoPlayer: <div />,
  rating: undefined,
  videoActionButtons: [],
  theme: "lti",
};

HQ.args = {
  // @ts-ignore
  video,
  videoPlayer: <div />,
  rating: undefined,
  videoActionButtons: [],
  theme: "hq",
};
