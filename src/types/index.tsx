export type Tier = "Tier 1" | "Tier 2" | "Tier 3";

export interface TierConfig {
  amount: number;
  interestRate: number;
}

export interface Student {
  name: string;
  tier: Tier;
  amount: number;
  interest: number;
  totalWithdrawal: number;
}
