import { useEffect, useState } from "react";
import { breakpoints, Device } from "@boclips-ui/media-breakpoints";

export const getMediaBreakpoint = (): Device => {
  const { innerWidth } = window;

  if (innerWidth < breakpoints.mobile.maxWidth) {
    return breakpoints.mobile;
  }

  if (innerWidth < breakpoints.tablet.maxWidth) {
    return breakpoints.tablet;
  }

  return breakpoints.desktop;
};

export const useMediaBreakPoint = (): Device => {
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
