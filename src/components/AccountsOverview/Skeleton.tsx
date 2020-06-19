import { AccountsOverviewQuery, AccountType } from '../../types/apollo-graphql';
import { FC } from 'react';
import AccountCard from './AccountCard';
import AccountsGrid from './AccountsGrid';
import React from 'react';

const mockAccounts: AccountsOverviewQuery = {
  accounts: [
    {
      id: '0',
      number: '0',
      type: AccountType.Unknown,
      name: 'Account',
      balance: 1000,
    },
    {
      id: '1',
      number: '1',
      type: AccountType.Unknown,
      name: 'Another Account',
      balance: 100,
    },
    {
      id: '2',
      number: '2',
      type: AccountType.Unknown,
      name: 'Account Name Three',
      balance: 10000,
    },
  ],
};

const Skeleton: FC = () => (
  <AccountsGrid>
    {mockAccounts.accounts.map(props => (
      <AccountCard key={props.id} {...props} loading />
    ))}
  </AccountsGrid>
);

export default Skeleton;
