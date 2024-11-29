import { RefObject, useEffect } from 'react';

function useListener(
  ref: RefObject<HTMLDivElement> | null,
  eventName: string,
  handler: (date: unknown) => void
) {
  useEffect(() => {
    let element: HTMLDivElement;
    if (ref?.current) {
      element = ref.current;
      element.addEventListener(eventName, handler);
    }
    return () => element.removeEventListener(eventName, handler);
  }, [eventName, handler, ref]);
}

export default useListener;
