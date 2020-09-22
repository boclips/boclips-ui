import { render, screen } from "@testing-library/react";
import { ContentWarning } from "@bit/boclips.boclips-ui.types.video/index";
import React from "react";
import ContentWarningBadge from "./index";

describe(`ContentWarningBadge`, () => {
  it(`renders the badge when content warnings are provided`, () => {
    const warnings: ContentWarning[] = [
      { label: "contains lots of cheeky swear words", id: "123" },
    ];
    render(<ContentWarningBadge contentWarnings={warnings} />);

    expect(screen.getByText("Content Warning")).toBeInTheDocument();
  });
  it(`does not render the badge when no content warnings are provided`, () => {
    const wrapper = render(<ContentWarningBadge contentWarnings={[]} />);

    expect(wrapper.queryByText("Content Warning")).toBeNull()
  });
});
