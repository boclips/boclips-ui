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
const LARGE_SCREEN_BREAKPOINT = "xxl";
const YOUTUBE = "YOUTUBE";

export interface Props {
  video: ExtendedVideo;
  handleOnClick?: () => void;
}

export interface Components {
  videoPlayer?: ReactElement;
  actions?: ReactElement;
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
  const [
    displayShowMoreBadgesButton,
    setDisplayShowMoreBadgesButton,
  ] = useState<boolean>(true);

  const isLargeDesktopBreakpoint =
    useMediaBreakPoint().label === LARGE_SCREEN_BREAKPOINT;

  const buildBadges = useMemo(() => {
    const badges = [];

    const badgesToDisplay = () => {
      if (badges.length <= 3) {
        setDisplayShowMoreBadgesButton(false);
      }

      if (isLargeDesktopBreakpoint) {
        return badges.length;
      }

      return !displayShowMoreBadgesButton
        ? badges.length
        : DEFAULT_VISIBLE_BADGES;
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

    return badges
      .slice(0, badgesToDisplay())
      .map((badge, key) => (
        <React.Fragment key={`badge-${key}`}>{badge}</React.Fragment>
      ));
  }, [
    video.playback.type,
    video.ageRange,
    video.subjects,
    isLargeDesktopBreakpoint,
    displayShowMoreBadgesButton,
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
        {duration && <div>{duration}</div>}

        {video.releasedOn && <ReleasedOn releasedOn={video.releasedOn} />}

        {video.createdBy && <div> {video.createdBy} </div>}
      </section>

      <section
        className={c(s.badges, {
          [s.badgesClosed]: displayShowMoreBadgesButton,
        })}
      >
        {buildBadges}

        {displayShowMoreBadgesButton && (
          <span
            role="presentation"
            className={s.showMoreLabel}
            onClick={() =>
              setDisplayShowMoreBadgesButton(!displayShowMoreBadgesButton)
            }
          >
            More...
          </span>
        )}
      </section>

      {video.description && (
        <section
          className={c(s.description, {
            [s.twoLineClamp]: displayShowMoreBadgesButton,
          })}
        >
          {video.description}
        </section>
      )}

      {actions && <section className={s.buttons}>{actions}</section>}

      {price && <div className={s.price}>{price}</div>}
    </div>
  );
};
