import { ReconRule } from "../types";

const EXACT_RULE: ReconRule = {
  name: "exact_reference_amount_currency",
  buildKey: (tx) =>
    tx.reference ? `${tx.reference}|${tx.amount}|${tx.currency}` : null,
  match: (a, b) =>
    a.reference === b.reference &&
    a.amount === b.amount &&
    a.currency === b.currency,
};

const AMOUNT_DATE_RULE: ReconRule = {
  name: "amount_currency_date_window",
  buildKey: (tx) => `${tx.amount}|${tx.currency}`,
  match: (a, b) => {
    if (a.amount !== b.amount) return false;
    if (a.currency !== b.currency) return false;
    const d1 = new Date(a.created_dt).getTime();
    const d2 = new Date(b.created_dt).getTime();
    return Math.abs(d1 - d2) <= 86400000; // 1 day
  },
};

const TOLERANT_AMOUNT_RULE: ReconRule = {
  name: "amount_tolerance_currency",
  buildKey: (tx) => `${tx.currency}`,
  match: (a, b) =>
    a.currency === b.currency && Math.abs(a.amount - b.amount) <= 0.01,
};

export const RECON_RULES: ReconRule[] = [
  EXACT_RULE,
  AMOUNT_DATE_RULE,
  TOLERANT_AMOUNT_RULE,
];
