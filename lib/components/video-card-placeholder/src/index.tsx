import React from "react";
import { Card, Skeleton } from "antd";
import s from "./styles.module.less";

const VideoCardPlaceholder = React.memo(() => (
  <Card className={s.videoCardSkeleton} bordered={false}>
    <Skeleton
      loading
      active
      title={{ width: "150px" }}
      paragraph={{ rows: 5 }}
      avatar={{ shape: "square", size: "large" }}
    />
  </Card>
));

export default VideoCardPlaceholder;
