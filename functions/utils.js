const tranactionMap = {
  TG001: 'All',
  TG002: 'All Debit',
  TG003: 'All Credit',
  TG004: 'Bill Payment',
  TG005: 'Cheque',
  TG006: 'Debit Memo',
  TG009: 'Mortgage Payment',
  TG010: 'Recurring Debit',
  TG011: 'Withdrawal',
  TG007: 'Credit Memo',
  TG012: 'Deposit',
  TG013: 'Pay',
  TG014: 'Account Transfer',
  TG015: 'Fee',
};

const getTransactionType = (code, desc, loc) => {
  if (desc && desc.includes('E-TRANSFER')) return 'e-Transfer';
  if (loc && loc.includes('SG003')) return 'Purchase';

  return tranactionMap[code] || `Unknown (${code})`;
};

const locationMap = {
  SG001: 'Branch Transaction',
  SG002: 'ATM',
  'SG003.SG009': 'PoS (INTERAC)',
  'SG003.SG010': 'PoS (Visa Debit)',
  SG004: 'Online Banking',
  SG005: 'Tel. Banking Personal',
  SG006: 'Tel.Banking Automated',
  SG007: 'El. Funds Transfer',
};

const getLocationType = code => locationMap[code] || `Unknown (${code})`;

module.exports = {
  getTransactionType,
  getLocationType,
};
