import { render } from "@testing-library/react";
import React from "react";
import { VideoCard } from "./index";
// @ts-ignore
import { exampleVideo } from "../storybook/videoExample";

describe("VideoCard", () => {
  it("shows all badges", () => {
    // @ts-ignore
    const card = render(<VideoCard video={exampleVideo} />);

    expect(card.getByTestId("youtube-license")).toBeInTheDocument();
    expect(card.getByText("Ages 5-8")).toBeInTheDocument();
    expect(card.getByText("Art History")).toBeInTheDocument();
    expect(card.getByText("Art History 1")).toBeInTheDocument();
    expect(card.getByText("Art History 2")).toBeInTheDocument();
    expect(card.getByText("Art History 3")).toBeInTheDocument();
    expect(card.getByText("Art History 4")).toBeInTheDocument();
    expect(card.getByText("Art History 5")).toBeInTheDocument();
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
