const { gql } = require('apollo-server-lambda');
const typeDefs = gql`
  scalar Date

  type Address {
    street: String
    city: String
    province: String
    postalCode: String
  }
  type Profile {
    id: ID!
    title: String!
    firstName: String!
    lastName: String!
    middleName: String!
    age: Int!
    address: Address!
  }

  type Transaction {
    id: ID!
    account: Account
    date: Date!
    amount: Float!
    runningBalance: Float!
    isBillable: Boolean!
    type: String!
    method: String!
    description: String!
  }

  enum Currency {
    CAD
  }

  enum AccountType {
    DEPOSIT
    CREDIT
    REGISTERED_INVESTMENT
    UNKNOWN
  }

  type Account {
    id: ID!
    number: String!
    name: String!
    type: AccountType!
    balance: Float
    currency: Currency!
    transactions: [Transaction!]!
  }

  type Query {
    hello: String
    profile: Profile!
    accounts: [Account!]!
    transactions: [Transaction!]!
  }
`;

module.exports = { typeDefs };
