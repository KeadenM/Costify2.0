const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String
    email: String
    password: String
    income: [Income]!
    expenses: [Expense]!
    savingsgoal: Float
    }
    type Income {
        income: String
        amount: Float
    }
    type Expense {
        expense: String
        amount: Float
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
    }
    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addIncome(income: String!, amount: Float!): User
        addExpense(expense: String!, amount: Float!): User
        addSavingsGoal(savingsgoal: Float!): User
    }
`;

module.exports = typeDefs;

       