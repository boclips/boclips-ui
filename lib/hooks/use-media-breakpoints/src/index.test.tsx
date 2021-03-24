import { mount } from "enzyme";
import React from "react";
import { act } from "react-dom/test-utils";
import { useMediaBreakPoint } from "./index";

const setWidth = (width: number) => {
  // @ts-ignore
  window.innerWidth = width;
  act(() => {
    window.dispatchEvent(new Event("resize"));
  });
};

const WithWidthBreakpointComponent = () => {
  const breakpoint = useMediaBreakPoint();

  return (
    <div
      data-breakpoint-label={breakpoint.label}
      data-breakpoint-width={breakpoint.width}
    />
  );
};

describe("breakpoints", () => {
  it("injects correct props to child component when sm width", () => {
    setWidth(320);
    const wrapper = mount(<WithWidthBreakpointComponent />);

    expect(wrapper.find("div").prop("data-breakpoint-label")).toEqual("sm");
    expect(wrapper.find("div").prop("data-breakpoint-width")).toEqual(320);
  });

  it("injects correct props to child component when md width", () => {
    setWidth(768);
    const wrapper = mount(<WithWidthBreakpointComponent />);

    expect(wrapper.find("div").prop("data-breakpoint-label")).toEqual("md");
    expect(wrapper.find("div").prop("data-breakpoint-width")).toEqual(768);
  });

  it("injects correct props to child component when lg width", () => {
    setWidth(1148);
    const wrapper = mount(<WithWidthBreakpointComponent />);

    expect(wrapper.find("div").prop("data-breakpoint-label")).toEqual("lg");
    expect(wrapper.find("div").prop("data-breakpoint-width")).toEqual(1148);
  });

  it("injects correct props to child component when xl width", () => {
    setWidth(1680);
    const wrapper = mount(<WithWidthBreakpointComponent />);

    expect(wrapper.find("div").prop("data-breakpoint-label")).toEqual("xl");
    expect(wrapper.find("div").prop("data-breakpoint-width")).toEqual(1680);
  });

  it("injects correct props to child component when xxl width", () => {
    setWidth(1920);
    const wrapper = mount(<WithWidthBreakpointComponent />);

    expect(wrapper.find("div").prop("data-breakpoint-label")).toEqual("xxl");
    expect(wrapper.find("div").prop("data-breakpoint-width")).toEqual(1920);
  });

  it("injects correct props to child component when window is resized", () => {
    setWidth(300);
    const wrapper = mount(<WithWidthBreakpointComponent />);

    setWidth(1148);
    wrapper.update();

    expect(wrapper.find("div").prop("data-breakpoint-label")).toEqual("lg");
    expect(wrapper.find("div").prop("data-breakpoint-width")).toEqual(1148);
  });
});
