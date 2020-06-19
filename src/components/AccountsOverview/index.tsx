import React, { FC } from 'react';

import { useAccountsOverviewQuery } from './useAccountsOverviewQuery';

import Skeleton from './Skeleton';
import Toast from '../styled/Toast';
import AccountCard from './AccountCard';
import AccountsGrid from './AccountsGrid';

const AccountsOverview: FC = () => {
  const { loading, error, data } = useAccountsOverviewQuery();

  if (error) {
    return <Toast type="error">Error fetching accounts.</Toast>;
  }

  if (loading || !data) return <Skeleton />;

  return (
    <AccountsGrid>
      {data.accounts.map(props => (
        <AccountCard key={props.id} {...props} />
      ))}
    </AccountsGrid>
  );
};

export default AccountsOverview;
