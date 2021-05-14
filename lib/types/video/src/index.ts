import AgeRange from "@boclips-ui/age-range";
import { Playback } from "boclips-api-client/dist/sub-clients/common/model/Playback";
import { Attachment } from "boclips-api-client/dist/sub-clients/common/model/Attachment";
import { Taxonomies } from "boclips-api-client/dist/sub-clients/videos/model/Taxonomies";
import { Link } from "@boclips-ui/link";
import { Types } from "boclips-api-client";
import { Duration } from "dayjs/plugin/duration";

type Subject = Types.Subject;

export interface ContentWarning {
  id: string;
  label: string;
}

export interface Language {
  code: string;
  displayName: string;
}

export enum CaptionStatus {
  REQUESTED,
  PROCESSING,
  AVAILABLE,
  NOT_AVAILABLE,
  UNKNOWN,
}

export interface BestForTag {
  id?: string;
  label: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  additionalDescription?: string;
  releasedOn: Date;
  playback: Playback;
  subjects: Subject[];
  badges: string[];
  legalRestrictions: string;
  ageRange: AgeRange;
  rating?: number;
  yourRating?: number;
  bestFor?: BestForTag[];
  createdBy: string;
  promoted: boolean;
  language: Language;
  attachments: Attachment[];
  links: {
    self: Link;
    logInteraction: Link;
    update?: Link;
    rate?: Link;
    tag?: Link;
    transcript?: Link;
    addAttachment?: Link;
    captions?: Link;
    assets?: Link;
  };
  channel?: string;
  channelId?: string;
  channelVideoId?: string;
  types?: VideoType[];
  captionStatus?: CaptionStatus;
  contentWarnings?: ContentWarning[];
}

export enum VideoType {
  NEWS = "NEWS",
  STOCK = "STOCK",
  INSTRUCTIONAL = "INSTRUCTIONAL",
}

export interface ExtendedVideo extends Video {
  thumbnailUrl?: string;
  duration?: Duration;
  taxonomy?: Taxonomies;
}
