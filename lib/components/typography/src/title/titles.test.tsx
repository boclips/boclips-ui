import React from "react";
import { render } from "@testing-library/react";
import { Title1, Title2 } from ".";

describe("title1", () => {
  it("can set the underlying component with a prop for title", () => {
    const wrapper = render(<Title1 as="button">Hello</Title1>);

    expect(wrapper.getByRole("button", { name: "Hello" })).toBeVisible();
  });
});

describe("title2", () => {
  it("can set the underlying component with a prop for title", () => {
    const wrapper = render(<Title2 as="button">Hello</Title2>);

    expect(wrapper.getByRole("button", { name: "Hello" })).toBeVisible();
  });
});
