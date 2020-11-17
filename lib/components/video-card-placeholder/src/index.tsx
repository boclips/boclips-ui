import React from "react";
import { Card, Col, Skeleton, Spin } from "antd";
import s from "./styles.module.less";

export const VideoCardsPlaceholder = React.memo(() => (
  <div className={s.placeholderContainer}>
    <Spin />
    {[1, 2, 3, 4, 5, 6].map((number) => (
      <Col span={24} key={number}>
        <VideoCardSkeleton />
      </Col>
    ))}
  </div>
));

export const VideoCardSkeleton = () => (
  <Card className={s.videoCard} bordered={false}>
    <Skeleton
      loading
      active
      title={{ width: "150px" }}
      paragraph={{ rows: 5 }}
      avatar={{ shape: "square", size: "large" }}
    />
  </Card>
);
