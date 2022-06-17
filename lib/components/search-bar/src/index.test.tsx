import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import SearchBar from "./index";

describe("SearchBar", () => {
  it("displays search bar and a button", () => {
    const onSearch = jest.fn();

    render(<SearchBar onSearch={onSearch} placeholder="test" />);
    const searchInput = screen.getByPlaceholderText("test");

    expect(searchInput).toBeInTheDocument();
  });

  it("search button fires search method when clicked", () => {
    const onSearch = jest.fn();

    render(<SearchBar onSearch={onSearch} placeholder="test" />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(onSearch).toBeCalled();
  });

  it("clear button clears the text in input", () => {
    const onSearch = jest.fn();

    render(<SearchBar onSearch={onSearch} placeholder="test" />);
    const searchInput = screen.getByPlaceholderText("test");

    fireEvent.change(searchInput, {
      target: { value: "this is search query" },
    });

    fireEvent.click(screen.getByLabelText("clear search text"));

    expect(searchInput.getAttribute("value")).toBe("");
  });

  it("when clear button is pressed, focus goes to search input", () => {
    const onSearch = jest.fn();

    render(<SearchBar onSearch={onSearch} placeholder="test" />);
    const searchInput = screen.getByPlaceholderText("test");

    fireEvent.change(searchInput, {
      target: { value: "this is search query" },
    });

    fireEvent.click(screen.getByLabelText("clear search text"));

    expect(searchInput.getAttribute("value")).toBe("");

    expect(searchInput).toHaveFocus();
  });

  it("when suggestion is clicked, search query is updated", () => {
    const onSearch = jest.fn();

    render(
      <SearchBar
        onSearch={onSearch}
        placeholder="test"
        initialQuery="waters"
        suggestions={["waterfall", "watergate", "watering can"]}
      />
    );
    const searchInput = screen.getByPlaceholderText("test");

    fireEvent.click(screen.getByText("waterfall"));

    expect(searchInput.getAttribute("value")).toBe("waterfall");
    expect(onSearch).toBeCalledWith("waterfall", 0);
  });

  it(`calls onchange when value is changed`, () => {
    const onSearch = jest.fn();
    const onChange = jest.fn();

    render(
      <SearchBar
        onSearch={onSearch}
        onChange={onChange}
        placeholder="test"
        initialQuery=""
        suggestions={["waterfall", "watergate", "watering can"]}
      />
    );

    const searchInput = screen.getByPlaceholderText("test");
    fireEvent.change(searchInput, {
      target: { value: "this is a search query" },
    });

    expect(onChange).toHaveBeenCalledWith("this is a search query");
    fireEvent.click(screen.getByText("waterfall"));
    expect(onChange).toHaveBeenCalledWith("waterfall");
  });
});
