export enum HelpSidebarKeys {
  RECON = "recon",
}

export enum ReconResultStatus {
  MATCHED = "MATCHED",
  MISSING = "MISSING",
  UNEXPECTED = "UNEXPECTED",
  AMBIGUOUS = "AMBIGUOUS",
}

export enum TransactionType {
  INTERNAL = "INTERNAL",
  PROVIDER = "PROVIDER",
}

export enum ReconRuleOperator {
  EQUALS = "EQUALS",
  ABS_DIFF_LTE = "ABS_DIFF_LTE",
  DATE_WITHIN_DAYS = "DATE_WITHIN_DAYS",
}
