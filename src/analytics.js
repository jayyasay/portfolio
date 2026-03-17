export const GA_MEASUREMENT_ID = "G-KJ903J05D6";

export function trackPageView(path, title = document.title) {
  if (!window.gtag) return;

  window.gtag("event", "page_view", {
    page_title: title,
    page_location: window.location.origin + path,
    page_path: path,
  });
}

export function trackEvent(eventName, params = {}) {
  if (!window.gtag) return;

  window.gtag("event", eventName, params);
}