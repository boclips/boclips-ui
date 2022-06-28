import React from "react";
import { fireEvent, render, within } from "@testing-library/react";
import Dropdown, { OptionsProps } from "./index";

const options: OptionsProps[] = [
  {
    id: "1",
    name: "checkbox label 1",
    label: "checkbox label 1",
    value: "value-1",
  },
  {
    id: "2",
    name: "checkbox label 2",
    label: "checkbox label 2",
    value: "value-2",
  },
  {
    id: "3",
    name: "checkbox label 3",
    label: "checkbox label 3",
    value: "value-3",
  },
];

describe("Dropdown", () => {
  it("renders the dropdown", () => {
    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={() => {}}
        options={options}
        mode="single"
      />
    );

    expect(wrapper.getByText("this is placeholder")).toBeVisible();
  });

  it("opens the dropdown when clicked", () => {
    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={() => {}}
        options={options}
        mode="single"
      />
    );

    fireEvent.click(wrapper.getByTestId("select"));

    expect(wrapper.getByText("checkbox label 1")).toBeVisible();
  });

  it("displays the selected value instead of placeholder", () => {
    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={() => {}}
        options={options}
        mode="single"
      />
    );

    fireEvent.click(wrapper.getByTestId("select"));
    fireEvent.click(wrapper.getByText("checkbox label 1"));
    expect(wrapper.getByText("checkbox label 1")).toBeVisible();
    expect(wrapper.queryByText("this is placeholder")).not.toBeInTheDocument();
  });

  it("returns single value", () => {
    const onUpdate = jest.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="single"
      />
    );

    fireEvent.click(wrapper.getByTestId("select"));

    fireEvent.click(wrapper.getByText("checkbox label 1"));

    expect(onUpdate).toHaveBeenCalled();

    expect(onUpdate).toHaveBeenCalledWith("value-1");

    expect(
      within(wrapper.getByTestId("select")).getByText("checkbox label 1")
    ).toBeVisible();

    fireEvent.click(wrapper.getByTestId("select"));

    fireEvent.click(wrapper.getByText("checkbox label 2"));

    expect(onUpdate).toHaveBeenCalledWith("value-2");

    expect(
      within(wrapper.getByTestId("select")).getByText("checkbox label 2")
    ).toBeVisible();
  });

  it("returns multiple values", () => {
    const onUpdate = jest.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
      />
    );

    fireEvent.click(wrapper.getByTestId("select"));

    fireEvent.click(wrapper.getByText("checkbox label 1"));

    expect(onUpdate).toHaveBeenCalled();

    expect(onUpdate).toHaveBeenCalledWith(["value-1"]);

    expect(
      within(wrapper.getByTestId("select")).getByText("Selected (1)")
    ).toBeVisible();

    fireEvent.click(wrapper.getByText("checkbox label 2"));

    expect(onUpdate).toHaveBeenCalledWith(["value-1", "value-2"]);

    fireEvent.click(wrapper.getByTestId("select"));

    expect(
      within(wrapper.getByTestId("select")).getByText("Selected (2)")
    ).toBeVisible();
  });

  it("displays correct label when many checkboxes selected", () => {
    const onUpdate = jest.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
      />
    );

    fireEvent.click(wrapper.getByTestId("select"));

    fireEvent.click(wrapper.getByText("checkbox label 1"));

    fireEvent.click(wrapper.getByText("checkbox label 2"));

    fireEvent.click(wrapper.getByTestId("select"));

    expect(
      within(wrapper.getByTestId("select")).getByText("Selected (2)")
    ).toBeVisible();
  });

  it("moves the focus to dropdown when opened", () => {
    const onUpdate = jest.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
      />
    );

    fireEvent.click(wrapper.getByTestId("select"));

    const dropdownWrapper = wrapper.getByTestId("dropdown");

    expect(dropdownWrapper).toHaveFocus();
  });

  it("allows to navigate through dropdown via keyboard", () => {
    const onUpdate = jest.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
      />
    );

    fireEvent.click(wrapper.getByTestId("select"));

    const dropdownWrapper = wrapper.getByTestId("dropdown");

    expect(dropdownWrapper).toHaveFocus();

    fireEvent.keyDown(dropdownWrapper, {
      key: "ArrowDown",
    });

    expect(wrapper.getByText("checkbox label 1").previousSibling).toHaveFocus();

    fireEvent.keyDown(dropdownWrapper, {
      key: "ArrowDown",
    });

    expect(wrapper.getByText("checkbox label 2").previousSibling).toHaveFocus();

    fireEvent.keyDown(dropdownWrapper, {
      key: "ArrowUp",
    });

    expect(wrapper.getByText("checkbox label 1").previousSibling).toHaveFocus();
  });

  it("displays the search input ", () => {
    const onUpdate = jest.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
        showSearch
      />
    );

    fireEvent.click(wrapper.getByTestId("select"));

    const searchInput = wrapper.getByPlaceholderText("Search...");

    expect(searchInput).toBeInTheDocument();
  });

  it("displays the search input ", () => {
    const onUpdate = jest.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
        showSearch
      />
    );

    fireEvent.click(wrapper.getByTestId("select"));

    const searchInput = wrapper.getByPlaceholderText("Search...");

    expect(searchInput).toBeInTheDocument();
  });

  it("filters out the options when searching", () => {
    const onUpdate = jest.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
        showSearch
      />
    );

    fireEvent.click(wrapper.getByTestId("select"));

    const searchInput = wrapper.getByPlaceholderText("Search...");

    fireEvent.change(searchInput, { target: { value: "2" } });

    expect(wrapper.getByText("checkbox label 2")).toBeInTheDocument();
    expect(wrapper.queryByText("checkbox label 1")).not.toBeInTheDocument();
    expect(wrapper.queryByText("checkbox label 3")).not.toBeInTheDocument();
  });

  it("searching for options is case insensitive", () => {
    const onUpdate = jest.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
        showSearch
      />
    );

    fireEvent.click(wrapper.getByTestId("select"));

    const searchInput = wrapper.getByPlaceholderText("Search...");

    fireEvent.change(searchInput, { target: { value: "ChEckBox Label 2" } });

    expect(wrapper.getByText("checkbox label 2")).toBeInTheDocument();
    expect(wrapper.queryByText("checkbox label 1")).not.toBeInTheDocument();
    expect(wrapper.queryByText("checkbox label 3")).not.toBeInTheDocument();
  });

  it("displays default values for multiple mode", () => {
    const onUpdate = jest.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
        defaultValue={["value-2", "value-1"]}
      />
    );

    expect(wrapper.getByText("Selected (2)")).toBeInTheDocument();

    fireEvent.click(wrapper.getByTestId("select"));

    const checkedOption = wrapper.getAllByRole("option");

    expect(checkedOption[0].getAttribute("aria-selected")).toBe("true");
    expect(checkedOption[1].getAttribute("aria-selected")).toBe("true");
    expect(checkedOption[2].getAttribute("aria-selected")).toBe("false");
  });

  it("displays default values for single mode", () => {
    const onUpdate = jest.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="single"
        whenSelectedLabel="Selected"
        defaultValue="value-2"
      />
    );

    expect(wrapper.getByText("checkbox label 2")).toBeInTheDocument();
  });

  ["single", "multiple"].forEach((mode: "single" | "multiple") => {
    it(`displays counts for options in ${mode} mode`, () => {
      const optionsWithCounts: OptionsProps[] = [
        {
          id: "1",
          name: "checkbox label 1",
          label: "checkbox label 1",
          value: "value-1",
          count: 123,
        },
        {
          id: "2",
          name: "checkbox label 2",
          label: "checkbox label 2",
          value: "value-2",
          count: 456,
        },
      ];

      const wrapper = render(
        <Dropdown
          placeholder="this is placeholder"
          onUpdate={jest.fn()}
          options={optionsWithCounts}
          mode={mode}
          whenSelectedLabel="Selected"
          defaultValue="value-2"
        />
      );

      fireEvent.click(wrapper.getByTestId("select"));

      const renderedOptions = wrapper.getAllByRole("option");

      expect(renderedOptions[0]).toHaveTextContent("123");
      expect(renderedOptions[1]).toHaveTextContent("456");
    });

    it(`adds aria-label with count information for options in ${mode} mod`, () => {
      const optionsWithCounts: OptionsProps[] = [
        {
          id: "1",
          name: "checkbox label 1",
          label: "checkbox label 1",
          value: "value-1",
          count: 123,
        },
        {
          id: "2",
          name: "checkbox label 2",
          label: "checkbox label 2",
          value: "value-2",
          count: 456,
        },
      ];

      const wrapper = render(
        <Dropdown
          placeholder="this is placeholder"
          onUpdate={jest.fn()}
          options={optionsWithCounts}
          mode={mode}
          whenSelectedLabel="Selected"
          defaultValue="value-2"
        />
      );

      fireEvent.click(wrapper.getByTestId("select"));

      const renderedOptions = wrapper.getAllByRole("option");

      expect(renderedOptions[0].getAttribute("aria-label")).toEqual(
        "value-1, 123 results"
      );
      expect(renderedOptions[1].getAttribute("aria-label")).toEqual(
        "value-2, 456 results"
      );
    });

    it(`doesn't add aria-label if count is not provided in ${mode} mode`, () => {
      const optionsWithCounts: OptionsProps[] = [
        {
          id: "1",
          name: "checkbox label 1",
          label: "checkbox label 1",
          value: "value-1",
        },
        {
          id: "2",
          name: "checkbox label 2",
          label: "checkbox label 2",
          value: "value-2",
          count: 456,
        },
      ];

      const wrapper = render(
        <Dropdown
          placeholder="this is placeholder"
          onUpdate={jest.fn()}
          options={optionsWithCounts}
          mode={mode}
          whenSelectedLabel="Selected"
          defaultValue="value-2"
        />
      );

      fireEvent.click(wrapper.getByTestId("select"));

      const renderedOptions = wrapper.getAllByRole("option");

      expect(renderedOptions[0]).not.toHaveAttribute("aria-label");
      expect(renderedOptions[1].getAttribute("aria-label")).toEqual(
        "value-2, 456 results"
      );
    });

    it(`displays count and aria-label for 0 result in ${mode} mode`, () => {
      const optionsWithCounts: OptionsProps[] = [
        {
          id: "1",
          name: "checkbox label 1",
          label: "checkbox label 1",
          value: "value-1",
          count: 0,
        },
      ];

      const wrapper = render(
        <Dropdown
          placeholder="this is placeholder"
          onUpdate={jest.fn()}
          options={optionsWithCounts}
          mode={mode}
          whenSelectedLabel="Selected"
          defaultValue="value-2"
        />
      );

      fireEvent.click(wrapper.getByTestId("select"));

      const renderedOptions = wrapper.getAllByRole("option");

      expect(renderedOptions[0]).toHaveTextContent("checkbox label 1 0");
      expect(renderedOptions[0].getAttribute("aria-label")).toEqual(
        "value-1, 0 results"
      );
    });
  });
});
