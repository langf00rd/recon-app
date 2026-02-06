import { FileUp, LayoutList, SearchCheck, UserCheck, Zap } from "lucide-react";

export const RECON_HELP = [
  {
    title: "Upload transaction data",
    description: "Attach your internal ledger and provider transaction files",
    icon: FileUp,
  },
  {
    title: "Review & validate data",
    description:
      "Preview records, detect missing fields, and confirm data integrity",
    icon: SearchCheck,
  },
  {
    title: "Normalize data fields",
    description: "Map different schemas into a canonical transaction structure",
    icon: LayoutList,
  },
  {
    title: "Run reconciliation",
    description:
      "Apply predefined matching rules to compare internal and external records",
    icon: Zap,
  },
  {
    title: "Review results",
    description:
      "Analyze matched transactions, unmatched records, and exceptions",
    icon: UserCheck,
  },
];
