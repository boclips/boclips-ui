import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Tooltip from "./index";

describe("tooltip", () => {
  it("tooltip appears when mouse over is triggered", () => {
    const text = "this is tooltip text";

    render(
      <Tooltip text={text}>
        <button type="button">test button</button>
      </Tooltip>
    );

    expect(screen.queryByText(text)).not.toBeInTheDocument();

    fireEvent.mouseOver(screen.getByRole("button"));

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
