import "@testing-library/jest-dom";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";
import { configure } from "@testing-library/dom";

Enzyme.configure({ adapter: new Adapter() });

// create window object
declare const window: any;

window.open = jest.fn();

window.open = jest.fn();

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

configure({ testIdAttribute: "data-qa" });
