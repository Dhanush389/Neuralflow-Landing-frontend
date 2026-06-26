/**
 * Multi-dimensional pricing matrix.
 * Structure: tiers[tier].base = monthly base in USD
 * Regional tariff multipliers and annual discount applied dynamically.
 * NO hardcoded UI strings — all values derived at runtime.
 */

export const ANNUAL_DISCOUNT = 0.20; // 20% off

export const CURRENCY_CONFIG = {
  USD: { symbol: "$", label: "USD", tariff: 1.00 },
  INR: { symbol: "₹", label: "INR", tariff: 83.5  },
  EUR: { symbol: "€", label: "EUR", tariff: 0.92  },
};

// Base monthly price in USD per tier
export const TIER_MATRIX = {
  starter: {
    id:       "starter",
    name:     "Starter",
    baseUSD:  29,
    color:    "#10B981",
    features: [
      "5 automation pipelines",
      "10K API calls / month",
      "Basic analytics dashboard",
      "Email support",
      "1 workspace",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
  pro: {
    id:       "pro",
    name:     "Pro",
    baseUSD:  79,
    color:    "#00D4FF",
    features: [
      "Unlimited pipelines",
      "500K API calls / month",
      "Advanced AI analytics",
      "Priority support + SLA",
      "5 workspaces",
      "Custom integrations",
    ],
    cta: "Get Started",
    highlight: true,
  },
  enterprise: {
    id:       "enterprise",
    name:     "Enterprise",
    baseUSD:  249,
    color:    "#7C3AED",
    features: [
      "Unlimited everything",
      "Unlimited API calls",
      "Dedicated AI models",
      "24/7 dedicated support",
      "Unlimited workspaces",
      "On-premise deployment",
      "Custom SLA & contracts",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
};

/**
 * Compute final display price.
 * Returns { amount: string, perLabel: string }
 */
export function computePrice(tierKey, currency, isAnnual) {
  const tier   = TIER_MATRIX[tierKey];
  const cfg    = CURRENCY_CONFIG[currency];
  const base   = tier.baseUSD * cfg.tariff;
  const final  = isAnnual ? base * (1 - ANNUAL_DISCOUNT) : base;
  const amount = final < 10
    ? final.toFixed(2)
    : Math.round(final).toLocaleString();
  return {
    amount,
    symbol: cfg.symbol,
    perLabel: isAnnual ? "/mo, billed annually" : "/month",
  };
}
