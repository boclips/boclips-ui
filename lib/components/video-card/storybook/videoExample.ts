import { Link, Video } from 'boclips-api-client/dist/types';
import dayjs from 'dayjs';

import dur from 'dayjs/plugin/duration';

dayjs.extend(dur);

export const exampleVideo: Video = {
  id: '5c54d7cdd8eafeecae20ee58',
  title:
    'TED-ED: Distorting Madonna in Medieval art TED-ED: Distorting Madonna in Medieval art TED-ED: Distorting Madonna in Medieval art TED-ED: Distorting Madonna in Medieval art TED-ED: Distorting Madonna in Medieval art TED-ED: Distorting Madonna in Medieval art',
  description: `How has the process of declaring war changed throughout the United States' history? What prompted Congress to enact the War Powers Resolution in the '70s, and what effect did it have How has the process of declaring war changed throughout the United States' history? What prompted Congress to enact the War Powers Resolution in the '70s, and what effect did it have How has the process of declaring war changed throughout the United States' history? What prompted Congress to enact the War Powers Resolution in the '70s, and what effect did it have How has the process of declaring war changed throughout the United States' history? What prompted Congress to enact the War Powers Resolution in the '70s, and what effect did it have How has the process of
   declaring war changed throughout the United States' history? What prompted Congress to enact the War Powers Resolution in the '70s, and what effect did it have?

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
  additionalDescription: undefined,
  releasedOn: new Date('2013-02-19'),
  playback: {
    type: 'STREAM',
    id: '0_0r24xtco',
    duration: dayjs.duration(100),
    maxResolutionAvailable: false,
    links: {
      createPlaybackEvent: new Link({
        href: 'https://api.boclips.com/v1/events/playback',
        templated: false,
      }),
      createPlayerInteractedWithEvent: new Link({
        href: 'https://api.boclips.com/v1/events/player-interaction',
        templated: false,
      }),
      download: new Link({
        href: 'https://cdnapisec.kaltura.com/p/1776261/sp/177626100/playManifest/entryId/0_0r24xtco/format/download/protocol/https/flavorParamIds/0',
        templated: false,
      }),
      thumbnail: new Link({
        href: 'https://cdnapisec.kaltura.com/p/1776261/thumbnail/entry_id/0_0r24xtco/width/{thumbnailWidth}/vid_slices/3/vid_slice/1',
        templated: true,
      }),
      setThumbnailBySecond: new Link({
        href: 'https://api.boclips.com/v1/videos/5c54d7cdd8eafeecae20ee58/playback{?thumbnailSecond}',
        templated: true,
      }),
      setCustomThumbnail: new Link({
        href: 'https://api.boclips.com/v1/videos/5c54d7cdd8eafeecae20ee58/playback{?playbackId,thumbnailImage}',
        templated: true,
      }),
      videoPreview: new Link({
        href: 'https://cdnapisec.kaltura.com/p/1776261/thumbnail/entry_id/0_0r24xtco/width/{thumbnailWidth}/vid_slices/{thumbnailCount}',
        templated: true,
      }),
      hlsStream: new Link({
        href: 'https://cdnapisec.kaltura.com/p/1776261/sp/177626100/playManifest/entryId/0_0r24xtco/format/applehttp/flavorParamIds/487041%2C487051%2C487061%2C487071%2C487081%2C487091%2C487111%2C1049881/protocol/https/video.mp4',
        templated: false,
      }),
    },
  },
  subjects: [
    { id: '5cb1f6ba5c9cb675c59df37b', name: 'Art History' },
    { id: '5cb1f6ba35c9cb675c59df37b', name: 'Art History 1' },
    { id: '5cb1f6ba5c9cb675c259df37b', name: 'Art History 2' },
    { id: '5cb1f6ba5c9cb675c59df37123b', name: 'Art History 3' },
    { id: '5cb1f6ba5c9cb675c59df3447b', name: 'Art History 4' },
    { id: '5cb1f6ba5c9cb675c59d2211f37b', name: 'Art History 5' },
  ],
  badges: ['ad-free'],
  legalRestrictions:
    'No editing permitted. Please contact boclips for full pricing and availability of TED-Ed videos.',
  ageRange: {
    min: 5,
    max: 8,
    label: '5-8',
  },
  rating: undefined,
  yourRating: undefined,
  bestFor: [{ id: '1', label: 'Hook' }],
  createdBy: 'TED-Ed long channel name name name',
  promoted: false,
  language: { code: 'en', displayName: 'English' },
  attachments: [],
  contentWarnings: [{ id: '1', label: 'This is a warning' }],
  channel: 'TED-Ed long channel name name name',
  channelId: '5cf141cbc1475c47f717870d',
  channelVideoId: '1212_06_A',
  captionStatus: undefined,
  taxonomy: {
    channel: {
      categories: [
        { codeValue: 'FMM', description: 'Magical realism' },
        {
          codeValue: 'ABC',
          description: 'Conservation, restoration and care of artworks',
        },
      ],
    },
    manual: {
      categories: [{ codeValue: 'A', description: 'The Arts' }],
    },
  },
  educationLevels: [
    { code: '4CT', label: 'Higher education' },
    { code: '4CX', label: 'Adult Education' },
  ],
  links: {
    self: new Link({
      href: 'https://api.boclips.com/v1/videos/5c54d7cdd8eafeecae20ee58',
      templated: false,
    }),
    logInteraction: new Link({
      href: 'https://api.boclips.com/v1/videos/5c54d7cdd8eafeecae20ee58/events?logVideoInteraction=true&type={type}',
      templated: true,
    }),
    assets: new Link({
      href: 'https://api.boclips.com/v1/videos/5c54d7cdd8eafeecae20ee58/assets',
      templated: false,
    }),
    rate: new Link({
      href: 'https://api.boclips.com/v1/videos/5c54d7cdd8eafeecae20ee58?rating={rating}',
      templated: true,
    }),
    update: new Link({
      href: 'https://api.boclips.com/v1/videos/5c54d7cdd8eafeecae20ee58',
      templated: false,
    }),
    addAttachment: new Link({
      href: 'https://api.boclips.com/v1/videos/5c54d7cdd8eafeecae20ee58/attachments',
      templated: false,
    }),
    transcript: new Link({
      href: 'https://api.boclips.com/v1/videos/5c54d7cdd8eafeecae20ee58/transcript',
      templated: false,
    }),
  },
  type: 'INSTRUCTIONAL',
};
