import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { VideoCard } from "./index";
// @ts-ignore
import { exampleVideo } from "../storybook/videoExample";

describe("VideoCard V3", () => {
  it("shows only 3 badges by default, show all when clicking on More...", () => {
    // @ts-ignore
    const card = render(<VideoCard video={exampleVideo} />);

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
    const card = render(<VideoCard video={exampleVideoWithoutSubjectBadge} />);

    expect(card.queryByText("More...")).toBeNull();
  });

  it("doesn't show More... if all badges are displayed", () => {
    // @ts-ignore
    window.innerWidth = "1920";

    // @ts-ignore
    const card = render(<VideoCard video={exampleVideo} />);

    expect(card.queryByText("More...")).toBeNull();
  });

  it("display the duration correctly when undefined in minutes place", () => {
    const duration = "undefined:21";

    const card = render(
      // @ts-ignore
      <VideoCard duration={duration} video={exampleVideo} />
    );

    expect(card.getByText("00:21")).toBeInTheDocument();
  });

  it("display the duration correctly when undefined in seconds place", () => {
    const duration = "21:undefined";

    const card = render(
      // @ts-ignore
      <VideoCard duration={duration} video={exampleVideo} />
    );

    expect(card.getByText("21:00")).toBeInTheDocument();
  });
});
