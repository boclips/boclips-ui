import { render } from "@testing-library/react";
import React from "react";
import { VideoCard } from "./index";
// @ts-ignore
import { exampleVideo } from "../storybook/videoExample";

describe("VideoCard", () => {
  it("shows only 3 badges by default, show '+ X more...' afterwards", () => {
    // @ts-ignore
    const card = render(<VideoCard video={exampleVideo} />);

    expect(card.getByText("+ 5 more")).toBeVisible();
    expect(card.queryByText("Art History 5")).toBeNull();
  });

  it("doesn't show '+ X more...' when <= 3 badges", () => {
    const exampleVideoWithoutSubjectBadge = Object.create(exampleVideo);

    exampleVideoWithoutSubjectBadge.subjects = [];

    // @ts-ignore
    const card = render(<VideoCard video={exampleVideoWithoutSubjectBadge} />);

    expect(card.queryByText(/\+.*more/)).toBeNull();
  });

  it("doesn't show '+ X more...' if all badges are displayed", () => {
    // @ts-ignore
    window.innerWidth = "1920";

    // @ts-ignore
    const card = render(<VideoCard video={exampleVideo} />);

    expect(card.queryByText(/\+.*more/)).toBeNull();
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

  it("can display an additional top badge in the card", () => {
    const card = render(
      // @ts-ignore
      <VideoCard video={exampleVideo} topBadge={<div>Hello</div>} />
    );

    expect(card.getByText("Hello")).toBeVisible();
  });
});
