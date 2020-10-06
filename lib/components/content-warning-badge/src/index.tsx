import React from "react";
import c from "classnames";
import { Tooltip } from "antd";
import { ContentWarning } from "@boclips-ui/video";
import s from "./style.module.less";
import WarningSVG from "./resources/warning.svg";

interface Props {
  contentWarnings: ContentWarning[] | undefined;
}

const ContentWarningBadge = ({ contentWarnings }: Props) =>
  contentWarnings && contentWarnings.length > 0 ? (
    <Tooltip
      title={contentWarnings.map((warning) => warning.label).join("\n")}
      overlayClassName={c(s.tooltip, {
        [s.leftAligned]: contentWarnings.length > 1,
      })}
      placement="bottom"
    >
      <span data-qa="content-warning">
        <WarningSVG />
      </span>
    </Tooltip>
  ) : null;

export default ContentWarningBadge;
