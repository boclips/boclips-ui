import React, { ReactElement } from "react";
import { ExtendedVideo } from "@boclips-ui/video";
import { Card } from "antd";
import AgeRangeBadge from "@boclips-ui/age-range-badge";
import SubjectBadge from "@boclips-ui/subject-badge";
import ReleasedOn from "@boclips-ui/released-on";
import c from "classnames";
import s from "./styles.module.less";

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
  title,
}: Props & Components): any => {
  return (
    <div
      onClick={handleOnClick}
      data-qa="video-card"
      className={c(s.grid, s.videoCard)}
    >
      <section className={s.videoPlayer}>{videoPlayer}</section>
      <section className={s.header}>{title}</section>
      <section className={s.subheader}>
        {video.releasedOn && video.createdBy && (
          <ReleasedOn
            releasedOn={video.releasedOn}
            createdBy={video.createdBy}
          />
        )}
      </section>
      {/* <section className={s.price}>price</section> */}
      {/* <section className={s.buttons}>buttons</section> */}
      {/* <section className={s.body}>body</section> */}
    </div>
  );
};

export default VideoCardV3;
