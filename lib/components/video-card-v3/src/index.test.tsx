import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { VideoCardV3 } from "./index";
// @ts-ignore
import { exampleVideo } from "../storybook/videoExample";

describe("VideoCard V3", () => {
  it("shows only 3 badges by default, show all when clicking on More...", () => {
    // @ts-ignore
    const card = render(<VideoCardV3 video={exampleVideo} />);

    const showMoreBadges = card.getByText("More...");
    expect(showMoreBadges).toBeVisible();
    expect(card.queryByText("Art History 5")).toBeNull();

    fireEvent.click(showMoreBadges);
    expect(card.getByText("Art History 5")).toBeVisible();
  });

  it("doesn't show More... button when <= 3 badges", () => {
    const exampleVideoWithoutSubjectBadge = Object.create(exampleVideo);

    exampleVideoWithoutSubjectBadge.subjects = [];

    // @ts-ignore
    const card = render(
      <VideoCardV3 video={exampleVideoWithoutSubjectBadge} />
    );

    expect(card.queryByText("More...")).toBeNull();
  });
});
