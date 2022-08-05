import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { DatePicker } from "./index";

describe("date-select", () => {
  it("renders date select", () => {
    render(<DatePicker label="From:" onChange={jest.fn()} />);
    expect(screen.getByLabelText("From:")).toBeVisible();
  });

  it("adds onChange event listener", () => {
    const spy = jest.fn();

    render(<DatePicker label="From:" id="date" onChange={spy} />);

    fireEvent.click(screen.getByLabelText("From:"));
    fireEvent.click(screen.getByText("2"));

    expect(spy).toHaveBeenCalledWith("2");
  });
});
