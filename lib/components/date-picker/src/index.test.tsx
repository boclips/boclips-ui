import React from "react";
import { render, screen } from "@testing-library/react";
import DatePicker from "./index";

describe("date-select", () => {
  it("renders date select", () => {
    const wrapper = render(<DatePicker label="From:" onChange={jest.fn()} />);
    expect(wrapper.getByLabelText("From:")).toBeVisible();
  });

  it("adds onChange event listener", () => {
    const spy = jest.fn();

    render(<DatePicker label="date-select" id="date" onChange={spy} />);

    const duetChangeEvent = new Event("duetChange");

    // @ts-ignore
    screen
      .getByText("date-select")
      .lastElementChild.dispatchEvent(duetChangeEvent);

    expect(spy).toHaveBeenCalled();
  });
});
