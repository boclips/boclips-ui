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
  videoRoundedCorners,
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
    videoRoundedCorners={videoRoundedCorners}
  />
);

const video = {
  id: "5c54d7cdd8eafeecae20ee58",
  title: "TED-ED: Distorting Madonna in Medieval art - James Earle",
  description:
    "After Rome was destroyed, people were wary of attachment to physical beauty. As Christianity gained traction, Romans instead began to focus on the metaphysical beauty of virtue, and art began to follow suit.  James Earle discusses how Medieval paintings of Madonna were affected by this shift.",
  additionalDescription: null,
  releasedOn: "2013-02-19",
  playback: {
    type: "STREAM",
    type: "STREAM",
    id: "0_0r24xtco",
    duration: "PT3M7S",
    referenceId: "2e4fbf0c-d0eb-4cdc-a6aa-534df1f15400",
    maxResolutionAvailable: false,
    _links: {
      createPlaybackEvent: {
        href: "https://api.boclips.com/v1/events/playback",
        templated: false,
      },
      createPlayerInteractedWithEvent: {
        href: "https://api.boclips.com/v1/events/player-interaction",
        templated: false,
      },
      download: {
        href:
          "https://cdnapisec.kaltura.com/p/1776261/sp/177626100/playManifest/entryId/0_0r24xtco/format/download/protocol/https/flavorParamIds/0",
        templated: false,
      },
      thumbnail: {
        href:
          "https://cdnapisec.kaltura.com/p/1776261/thumbnail/entry_id/0_0r24xtco/width/{thumbnailWidth}/vid_slices/3/vid_slice/1",
        templated: true,
      },
      setThumbnailBySecond: {
        href:
          "https://api.boclips.com/v1/videos/5c54d7cdd8eafeecae20ee58/playback{?thumbnailSecond}",
        templated: true,
      },
      setCustomThumbnail: {
        href:
          "https://api.boclips.com/v1/videos/5c54d7cdd8eafeecae20ee58/playback{?playbackId,thumbnailImage}",
        templated: true,
      },
      videoPreview: {
        href:
          "https://cdnapisec.kaltura.com/p/1776261/thumbnail/entry_id/0_0r24xtco/width/{thumbnailWidth}/vid_slices/{thumbnailCount}",
        templated: true,
      },
      hlsStream: {
        href:
          "https://cdnapisec.kaltura.com/p/1776261/sp/177626100/playManifest/entryId/0_0r24xtco/format/applehttp/flavorParamIds/487041%2C487051%2C487061%2C487071%2C487081%2C487091%2C487111%2C1049881/protocol/https/video.mp4",
        templated: false,
      },
    },
  },
  subjects: [{ id: "5cb1f6ba5c9cb675c59df37b", name: "Art History" }],
  badges: ["ad-free"],
  legalRestrictions:
    "No editing permitted. Please contact boclips for full pricing and availability of TED-Ed videos.",
  ageRange: new AgeRange(5, 8),
  rating: null,
  yourRating: null,
  bestFor: [],
  createdBy: "TED-Ed",
  promoted: null,
  language: null,
  attachments: [],
  contentWarnings: [],
  channel: "TED-Ed",
  channelId: "5cf141cbc1475c47f717870d",
  channelVideoId: "1212_06_A",
  types: [{ id: 3, name: "Instructional Clips" }],
  captionStatus: null,
  isVoiced: null,
  _links: {
    self: {
      href: "https://api.boclips.com/v1/videos/5c54d7cdd8eafeecae20ee58",
      templated: false,
    },
    logInteraction: {
      href:
        "https://api.boclips.com/v1/videos/5c54d7cdd8eafeecae20ee58/events?logVideoInteraction=true&type={type}",
      templated: true,
    },
    detailsProjection: {
      href:
        "https://api.boclips.com/v1/videos/5c54d7cdd8eafeecae20ee58?projection=details",
      templated: false,
    },
    fullProjection: {
      href:
        "https://api.boclips.com/v1/videos/5c54d7cdd8eafeecae20ee58?projection=full",
      templated: false,
    },
    assets: {
      href: "https://api.boclips.com/v1/videos/5c54d7cdd8eafeecae20ee58/assets",
      templated: false,
    },
    rate: {
      href:
        "https://api.boclips.com/v1/videos/5c54d7cdd8eafeecae20ee58?rating={rating}",
      templated: true,
    },
    update: {
      href: "https://api.boclips.com/v1/videos/5c54d7cdd8eafeecae20ee58",
      templated: false,
    },
    addAttachment: {
      href:
        "https://api.boclips.com/v1/videos/5c54d7cdd8eafeecae20ee58/attachments",
      templated: false,
    },
    tag: {
      href: "https://api.boclips.com/v1/videos/5c54d7cdd8eafeecae20ee58/tags",
      templated: false,
    },
    transcript: {
      href:
        "https://api.boclips.com/v1/videos/5c54d7cdd8eafeecae20ee58/transcript",
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
  videoRoundedCorners: true,
};

LTI.args = {
  // @ts-ignore
  video,
  videoPlayer: <div />,
  rating: undefined,
  videoActionButtons: [],
  theme: "lti",
  videoRoundedCorners: false,
};

HQ.args = {
  // @ts-ignore
  video,
  videoPlayer: <div />,
  rating: undefined,
  videoActionButtons: [],
  theme: "hq",
  videoRoundedCorners: false,
};
