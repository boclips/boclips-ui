import React from "react";
import { render, screen } from "@testing-library/react";
import HeaderWithLogo from "./index";

describe("Header with logo", () => {
  it("Passing children as props", () => {
    const TestComponent = () => <div>this is header with logo</div>;
    render(
      <HeaderWithLogo>
        <TestComponent />
      </HeaderWithLogo>
    );
    expect(screen.queryByText("this is header with logo")).not.toBeNull();
  });
  it("Passing children as props", () => {
    render(
      <HeaderWithLogo>
        <span>children</span>
      </HeaderWithLogo>
    );
    expect(screen.findByTitle("boclips logo")).not.toBeNull();
  });
});
