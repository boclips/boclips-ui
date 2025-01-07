import { breakpoints } from "@boclips-ui/media-breakpoints";

// This should be it's own package
function resizeTo(width: number, height: number): void {
  const resizeEvent = document.createEvent("Event");
  resizeEvent.initEvent("resize", true, true);

  // @ts-ignore
  window.innerWidth = width;
  // @ts-ignore
  window.innerHeight = height;
  window.dispatchEvent(resizeEvent);
}

export function resizeToMobile(height = 1024) {
  resizeTo(breakpoints.mobile.maxWidth - 1, height);
}

export function resizeToTablet(height = 1024) {
  resizeTo(breakpoints.tablet.maxWidth - 1, height);
}

export function resizeToDesktop(height = 1024) {
  resizeTo(breakpoints.desktop.maxWidth - 1, height);
}

export default resizeTo;
