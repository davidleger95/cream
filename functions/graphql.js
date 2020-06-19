const { ApolloServer } = require('apollo-server-lambda');
const { RESTDataSource } = require('apollo-datasource-rest');
const { typeDefs } = require('./schema');

const { getTransactionType, getLocationType } = require('./utils');

// TODO use dynamic imports
// Sample data
const userData = require('./data/users.json');
const accountsData = require('./data/accounts.json');
const transactionsData = require('./data/transactions/chequing.json');

/**
 * This API Gateway uses sample data for demo purposes. The data has been
 * ananymized and redacted where necessary in order to preserve private
 * banking details. If you wish to use real data from a CIBC account,
 * switch the DEMO flag to false and add a valid CIBC auth token to
 * localstorage in your browser with the key 'x-auth-token'.
 */
const DEMO = true;

class BankAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.cibconline.cibc.com/';
  }

  willSendRequest(request) {
    request.headers.set('x-auth-token', this.context.token);
  }

  async getUserProfiles() {
    if (DEMO) {
      return userData;
    }

    const response = await this.get(
      '/ebm-anp/api/v1/profile/json/userProfiles'
    );
    console.log(response);
    return response;
  }

  async getAccounts() {
    if (DEMO) {
      return accountsData.accounts;
    }

    const response = await this.get('/ebm-ai/api/v2/json/accounts');
    return response.accounts;
  }

  async getTransactions() {
    if (DEMO || !DEMO) {
      return transactionsData.transactions;
    }
    // TODO implement transactions by account ID
    const response = await this.get('');

    return response;
  }
}

const resolvers = {
  Query: {
    profile: async (_, __, { dataSources }) => {
      const {
        street,
        city,
        province,
        postalCode,
        ...profile
      } = await dataSources.bankAPI.getUserProfiles();
      return {
        ...profile,
        address: {
          street,
          city,
          province,
          postalCode,
        },
      };
    },
    accounts: async (_, __, { dataSources }) => {
      const accounts = await dataSources.bankAPI.getAccounts();

      return accounts.map(({ nickname, categorization, ...account }) => ({
        ...account,
        name: nickname,
        type: categorization.category,
      }));
    },
    transactions: async (_, __, { dataSources }) => {
      const transactions = await dataSources.bankAPI.getTransactions();

      return transactions.map(t => ({
        ...t,
        runningBalance: t.runningBalance || 0,
        amount: (t.credit || 0) - (t.debit || 0),
        isBillable: t.billableIndicator === 'Y',
        description: t.descriptionLine2.trim() || t.transactionDescription,
        type: getTransactionType(
          t.transactionType,
          t.transactionDescription,
          t.transactionLocation
        ),
        method: getLocationType(t.transactionLocation),
        account: () => null, // TODO resolve single account
      }));
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  context: ({ event }) => {
    const token = event.headers.authorization || '';
    return { token };
  },
  dataSources: () => ({
    bankAPI: new BankAPI(),
  }),
  resolvers,
});

exports.handler = server.createHandler();
