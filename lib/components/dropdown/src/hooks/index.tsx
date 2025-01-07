import { MutableRefObject, useCallback, useEffect } from "react";

export function useOnClickOutsideOrSelf(
  wrapperRef: MutableRefObject<HTMLElement | null>,
  handler: () => void
) {
  const callback = useCallback(() => handler(), [handler]);
  useEffect(() => {
    const listener = (event: any) => {
      if (
        event.target === wrapperRef.current ||
        wrapperRef.current?.contains(event.target)
      ) {
        return;
      }

      callback();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    document.addEventListener("focusin", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
      document.addEventListener("focusin", listener);
    };
  }, [wrapperRef]);
}
