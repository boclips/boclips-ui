import { breakpoints } from "@boclips-ui/media-breakpoints";
import { DeviceAwareHeaderSize } from "../types";
import { findSizeFromCurrentDevice } from "./sizeResolver";

describe("size resolver", () => {
  it("returns the size that exactly matches the device", () => {
    const sizes: DeviceAwareHeaderSize = {
      mobile: "s",
      tablet: "m",
      desktop: "l",
    };

    expect(findSizeFromCurrentDevice(sizes, breakpoints.mobile)).toEqual("s");
    expect(findSizeFromCurrentDevice(sizes, breakpoints.tablet)).toEqual("m");
    expect(findSizeFromCurrentDevice(sizes, breakpoints.desktop)).toEqual("l");
  });

  it("returns the size of the next matching breakpoint if no direct match", () => {
    const sizes: DeviceAwareHeaderSize = {
      mobile: "s",
      tablet: "m",
    };

    expect(findSizeFromCurrentDevice(sizes, breakpoints.desktop)).toEqual("m");
  });

  it("returns size of only breakpoints that are equal or smaller than the current device", () => {
    const sizes: DeviceAwareHeaderSize = {
      mobile: "s",
      desktop: "m",
    };

    expect(findSizeFromCurrentDevice(sizes, breakpoints.tablet)).toEqual("s");
  });

  it("returns null if no matching size found", () => {
    const sizes: DeviceAwareHeaderSize = { tablet: "s", desktop: "l" };

    expect(
      findSizeFromCurrentDevice(sizes, breakpoints.mobile)
    ).toBeUndefined();
  });
});
