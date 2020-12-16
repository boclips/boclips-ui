import React, { ReactElement } from "react";
import Badge from "@boclips-ui/badge";
import PaperclipSVG from "./resources/activity-tag.svg";

export interface AttachmentBadgeProps {
  theme?: "lti" | "hq" | "publishers";
}

const AttachmentBadge = ({ theme }: AttachmentBadgeProps): ReactElement => (
  <div data-qa="attachment-badge">
    <Badge label="Activity" icon={<PaperclipSVG />} theme={theme} />
  </div>
);

export default AttachmentBadge;
