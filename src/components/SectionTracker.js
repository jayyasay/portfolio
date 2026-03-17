import { useEffect, useRef } from "react";
import { trackEvent } from "../analytics";

export default function SectionTracker({
  eventName,
  eventParams = {},
  threshold = 0.5,
  children,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let hasTracked = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTracked) {
          trackEvent(eventName, eventParams);
          hasTracked = true;
        }
      },
      { threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [eventName, eventParams, threshold]);

  return <div ref={ref}>{children}</div>;
}
