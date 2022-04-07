import React from "react";
import c from "classnames";
import { Tooltip } from "antd";
import { ContentWarning } from "boclips-api-client/dist/sub-clients/contentWarnings/model/ContentWarning";
import s from "./style.module.less";
import WarningSVG from "./resources/warning.svg";

interface Props {
  contentWarnings: ContentWarning[] | undefined;
}

const ContentWarningBadge = ({ contentWarnings }: Props) => {
  if (contentWarnings === undefined || contentWarnings.length === 0)
    return null;

  let classes: string[];
  let renderedText: JSX.Element[] | JSX.Element;

  if (contentWarnings.length > 1) {
    classes = [s.tooltip, s.leftAligned];
    renderedText = contentWarnings.map((warning) => (
      <span className={s.hasFullStop} key={warning.id}>
        {warning.label}
      </span>
    ));
  } else {
    classes = [s.tooltip];
    renderedText = <>{contentWarnings[0].label}</>;
  }

  return (
    <Tooltip
      title={renderedText}
      overlayClassName={c(classes)}
      placement="bottom"
    >
      <span data-qa="content-warning">
        <WarningSVG />
      </span>
    </Tooltip>
  );
};

export default ContentWarningBadge;
