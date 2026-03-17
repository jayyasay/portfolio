import { useEffect, useRef } from "react";
import { trackEvent } from "../analytics";

export default function SectionTracker({
  eventName,
  eventParams = {},
  children,
}) {
  const markerRef = useRef(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const marker = markerRef.current;
    if (!marker) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTracked.current) {
          trackEvent(eventName, eventParams);
          hasTracked.current = true;
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -60% 0px",
      },
    );

    observer.observe(marker);

    return () => observer.disconnect();
  }, [eventName, eventParams]);

  return (
    <div>
      <div
        ref={markerRef}
        style={{ position: "relative", width: "100%", height: "1px" }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
