import { CanonicalTransaction } from "../types";

interface MappingEntry {
  sourceField: string;
  type?: "string" | "number" | "date";
}

/**
 * convert an array of transactions into canonical format using custom key mappings
 *
 * @param mappings - custom key mappings
 * @param transactions - array of raw transactions
 * @returns normalized transactions
 */
export function batchNormalize(
  mappings: Record<string, string | MappingEntry>,
  transactions: Record<string, unknown>[],
) {
  // precompute reverse lookup: sourceField -> canonicalField
  const lookup = new Map<string, { canonical: string; type?: string }>();

  for (const [canonical, value] of Object.entries(mappings)) {
    if (typeof value === "string") {
      lookup.set(value, { canonical });
    } else {
      lookup.set(value.sourceField, { canonical, type: value.type });
    }
  }

  return transactions.map((tx) => {
    const normalized: Partial<CanonicalTransaction> = { raw: { ...tx } };
    for (const [key, value] of Object.entries(tx)) {
      const mapEntry = lookup.get(key);

      if (!mapEntry) continue;
      let finalValue = value;

      // optional type conversions
      if (mapEntry.type === "number") finalValue = Number(value);
      if (mapEntry.type === "date") {
        finalValue = new Date(value as string).toISOString();
      }

      normalized[mapEntry.canonical as keyof CanonicalTransaction] =
        finalValue as any;
    }

    return normalized;
  });
}
