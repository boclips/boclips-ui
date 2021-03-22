import { useEffect, useState } from "react";
import MediaBreakpoints, { Breakpoint } from "@boclips-ui/media-breakpoints";

export const getMediaBreakpoint = (): Breakpoint => {
  const { innerWidth } = window;

  if (innerWidth < MediaBreakpoints.sm.width) {
    return MediaBreakpoints.sm;
  }
  if (innerWidth < MediaBreakpoints.md.width) {
    return MediaBreakpoints.md;
  }
  if (innerWidth < MediaBreakpoints.lg.width) {
    return MediaBreakpoints.lg;
  }
  return MediaBreakpoints.xl;
};

export const useMediaBreakPoint = (): Breakpoint => {
  const [width, setWidth] = useState(getMediaBreakpoint());

  const handleResize = () => {
    setWidth(getMediaBreakpoint());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};
