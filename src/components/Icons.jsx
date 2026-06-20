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

export const IconSparkle = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z" />
    <path d="M18 16l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z" />
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

/* ---------- Trust Strip ---------- */
export const IconCreatives = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="13" height="13" rx="2" />
    <rect x="8" y="7" width="13" height="13" rx="2" />
  </svg>
);

export const IconBrands = (p) => (
  <svg {...base} {...p}>
    <path d="M3 21V8l9-5 9 5v13" />
    <path d="M9 21v-7h6v7" />
  </svg>
);

export const IconRoas = (p) => (
  <svg {...base} {...p}>
    <path d="M3 17l5-5 4 4 8-9" />
    <path d="M14 7h7v7" />
  </svg>
);

export const IconClock = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7v5l3.5 2" />
  </svg>
);

/* ---------- Systems ---------- */
export const IconCrm = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18" />
    <circle cx="8" cy="14" r="1.5" />
    <path d="M12 13h6M12 16h4" />
  </svg>
);

export const IconReport = (p) => (
  <svg {...base} {...p}>
    <path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
    <path d="M14 3v5h5" />
    <path d="M8 13h8M8 16h6M8 19h4" />
  </svg>
);

export const IconLanding = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 8h18" />
    <path d="M7 12h7" />
    <path d="M7 15h4" />
    <rect x="14.5" y="13" width="4" height="3" rx="0.5" />
  </svg>
);

export const IconOutbound = (p) => (
  <svg {...base} {...p}>
    <circle cx="5" cy="12" r="2" />
    <circle cx="19" cy="6" r="2" />
    <circle cx="19" cy="18" r="2" />
    <path d="M7 11l10-4" />
    <path d="M7 13l10 4" />
  </svg>
);

/* ---------- maps ---------- */
export const TRUST_ICON = {
  creatives: IconCreatives,
  brands: IconBrands,
  roas: IconRoas,
  async: IconClock,
};

export const SYSTEM_ICON = {
  crm: IconCrm,
  report: IconReport,
  funnel: IconLanding,
  outbound: IconOutbound,
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
  "Creative-Led Strategy": IconSparkle,
  "Async & Timezone-Ready": IconGlobe,
  "Transparent Reporting": IconEye,
};
