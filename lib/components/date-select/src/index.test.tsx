import React from "react";
import { render, screen } from "@testing-library/react";
import DateSelect from "./index";

describe("date-select", () => {
  it("renders date select", () => {
    render(<DateSelect label="date-select" onChange={jest.fn()} />);
    expect(screen.getByText("date-select")).toBeInTheDocument();
  });

  it("appends scripts to body", () => {
    render(<DateSelect label="date-select" onChange={jest.fn()} />);

    const scripts = document.getElementsByTagName("script");

    expect(scripts).toHaveLength(2);
  });

  it("adds onChange event listener", () => {
    const spy = jest.fn();

    render(<DateSelect label="date-select" onChange={spy} />);

    const duetChangeEvent = new Event("duetChange");

    screen
      .getByText("date-select")
      .nextElementSibling!.dispatchEvent(duetChangeEvent);

    expect(spy).toHaveBeenCalled();
  });
});
