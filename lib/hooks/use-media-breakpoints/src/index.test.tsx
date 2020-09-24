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
  it("returns the correct label", () => {
    setWidth(479);
    const wrapper = mount(<WithWidthBreakpointComponent />);

    expect(wrapper.find("div").prop("data-breakpoint-label")).toEqual("xs");
    expect(wrapper.find("div").prop("data-breakpoint-width")).toEqual(480);
  });

  it("injects correct props to child component when sm width", () => {
    setWidth(575);
    const wrapper = mount(<WithWidthBreakpointComponent />);

    expect(wrapper.find("div").prop("data-breakpoint-label")).toEqual("sm");
    expect(wrapper.find("div").prop("data-breakpoint-width")).toEqual(576);
  });

  it("injects correct props to child component when md width", () => {
    setWidth(767);
    const wrapper = mount(<WithWidthBreakpointComponent />);

    expect(wrapper.find("div").prop("data-breakpoint-label")).toEqual("md");
    expect(wrapper.find("div").prop("data-breakpoint-width")).toEqual(768);
  });

  it("injects correct props to child component when lg width", () => {
    setWidth(991);
    const wrapper = mount(<WithWidthBreakpointComponent />);

    expect(wrapper.find("div").prop("data-breakpoint-label")).toEqual("lg");
    expect(wrapper.find("div").prop("data-breakpoint-width")).toEqual(992);
  });

  it("injects correct props to child component when xl width", () => {
    setWidth(1199);
    const wrapper = mount(<WithWidthBreakpointComponent />);

    expect(wrapper.find("div").prop("data-breakpoint-label")).toEqual("xl");
    expect(wrapper.find("div").prop("data-breakpoint-width")).toEqual(1200);
  });

  it("injects correct props to child component when xl width", () => {
    setWidth(1599);
    const wrapper = mount(<WithWidthBreakpointComponent />);

    expect(wrapper.find("div").prop("data-breakpoint-label")).toEqual("xxl");
    expect(wrapper.find("div").prop("data-breakpoint-width")).toEqual(1600);
  });

  it("injects correct props to child component when window is resized", () => {
    setWidth(300);
    const wrapper = mount(<WithWidthBreakpointComponent />);

    setWidth(990);
    wrapper.update();

    expect(wrapper.find("div").prop("data-breakpoint-label")).toEqual("lg");
    expect(wrapper.find("div").prop("data-breakpoint-width")).toEqual(992);
  });
});
