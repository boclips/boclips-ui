import { Card } from "antd";
import React, { ReactNode } from "react";
import ReleasedOn from "@boclips-ui/released-on";
import s from "./styles.module.less";

export interface Props {
  videoPlayer: React.ReactNode;
  header: React.ReactNode;
  body: React.ReactNode;
  handleOnClick?: () => void;
  analytics?: () => void;
}

const VideoCard = ({
  videoPlayer,
  header,
  body,
  handleOnClick,
  analytics,
}: Props) => {
  return (
    <Card
      className={s.videoCard}
      onClick={handleOnClick}
      onMouseDown={analytics}
    >
      <div className={s.header}>{header}</div>
      <div className={s.body}>
        <div className={s.player}>{videoPlayer}</div>
        <div className={s.bodyRight}>{body}</div>
      </div>
    </Card>
  );
};

export interface TitleProps {
  children: ReactNode;
}
export interface SubTitleProps {
  releasedOn: Date;
  channel: string;
}

VideoCard.Title = ({ children }: TitleProps) => {
  return <div>{children}</div>;
};
VideoCard.Subtile = ({ releasedOn, channel }: SubTitleProps) => {
  return <ReleasedOn releasedOn={releasedOn} createdBy={channel} />;
};

export default VideoCard;
