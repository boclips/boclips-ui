import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { Breadcrumb, PreviousPageProps } from "./index";

describe("Accessible Breadcrumb", () => {
  it("can render a simple one stage breadcrumb", () => {
    const callback = jest.fn();

    const breadcrumb = render(
      <Breadcrumb
        previousPages={[
          {
            onClick: callback,
            nestingLevel: 0,
            label: "Source Page",
          },
        ]}
        currentPage="Current Page"
      />
    );

    fireEvent.click(breadcrumb.getByText("Source Page"));

    expect(callback.mock.calls.length).toBe(1);
    expect(breadcrumb.getByText("Current Page")).toBeVisible();
  });

  it("can render a multi stage breadcrumb", () => {
    const callbackOne = jest.fn();
    const callbackTwo = jest.fn();

    const previousPages: PreviousPageProps[] = [
      {
        onClick: callbackOne,
        nestingLevel: 0,
        label: "Source Page",
      },
      {
        onClick: callbackTwo,
        nestingLevel: 1,
        label: "Previous Page",
      },
    ];

    const breadcrumb = render(
      <Breadcrumb previousPages={previousPages} currentPage="Current Page" />
    );

    fireEvent.click(breadcrumb.getByText("Source Page"));
    fireEvent.click(breadcrumb.getByText("Previous Page"));

    expect(callbackOne.mock.calls.length).toBe(1);
    expect(callbackTwo.mock.calls.length).toBe(1);
    expect(breadcrumb.getByText("Current Page")).toBeVisible();
  });
});
