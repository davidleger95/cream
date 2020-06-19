import React, { FC } from 'react';
import {
  Table,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableBody,
  TableCell,
} from '../styled/Table';
import { useTransactionsQuery } from './hooks';
import Toast from '../styled/Toast';
import { formatDate } from '../../utils/dateTime';
import DisplayAmount from '../styled/DisplayAmount';

const RecentActivity = () => {
  const { loading, error, data } = useTransactionsQuery();

  if (error) return <Toast type="error">Error loading transactions.</Toast>;

  if (loading || !data) return null;

  const transactions = [...data.transactions].sort((a, b) =>
    a.date > b.date ? -1 : 1
  );
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell right>Amount</TableHeaderCell>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell>Date</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map(t => (
          <TableRow key={t.id}>
            <TableCell right>
              <DisplayAmount amount={t.amount} />
            </TableCell>
            <TableCell>{t.type}</TableCell>
            <TableCell>{t.description}</TableCell>
            <TableCell>{formatDate(t.date)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RecentActivity;
