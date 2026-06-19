const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

/* ---------- Tools ---------- */
export const IconMeta = (p) => (
  <svg {...base} {...p}>
    <path d="M3 14c0-4 2-7 5-7 2 0 3.5 1.6 5 5 1.5 3.4 3 5 5 5 1.7 0 3-1.5 3-4" />
    <path d="M3 14c0 3 1.4 4.5 3 4.5 2 0 3.5-1.6 5-5 1.5-3.4 3-5 5-5 3 0 5 3 5 7" />
  </svg>
);

export const IconChart = (p) => (
  <svg {...base} {...p}>
    <path d="M3 21h18" />
    <rect x="5" y="11" width="3" height="8" rx="0.5" />
    <rect x="10.5" y="7" width="3" height="12" rx="0.5" />
    <rect x="16" y="13" width="3" height="6" rx="0.5" />
  </svg>
);

export const IconWhale = (p) => (
  <svg {...base} {...p}>
    <path d="M3 13c1.5-3 4-5 8-5 5 0 9 3 10 7-2 1-4 1-6 0-1.5 2-4 3-7 3-3 0-5-1-6-2 .3-1.2.7-2.2 1-3z" />
    <circle cx="9" cy="11" r="0.8" fill="currentColor" stroke="none" />
    <path d="M16 8c.5-1 1-2 1-3" />
  </svg>
);

export const IconBag = (p) => (
  <svg {...base} {...p}>
    <path d="M5 8h14l-1 12H6L5 8z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
);

export const IconNodes = (p) => (
  <svg {...base} {...p}>
    <circle cx="5" cy="6" r="2" />
    <circle cx="5" cy="18" r="2" />
    <circle cx="19" cy="12" r="2" />
    <path d="M7 6l10 5M7 18l10-5" />
  </svg>
);

export const IconSparkle = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z" />
    <path d="M18 16l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z" />
  </svg>
);

export const IconGrid = (p) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
    <path d="M3.5 9H20.5M3.5 14.5H20.5M9 3.5V20.5M14.5 3.5V20.5" />
  </svg>
);

/* ---------- Method ---------- */
export const IconLock = (p) => (
  <svg {...base} {...p}>
    <rect x="4.5" y="11" width="15" height="9" rx="2" />
    <path d="M8 11V7.5a4 4 0 0 1 8 0V11" />
  </svg>
);

export const IconFlask = (p) => (
  <svg {...base} {...p}>
    <path d="M9 3h6" />
    <path d="M10 3v6L5.5 18.5A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-2.5L14 9V3" />
    <path d="M7.5 14h9" />
  </svg>
);

export const IconGear = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
  </svg>
);

export const IconTrendUp = (p) => (
  <svg {...base} {...p}>
    <path d="M3 17l6-6 4 4 8-9" />
    <path d="M14 6h7v7" />
  </svg>
);

export const IconBarsRising = (p) => (
  <svg {...base} {...p}>
    <path d="M3 21h18" />
    <path d="M5 17V14" />
    <path d="M10 17V10" />
    <path d="M15 17V6" />
    <path d="M20 17V3" />
  </svg>
);

/* ---------- Why ---------- */
export const IconFunnel = (p) => (
  <svg {...base} {...p}>
    <path d="M3.5 4.5h17l-6.5 8v6l-4 2v-8L3.5 4.5z" />
  </svg>
);

export const IconCoin = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.5 0-2.5 1-2.5 2s.8 1.6 2.5 2 2.5 1 2.5 2-1 2-2.5 2c-1.2 0-2.2-.6-2.7-1.5" />
    <path d="M12 7v1.5M12 15.5V17" />
  </svg>
);

export const IconHeart = (p) => (
  <svg {...base} {...p}>
    <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
  </svg>
);

export const IconGlobe = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17" />
    <path d="M12 3.5c2.5 3 2.5 14 0 17" />
    <path d="M12 3.5c-2.5 3-2.5 14 0 17" />
  </svg>
);

export const IconEye = (p) => (
  <svg {...base} {...p}>
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="2.7" />
  </svg>
);

/* ---------- maps used by sections ---------- */
export const TOOL_ICON = {
  "Meta Ads Manager": IconMeta,
  "GA4": IconChart,
  "Triple Whale": IconWhale,
  "Shopify": IconBag,
  "n8n": IconNodes,
  "Claude": IconSparkle,
  "Google Sheets": IconGrid,
};

export const METHOD_ICON = {
  "ICP Lock": IconLock,
  "Creative Lab": IconFlask,
  "Ad Ops": IconGear,
  "CRO Engine": IconTrendUp,
  "Scale Protocol": IconBarsRising,
};

export const WHY_ICON = {
  "Full-Funnel Ownership": IconFunnel,
  "Profit-First, Not Vanity Metrics": IconCoin,
  "Retention-Obsessed": IconHeart,
  "Async & Timezone-Ready": IconGlobe,
  "Transparent Reporting": IconEye,
};
