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

  return <div data-breakpoint-type={breakpoint.type} />;
};

describe("breakpoints", () => {
  it("injects correct props to child component when sm width", () => {
    setWidth(320);
    const wrapper = mount(<WithWidthBreakpointComponent />);

    expect(wrapper.find("div").prop("data-breakpoint-type")).toEqual("mobile");
  });

  it("injects correct props to child component when md width", () => {
    setWidth(768);
    const wrapper = mount(<WithWidthBreakpointComponent />);

    expect(wrapper.find("div").prop("data-breakpoint-type")).toEqual("tablet");
  });

  it("injects correct props to child component when lg width", () => {
    setWidth(1148);
    const wrapper = mount(<WithWidthBreakpointComponent />);

    expect(wrapper.find("div").prop("data-breakpoint-type")).toEqual("desktop");
  });

  it("injects correct props to child component when window is resized", () => {
    setWidth(300);
    const wrapper = mount(<WithWidthBreakpointComponent />);

    setWidth(1148);
    wrapper.update();

    expect(wrapper.find("div").prop("data-breakpoint-type")).toEqual("desktop");
  });
});
