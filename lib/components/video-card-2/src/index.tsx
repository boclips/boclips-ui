import React, { ReactElement } from "react";
import { ExtendedVideo } from "@boclips-ui/video";
import { Card } from "antd";
import AgeRangeBadge from "@boclips-ui/age-range-badge";
import SubjectBadge from "@boclips-ui/subject-badge";
import ReleasedOn from "@boclips-ui/released-on";
import { useMediaBreakPoint } from "@boclips-ui/use-media-breakpoints";
import { MediaBreakpoints } from "@boclips-ui/media-breakpoints";
import c from "classnames";
import { VideoCardSkeleton } from "@boclips-ui/video-card-placeholder";
import s from "./styles.module.less";

export interface Props {
  video?: ExtendedVideo | null;
  analytics?: () => void;
  authenticated?: boolean;
  loading?: boolean;
  handleOnClick?: () => void;
  theme?: "hq" | "lti" | "publishers";
  border?: "top" | "bottom" | "left" | "right" | "none" | "all";
  videoRoundedCorners?: boolean;
}

export interface Components {
  videoPlayer?: ReactElement;
  videoActionButtons?: ReactElement[];
  bestForBadges?: ReactElement[];
  attachmentBadge?: ReactElement;
  promotedSVG?: React.ReactNode;
  additionalBadges?: ReactElement[];
}

export const VideoCardTwo = ({
  video,
  authenticated,
  analytics,
  videoPlayer,
  videoActionButtons,
  loading,
  handleOnClick,
  theme = "lti",
  bestForBadges,
  attachmentBadge,
  promotedSVG,
  videoRoundedCorners,
  border = "all",
  additionalBadges,
}: Props & Components): any => {
  const breakpoint = useMediaBreakPoint();
  const smallCard = breakpoint.width < MediaBreakpoints.md.width;
  const renderVideoButtons =
    ((video && video?.links?.transcript) || authenticated) && !smallCard;

  const ClickableCard = () => (
    <Card
      bodyStyle={{ width: "100%" }}
      className={c(s.videoCard, {
        [s.lti]: theme === "lti",
        [s.hq]: theme === "hq",
        [s.publishers]: theme === "publishers",
        [s.border]: border === "all",
        [s.leftBorder]: border === "left",
        [s.rightBorder]: border === "right",
        [s.topBorder]: border === "top",
        [s.bottomBorder]: border === "bottom",
      })}
      bordered={false}
      data-qa="video-card"
      onMouseDown={analytics}
      onClick={handleOnClick}
    >
      <section className={s.cardHeader}>
        <h1 data-qa="video-title" className={s.cardHeaderTitle}>
          {video?.title}
        </h1>
        {additionalBadges && (
          <span className={s.additionalBadges}>
            {additionalBadges.map((badge) => {
              return <span className={s.additionalBadge}>{badge}</span>;
            })}
          </span>
        )}
      </section>

      <section className={s.cardSubHeader}>
        {video?.releasedOn && video?.createdBy && (
          <ReleasedOn
            releasedOn={video?.releasedOn}
            createdBy={video?.createdBy}
            theme={theme}
          />
        )}
      </section>

      <section className={s.cardBody}>
        {videoPlayer && (
          <div
            role="presentation"
            onClick={(e) => e.stopPropagation()}
            className={c(s.videoPlayer, {
              [s.stream]: video?.playback.type === "STREAM",
              [s.videoRoundedCorners]: videoRoundedCorners,
            })}
          >
            {videoPlayer}
          </div>
        )}
        <div className={c(s.bodyRight)}>
          <div className={s.badgeList} data-qa="video-badge-list">
            {video?.ageRange && (
              <AgeRangeBadge ageRange={video.ageRange} theme={theme} />
            )}

            {video?.subjects &&
              video?.subjects.map((it) => (
                <SubjectBadge key={it.id} subject={it} theme={theme} />
              ))}

            {bestForBadges &&
              bestForBadges.map((badge) => <span>{badge}</span>)}

            {attachmentBadge && <span>{attachmentBadge}</span>}

            {promotedSVG && (
              <div className={s.videoPromotedSvg}>{promotedSVG}</div>
            )}
          </div>

          <section
            className={c(s.description, {
              [s.short]: !!videoActionButtons && renderVideoButtons,
            })}
          >
            {video?.description}
          </section>

          {videoActionButtons && renderVideoButtons && (
            <section
              role="presentation"
              onClick={(e) => e.stopPropagation()}
              className={s.videoActionButtons}
            >
              {videoActionButtons}
            </section>
          )}
        </div>
      </section>
    </Card>
  );

  return loading ? <VideoCardSkeleton /> : <ClickableCard />;
};
