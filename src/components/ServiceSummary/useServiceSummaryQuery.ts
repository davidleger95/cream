import { gql, useQuery } from '@apollo/client';
import { ServiceSummaryQuery } from '../../types/apollo-graphql';

const mockData: ServiceSummaryQuery = {
  profile: {
    firstName: 'First',
    lastName: 'Last',
    address: {
      street: '123 Somewhere Street',
      city: 'Anytown',
      province: 'AA',
      postalCode: 'O1O 1O1',
    },
  },
  accounts: [
    {
      balance: 20.2,
    },
  ],
};

const query = gql`
  query ServiceSummary {
    profile {
      firstName
      lastName
      address {
        street
        city
        province
        postalCode
      }
    }
    accounts {
      balance
    }
  }
`;

const useServiceSummaryQuery = () => {
  const { data, ...rest } = useQuery<ServiceSummaryQuery>(query);
  return {
    ...rest,
    data: data || mockData,
  };
};

export default useServiceSummaryQuery;
