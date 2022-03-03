import React, { ReactElement, useMemo } from "react";
import ReleasedOn from "@boclips-ui/released-on";
import c from "classnames";
import Badge from "@boclips-ui/badge";
import ProviderBadge from "@boclips-ui/provider-badge";
import { Video } from "boclips-api-client/dist/sub-clients/videos/model/Video";
import { Typography } from "@boclips-ui/typography";
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

      <Typography.Title1
        id={`${video.id}label`}
        className={c(s.header, {
          [s.withTopBadge]: topBadge,
        })}
      >
        {title}
      </Typography.Title1>

      <section className={s.subheader}>
        {duration && (
          <Typography.Body as="div" size="small">
            {durationFormatter}
          </Typography.Body>
        )}

        {video.releasedOn && <ReleasedOn releasedOn={video.releasedOn} />}

        {videoId && (
          <Typography.Body as="div" size="small">
            {videoId}
          </Typography.Body>
        )}

        {video.createdBy && (
          <Typography.Body as="div" className={s.createdBy} size="small">
            {video.createdBy}
          </Typography.Body>
        )}
      </section>

      <section className={s.badges}>{buildBadges}</section>

      {video.description && (
        <section className={s.description}>
          <Typography.Body>{video.description}</Typography.Body>
        </section>
      )}

      {actions && <section className={s.buttons}>{actions}</section>}

      {topBadge && (
        <Typography.Title1 as="div" className={s.topBadge}>
          {topBadge}
        </Typography.Title1>
      )}
    </div>
  );
};
