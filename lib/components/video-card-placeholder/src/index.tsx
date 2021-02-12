import React from "react";
import s from "./styles.module.less";

const VideoCardPlaceholder = React.memo(() => (
  <div className={s.videoCardSkeleton}>
    <div className={s.header} style={{ width: "70%" }}>
      <div className={s.blockLine} />
      <div className={s.blockLine} />
    </div>
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
));

export default VideoCardPlaceholder;
