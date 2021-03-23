import React from "react";
import YoutubeSVG from "./resources/youtube-icon.svg";
import Badge from "../../badge/dist";

interface Props {
  customClassName?: string;
}

const ProviderBadge = ({ customClassName }: Props) => (
  <Badge
    customClassName={customClassName}
    icon={<YoutubeSVG data-qa="youtube-license" />}
  />
);

export default ProviderBadge;
