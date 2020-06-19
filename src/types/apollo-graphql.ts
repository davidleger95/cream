export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['ID'];
  number: Scalars['String'];
  name: Scalars['String'];
  type: AccountType;
  balance?: Maybe<Scalars['Float']>;
  currency: Currency;
  transactions: Array<Transaction>;
};

export enum AccountType {
  Deposit = 'DEPOSIT',
  Credit = 'CREDIT',
  RegisteredInvestment = 'REGISTERED_INVESTMENT',
  Unknown = 'UNKNOWN',
}

export type Address = {
  __typename?: 'Address';
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
};

export enum Currency {
  Cad = 'CAD',
}

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['ID'];
  title: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  middleName: Scalars['String'];
  age: Scalars['Int'];
  address: Address;
};

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<Scalars['String']>;
  profile: Profile;
  accounts: Array<Account>;
  transactions: Array<Transaction>;
};

export type Transaction = {
  __typename?: 'Transaction';
  id: Scalars['ID'];
  account?: Maybe<Account>;
  date: Scalars['Date'];
  amount: Scalars['Float'];
  runningBalance: Scalars['Float'];
  isBillable: Scalars['Boolean'];
  type: Scalars['String'];
  method: Scalars['String'];
  description: Scalars['String'];
};

export type AccountsOverviewQueryVariables = {};

export type AccountsOverviewQuery = { __typename?: 'Query' } & {
  accounts: Array<
    { __typename?: 'Account' } & Pick<
      Account,
      'id' | 'balance' | 'name' | 'type' | 'number'
    >
  >;
};

export type TransactionsQueryVariables = {};

export type TransactionsQuery = { __typename?: 'Query' } & {
  transactions: Array<
    { __typename?: 'Transaction' } & Pick<
      Transaction,
      | 'id'
      | 'amount'
      | 'type'
      | 'method'
      | 'description'
      | 'date'
      | 'runningBalance'
    >
  >;
};

export type ServiceSummaryQueryVariables = {};

export type ServiceSummaryQuery = { __typename?: 'Query' } & {
  profile: { __typename?: 'Profile' } & Pick<
    Profile,
    'firstName' | 'lastName'
  > & {
      address: { __typename?: 'Address' } & Pick<
        Address,
        'street' | 'city' | 'province' | 'postalCode'
      >;
    };
  accounts: Array<{ __typename?: 'Account' } & Pick<Account, 'balance'>>;
};

export type QQueryVariables = {};

export type QQuery = { __typename?: 'Query' } & {
  profile: { __typename?: 'Profile' } & Pick<Profile, 'firstName' | 'lastName'>;
  accounts: Array<
    { __typename?: 'Account' } & Pick<
      Account,
      'balance' | 'name' | 'type' | 'number'
    >
  >;
};
