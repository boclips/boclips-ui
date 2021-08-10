import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Breadcrumb, PreviousPageProps } from "./index";

describe("Accessible Breadcrumb", () => {
  it("can render a simple one stage breadcrumb", () => {
    const breadcrumb = render(
      <Router>
        <Breadcrumb
          previousPages={[
            {
              url: "take-me-to-source-page",
              nestingLevel: 0,
              label: "Source Page",
            },
          ]}
          currentPage="Current Page"
        />
      </Router>
    );

    expect(
      (breadcrumb.getByRole("link", {
        name: "Source Page",
      }) as HTMLAnchorElement).href
    ).toBe("http://localhost/take-me-to-source-page");
    expect(breadcrumb.getByText("Current Page")).toBeVisible();
  });

  it("can render a multi stage breadcrumb", () => {
    const previousPages: PreviousPageProps[] = [
      {
        url: "take-me-to-source-page",
        nestingLevel: 0,
        label: "Source Page",
      },
      {
        url: "take-me-to-previous-page",
        nestingLevel: 1,
        label: "Previous Page",
      },
    ];

    const breadcrumb = render(
      <Router>
        <Breadcrumb previousPages={previousPages} currentPage="Current Page" />
      </Router>
    );

    expect(
      (breadcrumb.getByRole("link", {
        name: "Source Page",
      }) as HTMLAnchorElement).href
    ).toBe("http://localhost/take-me-to-source-page");
    expect(
      (breadcrumb.getByRole("link", {
        name: "Previous Page",
      }) as HTMLAnchorElement).href
    ).toBe("http://localhost/take-me-to-previous-page");
    expect(breadcrumb.getByText("Current Page")).toBeVisible();
  });
});
