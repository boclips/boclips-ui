import React, {ReactElement, useState} from "react";
import { ExtendedVideo } from "@boclips-ui/video";
import AgeRangeBadge from "@boclips-ui/age-range-badge";
import SubjectBadge from "@boclips-ui/subject-badge";
import * as dayjs from "dayjs";
import ReleasedOn from "@boclips-ui/released-on";
import c from "classnames";
import ProviderBadge from "@boclips-ui/provider-badge";
import s from "./styles.module.less";

const durationPlugin = require("dayjs/plugin/duration");

dayjs.extend(durationPlugin);

export interface Props {
  video: ExtendedVideo;
  handleOnClick?: () => void;
  border?: "top" | "bottom" | "left" | "right" | "none" | "all";
}

export interface Components {
  videoPlayer?: ReactElement;
  actions?: ReactElement[];
  topBadge?: ReactElement;
  additionalBadges?: ReactElement[];
  title?: ReactElement | string;
  price?: string;
  duration?: string;
}

const borderClass = {
  all: s.border,
  left: s.leftBorder,
  right: s.rightBorder,
  top: s.topBorder,
  bottom: s.bottomBorder,
  none: undefined,
};

const VideoCardV3 = ({
  video,
  videoPlayer,
  actions,
  handleOnClick,
  border = "all",
  topBadge,
  additionalBadges,
  price,
  duration,
  title,
}: Props & Components): any => {
  const [showMoreGadges, setShowMoreBadges] = useState<boolean>(false);

  const buildBadges = () => {
    const badges = [
      video.playback.type === "YOUTUBE" ? [<ProviderBadge />] : [],
      video.ageRange ? [<AgeRangeBadge ageRange={video.ageRange} />] : [],
      video.subjects?.map((it) => <SubjectBadge key={it.id} subject={it} />),
      additionalBadges,
    ].flat();

    if (showMoreGadges) {
      return badges;
    }
    return badges.slice(0, 2);
  };

  const badgesToShow = buildBadges();

  return (
    <div
      onClick={handleOnClick}
      data-qa="video-card"
      className={c(s.grid, s.videoCard)}
    >
      <section className={s.videoPlayer}>{videoPlayer}</section>
      <section className={s.header}>{title}</section>
      <section className={s.subheader}>
        {video && video.playback.duration && <div>{duration}</div>}

        {video.releasedOn && video.createdBy && (
          <div>
            <ReleasedOn releasedOn={video.releasedOn} />
          </div>
        )}

        <div> {video.channel} </div>
      </section>

      <section className={s.badges}>
        {badgesToShow}
        {!showMoreGadges && (
          <span
            className={s.showMoreLabel}
            onClick={() => setShowMoreBadges(true)}
          >
            More...
          </span>
        )}
      </section>

      {actions && <section className={s.buttons}>{actions}</section>}

      <div className={s.price}>{price}</div>
    </div>
  );
};

export default VideoCardV3;
