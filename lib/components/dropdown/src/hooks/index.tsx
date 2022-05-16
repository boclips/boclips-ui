import { MutableRefObject, useCallback, useEffect } from "react";

export function useOnClickOutsideOrSelf(
  dropdownBodyRef: MutableRefObject<HTMLElement | null>,
  dropdownHeaderRef: MutableRefObject<HTMLElement | null>,
  handler: () => void
) {
  const callback = useCallback(() => handler(), [handler]);
  useEffect(() => {
    const listener = (event: any) => {
      // Do nothing if clicking ref's element or descendent elements
      if (
        !dropdownBodyRef.current ||
        dropdownBodyRef.current.contains(event.target)
      ) {
        return;
      }
      // Do nothing if clicking dropdown header or descendent elements,
      // which is handled by onClick
      if (
        event.target === dropdownHeaderRef.current ||
        dropdownHeaderRef.current?.contains(event.target)
      ) {
        return;
      }
      callback();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [dropdownBodyRef]);
}
