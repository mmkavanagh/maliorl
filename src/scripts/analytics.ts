import { ANALYTICS_CONSENT, ANALYTICS_DOMAIN, GA4_MEASUREMENT_ID, GTM_CONTAINER_ID } from "../config";

type Props = Record<string, string | undefined>;

type AnalyticsWindow = Window & {
  dataLayer?: Record<string, unknown>[];
  gtag?: (...args: unknown[]) => void;
  plausible?: (event: string, options?: { props?: Props }) => void;
  umami?: { track?: (event: string, data?: Props) => void };
};

const ALLOWED = new Set(["page", "position", "razlog", "ishod", "pitanje"]);

/**
 * Records an event only when optional tracking is allowed and a sender is configured.
 * Otherwise it does nothing. No script is loaded from BaseLayout in that state.
 *
 * One sender only: if a GTM container is set, the event is pushed to dataLayer and
 * this function returns. It does not also call gtag, Plausible, or Umami.
 *
 * generate_lead is refused here. This site has no form that confirms a received
 * enquiry. A click toward the other website is cta_click, not a lead.
 * contact_phone_click and contact_whatsapp_click have listeners, but this site
 * has no phone or WhatsApp control to bind them to.
 */
export function track(name: string, props?: Props) {
  if (name === "generate_lead") return;
  if (!ANALYTICS_CONSENT) return;
  const w = window as AnalyticsWindow;
  const safe = safeProps(props);

  if (GTM_CONTAINER_ID) {
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: name, ...safe });
    return;
  }

  if (GA4_MEASUREMENT_ID && typeof w.gtag === "function") {
    w.gtag("event", name, safe);
    return;
  }

  if (!ANALYTICS_DOMAIN) return;
  if (typeof w.plausible === "function") {
    w.plausible(name, safe ? { props: safe } : undefined);
    return;
  }
  if (typeof w.umami?.track === "function") {
    w.umami.track(name, safe);
  }
}

function safeProps(props?: Props): Props | undefined {
  if (!props) return undefined;
  const out: Props = {};
  for (const [key, value] of Object.entries(props)) {
    if (!value || !ALLOWED.has(key)) continue;
    out[key] = value;
  }
  return Object.keys(out).length ? out : undefined;
}
