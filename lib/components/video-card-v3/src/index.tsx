import React, { ReactElement, useMemo, useState } from "react";
import { ExtendedVideo } from "@boclips-ui/video";
import AgeRangeBadge from "@boclips-ui/age-range-badge";
import SubjectBadge from "@boclips-ui/subject-badge";
import ReleasedOn from "@boclips-ui/released-on";
import c from "classnames";
import ProviderBadge from "@boclips-ui/provider-badge";
import { useMediaBreakPoint } from "@boclips-ui/use-media-breakpoints";
import s from "./styles.module.less";

const DEFAULT_VISIBLE_BADGES = 3;
const LARGE_SCREEN = "xxl";
const YOUTUBE = "YOUTUBE";

export interface Props {
  video: ExtendedVideo;
  handleOnClick?: () => void;
  border?: "top" | "bottom" | "left" | "right" | "none" | "all";
}

export interface Components {
  videoPlayer?: ReactElement;
  actions?: ReactElement[];
  additionalBadges?: ReactElement[];
  title?: ReactElement | string;
  price?: string;
  duration?: string;
}

export const VideoCardV3 = ({
  video,
  videoPlayer,
  actions,
  handleOnClick,
  price,
  duration,
  title,
}: Props & Components): any => {
  const [showMoreBadges, setShowMoreBadges] = useState<boolean>(false);
  const isLargeDesktopView = useMediaBreakPoint().label === LARGE_SCREEN;

  const renderBadges = useMemo(() => {
    const badges = [];

    const badgesToDisplay = () => {
      if (isLargeDesktopView) {
        return badges.length;
      }

      return showMoreBadges ? badges.length : DEFAULT_VISIBLE_BADGES;
    };

    if (video.playback.type === YOUTUBE) {
      badges.push(<ProviderBadge customClassName={s.providerBadge} />);
    }

    if (video.ageRange) {
      badges.push(<AgeRangeBadge ageRange={video.ageRange} />);
    }

    if (video.subjects) {
      video.subjects.forEach((it) => {
        badges.push(<SubjectBadge key={it.id} subject={it} />);
      });
    }

    return badges.slice(0, badgesToDisplay()).map((badge, key) => (
      // eslint-disable-next-line react/no-array-index-key
      <React.Fragment key={`badge-${key}`}>{badge}</React.Fragment>
    ));
  }, [
    video.playback.type,
    video.ageRange,
    video.subjects,
    isLargeDesktopView,
    showMoreBadges,
  ]);

  return (
    <div
      role="presentation"
      onClick={handleOnClick}
      data-qa="video-card"
      className={c(s.grid, s.videoCard)}
    >
      <section className={s.videoPlayer}>{videoPlayer}</section>

      <section className={s.header}>{title}</section>

      <section className={s.subheader}>
        {video && video.playback.duration && <div>{duration}</div>}

        {video.releasedOn && video.createdBy && (
          <ReleasedOn releasedOn={video.releasedOn} />
        )}

        {video.channel && <div> {video.channel} </div>}
      </section>

      <section className={c(s.badges, { [s.badgesClosed]: !showMoreBadges })}>
        {renderBadges}

        {!showMoreBadges && (
          <span
            role="presentation"
            className={s.showMoreLabel}
            onClick={() => setShowMoreBadges(!showMoreBadges)}
          >
            More...
          </span>
        )}
      </section>

      <section
        className={c(s.description, { [s.twoLineClamp]: showMoreBadges })}
      >
        {video.description}
      </section>

      {actions && (
        <section className={s.buttons}>
          {actions.map((action, key) => (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={`${key}-action`}>{action}</React.Fragment>
          ))}
        </section>
      )}

      {price && <div className={s.price}>{price}</div>}
    </div>
  );
};
