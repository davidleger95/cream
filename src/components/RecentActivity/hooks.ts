import { gql, useQuery } from '@apollo/client';
import { TransactionsQuery } from '../../types/apollo-graphql';

const query = gql`
  query Transactions {
    transactions {
      id
      amount
      type
      method
      description
      date
      runningBalance
    }
  }
`;

export const useTransactionsQuery = () => useQuery<TransactionsQuery>(query);
