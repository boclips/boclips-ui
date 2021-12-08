import React, { ReactElement, useMemo } from "react";
import ReleasedOn from "@boclips-ui/released-on";
import c from "classnames";
import Badge from "@boclips-ui/badge";
import ProviderBadge from "@boclips-ui/provider-badge";
import { Video } from "boclips-api-client/dist/sub-clients/videos/model/Video";
import s from "./styles.module.less";

const YOUTUBE = "YOUTUBE";

export interface Props {
  video: Video;
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
}: Props & Components): ReactElement => {
  const buildBadges = useMemo(() => {
    const badges = [];

    if (video.playback.type === YOUTUBE) {
      badges.push(<ProviderBadge customClassName={s.providerBadge} />);
    }

    if (video?.ageRange) {
      badges.push(<Badge value={`Ages ${video.ageRange?.label}`} />);
    }

    if (video?.bestFor && video?.bestFor?.length > 0) {
      video.bestFor.forEach((it) => {
        badges.push(<Badge key={it.id} value={it.label} />);
      });
    }

    if (video?.subjects) {
      video.subjects.forEach((it) => {
        badges.push(<Badge key={it.id} value={it.name} />);
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
