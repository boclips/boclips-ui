import { RefObject, useEffect } from 'react';

function useListener(
  ref: RefObject<HTMLDivElement> | null,
  eventName: string,
  handler: (date: any) => void,
) {
  useEffect(() => {
    if (ref?.current) {
      const element = ref.current;
      element.addEventListener(eventName, handler);
    }
    return () => ref?.current?.removeEventListener(eventName, handler);
  }, [eventName, handler, ref, ref?.current]);
}

export default useListener;
