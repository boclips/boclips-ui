import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { VideoCardV3 } from "./index";
import { exampleVideo } from "../storybook/videoExample";

describe("VideoCard V3", () => {
  it("show only a few badges by default, show all when clicking on More...", () => {
    // @ts-ignore
    const card = render(<VideoCardV3 video={exampleVideo} />);

    const showMoreBadges = card.getByText("More...");
    expect(showMoreBadges).toBeVisible();
    expect(card.queryByText("Art History 5")).toBeNull();

    fireEvent.click(showMoreBadges);
    expect(card.getByText("Art History 5")).toBeVisible();
  });
});
