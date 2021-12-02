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
const DESKTOP_BREAKPOINT = "xl";
const LARGE_DESKTOP_BREAKPOINT = "xxl";
const YOUTUBE = "YOUTUBE";

export interface Props {
  video: ExtendedVideo;
  handleOnClick?: () => void;
}

export interface Components {
  videoPlayer?: ReactElement;
  actions?: ReactElement;
  title?: ReactElement | string;
  duration?: string;
  videoId?: string;
  additionalBadges?: ReactElement[];
  topBadge?: ReactElement;
}

export const VideoCard = ({
  video,
  videoPlayer,
  actions,
  duration,
  title,
  videoId,
  additionalBadges,
  topBadge,
}: Props & Components): any => {
  const [
    displayShowMoreBadgesButton,
    setDisplayShowMoreBadgesButton,
  ] = useState<boolean>(true);

  const [hiddenBadges, setHiddenBadges] = useState<number>(0);

  const breakpoint = useMediaBreakPoint();

  const isDesktopBreakpoint =
    breakpoint.label === DESKTOP_BREAKPOINT ||
    breakpoint.label === LARGE_DESKTOP_BREAKPOINT;

  const buildBadges = useMemo(() => {
    const badges = [];

    const badgesToDisplay = () => {
      if (badges.length <= 3) {
        setDisplayShowMoreBadgesButton(false);
      }

      if (isDesktopBreakpoint) {
        return badges.length;
      }

      return !displayShowMoreBadgesButton
        ? badges.length
        : DEFAULT_VISIBLE_BADGES;
    };

    if (video.playback.type === YOUTUBE) {
      badges.push(<ProviderBadge customClassName={s.providerBadge} />);
    }

    if (video?.ageRange) {
      badges.push(<AgeRangeBadge ageRange={video.ageRange} />);
    }

    if (video.subjects) {
      video.subjects.forEach((it) => {
        badges.push(<SubjectBadge key={it.id} subject={it} />);
      });
    }

    if (additionalBadges) {
      badges.push(additionalBadges);
    }

    setHiddenBadges(badges.length - badgesToDisplay());

    return badges
      .slice(0, badgesToDisplay())
      .map((badge, key) => (
        <React.Fragment key={`badge-${key}`}>{badge}</React.Fragment>
      ));
  }, [
    video.playback.type,
    video.ageRange,
    video.subjects,
    isDesktopBreakpoint,
    displayShowMoreBadgesButton,
  ]);

  const durationFormatter = duration?.toString().replace("undefined", "00");

  return (
    <div
      role="region"
      data-qa="video-card"
      className={c(s.grid, s.videoCard)}
      aria-labelledby={`${video.id}label`}
    >
      <section className={s.videoPlayer}>{videoPlayer}</section>

      <h5
        id={`${video.id}label`}
        className={c(s.header, {
          [s.withTopBadge]: topBadge,
        })}
      >
        {title}
      </h5>

      <section className={s.subheader}>
        {duration && <div>{durationFormatter}</div>}

        {video.releasedOn && <ReleasedOn releasedOn={video.releasedOn} />}

        {videoId && <div>{videoId}</div>}

        {video.createdBy && (
          <div className={s.createdBy}> {video.createdBy} </div>
        )}
      </section>

      <section
        className={c(s.badges, {
          [s.badgesClosed]: displayShowMoreBadgesButton,
        })}
      >
        {buildBadges}

        {displayShowMoreBadgesButton && !isDesktopBreakpoint && (
          <span className={s.showMoreLabel}>+ {hiddenBadges} more</span>
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

      {topBadge && <div className={s.topBadge}>{topBadge}</div>}
    </div>
  );
};
