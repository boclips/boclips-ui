import React, { ReactElement } from "react";
import { ExtendedVideo } from "@boclips-ui/video";
import { Card } from "antd";
import AgeRangeBadge from "@boclips-ui/age-range-badge";
import SubjectBadge from "@boclips-ui/subject-badge";
import ReleasedOn from "@boclips-ui/released-on";
import c from "classnames";
import { VideoCardSkeleton } from "@boclips-ui/video-card-placeholder";
import s from "./styles.module.less";

export interface Props {
  video: ExtendedVideo | null;
  handleOnClick?: () => void;
  border?: "top" | "bottom" | "left" | "right" | "none" | "all";
}

export interface Components {
  title?: ReactElement;
  videoPlayer?: ReactElement;
  actions?: ReactElement[];
  topBadge?: ReactElement;
  additionalBadges?: ReactElement[];
}

const borderClass = {
  all: s.border,
  left: s.leftBorder,
  right: s.rightBorder,
  top: s.topBorder,
  bottom: s.bottomBorder,
  none: undefined,
};

export const VideoCardV2 = ({
  video,
  videoPlayer,
  actions,
  handleOnClick,
  border = "all",
  topBadge,
  additionalBadges,
  title,
}: Props & Components): any => {
  if (video) {
    return (
      <Card
        bodyStyle={{ width: "100%" }}
        className={c(s.videoCard, borderClass[border])}
        bordered={false}
        data-qa="video-card"
        onClick={handleOnClick}
      >
        <section className={s.cardHeader}>
          <section className={s.cardHeaderTitle}>{title}</section>
          {topBadge}
        </section>

        <section className={s.cardSubHeader}>
          {video.releasedOn && video.createdBy && (
            <ReleasedOn
              releasedOn={video.releasedOn}
              createdBy={video.createdBy}
            />
          )}
        </section>

        <section className={s.cardBody}>
          {videoPlayer && (
            <div
              role="presentation"
              onClick={(e) => e.stopPropagation()}
              className={s.videoPlayer}
            >
              {videoPlayer}
            </div>
          )}
          <div className={s.bodyRight}>
            <div className={s.badgeList} data-qa="video-badge-list">
              {video.ageRange && <AgeRangeBadge ageRange={video.ageRange} />}

              {video.subjects?.map((it) => (
                <SubjectBadge key={it.id} subject={it} />
              ))}

              {additionalBadges?.map((element) => (
                <span key={element.key}>{element}</span>
              ))}
            </div>

            <section
              className={c(s.description, {
                [s.short]: actions && actions.length > 0,
              })}
            >
              {video.description}
            </section>
            <section
              role="presentation"
              onClick={(e) => e.stopPropagation()}
              className={s.actions}
            >
              {actions}
            </section>
          </div>
        </section>
      </Card>
    );
  }
  return <VideoCardSkeleton />;
};
