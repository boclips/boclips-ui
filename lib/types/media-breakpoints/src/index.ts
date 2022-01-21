export declare type ScreenSizes = "xl" | "lg" | "md" | "sm";

export interface Breakpoint {
  width: number;
  label: ScreenSizes;
  type: string;
}

type Breakpoints = { [name in ScreenSizes]: Breakpoint };

export const MediaBreakpoints: Breakpoints = {
  sm: { width: 320, label: "sm", type: "mobile" },
  md: { width: 768, label: "md", type: "tablet" },
  lg: { width: 1148, label: "lg", type: "desktop" },
  xl: { width: 1680, label: "xl", type: "desktop" },
};

export default MediaBreakpoints;
