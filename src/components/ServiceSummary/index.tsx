import React from 'react';
import useServiceSummaryQuery from './useServiceSummaryQuery';
import Card from '../styled/Card';
import Toast from '../styled/Toast';
import { $ } from '../../utils/currency';
import Address from '../styled/Address';
import { toTitleCase } from '../../utils/toTitleCase';

const ServiceSummary: React.FC = () => {
  const { loading, error, data } = useServiceSummaryQuery();

  if (error) <Toast type="error">Error fetching accounts.</Toast>;

  const { firstName, lastName, address } = data.profile;

  const accountsTotal =
    data.accounts.reduce((total, { balance }) => total + (balance || 0), 0) ||
    0;

  return (
    <Card>
      <h3>
        <span data-loading={loading}>
          {toTitleCase(`${firstName} ${lastName}`)}
        </span>
      </h3>
      <Address style={{ lineHeight: 1.5 }}>
        <span data-loading={loading}>{toTitleCase(address.street)}</span>
        <br />
        <span data-loading={loading}>
          {toTitleCase(address.city)}, {address.province}
        </span>
        <br />
        <span data-loading={loading}>{address.postalCode}</span>
      </Address>
      <footer>
        <h4>
          <span data-loading={loading}>Net Worth</span>
        </h4>
        <data value={accountsTotal}>
          <span data-loading={loading}>{$(accountsTotal)}</span>
        </data>
      </footer>
    </Card>
  );
};

export default ServiceSummary;
