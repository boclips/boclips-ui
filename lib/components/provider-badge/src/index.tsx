import React from "react";
import { Tooltip } from "antd";
import s from "./style.module.less";
import LicensedSVG from "./resources/licensed-video-icon.svg";
import YoutubeSVG from "./resources/youtube-icon.svg";

export interface Props {
  isLicensed: boolean;
}

const ProviderBadge = ({ isLicensed }: Props) => (
  <div>
    {isLicensed ? (
      <Tooltip
        overlayClassName={s.badge}
        placement="bottom"
        title="This video is fully licensed and is ready to use"
      >
        <LicensedSVG data-qa="boclips-license" />
      </Tooltip>
    ) : (
      <Tooltip
        overlayClassName={s.badge}
        placement="bottom"
        title="This video is streamed from YouTube (not under license) and may include advertising"
      >
        <YoutubeSVG data-qa="youtube-license" />
      </Tooltip>
    )}
  </div>
);

export default ProviderBadge;
