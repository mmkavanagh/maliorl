import { ANALYTICS_DOMAIN } from "../config";

type Props = Record<string, string | undefined>;

type AnalyticsWindow = Window & {
  plausible?: (event: string, options?: { props?: Props }) => void;
  umami?: { track?: (event: string, data?: Props) => void };
};

/** Records an event only when an analytics domain is configured. Otherwise it does nothing. */
export function track(name: string, props?: Props) {
  if (!ANALYTICS_DOMAIN) return;
  const w = window as AnalyticsWindow;
  if (typeof w.plausible === "function") {
    w.plausible(name, props ? { props } : undefined);
    return;
  }
  if (typeof w.umami?.track === "function") {
    w.umami.track(name, props);
  }
}
