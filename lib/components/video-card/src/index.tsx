import React, {
  MutableRefObject,
  ReactElement,
  useEffect,
  useRef,
} from "react";
import { ExtendedVideo } from "@boclips-ui/video";
import { Card } from "antd";
import AgeRangeBadge from "@boclips-ui/age-range-badge";
import SubjectBadge from "@boclips-ui/subject-badge";
import BestForBadge from "@boclips-ui/best-for-badge";
import AttachmentBadge from "@boclips-ui/attachment-badge";
import ReleasedOn from "@boclips-ui/released-on";
import { useMediaBreakPoint } from "@boclips-ui/use-media-breakpoints";
import { MediaBreakpoints } from "@boclips-ui/media-breakpoints";
import ProviderBadge from "@boclips-ui/provider-badge";
import c from "classnames";
import ContentWarningBadge from "@boclips-ui/content-warning-badge";
import { VideoCardSkeleton } from "@boclips-ui/video-card-placeholder";
import VideoPromotedSvg from "./resources/promoted-icon.svg";
import s from "./styles.module.less";

interface EditValues {
  title?: string;
  description?: string;
}

export interface Props {
  video?: ExtendedVideo | null;
  analytics?: () => void;
  authenticated?: boolean;
  loading?: boolean;
  hideBadges?: boolean;
  handleOnClick?: () => void;
  theme?: "hq" | "lti" | "publishers";
  editMode?: boolean;
  setEditValues?: MutableRefObject<EditValues | null>;
  hideAgeRange?: boolean;
  hideSubjects?: boolean;
  hideBestFor?: boolean;
  hideAttachments?: boolean;
  border?: "top" | "bottom" | "left" | "right" | "none" | "all";
}

export interface Components {
  rating?: ReactElement;
  videoPlayer?: ReactElement;
  videoActionButtons?: ReactElement[];
}

interface ValueHTMLInput extends HTMLInputElement {
  value: string;
}

interface TextAreaHTMLInput extends HTMLTextAreaElement {
  value: string;
}

export const VideoCard = ({
  video,
  authenticated,
  analytics,
  rating,
  videoPlayer,
  videoActionButtons,
  loading,
  handleOnClick,
  hideBadges,
  theme = "lti",
  editMode,
  setEditValues,
  hideAgeRange,
  hideSubjects,
  hideBestFor,
  hideAttachments,
  border = "all",
}: Props & Components): any => {
  const breakpoint = useMediaBreakPoint();
  const smallCard = breakpoint.width < MediaBreakpoints.md.width;
  const renderVideoButtons =
    ((video && video?.links?.transcript) || authenticated) && !smallCard;

  const titleInput = useRef<ValueHTMLInput>(null);
  const descriptionInput = useRef<TextAreaHTMLInput>(null);

  useEffect(() => {
    if (setEditValues) {
      setEditValues.current = {
        title: video?.title,
        description: video?.description,
      };
    }
  }, [editMode, setEditValues, video]);

  const onInputChange = () => {
    if (setEditValues) {
      setEditValues.current = {
        title: titleInput.current?.value,
        description: descriptionInput.current?.value,
      };
    }
  };

  const ClickableCard = () => (
    <Card
      bodyStyle={{ width: "100%" }}
      className={c(s.videoCard, {
        [s.lti]: theme === "lti",
        [s.hq]: theme === "hq",
        [s.publishers]: theme === "publishers",
        [s.border]: border === "all",
        [s.leftBorder]: border === "left",
        [s.rightBorder]: border === "right",
        [s.topBorder]: border === "top",
        [s.bottomBorder]: border === "bottom",
      })}
      bordered={false}
      data-qa="video-card"
      onMouseDown={analytics}
      onClick={handleOnClick}
    >
      <section className={s.cardHeader}>
        {editMode ? (
          <input
            data-qa="input-title"
            className={s.editModeInput}
            ref={titleInput}
            type="text"
            defaultValue={video?.title}
            onChange={onInputChange}
          />
        ) : (
          <h1 data-qa="video-title" className={s.cardHeaderTitle}>
            {video?.title}
          </h1>
        )}
        {/* TODO: TAKE IT OUT OF CARD AND PASS AS PROP */}
        {theme === "lti" && (
          <span className={s.ltiButtons}>
            <span className={s.ltiButton}>
              <ContentWarningBadge contentWarnings={video?.contentWarnings} />
            </span>
            <span className={s.ltiButton}>
              <ProviderBadge isLicensed={video?.playback?.type === "STREAM"} />
            </span>
          </span>
        )}
      </section>

      <section className={s.cardSubHeader}>
        {rating && (
          <section
            role="presentation"
            onClick={(e) => e.stopPropagation()}
            className={s.rating}
          >
            {rating}
          </section>
        )}
        {video?.releasedOn && video?.createdBy && (
          <ReleasedOn
            releasedOn={video?.releasedOn}
            createdBy={video?.createdBy}
            theme={theme}
          />
        )}
      </section>

      <section className={s.cardBody}>
        {videoPlayer && (
          <div
            role="presentation"
            onClick={(e) => e.stopPropagation()}
            className={c(s.videoPlayer, {
              [s.stream]: video?.playback.type === "STREAM",
            })}
          >
            {videoPlayer}
          </div>
        )}

        <div className={s.bodyRight}>
          {!hideBadges && (
            <div className={s.badgeList} data-qa="video-badge-list">
              {!hideAgeRange && video?.ageRange && (
                <AgeRangeBadge ageRange={video.ageRange} theme={theme} />
              )}

              {!hideSubjects &&
                video?.subjects &&
                video?.subjects.map((it) => (
                  <SubjectBadge key={it.id} subject={it} theme={theme} />
                ))}

              {!hideBestFor &&
                video?.bestFor &&
                video?.bestFor.map((it) => (
                  <BestForBadge bestFor={it.label} theme={theme} />
                ))}

              {!hideAttachments &&
                video?.attachments &&
                video?.attachments?.length > 0 && (
                  <AttachmentBadge theme={theme} />
                )}

              {/* TODO: TAKE IT OUT OF CARD AND PASS AS PROP */}
              {theme === "hq" && video?.promoted && (
                <div className={s.videoPromotedSvg}>
                  <VideoPromotedSvg />
                </div>
              )}
            </div>
          )}

          {editMode ? (
            <textarea
              data-qa="textarea-description"
              className={s.input}
              ref={descriptionInput}
              defaultValue={video?.description}
              onChange={onInputChange}
            />
          ) : (
            <section
              role="presentation"
              onClick={(e) => e.stopPropagation()}
              className={c(s.description, {
                [s.short]:
                  videoActionButtons &&
                  videoActionButtons.filter((b) => !!b).length > 0 &&
                  renderVideoButtons,
              })}
            >
              {video?.description}
            </section>
          )}

          {videoActionButtons &&
            videoActionButtons.filter((b) => !!b).length > 0 &&
            renderVideoButtons && (
              <section
                role="presentation"
                onClick={(e) => e.stopPropagation()}
                className={s.videoActionButtons}
              >
                {videoActionButtons}
              </section>
            )}
          <span />
        </div>
      </section>
    </Card>
  );

  return loading ? <VideoCardSkeleton /> : <ClickableCard />;
};
