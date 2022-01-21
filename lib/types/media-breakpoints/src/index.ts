export interface Device {
  maxWidth: number;
  type: Breakpoint;
}

export declare type Breakpoint = "mobile" | "tablet" | "desktop";

export type DeviceViews = { [name in Breakpoint]: Device };

export const breakpoints: DeviceViews = {
  mobile: { maxWidth: 768, type: "mobile" },
  tablet: { maxWidth: 1148, type: "tablet" },
  desktop: { maxWidth: 9999, type: "desktop" },
};
