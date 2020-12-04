import React, { ReactElement } from "react";
import Badge from "@boclips-ui/badge";
import PaperclipSVG from "./resources/activity-tag.svg";

const AttachmentBadge = (): ReactElement => (
  <div data-qa="attachment-badge">
    <Badge label="Activity" icon={<PaperclipSVG />} />
  </div>
);

export default AttachmentBadge;
