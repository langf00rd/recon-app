import { ReconResultStatus } from "../enums";
import { CanonicalTransaction, ReconResult, ReconRule } from "../types";
import { RECON_RULES } from "./rules";

export function reconcile(
  internalTxs: CanonicalTransaction[],
  providerTxs: CanonicalTransaction[],
  rules: ReconRule[] = RECON_RULES,
): ReconResult[] {
  const results: ReconResult[] = [];
  const consumedProviderIds = new Set<string>();

  // pre-build indexes per rule
  const ruleIndexes = rules.map((rule) => {
    const index = new Map<string, CanonicalTransaction[]>();
    for (const tx of providerTxs) {
      const key = rule.buildKey(tx);
      if (!key) continue;
      const bucket = index.get(key);
      if (bucket) bucket.push(tx);
      else index.set(key, [tx]);
    }
    return index;
  });

  console.log("ruleIndexes", ruleIndexes);

  // match internal txs
  for (const internalTx of internalTxs) {
    let matched = false;

    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i];
      const index = ruleIndexes[i];

      const key = rule.buildKey(internalTx);
      if (!key) continue;

      const candidates = index.get(key);
      if (!candidates) continue;

      const available = candidates.filter(
        (tx) => !consumedProviderIds.has(tx.id),
      );

      if (available.length === 1) {
        const providerTx = available[0];
        consumedProviderIds.add(providerTx.id);
        results.push({
          internal: internalTx,
          provider: providerTx,
          status: ReconResultStatus.MATCHED,
          rule: rule.name,
        });
        matched = true;
        break;
      }

      if (available.length > 1) {
        results.push({
          internal: internalTx,
          status: ReconResultStatus.AMBIGUOUS,
          rule: rule.name,
        });
        matched = true;
        break;
      }
    }

    if (!matched) {
      results.push({
        internal: internalTx,
        status: ReconResultStatus.MISSING,
      });
    }
  }

  // remaining provider txs are unexpected
  for (const tx of providerTxs) {
    if (!consumedProviderIds.has(tx.id)) {
      results.push({
        internal: tx,
        status: ReconResultStatus.UNEXPECTED,
      });
    }
  }

  return results;
}
