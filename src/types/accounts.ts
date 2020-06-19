export interface AccountsAPI {
  meta: Meta;
  accounts?: (AccountsEntity)[] | null;
}
export interface Meta {
  forexRates?: (null)[] | null;
  categories?: (CategoriesEntity)[] | null;
}
export interface CategoriesEntity {
  id: string;
  balanceTotal?: BalanceTotal | null;
  excludedFromTotal?: (string)[] | null;
}
export interface BalanceTotal {
  currency: string;
  amount: number;
  cadAmount: number;
}
export interface AccountsEntity {
  id: string;
  number: string;
  nickname: string;
  capabilities?: (string)[] | null;
  _type: string;
  categorization: Categorization;
  availableFunds?: number | null;
  balance?: number | null;
  transit: string;
  status: string;
  displayAttributes: DisplayAttributes;
  currency: string;
  details?: Details | null;
  external: boolean;
}
export interface Categorization {
  category: string;
  subCategory: string;
  extraSubCategory?: string | null;
  instance?: string | null;
  holding: string;
  taxPlan: string;
  domicile: string;
}
export interface DisplayAttributes {
  quickLinks: string;
  name: string;
  fullName: string;
}
export interface Details {
  creditCardStatus: string;
  cardHolderType: string;
  blockedDate?: null;
  accessLevel: string;
  lostStolenDate?: null;
  familyCardEnabled: boolean;
  businessCardHolderRole?: null;
  spendLimitSet: boolean;
  liabilityType: string;
}
