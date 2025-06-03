import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SelectFilter from "./index";

const filters = [
  { id: "3-5", label: "3-5", count: 2 },
  { id: "5-9", label: "5-9", count: 2 },
  { id: "9-11", label: "9-11", count: 2 },
  { id: "11-14", label: "11-14", count: 2 },
];

describe("Select dropdown", () => {
  it("Renders select dropdown", () => {
    render(<SelectFilter options={filters} title="Ages" onApply={() => {}} />);

    expect(screen.getByText("Ages")).toBeInTheDocument();
  });

  it("Renders dropdown options", async () => {
    render(<SelectFilter options={filters} title="Ages" onApply={() => {}} />);

    await fireEvent.mouseDown(screen.getByText("Ages"));

    filters.forEach((option) => {
      expect(screen.getByTitle(option.label)).toBeInTheDocument();
    });
  });

  it("Returns selected options when clicking an option", async () => {
    const onApply = jest.fn();
    render(<SelectFilter options={filters} title="Ages" onApply={onApply} />);

    await fireEvent.mouseDown(screen.getByText("Ages"));

    const option1 = screen.getByTitle("5-9");
    const option2 = screen.getByTitle("11-14");

    await fireEvent.click(option1);
    await fireEvent.click(option2);

    expect(onApply).toHaveBeenCalledWith(["5-9", "11-14"]);
  });

  it("show search input when allowSearch true", () => {
    render(
      <SelectFilter
        options={filters}
        title="Ages"
        onApply={jest.fn()}
        searchPlaceholder="Search for subject"
        allowSearch
      />
    );

    fireEvent.mouseDown(screen.getByText("Ages"));

    expect(
      screen.getByPlaceholderText("Search for subject")
    ).toBeInTheDocument();
  });

  it("can filter options when allowSearch is set -  case insensitive", () => {
    render(
      <SelectFilter
        options={[
          { id: "id1", label: "other option", count: 2 },
          { id: "id2", label: "option", count: 2 },
          { id: "id3", label: "OTHER", count: 2 },
        ]}
        title="Subject"
        onApply={jest.fn()}
        searchPlaceholder="Search for subject"
        allowSearch
      />
    );

    fireEvent.mouseDown(screen.getByText("Subject"));
    fireEvent.change(screen.getByPlaceholderText("Search for subject"), {
      target: { value: "Other" },
    });

    expect(screen.getByText("other option")).toBeInTheDocument();
    expect(screen.getByText("OTHER")).toBeInTheDocument();
    expect(screen.queryByText("option")).not.toBeInTheDocument();
  });

  it("shows facets when requested", () => {
    render(
      <SelectFilter
        options={[
          { id: "id1", label: "other option", count: 46 },
          { id: "id2", label: "option", count: 53 },
          { id: "id3", label: "OTHER", count: 99 },
        ]}
        title="Subject"
        onApply={jest.fn()}
        showFacets
      />
    );

    fireEvent.mouseDown(screen.getByText("Subject"));
    expect(screen.getByText("46")).toBeInTheDocument();
    expect(screen.getByText("53")).toBeInTheDocument();
    expect(screen.getByText("99")).toBeInTheDocument();
  });
});
