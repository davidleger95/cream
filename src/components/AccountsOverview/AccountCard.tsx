import React, { FC } from 'react';

import DepositIcon from '@material-ui/icons/AccountBalanceWallet';
import InvestmentIcon from '@material-ui/icons/TrendingUp';
import CreditIcon from '@material-ui/icons/CreditCard';
import ArrowRightIcon from '@material-ui/icons/ArrowForward';
import UnknownIcon from '@material-ui/icons/HelpOutline';

import { AccountType, Account } from '../../types/apollo-graphql';
import Card from '../styled/Card';

import { $ } from '../../utils/currency';
import { Link } from 'gatsby';

const getAccountColor = (type: AccountType): string => {
  switch (type) {
    case AccountType.Deposit:
      return 'var(--c-indigo)';
    case AccountType.RegisteredInvestment:
      return 'var(--c-orange)';
    case AccountType.Credit:
      return 'var(--c-pink)';

    default:
      return 'var(--gs-70)';
  }
};

const AccountIcon: FC<{ type: AccountType }> = ({ type }) => {
  switch (type) {
    case AccountType.Deposit:
      return <DepositIcon />;
    case AccountType.RegisteredInvestment:
      return <InvestmentIcon />;
    case AccountType.Credit:
      return <CreditIcon />;
    default:
    case AccountType.Unknown:
      return <UnknownIcon />;
  }
};

interface AccountCardProps
  extends Pick<Account, 'id' | 'balance' | 'name' | 'type' | 'number'> {
  loading?: boolean;
}

const AccountCard: FC<AccountCardProps> = props => {
  const { loading, type, name, balance, number } = props;
  return (
    <Card accentColor={getAccountColor(type)}>
      <h2 data-loading={loading}>
        <AccountIcon type={type} />
        &nbsp;{name}
      </h2>
      <data data-loading={loading}>{$(balance || 0)}</data>
      <Link to={`/account/${number}`} data-loading={loading}>
        Account Details <ArrowRightIcon />
      </Link>
    </Card>
  );
};

export default AccountCard;
