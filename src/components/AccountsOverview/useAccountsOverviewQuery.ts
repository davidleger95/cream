import { useQuery, gql } from '@apollo/client';
import { AccountsOverviewQuery, AccountType } from '../../types/apollo-graphql';

const query = gql`
  query AccountsOverview {
    accounts {
      id
      balance
      name
      type
      number
    }
  }
`;

export const useAccountsOverviewQuery = () =>
  useQuery<AccountsOverviewQuery>(query);
