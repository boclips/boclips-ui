import React from "react";
import { Col, Spin } from "antd";
import { VideoCardSkeleton } from "@boclips-ui/video-card";
import s from "./styles.module.less";

const SearchResultsPlaceholder = React.memo(() => <VideoCardSkeleton />);

export const VideoCardsPlaceholder = React.memo(() => (
  <div className={s.placeholderContainer}>
    <Spin />
    {[1, 2, 3, 4, 5, 6].map((number) => (
      <Col span={24} key={number}>
        <SearchResultsPlaceholder />
      </Col>
    ))}
  </div>
));
