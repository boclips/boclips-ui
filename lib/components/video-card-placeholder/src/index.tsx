import React from "react";
import s from "./styles.module.less";

interface Props {
  displayHeader?: boolean;
}

const VideoCardPlaceholder = ({ displayHeader = true }: Props) => (
  <div className={s.videoCardSkeleton}>
    {displayHeader && (
      <div className={s.header} style={{ width: "70%" }}>
        <div className={s.blockLine} />
        <div className={s.blockLine} />
      </div>
    )}
    <div className={s.body}>
      <div className={s.videoplayer} />

      <div className={s.right}>
        <div className={s.badges}>
          <div className={s.badge} />
          <div className={s.badge} />
        </div>
        <div className={s.blockLine} />
        <div className={s.blockLine} />
        <div className={s.blockLine} />
      </div>
    </div>
  </div>
);

export default VideoCardPlaceholder;
