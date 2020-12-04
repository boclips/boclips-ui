import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import BestForBadge from "@boclips-ui/best-for-badge";
import AttachmentBadge from "@boclips-ui/attachment-badge";
import { Props, Components, VideoCardTwo } from "../src";
import AgeRange from "../../../types/age-range/src";
import Button from "../../button/src";
import VideoPromotedSvg from "../src/resources/promoted-icon.svg";
import ContentWarningBadge from "@boclips-ui/content-warning-badge";
import ProviderBadge from "@boclips-ui/provider-badge";
import c from "classnames";
import s from "../src/styles.module.less";

export default {
  title: "VideoCardTwo",
  component: VideoCardTwo,
} as Meta;

const Template: Story<Props & Components> = ({
  video,
  authenticated,
  analytics,
  videoPlayer,
  videoActionButtons,
  loading,
  handleOnClick,
  theme,
  border,
    title,
    description,
  videoRoundedCorners,
  bestForBadges,
  attachmentBadge,
  promotedSVG,
  additionalBadges,
}: Props & Components) => (
  <VideoCardTwo
    video={video}
    authenticated={authenticated}
    analytics={analytics}
    videoPlayer={videoPlayer}
    videoActionButtons={videoActionButtons}
    loading={loading}
    handleOnClick={handleOnClick}
    theme={theme}
    border={border}
    videoRoundedCorners={videoRoundedCorners}
    bestForBadges={bestForBadges}
    attachmentBadge={attachmentBadge}
    promotedSVG={promotedSVG}
    additionalBadges={additionalBadges}
    title={title}
    description={description}
  />
);

const video = {
  id: "5c54d7cdd8eafeecae20ee58",
  title: "TED-ED: Distorting Madonna in Medieval art - James Earle",
  description: `How has the process of declaring war changed throughout the United States' history? What prompted Congress to enact the War Powers Resolution in the '70s, and what effect did it have?

Subscribe for more HISTORY:
http://www.youtube.com/subscription_center?add_user=historychannel

Newsletter: https://www.history.com/newsletter
Website - http://www.history.com
/posts
Facebook - https://www.facebook.com/History
Twitter - https://twitter.com/history

HISTORY Topical Video
Season 1

Whether you're looking for more on American Revolution battles, WWII generals, architectural wonders, secrets of the ancient world, U.S. presidents, Civil War leaders, famous explorers or the stories behind your favorite holidays.

HISTORY®, now reaching more than 98 million homes, is the leading destination for award-winning original series and specials that connect viewers with history in an informative, immersive, and entertaining manner across all platforms. The network’s all-original programming slate features a roster of hit series, epic miniseries, and scripted event programming. Visit us at HISTORY.com for more info.`,
  additionalDescription: null,
  releasedOn: "2013-02-19",
  playback: {
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
  bestFor: [{ id: 1, label: "Hook" }],
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
export const EDITMODE = Template.bind({});

PUBLISHERS.args = {
  // @ts-ignore
  video,
  videoPlayer: <div />,
  rating: undefined,
  videoActionButtons: [
    <div style={{ height: "54px", padding: "4px" }}>
      <Button
        onClick={() => null}
        theme="publishers"
        type="primary"
        text="Add to cart"
      />
    </div>,
  ],
  theme: "publishers",
  hideBorder: true,
  border: "bottom",
  videoRoundedCorners: true,
  additionalBadges: [
    <span style={{ fontWeight: "bold", fontSize: "20px" }}>$600</span>,
  ],
  title: <h1>title</h1>,
  description: <section>this is a description</section>,
};

LTI.args = {
  // @ts-ignore
  video,
  videoPlayer: <div />,
  rating: undefined,
  videoActionButtons: undefined,
  theme: "lti",
  videoRoundedCorners: false,
  additionalBadges: [
    <ContentWarningBadge contentWarnings={video?.contentWarnings} />,
    <ProviderBadge isLicensed={video?.playback?.type === "STREAM"} />,
  ],
};

HQ.args = {
  // @ts-ignore
  video,
  videoPlayer: <div />,
  rating: undefined,
  videoActionButtons: undefined,
  theme: "hq",
  videoRoundedCorners: false,
  border: "none",
  bestForBadges: video.bestFor.map((tag) => (
    <BestForBadge bestFor={tag.label} />
  )),
  attachmentBadge: <AttachmentBadge />,
  promotedSVG: <VideoPromotedSvg />,
};

EDITMODE.args = {
  // @ts-ignore
  video,
  videoPlayer: <div />,
  rating: undefined,
  videoActionButtons: undefined,
  theme: "hq",
  videoRoundedCorners: false,
  border: "none",
  bestForBadges: video.bestFor.map((tag) => (
      <BestForBadge bestFor={tag.label} />
  )),
  attachmentBadge: <AttachmentBadge />,
  promotedSVG: <VideoPromotedSvg />,
  description: <textarea
      data-qa="textarea-description"
      className={s.input}
      defaultValue={video?.description}
  />,
  title: <input
      data-qa="input-title"
      className={s.editModeInput}
      type="text"
      defaultValue={video?.title}
  />
};
