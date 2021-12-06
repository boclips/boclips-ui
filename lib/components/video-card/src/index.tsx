import React, { ReactElement, useMemo } from "react";
import { ExtendedVideo } from "@boclips-ui/video";
import AgeRangeBadge from "@boclips-ui/age-range-badge";
import SubjectBadge from "@boclips-ui/subject-badge";
import ReleasedOn from "@boclips-ui/released-on";
import c from "classnames";
import ProviderBadge from "@boclips-ui/provider-badge";
import s from "./styles.module.less";

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
  const buildBadges = useMemo(() => {
    const badges = [];

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

    return badges.map((badge, key) => (
      <React.Fragment key={`badge-${key}`}>{badge}</React.Fragment>
    ));
  }, [video.playback.type, video.ageRange, video.subjects]);

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

      <section className={s.badges}>{buildBadges}</section>

      {video.description && (
        <section className={s.description}>{video.description}</section>
      )}

      {actions && <section className={s.buttons}>{actions}</section>}

      {topBadge && <div className={s.topBadge}>{topBadge}</div>}
    </div>
  );
};
