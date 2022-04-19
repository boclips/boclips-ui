import React from "react";
import { fireEvent, render, within } from "@testing-library/react";
import Dropdown, { OptionsProps } from "./index";

const options: OptionsProps[] = [
  {
    id: "1",
    name: "checkbox-1",
    label: "checkbox label 1",
    value: "value-1",
  },
  {
    id: "2",
    name: "checkbox-2",
    label: "checkbox label 2",
    value: "value-2",
  },
  {
    id: "3",
    name: "checkbox-3",
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
});
