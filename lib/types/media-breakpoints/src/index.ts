export declare type AntBreakpoint = "xxl" | "xl" | "lg" | "md" | "sm";

export interface Breakpoint {
  width: number;
  label: AntBreakpoint;
}
type Breakpoints = { [name in AntBreakpoint]: Breakpoint };

export const MediaBreakpoints: Breakpoints = {
  sm: { width: 320, label: "sm" },
  md: { width: 768, label: "md" },
  lg: { width: 1148, label: "lg" },
  xl: { width: 1680, label: "xl" },
  xxl: { width: 1920, label: "xxl" },
};

export default MediaBreakpoints;
