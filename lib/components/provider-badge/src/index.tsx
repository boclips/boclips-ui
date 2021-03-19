import React from "react";
import YoutubeSVG from "./resources/youtube-icon.svg";
import Badge from "../../badge/dist";

const ProviderBadge = () => (
  <Badge icon={<YoutubeSVG data-qa="youtube-license" />} />
);

export default ProviderBadge;
